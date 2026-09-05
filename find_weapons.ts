import fs from 'fs'
import { parseHeroSave } from './src/core/saveParser.ts'

const heroBuffer = fs.readFileSync('./参考存档/DnfHero0')
const arrayBuffer = heroBuffer.buffer.slice(heroBuffer.byteOffset, heroBuffer.byteOffset + heroBuffer.byteLength)

const save = parseHeroSave(arrayBuffer, 0)
console.log('--- 查找所有太刀 (typeId = 0x01) ---')
let count = 1
for (let i = 0; i < save.inventory.length; i++) {
  const slot = save.inventory[i]
  if (slot.typeId === 0x01) {
    console.log(`第${count}把武器 (Slot ${slot.slotIndex}): itemId=0x${slot.itemId.toString(16)} (dec:${slot.itemId}), 强化等级=${slot.refineLevel}, rawBytes=${Array.from(slot.rawBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`)
    count++
  }
}
