import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'

function resolveRealFsPath(inputPath: string): string {
  if (!inputPath) return ''
  let cleaned = inputPath.trim().replace(/^["']|["']$/g, '')
  if (fs.existsSync(cleaned)) return cleaned

  // Windows 盘符 C:\... 转 WSL /mnt/c/...
  const winMatch = cleaned.match(/^([a-zA-Z]):[\\/](.*)/)
  if (winMatch) {
    const drive = winMatch[1].toLowerCase()
    const rest = winMatch[2].replace(/\\/g, '/')
    const wslPath = `/mnt/${drive}/${rest}`
    if (fs.existsSync(wslPath)) return wslPath
  }

  // WSL 路径 /mnt/c/... 转 Windows C:/...
  const wslMatch = cleaned.match(/^\/mnt\/([a-zA-Z])\/(.*)/)
  if (wslMatch) {
    const drive = wslMatch[1].toUpperCase()
    const rest = wslMatch[2]
    const winPath = `${drive}:/${rest}`
    if (fs.existsSync(winPath)) return winPath
  }

  return cleaned
}

function localFsPlugin(): Plugin {
  return {
    name: 'local-fs-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/fs/')) {
          return next()
        }

        res.setHeader('Content-Type', 'application/json; charset=utf-8')

        if (req.url === '/api/fs/status') {
          res.end(JSON.stringify({ success: true, available: true }))
          return
        }

        // 读取 POST 请求体
        const chunks: Buffer[] = []
        req.on('data', chunk => chunks.push(chunk))
        req.on('end', () => {
          try {
            const rawBody = Buffer.concat(chunks).toString('utf-8')
            const body = rawBody ? JSON.parse(rawBody) : {}

            if (req.url === '/api/fs/scan') {
              const targetDir = resolveRealFsPath(body.path)
              if (!targetDir || !fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
                res.statusCode = 404
                res.end(JSON.stringify({ success: false, error: '指定的目录不存在或不是有效文件夹' }))
                return
              }

              const heroes = []
              for (let i = 0; i < 4; i++) {
                const heroFile = path.join(targetDir, `DnfHero${i}`)
                const questFile = path.join(targetDir, `DnfQuest${i}`)
                const heroExists = fs.existsSync(heroFile)
                const questExists = fs.existsSync(questFile)
                let size = 0
                if (heroExists) {
                  size = fs.statSync(heroFile).size
                }
                heroes.push({
                  index: i,
                  exists: heroExists,
                  size,
                  hasQuest: questExists
                })
              }

              res.end(JSON.stringify({
                success: true,
                realPath: targetDir,
                heroes
              }))
              return
            }

            if (req.url === '/api/fs/read') {
              const targetDir = resolveRealFsPath(body.path)
              const filename = body.filename
              if (!targetDir || !filename) {
                res.statusCode = 400
                res.end(JSON.stringify({ success: false, error: '缺少 path 或 filename 参数' }))
                return
              }
              const filePath = path.join(targetDir, filename)
              if (!fs.existsSync(filePath)) {
                res.statusCode = 404
                res.end(JSON.stringify({ success: false, error: `文件 ${filename} 不存在` }))
                return
              }

              const buffer = fs.readFileSync(filePath)
              res.end(JSON.stringify({
                success: true,
                filename,
                size: buffer.length,
                data: buffer.toString('base64')
              }))
              return
            }

            if (req.url === '/api/fs/write') {
              const targetDir = resolveRealFsPath(body.path)
              const filename = body.filename
              const contentBase64 = body.contentBase64
              if (!targetDir || !filename || contentBase64 === undefined) {
                res.statusCode = 400
                res.end(JSON.stringify({ success: false, error: '缺少写入参数' }))
                return
              }

              const filePath = path.join(targetDir, filename)
              // 原文件存在则备份为 .bak
              if (fs.existsSync(filePath)) {
                try {
                  fs.copyFileSync(filePath, `${filePath}.bak`)
                } catch (e) {
                  console.warn('备份文件失败:', e)
                }
              }

              const buffer = Buffer.from(contentBase64, 'base64')
              fs.writeFileSync(filePath, buffer)

              res.end(JSON.stringify({
                success: true,
                message: `成功保存 ${filename} (已创建 .bak 备份)`
              }))
              return
            }

            res.statusCode = 404
            res.end(JSON.stringify({ success: false, error: '未知的 FS API 端点' }))
          } catch (err: any) {
            res.statusCode = 500
            res.end(JSON.stringify({ success: false, error: err.message }))
          }
        })
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), localFsPlugin()],
  base: './', // 保证在 Android WebView 和离线环境下能正确加载相对资源
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})

