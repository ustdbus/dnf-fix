import { DnfHeroSave, InventorySlot, MapRegion } from './types'
import { findItemInfo } from './itemDict'

export const EMPTY_SLOT_TEMPLATE = new Uint8Array([
  0x00, 0x00, 0xf8, 0x00, 0xf8, 0x00, 0x00, 0xf8,
  0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
])

export const DEFAULT_EQUIP_TEMPLATE = new Uint8Array([
  0x01, 0x28, 0x01, 0x01, 0x00, 0x02, 0x23, 0x0b,
  0x01, 0x32, 0x01, 0x00, 0x00, 0x00, 0x00, 0x0e,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
])

export const DEFAULT_ITEM_TEMPLATE = new Uint8Array([
  0x0b, 0x21, 0x01, 0x00, 0x34, 0x00, 0x00, 0xf8,
  0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
])

export const PROFESSION_NAMES: Record<number, string> = {
  0: '鬼剑士 (未转职)',
  1: '剑魂',
  2: '鬼泣',
  3: '狂战士',
  4: '阿修罗',
  5: '剑圣',
  6: '弑魂',
  7: '狱血魔神',
  8: '大暗黑天'
}

export function isEquipCategory(typeId: number): boolean {
  return typeId >= 0x00 && typeId <= 0x08
}

