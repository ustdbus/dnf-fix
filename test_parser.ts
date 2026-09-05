import fs from 'fs'
import { parseHeroSave, serializeHeroSave } from './src/core/saveParser.ts'

const heroBuffer = fs.readFileSync('./参考存档/DnfHero0')
const arrayBuffer = heroBuffer.buffer.slice(heroBuffer.byteOffset, heroBuffer.byteOffset + heroBuffer.byteLength)

const save = parseHeroSave(arrayBuffer, 0)
console.log('--- 解析结果 ---')
console.log('职业:', save.professionName, `(0x${save.profession.toString(16)})`)
console.log('等级:', save.level)
console.log('金币:', save.gold)
console.log('复活币:', save.reviveCoins)
console.log('胜点:', save.victoryPoints)
console.log('背包格数:', save.bagSlotCount)

console.log('\n--- 前 3 个物品 ---')
for (let i = 0; i < 3; i++) {
  const item = save.inventory[i]
  console.log(`Slot ${i}: [${item.categoryName}] ${item.itemName} x${item.count}, 强化+${item.refineLevel}`)
}

console.log('\n--- 后 5 个物品 (包括空槽) ---')
for (let i = 85; i < 90; i++) {
  const item = save.inventory[i]
  console.log(`Slot ${i}: [${item.categoryName}] ${item.itemName} x${item.count}, isEmpty=${item.isEmpty}`)
}

console.log('\n--- 王图状态 ---')
for (const reg of save.dungeonRegions) {
  console.log(`${reg.name}: 第1图难度=${reg.maps[0]?.level}`)
}

console.log('\n--- 日志解锁统计 ---')
const unlockedCount = save.logs.filter(Boolean).length
console.log(`已解锁日志: ${unlockedCount} / 30`)

// 测试序列化比对
const serialized = serializeHeroSave(save)
let diffCount = 0
for (let i = 0; i < heroBuffer.length; i++) {
  if (heroBuffer[i] !== serialized[i]) {
    diffCount++
  }
}
console.log(`\n原存档与无改动重新序列化比对: 差异字节数 = ${diffCount} (应为 0)`)
if (diffCount === 0) {
  console.log('>>> 验证完全通过！底层读写 100% 吻合！ <<<')
} else {
  console.error('>>> 存在差异，需要微调！ <<<')
}
