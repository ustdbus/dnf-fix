import fs from 'fs'

const buf = fs.readFileSync('./参考存档/DnfHero0')
const b64 = buf.toString('base64')
fs.mkdirSync('./src/assets', { recursive: true })
const code = `// 项目随附的参考存档 DnfHero0 (Base64编码)
export const SAMPLE_HERO_BASE64 = "${b64}"
`
fs.writeFileSync('./src/assets/sampleSave.ts', code)
console.log('Sample save written to src/assets/sampleSave.ts, size:', buf.length)