export function parseHeroSave(buffer: ArrayBuffer, charIndex: number = 0): DnfHeroSave {
  const bytes = new Uint8Array(buffer)
  const view = new DataView(buffer)
  
  const profession = bytes[0x00]
  const professionName = PROFESSION_NAMES[profession] || `职业 (0x${profession.toString(16)})`
  const level = bytes[0x01]
  const sp = view.getUint16(0x17, true) // 技能点 SP (0x17~0x18, uint16 little-endian)
  
  // 金币 (0x25~0x28, int32 little-endian)
  const gold = view.getInt32(0x25, true)
  // 复活币 (0x29~0x2C, int32 little-endian)
  const reviveCoins = view.getInt32(0x29, true)
  // 胜点 (0x2D~0x30, int32 little-endian)
  const victoryPoints = view.getInt32(0x2D, true)
  // 勋章 (0x31~0x34, int32 little-endian)
  const medal = view.getInt32(0x31, true)
  // 背包格数 (0x39, uint8)
  const bagSlotCount = bytes[0x39]
  
  // 90 个背包槽位，每槽 24 字节，从 0x3A 开始
  const inventory: InventorySlot[] = []
  const slotSize = 24
  for (let i = 0; i < 90; i++) {
    const offset = 0x3a + i * slotSize
    const slotBytes = bytes.slice(offset, offset + slotSize)
    const typeId = slotBytes[0]
    const itemId = slotBytes[1]
    const count = slotBytes[2]
    const flag = slotBytes[3]
    
    // 空槽判定: typeId == 0 && itemId == 0
    const isEmpty = (typeId === 0 && itemId === 0)
    const isEquip = isEquipCategory(typeId)
    // 只有装备才使用第4字节作为强化等级；非装备强化等级视为 0
    const refineLevel = (!isEmpty && isEquip) ? slotBytes[4] : 0

    // 装备底层属性字段 (依据官方 24 字节结构：字节 5~15)
    let grade: number | undefined = undefined
    let durability: number | undefined = undefined
    let baseAtkDef1: number | undefined = undefined
    let baseAtkDef2: number | undefined = undefined
    let refineBonus1: number | undefined = undefined
    let refineBonus2: number | undefined = undefined
    let stat4: number | undefined = undefined

    if (!isEmpty && isEquip) {
      grade = slotBytes[5]
      durability = slotBytes[6]
      baseAtkDef1 = slotBytes[7] | (slotBytes[8] << 8)
      baseAtkDef2 = slotBytes[9] | (slotBytes[10] << 8)
      refineBonus1 = slotBytes[11] | (slotBytes[12] << 8)
      refineBonus2 = slotBytes[13] | (slotBytes[14] << 8)
      stat4 = slotBytes[15]
    }

    // 装备附魔 Option Type (字节 17) 及参数 1~3 (字节 18~23, uint16 LE)
    let enchant = undefined
    if (!isEmpty && isEquip) {
      const enchantCode = slotBytes[17]
      if (enchantCode > 0) {
        const param1 = slotBytes[18] | (slotBytes[19] << 8)
        const param2 = slotBytes[20] | (slotBytes[21] << 8)
        const param3 = slotBytes[22] | (slotBytes[23] << 8)
        enchant = { code: enchantCode, param1, param2, param3 }
      }
    }
    
    const itemInfo = isEmpty 
      ? { name: '空槽位', categoryName: '空', canRefine: false }
      : findItemInfo(typeId, itemId)
      
    inventory.push({
      slotIndex: i,
      isEmpty,
      typeId,
      itemId,
      count: isEmpty ? 0 : count,
      flag,
      refineLevel,
      grade,
      durability,
      baseAtkDef1,
      baseAtkDef2,
      refineBonus1,
      refineBonus2,
      stat4,
      rawBytes: slotBytes,
      itemName: itemInfo.name,
      categoryName: itemInfo.categoryName,
      enchant
    })
  }
  
  // 王图 (地图难度)，从 0x09CC 开始，共 37 个字节（官方解包数据）
  const regions: MapRegion[] = [
    {
      name: '格兰之森 (10图)',
      offset: 0x09cc,
      length: 10,
      maps: [
        { id: 'g1', name: '幽暗密林', level: bytes[0x09cc] },
        { id: 'g2', name: '幽暗密林深处', level: bytes[0x09cd] },
        { id: 'g3', name: '雷鸣废墟', level: bytes[0x09ce] },
        { id: 'g4', name: '猛毒雷鸣废墟', level: bytes[0x09cf] },
        { id: 'g5', name: '冰霜幽暗密林', level: bytes[0x09d0] },
        { id: 'g6', name: '格拉卡', level: bytes[0x09d1] },
        { id: 'g7', name: '烈焰格拉卡', level: bytes[0x09d2] },
        { id: 'g8', name: '白化幽暗密林', level: bytes[0x09d3] },
        { id: 'g9', name: '暗黑雷鸣废墟', level: bytes[0x09d4] },
        { id: 'g10', name: '遗忘之幽暗密林', level: bytes[0x09d5] },
      ]
    },
    {
      name: '天空之城 (8图)',
      offset: 0x09d6,
      length: 8,
      maps: [
        { id: 't1', name: '龙人之塔', level: bytes[0x09d6] },
        { id: 't2', name: '人偶玄关', level: bytes[0x09d7] },
        { id: 't3', name: '石巨人塔', level: bytes[0x09d8] },
        { id: 't4', name: '黑暗玄廊', level: bytes[0x09d9] },
        { id: 't5', name: '悬空城', level: bytes[0x09da] },
        { id: 't6', name: '城主宫殿', level: bytes[0x09db] },
        { id: 't7', name: '深渊', level: bytes[0x09dc] },
        { id: 't8', name: '遗忘之塔', level: bytes[0x09dd] },
      ]
    },
    {
      name: '天维巨兽 (8图)',
      offset: 0x09de,
      length: 8,
      maps: [
        { id: 'w1', name: '神殿外围', level: bytes[0x09de] },
        { id: 'w2', name: '树精丛林', level: bytes[0x09df] },
        { id: 'w3', name: '炼狱', level: bytes[0x09e0] },
        { id: 'w4', name: '极昼', level: bytes[0x09e1] },
        { id: 'w5', name: '第一脊椎', level: bytes[0x09e2] },
        { id: 'w6', name: '第二脊椎', level: bytes[0x09e3] },
        { id: 'w7', name: '天维禁地', level: bytes[0x09e4] },
        { id: 'w8', name: '遗忘之神殿', level: bytes[0x09e5] },
      ]
    },
    {
      name: '万年雪山 (10图)',
      offset: 0x09e6,
      length: 10,
      maps: [
        { id: 's1', name: '山脊', level: bytes[0x09e6] },
        { id: 's2', name: 'GBL教秘密地下城', level: bytes[0x09e7] },
        { id: 's3', name: '冰心少年', level: bytes[0x09e8] },
        { id: 's4', name: '利库天井', level: bytes[0x09e9] },
        { id: 's5', name: '奥尔卡的修炼场', level: bytes[0x09ea] },
        { id: 's6', name: '白色废墟', level: bytes[0x09eb] },
        { id: 's7', name: '冰雪宫殿', level: bytes[0x09ec] },
        { id: 's8', name: '斯卡萨之巢', level: bytes[0x09ed] },
        { id: 's9', name: '古代修炼场', level: bytes[0x09ee] },
        { id: 's10', name: '遗忘之洞窟', level: bytes[0x09ef] },
      ]
    },
    {
      name: '比尔马克帝国试验场 (机械牛)',
      offset: 0x09f0,
      length: 1,
      maps: [
        { id: 'b1', name: '比尔马克', level: bytes[0x09f0] },
      ]
    }
  ]
  
  // 日志 (30个日志，从 0x09F1 开始，每个2字节)
  const logs: boolean[] = []
  const logStartOffset = 0x09f1
  for (let i = 0; i < 30; i++) {
    const b0 = bytes[logStartOffset + i * 2]
    logs.push(b0 === 0x01)
  }
  
  return {
    version: 1,
    characterIndex: charIndex,
    profession,
    professionName,
    level,
    sp,
    medal,
    gold,
    reviveCoins,
    victoryPoints,
    bagSlotCount,
    inventory,
    dungeonRegions: regions,
    logs,
    rawBuffer: new Uint8Array(buffer)
  }
}

