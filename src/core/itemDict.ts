import { ItemDefinition } from './types'
import { OFFICIAL_ITEM_DATABASE } from './officialItems'

export const CATEGORIES: { id: number; name: string }[] = [
  { id: 0x00, name: '短剑' },
  { id: 0x01, name: '太刀' },
  { id: 0x02, name: '巨剑' },
  { id: 0x03, name: '光剑' },
  { id: 0x04, name: '护肩' },
  { id: 0x05, name: '上衣' },
  { id: 0x06, name: '下衣' },
  { id: 0x07, name: '手腕' },
  { id: 0x08, name: '戒指' },
  { id: 0x09, name: '称号' },
  { id: 0x0a, name: '宠物' },
  { id: 0x0b, name: '材料' },
  { id: 0x0c, name: '卡片' },
  { id: 0x0d, name: 'HP药剂' },
  { id: 0x0e, name: 'MP药剂' },
  { id: 0x0f, name: '死塔药剂' },
  { id: 0x10, name: 'BUFF药剂' },
  { id: 0x11, name: '属性增益' },
  { id: 0x12, name: '罐子类' },
  { id: 0x13, name: '任务物品' },
]

export const ARMOR_TYPES = ['布甲', '轻甲', '重甲', '板甲'] as const

/**
 * 特殊物品属性增强说明 (如称号属性加成、宠物特技描述)
 */
export const SPECIAL_ITEM_DESC: Record<string, { desc: string; quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange' }> = {
  // 称号增强属性说明 (0x09)
  '9_8': { desc: '物攻+X%, 力+30, 体+40', quality: 'pink' },
  '9_9': { desc: '魔攻+X%, 智+30, 精+40', quality: 'pink' },
  '9_10': { desc: '暴击+X%, 暴伤+20%, 打击回复+50', quality: 'orange' },
  '9_11': { desc: '获得经验+X%, 掉率+30%, HP/MP+8', quality: 'orange' },
  '9_12': { desc: '全状态+X, 移动+2, HP/MP再生+3', quality: 'orange' },

  // 宠物增强技能说明 (0x0a)
  '10_1': { desc: 'HPMax+7%, 暴击+5%', quality: 'pink' },
  '10_2': { desc: '物攻+X%, HPMAX+15%, 力量+30', quality: 'pink' },
  '10_3': { desc: '魔攻+X%, MPMAX+15%, 智力+30', quality: 'pink' },
  '10_4': { desc: '全状态+X, 削血10%, 命中+10%', quality: 'orange' },
  '10_5': { desc: '暴击+X%, 移动+2, 打击回复+50', quality: 'pink' },
  '10_6': { desc: '经验+X%, 物品掉落率+20%, 命中+10%', quality: 'orange' },
  '10_7': { desc: '自动拾取, 金币+10%, HP/MP再生+5', quality: 'orange' },
}

/**
 * 官方全量 1797 件物品字典 (提取自游戏官方安装包 assets/0.etc 与 iteamname1_kor.bin)
 * 绝无任何带括号或粗制滥造的伪造模板名称，称号与宠物已自动挂载技能属性说明
 */
export const ITEM_DICTIONARY: ItemDefinition[] = []

for (const [typeIdStr, items] of Object.entries(OFFICIAL_ITEM_DATABASE)) {
  const typeId = Number(typeIdStr)
  const cat = CATEGORIES.find(c => c.id === typeId)
  const categoryName = cat ? cat.name : `未知类别`
  const isEquip = typeId >= 0x00 && typeId <= 0x08

  for (const [itemIdStr, official] of Object.entries(items)) {
    const itemId = Number(itemIdStr)
    const special = SPECIAL_ITEM_DESC[`${typeId}_${itemId}`]
    const quality = special?.quality || official.quality || 'white'
    const desc = special?.desc || (official.reqLevel !== undefined ? `Lv.${official.reqLevel}${official.price ? ' 售价:' + official.price : ''}` : undefined)

    ITEM_DICTIONARY.push({
      typeId,
      itemId,
      name: official.name,
      categoryName,
      quality,
      canRefine: isEquip,
      reqLevel: official.reqLevel,
      price: official.price,
      desc,
    })
  }
}

// ==================== 品质信息与样式辅助 ====================
export interface QualityInfo {
  name: string
  label: string
  color: string
  borderColor: string
  bgColor: string
  badgeClass: string
}

