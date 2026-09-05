import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // 保证在 Android WebView 和离线环境下能正确加载相对资源
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
