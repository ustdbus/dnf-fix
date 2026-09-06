// 统一文件系统桥接层：支持 Android 原生桥接、本地 Vite 开发服务中间件与纯前端浏览器环境

export interface HeroScanItem {
  index: number
  exists: boolean
  size: number
  hasQuest: boolean
}

export interface ScanResult {
  success: boolean
  error?: string
  realPath?: string
  heroes: HeroScanItem[]
}

// 检查是否具备 Vite 本地开发中间件
let viteFsAvailable: boolean | null = null

export async function isViteFsAvailable(): Promise<boolean> {
  if (viteFsAvailable !== null) return viteFsAvailable
  try {
    const res = await fetch('/api/fs/status', { signal: AbortSignal.timeout(1000) })
    if (res.ok) {
      const data = await res.json()
      viteFsAvailable = !!data.available
      return viteFsAvailable
    }
  } catch (e) {
    viteFsAvailable = false
  }
  return false
}

export async function scanDirectory(dirPath: string): Promise<ScanResult> {
  const trimmed = dirPath.trim()
  if (!trimmed) {
    return { success: false, error: '路径不能为空', heroes: [] }
  }

  // 1. 优先尝试 AndroidBridge
  if (window.AndroidBridge && window.AndroidBridge.scanSaves) {
    try {
      const resultJson = window.AndroidBridge.scanSaves(trimmed)
      const res = JSON.parse(resultJson)
      const heroes: HeroScanItem[] = []
      for (let i = 0; i < 4; i++) {
        const item = res.find((r: any) => r.index === i)
        heroes.push({
          index: i,
          exists: item ? !!item.exists : false,
          size: item ? (item.size || 0) : 0,
          hasQuest: false // 安卓桥接后续通过 checkFileExists 确认
        })
      }
      return { success: true, heroes }
    } catch (e: any) {
      return { success: false, error: e.message, heroes: [] }
    }
  }

  // 2. 尝试 Vite 本地开发服务中间件
  try {
    const res = await fetch('/api/fs/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: trimmed })
    })
    const data = await res.json()
    if (data.success) {
      return {
        success: true,
        realPath: data.realPath,
        heroes: data.heroes || []
      }
    } else {
      return { success: false, error: data.error || '扫描目录失败', heroes: [] }
    }
  } catch (e: any) {
    return { success: false, error: `网络或服务不可用: ${e.message}`, heroes: [] }
  }
}

export async function readSaveFile(dirPath: string, filename: string): Promise<Uint8Array | null> {
  const trimmed = dirPath.trim()
  if (!trimmed || !filename) return null

  // 1. Android 原生环境
  if (window.AndroidBridge && window.AndroidBridge.readSaveFile) {
    const fullPath = `${trimmed}/${filename}`
    if (window.AndroidBridge.checkFileExists && !window.AndroidBridge.checkFileExists(fullPath)) {
      return null
    }
    const b64 = window.AndroidBridge.readSaveFile(fullPath)
    if (!b64) return null
    try {
      const binaryString = window.atob(b64)
      const len = binaryString.length
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i)
      }
      return bytes
    } catch (e) {
      console.warn('解码安卓存档 Base64 失败:', e)
      return null
    }
  }

  // 2. Vite 本地开发服务中间件
  try {
    const res = await fetch('/api/fs/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: trimmed, filename })
    })
    const data = await res.json()
    if (data.success && data.data) {
      const binaryString = window.atob(data.data)
      const len = binaryString.length
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i)
      }
      return bytes
    }
  } catch (e) {
    console.warn('读取本地文件失败:', e)
  }

  return null
}

export async function writeSaveFile(dirPath: string, filename: string, data: Uint8Array): Promise<{ success: boolean; message?: string }> {
  const trimmed = dirPath.trim()
  if (!trimmed || !filename) {
    return { success: false, message: '无效的文件路径或文件名' }
  }

  // 转 Base64
  let binaryString = ''
  for (let i = 0; i < data.length; i++) {
    binaryString += String.fromCharCode(data[i])
  }
  const b64 = window.btoa(binaryString)

  // 1. Android 原生环境
  if (window.AndroidBridge && window.AndroidBridge.writeSaveFile) {
    const targetPath = `${trimmed}/${filename}`
    const ok = window.AndroidBridge.writeSaveFile(targetPath, b64)
    return { success: !!ok, message: ok ? `已成功保存至 ${targetPath}` : '写入失败' }
  }

  // 2. Vite 本地开发环境
  try {
    const res = await fetch('/api/fs/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: trimmed, filename, contentBase64: b64 })
    })
    const json = await res.json()
    if (json.success) {
      return { success: true, message: json.message || `成功保存 ${filename}` }
    } else {
      return { success: false, message: json.error || '写入失败' }
    }
  } catch (e: any) {
    return { success: false, message: e.message }
  }
}