export function getQualityInfo(quality?: string): QualityInfo {
  switch (quality) {
    case 'orange':
      return {
        name: '史诗',
        label: '史诗 (橙装)',
        color: 'text-amber-400',
        borderColor: 'border-amber-500/60',
        bgColor: 'bg-amber-950/40',
        badgeClass: 'bg-amber-950/70 border-amber-500/80 text-amber-300 shadow-sm shadow-amber-500/20'
      }
    case 'pink':
      return {
        name: '神器',
        label: '神器 (粉装)',
        color: 'text-fuchsia-400',
        borderColor: 'border-fuchsia-500/60',
        bgColor: 'bg-fuchsia-950/40',
        badgeClass: 'bg-fuchsia-950/70 border-fuchsia-500/80 text-fuchsia-300 shadow-sm shadow-fuchsia-500/20'
      }
    case 'purple':
      return {
        name: '稀有',
        label: '稀有 (紫装)',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/60',
        bgColor: 'bg-purple-950/40',
        badgeClass: 'bg-purple-950/70 border-purple-500/80 text-purple-300'
      }
    case 'blue':
      return {
        name: '高级',
        label: '高级 (蓝装)',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/60',
        bgColor: 'bg-blue-950/40',
        badgeClass: 'bg-blue-950/70 border-blue-500/80 text-blue-300'
      }
    case 'white':
    default:
      return {
        name: '普通',
        label: '普通 (白装)',
        color: 'text-gray-300',
        borderColor: 'border-gray-700',
        bgColor: 'bg-gray-900/60',
        badgeClass: 'bg-gray-800 border-gray-600 text-gray-300'
      }
  }
}

// ==================== 统一查找函数 ====================
export function findItemInfo(typeId: number, itemId: number): {
  name: string
  categoryName: string
  quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange'
  canRefine: boolean
  reqLevel?: number
  price?: number
  desc?: string
} {
  const cat = CATEGORIES.find(c => c.id === typeId)
  const catName = cat ? cat.name : `未知类别`
  const isEquip = typeId >= 0x00 && typeId <= 0x08

  // 1. 查官方全量解包数据库 (1797件物品完整数据)
  const official = OFFICIAL_ITEM_DATABASE[typeId]?.[itemId]
  if (official) {
    const special = SPECIAL_ITEM_DESC[`${typeId}_${itemId}`]
    return {
      name: official.name,
      categoryName: catName,
      quality: special?.quality || official.quality || 'white',
      canRefine: isEquip,
      reqLevel: official.reqLevel,
      price: official.price,
      desc: special?.desc || (official.reqLevel !== undefined ? `Lv.${official.reqLevel}` : undefined),
    }
  }

  // 2. 默认兜底 (绝不制造伪造模板名称)
  return {
    name: `${catName} [0x${itemId.toString(16).padStart(2, '0')}]`,
    categoryName: catName,
    quality: 'white',
    canRefine: isEquip,
  }
}

/**
 * 装备解析兼容函数 (保持对外签名)
 */
export function parseEquipment(typeId: number, itemId: number): { name: string; categoryName: string; quality: 'white' | 'blue' | 'purple' | 'pink' | 'orange'; canRefine: boolean } | null {
  const info = findItemInfo(typeId, itemId)
  if (info) {
    return {
      name: info.name,
      categoryName: info.categoryName,
      quality: (info.quality as any) || 'white',
      canRefine: info.canRefine,
    }
  }
  return null
}

export function getItemDefinition(typeId: number, itemId: number): ItemDefinition | undefined {
  const info = findItemInfo(typeId, itemId)
  return {
    typeId,
    itemId,
    name: info.name,
    categoryName: info.categoryName,
    quality: info.quality || 'white',
    canRefine: info.canRefine,
    reqLevel: info.reqLevel,
    price: info.price,
    desc: info.desc || (info.reqLevel !== undefined ? `Lv.${info.reqLevel}` : undefined),
  }
}

export function getCategoryItems(typeId: number): ItemDefinition[] {
  return getAllAvailableItems().filter(i => i.typeId === typeId)
}

/**
 * 获取全量可用物品列表 (直接返回全量 1797 件正版官方解包物品，称号宠物已合并增强描述)
 */
export function getAllAvailableItems(): ItemDefinition[] {
  return ITEM_DICTIONARY
}
