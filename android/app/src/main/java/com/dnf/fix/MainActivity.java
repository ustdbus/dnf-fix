package com.dnf.fix;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.Settings;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class MainActivity extends Activity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 检查所有文件管理权限 (Android 11+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            if (!Environment.isExternalStorageManager()) {
                try {
                    Intent intent = new Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION);
                    intent.addCategory("android.intent.category.DEFAULT");
                    intent.setData(Uri.parse(String.format("package:%s", getApplicationContext().getPackageName())));
                    startActivity(intent);
                } catch (Exception e) {
                    Intent intent = new Intent();
                    intent.setAction(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
                    startActivity(intent);
                }
            }
        }

        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);

        webView.setWebViewClient(new WebViewClient());
        webView.addJavascriptInterface(new AndroidBridge(), "AndroidBridge");

        webView.loadUrl("file:///android_asset/index.html");
    }

    public class AndroidBridge {

        @JavascriptInterface
        public boolean checkFileExists(String filePath) {
            try {
                File file = new File(filePath);
                return file.exists() && file.isFile();
            } catch (Exception e) {
                return false;
            }
        }

        @JavascriptInterface
        public String readSaveFile(String filePath) {
            try {
                File file = new File(filePath);
                if (!file.exists()) return "";
                byte[] buffer = new byte[(int) file.length()];
                FileInputStream fis = new FileInputStream(file);
                int read = fis.read(buffer);
                fis.close();
                return Base64.encodeToString(buffer, Base64.NO_WRAP);
            } catch (Exception e) {
                e.printStackTrace();
                return "";
            }
        }

        @JavascriptInterface
        public boolean writeSaveFile(String filePath, String base64Data) {
            try {
                File targetFile = new File(filePath);
                
                // 1. 自动备份原存档为 .bak
                if (targetFile.exists()) {
                    File bakFile = new File(filePath + ".bak");
                    FileInputStream in = new FileInputStream(targetFile);
                    FileOutputStream out = new FileOutputStream(bakFile);
                    byte[] buf = new byte[1024];
                    int len;
                    while ((len = in.read(buf)) > 0) {
                        out.write(buf, 0, len);
                    }
                    in.close();
                    out.close();
                }

                // 2. 写入修改后的数据
                byte[] decoded = Base64.decode(base64Data, Base64.NO_WRAP);
                FileOutputStream fos = new FileOutputStream(targetFile);
                fos.write(decoded);
                fos.flush();
                fos.close();
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }

        @JavascriptInterface
        public String scanSaves(String dirPath) {
            JSONArray arr = new JSONArray();
            try {
                File dir = new File(dirPath);
                for (int i = 0; i < 4; i++) {
                    JSONObject obj = new JSONObject();
                    obj.put("index", i);
                    File heroFile = new File(dir, "DnfHero" + i);
                    if (heroFile.exists() && heroFile.isFile()) {
                        obj.put("exists", true);
                        obj.put("size", heroFile.length());
                    } else {
                        obj.put("exists", false);
                        obj.put("size", 0);
                    }
                    arr.put(obj);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return arr.toString();
        }

        @JavascriptInterface
        public void toast(String message) {
            runOnUiThread(() -> Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show());
        }

        @JavascriptInterface
        public String getSavedPath() {
            try {
                SharedPreferences sp = getSharedPreferences("dnf_prefs", MODE_PRIVATE);
                return sp.getString("save_path", "");
            } catch (Exception e) {
                return "";
            }
        }

        @JavascriptInterface
        public void saveDefaultPath(String path) {
            try {
                SharedPreferences sp = getSharedPreferences("dnf_prefs", MODE_PRIVATE);
                sp.edit().putString("save_path", path).apply();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        @JavascriptInterface
        public void clearDefaultPath() {
            try {
                SharedPreferences sp = getSharedPreferences("dnf_prefs", MODE_PRIVATE);
                sp.edit().remove("save_path").apply();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
