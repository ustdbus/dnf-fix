import fs from 'fs'
import { parseHeroSave, serializeHeroSave } from './src/core/saveParser.ts'

const heroBuffer = fs.readFileSync('./参考存档/DnfHero0')
const arrayBuffer = heroBuffer.buffer.slice(heroBuffer.byteOffset, heroBuffer.byteOffset + heroBuffer.byteLength)

const save = parseHeroSave(arrayBuffer, 0)
const serialized = serializeHeroSave(save)

console.log('Differing offsets and values:')
let count = 0
for (let i = 0; i < heroBuffer.length; i++) {
  if (heroBuffer[i] !== serialized[i]) {
    console.log(`Offset 0x${i.toString(16)} (${i}): original=0x${heroBuffer[i].toString(16)}, serialized=0x${serialized[i].toString(16)}`)
    count++
    if (count > 70) break
  }
}
