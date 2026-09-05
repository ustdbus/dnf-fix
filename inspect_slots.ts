import fs from 'fs'
import { parseHeroSave } from './src/core/saveParser.ts'

const heroBuffer = fs.readFileSync('./参考存档/DnfHero0')
const arrayBuffer = heroBuffer.buffer.slice(heroBuffer.byteOffset, heroBuffer.byteOffset + heroBuffer.byteLength)
const save = parseHeroSave(arrayBuffer, 0)

console.log('--- 检查这几个槽位的原始 24 字节 ---')
for (const idx of [74, 75, 80, 81]) {
  const slot = save.inventory[idx]
  console.log(`Slot ${idx} (#${idx+1}): type=0x${slot.typeId.toString(16).padStart(2,'0')}, id=0x${slot.itemId.toString(16).padStart(2,'0')}, count=${slot.count}, refine=${slot.refineLevel}`)
  console.log(`  bytes: ${Array.from(slot.rawBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`)
}
