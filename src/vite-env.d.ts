/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  AndroidBridge?: {
    readSaveFile: (filePath: string) => string;
    writeSaveFile: (filePath: string, base64Data: string) => boolean;
    checkFileExists: (filePath: string) => boolean;
    scanSaves: (dirPath: string) => string;
  }
}