export function serializeHeroSave(save: DnfHeroSave): Uint8Array {
  const output = new Uint8Array(save.rawBuffer.length)
  output.set(save.rawBuffer)
  const view = new DataView(output.buffer)
  
  // 写入职业与角色属性 (职业, SP点, 金币, 复活币, 胜点, 勋章, 背包格数)
  output[0x00] = save.profession & 0xff
  view.setUint16(0x17, Math.max(0, Math.min(65535, Math.floor(save.sp || 0))), true)
  view.setInt32(0x25, Math.max(0, Math.min(2147483647, Math.floor(save.gold))), true)
  view.setInt32(0x29, Math.max(0, Math.min(2147483647, Math.floor(save.reviveCoins))), true)
  view.setInt32(0x2d, Math.max(0, Math.min(2147483647, Math.floor(save.victoryPoints))), true)
  view.setInt32(0x31, Math.max(0, Math.min(2147483647, Math.floor(save.medal || 0))), true)
  output[0x39] = Math.max(1, Math.min(90, Math.floor(save.bagSlotCount)))
  
  // 写入 90 个背包槽位
  const slotSize = 24
  for (let i = 0; i < 90; i++) {
    const slot = save.inventory[i]
    const offset = 0x3a + i * slotSize
    if (!slot || slot.isEmpty) {
      output.set(EMPTY_SLOT_TEMPLATE, offset)
    } else {
      const isEquip = isEquipCategory(slot.typeId)
      // 如果槽位之前是空的，或者模板不存在，根据类型选取默认模板
      let baseBytes: Uint8Array
      if (!slot.rawBytes || (slot.rawBytes[0] === 0 && slot.rawBytes[1] === 0)) {
        baseBytes = isEquip ? DEFAULT_EQUIP_TEMPLATE.slice() : DEFAULT_ITEM_TEMPLATE.slice()
      } else {
        baseBytes = slot.rawBytes.slice()
      }
      
      baseBytes[0] = slot.typeId & 0xff
      baseBytes[1] = slot.itemId & 0xff
      // 装备、防具、首饰、称号、宠物(0x00~0x0a)单件独立不可叠加，数量严格锁死为 1
      const isSingle = slot.typeId <= 0x0a
      baseBytes[2] = isSingle ? 1 : (Math.max(1, Math.min(255, slot.count)) & 0xff)
      if (slot.flag !== undefined) {
        baseBytes[3] = slot.flag
      }
      if (isEquip) {
        baseBytes[4] = Math.max(0, Math.min(255, slot.refineLevel)) & 0xff

        // 写入品级 (字节 5: 0: 下级, 1: 中级, 2: 上级, 3: 最上级)
        if (slot.grade !== undefined) {
          baseBytes[5] = Math.max(0, Math.min(3, Math.floor(slot.grade))) & 0xff
        }
        // 写入耐久度 (字节 6: uint8 0~255)
        if (slot.durability !== undefined) {
          baseBytes[6] = Math.max(0, Math.min(255, Math.floor(slot.durability))) & 0xff
        }
        // 写入基础物攻/物防 (字节 7~8: uint16 LE 0~65535)
        if (slot.baseAtkDef1 !== undefined) {
          const val = Math.max(0, Math.min(65535, Math.floor(slot.baseAtkDef1)))
          baseBytes[7] = val & 0xff
          baseBytes[8] = (val >> 8) & 0xff
        }
        // 写入基础魔攻/魔防 (字节 9~10: uint16 LE 0~65535)
        if (slot.baseAtkDef2 !== undefined) {
          const val = Math.max(0, Math.min(65535, Math.floor(slot.baseAtkDef2)))
          baseBytes[9] = val & 0xff
          baseBytes[10] = (val >> 8) & 0xff
        }
        // 写入强化物攻/物防附加 (字节 11~12: uint16 LE 0~65535)
        if (slot.refineBonus1 !== undefined) {
          const val = Math.max(0, Math.min(65535, Math.floor(slot.refineBonus1)))
          baseBytes[11] = val & 0xff
          baseBytes[12] = (val >> 8) & 0xff
        }
        // 写入强化魔攻/魔防附加 (字节 13~14: uint16 LE 0~65535)
        if (slot.refineBonus2 !== undefined) {
          const val = Math.max(0, Math.min(65535, Math.floor(slot.refineBonus2)))
          baseBytes[13] = val & 0xff
          baseBytes[14] = (val >> 8) & 0xff
        }
        // 写入四维加成 (字节 15: uint8 0~255)
        if (slot.stat4 !== undefined) {
          baseBytes[15] = Math.max(0, Math.min(255, Math.floor(slot.stat4))) & 0xff
        }

        // 写入附魔数据 (字节 17~23: 附魔代码 + 参数1~3 小端序, 严格限制在 uint16 0~65535)
        if (slot.enchant && slot.enchant.code > 0) {
          const p1 = Math.max(0, Math.min(65535, Math.floor(slot.enchant.param1 || 0)))
          const p2 = Math.max(0, Math.min(65535, Math.floor(slot.enchant.param2 || 0)))
          const p3 = Math.max(0, Math.min(65535, Math.floor(slot.enchant.param3 || 0)))
          baseBytes[17] = slot.enchant.code & 0xff
          baseBytes[18] = p1 & 0xff
          baseBytes[19] = (p1 >> 8) & 0xff
          baseBytes[20] = p2 & 0xff
          baseBytes[21] = (p2 >> 8) & 0xff
          baseBytes[22] = p3 & 0xff
          baseBytes[23] = (p3 >> 8) & 0xff
        } else {
          // 无附魔或清除附魔，清零字节 17~23
          baseBytes[17] = 0
          baseBytes[18] = 0
          baseBytes[19] = 0
          baseBytes[20] = 0
          baseBytes[21] = 0
          baseBytes[22] = 0
          baseBytes[23] = 0
        }
      }
      output.set(baseBytes, offset)
    }
  }
  
  // 写入王图难度
  for (const region of save.dungeonRegions) {
    for (let i = 0; i < region.maps.length; i++) {
      const map = region.maps[i]
      let targetLvl = map.level
      // 遗忘系列地下城在单机版中仅有普通级，防止非预期修改破坏游戏逻辑
      if (map.name.includes('遗忘')) {
        targetLvl = 0
      }
      output[region.offset + i] = targetLvl & 0xff
    }
  }
  
  // 写入冒险日志
  const logStartOffset = 0x09f1
  for (let i = 0; i < 30; i++) {
    const isUnlocked = save.logs[i]
    const currentStatus = output[logStartOffset + i * 2]
    if (isUnlocked) {
      if (currentStatus === 0x00) {
        output[logStartOffset + i * 2] = 0x01
      }
    } else {
      output[logStartOffset + i * 2] = 0x00
    }
  }
  
  return output
}
