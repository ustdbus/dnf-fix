// 鬼剑士单机版 装备附魔 / 魔法词条 (Option Table) 核心字典
// 逆向基准：libBNVModule.so drawStrInt2DOption (0x00061710 ~ 0x00061b90)、setOptionValue (0x000ad685) 与 loadMagicTable (0x000aa358 / 3.etc)

export interface EnchantParamDef {
  label: string
  min: number
  max: number
  defaultVal: number
  unit?: string
  step?: number
}

export type EnchantCategory = 'element' | 'stat' | 'abnormal' | 'trigger' | 'special'

export interface EnchantDefinition {
  code: number
  name: string
  category: EnchantCategory
  params: EnchantParamDef[]
  format: (p1: number, p2: number, p3: number) => string
}

export type EquipPart = 'weapon' | 'shoulder' | 'top' | 'bottom' | 'bracelet' | 'ring'

export interface EnchantPreset {
  id: string
  name: string
  desc: string
  code: number
  param1: number
  param2: number
  param3: number
  icon: string
  parts?: EquipPart[]
  quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange'
}

export const ENCHANT_CATEGORIES: { id: EnchantCategory; name: string; icon: string }[] = [
  { id: 'element', name: '属性与属强', icon: '🔥' },
  { id: 'stat', name: '基础与四维', icon: '⚔️' },
  { id: 'special', name: '增伤与爆伤', icon: '✨' },
  { id: 'abnormal', name: '异常状态', icon: '⚡' },
  { id: 'trigger', name: '概率触发', icon: '🎲' }
]

// 全量附魔词条映射表 (严格基于引擎底层 setOptionValue 与 equipText 真实支持的 Option Code)
export const ENCHANT_DEFINITIONS: Record<number, EnchantDefinition> = {
  // --- 0x01 ~ 0x04 基础四维 ---
  0x01: {
    code: 0x01,
    name: '力量',
    category: 'stat',
    params: [{ label: '增加力量', min: 1, max: 9999, defaultVal: 20, unit: '点' }],
    format: (p1) => `力量 +${p1}`
  },
  0x02: {
    code: 0x02,
    name: '智力',
    category: 'stat',
    params: [{ label: '增加智力', min: 1, max: 9999, defaultVal: 20, unit: '点' }],
    format: (p1) => `智力 +${p1}`
  },
  0x03: {
    code: 0x03,
    name: '体力',
    category: 'stat',
    params: [{ label: '增加体力', min: 1, max: 9999, defaultVal: 20, unit: '点' }],
    format: (p1) => `体力 +${p1}`
  },
  0x04: {
    code: 0x04,
    name: '精神',
    category: 'stat',
    params: [{ label: '增加精神', min: 1, max: 9999, defaultVal: 20, unit: '点' }],
    format: (p1) => `精神 +${p1}`
  },

  // --- 0x05 ~ 0x09 血蓝与恢复 (0x09 为真实 HP、MP恢复) ---
  0x05: {
    code: 0x05,
    name: 'HP 最大值',
    category: 'stat',
    params: [{ label: '增加HP上限', min: 1, max: 65535, defaultVal: 200, unit: '点' }],
    format: (p1) => `HP MAX +${p1}`
  },
  0x06: {
    code: 0x06,
    name: 'MP 最大值',
    category: 'stat',
    params: [{ label: '增加MP上限', min: 1, max: 65535, defaultVal: 100, unit: '点' }],
    format: (p1) => `MP MAX +${p1}`
  },
  0x07: {
    code: 0x07,
    name: 'HP 每分钟恢复',
    category: 'stat',
    params: [{ label: '每分钟恢复量', min: 1, max: 9999, defaultVal: 10, unit: '点' }],
    format: (p1) => `HP恢复 +${p1}`
  },
  0x08: {
    code: 0x08,
    name: 'MP 每分钟恢复',
    category: 'stat',
    params: [{ label: '每分钟恢复量', min: 1, max: 9999, defaultVal: 10, unit: '点' }],
    format: (p1) => `MP恢复 +${p1}`
  },
  0x09: {
    code: 0x09,
    name: 'HP、MP恢复',
    category: 'stat',
    params: [{ label: '恢复量', min: 1, max: 9999, defaultVal: 15, unit: '点' }],
    format: (p1) => `HP、MP恢复 +${p1}`
  },

  // --- 0x0A ~ 0x0E 攻防与追加伤害 (0x0E 官方真实为追加伤害白字) ---
  0x0a: {
    code: 0x0a,
    name: '物理攻击力',
    category: 'stat',
    params: [{ label: '物理攻击力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `物理攻击力 +${p1}`
  },
  0x0b: {
    code: 0x0b,
    name: '魔法攻击力',
    category: 'stat',
    params: [{ label: '魔法攻击力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `魔法攻击力 +${p1}`
  },
  0x0c: {
    code: 0x0c,
    name: '物理防御力',
    category: 'stat',
    params: [{ label: '物理防御力', min: 1, max: 9999, defaultVal: 100, unit: '点' }],
    format: (p1) => `物理防御力 +${p1}`
  },
  0x0d: {
    code: 0x0d,
    name: '魔法防御力',
    category: 'stat',
    params: [{ label: '魔法防御力', min: 1, max: 9999, defaultVal: 100, unit: '点' }],
    format: (p1) => `魔法防御力 +${p1}`
  },
  0x0e: {
    code: 0x0e,
    name: '追加伤害',
    category: 'special',
    params: [{ label: '追加伤害数值', min: 1, max: 65535, defaultVal: 180, unit: '点' }],
    format: (p1) => `追加伤害 +${p1}`
  },

  // --- 0x0F ~ 0x13 暴击、硬直、速度与命中回避 (0x0F 为全暴击率，0x10 为硬直恢复) ---
  0x0f: {
    code: 0x0f,
    name: '暴击率',
    category: 'stat',
    params: [{ label: '暴击率', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `暴击率 +${p1}%`
  },
  0x10: {
    code: 0x10,
    name: '硬直恢复',
    category: 'stat',
    params: [{ label: '硬直恢复', min: 1, max: 9999, defaultVal: 60, unit: '点' }],
    format: (p1) => `硬直恢复 +${p1}`
  },
  0x11: {
    code: 0x11,
    name: '移动速度',
    category: 'stat',
    params: [{ label: '移动速度', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `移动速度 +${p1}%`
  },
  0x12: {
    code: 0x12,
    name: '命中率',
    category: 'stat',
    params: [{ label: '命中率', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `命中率 +${p1}%`
  },
  0x13: {
    code: 0x13,
    name: '回避率',
    category: 'stat',
    params: [{ label: '回避率', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `回避率 +${p1}%`
  },

  // --- 0x14 ~ 0x17 单属性抗性 ---
  0x14: {
    code: 0x14,
    name: '火属性抗性',
    category: 'element',
    params: [{ label: '火属性抗性', min: 1, max: 100, defaultVal: 10, unit: '点' }],
    format: (p1) => `火属性抗性 +${p1}`
  },
  0x15: {
    code: 0x15,
    name: '冰属性抗性',
    category: 'element',
    params: [{ label: '冰属性抗性', min: 1, max: 100, defaultVal: 10, unit: '点' }],
    format: (p1) => `冰属性抗性 +${p1}`
  },
  0x16: {
    code: 0x16,
    name: '光属性抗性',
    category: 'element',
    params: [{ label: '光属性抗性', min: 1, max: 100, defaultVal: 10, unit: '点' }],
    format: (p1) => `光属性抗性 +${p1}`
  },
  0x17: {
    code: 0x17,
    name: '暗属性抗性',
    category: 'element',
    params: [{ label: '暗属性抗性', min: 1, max: 100, defaultVal: 10, unit: '点' }],
    format: (p1) => `暗属性抗性 +${p1}`
  },

  // --- 0x18 技能等级 ---
  0x18: {
    code: 0x18,
    name: '技能等级增加',
    category: 'special',
    params: [
      { label: '技能ID', min: 0, max: 255, defaultVal: 1 },
      { label: '提升等级', min: 1, max: 10, defaultVal: 1, unit: '级' }
    ],
    format: (p1, p2) => `技能 [ID:${p1}] 等级 +${p2}`
  },

  // --- 0x19 ~ 0x24 攻击时触发异常状态 ---
  0x19: {
    code: 0x19,
    name: '攻击时触发出血',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}出血`
  },
  0x1a: {
    code: 0x1a,
    name: '攻击时触发中毒',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}中毒`
  },
  0x1b: {
    code: 0x1b,
    name: '攻击时触发灼伤',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}灼伤`
  },
  0x1c: {
    code: 0x1c,
    name: '攻击时触发减速',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}减速`
  },
  0x1d: {
    code: 0x1d,
    name: '攻击时触发感电',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}感电`
  },
  0x1e: {
    code: 0x1e,
    name: '攻击时触发黑暗',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}黑暗`
  },
  0x1f: {
    code: 0x1f,
    name: '攻击时触发眩晕',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}眩晕`
  },
  0x20: {
    code: 0x20,
    name: '攻击时触发冰冻',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}冰冻`
  },
  0x21: {
    code: 0x21,
    name: '攻击时触发石化',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}石化`
  },
  0x22: {
    code: 0x22,
    name: '攻击时触发束缚',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 4, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}束缚`
  },
  0x23: {
    code: 0x23,
    name: '攻击时触发混乱',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 30, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率造成Lv${p2}混乱`
  },

  // --- 0x25 ~ 0x2F 异常抗性 ---
  0x25: { code: 0x25, name: '出血抗性', category: 'abnormal', params: [{ label: '出血抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `出血抗性 +${p1}%` },
  0x26: { code: 0x26, name: '中毒抗性', category: 'abnormal', params: [{ label: '中毒抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `中毒抗性 +${p1}%` },
  0x27: { code: 0x27, name: '灼伤抗性', category: 'abnormal', params: [{ label: '灼伤抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `灼伤抗性 +${p1}%` },
  0x28: { code: 0x28, name: '感电抗性', category: 'abnormal', params: [{ label: '感电抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `感电抗性 +${p1}%` },
  0x29: { code: 0x29, name: '黑暗抗性', category: 'abnormal', params: [{ label: '黑暗抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `黑暗抗性 +${p1}%` },
  0x2a: { code: 0x2a, name: '眩晕抗性', category: 'abnormal', params: [{ label: '眩晕抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `眩晕抗性 +${p1}%` },
  0x2b: { code: 0x2b, name: '冰冻抗性', category: 'abnormal', params: [{ label: '冰冻抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `冰冻抗性 +${p1}%` },
  0x2c: { code: 0x2c, name: '石化抗性', category: 'abnormal', params: [{ label: '石化抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `石化抗性 +${p1}%` },
  0x2d: { code: 0x2d, name: '束缚抗性', category: 'abnormal', params: [{ label: '束缚抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `束缚抗性 +${p1}%` },
  0x2e: { code: 0x2e, name: '混乱抗性', category: 'abnormal', params: [{ label: '混乱抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `混乱抗性 +${p1}%` },
  0x2f: { code: 0x2f, name: '减速抗性', category: 'abnormal', params: [{ label: '减速抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `减速抗性 +${p1}%` },

  // --- 0x37 削血神器 ---
  0x37: {
    code: 0x37,
    name: '攻击时削减敌人HP (削血)',
    category: 'special',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 3, unit: '%' },
      { label: '削减百分比', min: 1, max: 100, defaultVal: 20, unit: '%' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率削减敌人当前 HP ${p2}%`
  },
  0x38: {
    code: 0x38,
    name: '攻击时恢复 HP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 30, unit: '点' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率恢复 HP ${p2}`
  },
  0x39: {
    code: 0x39,
    name: '攻击时恢复 MP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 30, unit: '点' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率恢复 MP ${p2}`
  },

  // --- 0x4A ~ 0x4F 攻击时触发属性增强 (三参数: 几率, 持续秒, 数值) ---
  0x4a: {
    code: 0x4a,
    name: '攻击时提升物攻',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 3, unit: '%' },
      { label: '持续时间', min: 1, max: 300, defaultVal: 100, unit: '秒' },
      { label: '提升物攻', min: 1, max: 9999, defaultVal: 100, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时${p1}%几率${p2}秒物攻+${p3}`
  },
  0x4b: {
    code: 0x4b,
    name: '攻击时提升魔攻',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 3, unit: '%' },
      { label: '持续时间', min: 1, max: 300, defaultVal: 100, unit: '秒' },
      { label: '提升魔攻', min: 1, max: 9999, defaultVal: 100, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时${p1}%几率${p2}秒魔攻+${p3}`
  },
  0x4c: {
    code: 0x4c,
    name: '被击时提升物防',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 2, unit: '%' },
      { label: '持续时间', min: 1, max: 300, defaultVal: 100, unit: '秒' },
      { label: '提升物防', min: 1, max: 9999, defaultVal: 300, unit: '点' }
    ],
    format: (p1, p2, p3) => `被击时${p1}%几率${p2}秒物防+${p3}`
  },
  0x4f: {
    code: 0x4f,
    name: '攻击时提升暴击率',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 3, unit: '%' },
      { label: '持续时间', min: 1, max: 300, defaultVal: 20, unit: '秒' },
      { label: '提升暴击率', min: 1, max: 100, defaultVal: 10, unit: '%' }
    ],
    format: (p1, p2, p3) => `攻击时${p1}%几率${p2}秒暴击+${p3}%`
  },

  // --- 0x5F, 0x60, 0x65, 0x6D 官方核心增益 (0x60 为四维全属性增加) ---
  0x5f: {
    code: 0x5f,
    name: '白字附加伤害(百分比)',
    category: 'special',
    params: [{ label: '附加伤害比例', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `攻击时附加伤害 +${p1}%`
  },
  0x60: {
    code: 0x60,
    name: '全属性增加',
    category: 'stat',
    params: [{ label: '全属性数值', min: 1, max: 9999, defaultVal: 15, unit: '点' }],
    format: (p1) => `全属性增加 +${p1}`
  },
  0x65: {
    code: 0x65,
    name: '所有属性抗性',
    category: 'element',
    params: [{ label: '所有属性抗性', min: 1, max: 100, defaultVal: 10, unit: '点' }],
    format: (p1) => `所有属性抗性 +${p1}`
  },
  0x6d: {
    code: 0x6d,
    name: '暴击伤害增加',
    category: 'special',
    params: [{ label: '暴击伤害', min: 1, max: 100, defaultVal: 20, unit: '%' }],
    format: (p1) => `暴击伤害增加 +${p1}%`
  },

  // --- 0x79 ~ 0x7C 武器属性赋予 ---
  0x79: {
    code: 0x79,
    name: '赋予武器属性：火属性攻击',
    category: 'element',
    params: [],
    format: () => '赋予武器属性：火属性攻击'
  },
  0x7a: {
    code: 0x7a,
    name: '赋予武器属性：冰属性攻击',
    category: 'element',
    params: [],
    format: () => '赋予武器属性：冰属性攻击'
  },
  0x7b: {
    code: 0x7b,
    name: '赋予武器属性：光属性攻击',
    category: 'element',
    params: [],
    format: () => '赋予武器属性：光属性攻击'
  },
  0x7c: {
    code: 0x7c,
    name: '赋予武器属性：暗属性攻击',
    category: 'element',
    params: [],
    format: () => '赋予武器属性：暗属性攻击'
  },

  // --- 0x7D 概率额外追加伤害 ---
  0x7d: {
    code: 0x7d,
    name: '攻击时概率追加伤害',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 3, unit: '%' },
      { label: '追加伤害', min: 1, max: 65535, defaultVal: 100, unit: '点' }
    ],
    format: (p1, p2) => `攻击时${p1}%几率追加伤害${p2}`
  },

  // --- 0x7E ~ 0x7F 百分比血蓝上限 ---
  0x7e: {
    code: 0x7e,
    name: 'HP MAX (百分比)',
    category: 'stat',
    params: [{ label: '生命上限比例', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `HP MAX +${p1}%`
  },
  0x7f: {
    code: 0x7f,
    name: 'MP MAX (百分比)',
    category: 'stat',
    params: [{ label: '魔法上限比例', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `MP MAX +${p1}%`
  },

  // --- 0x98 ~ 0x99 百分比攻强 ---
  0x98: {
    code: 0x98,
    name: '物理攻击力增加(百分比)',
    category: 'special',
    params: [{ label: '物攻百分比', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `物理攻击力增加 +${p1}%`
  },
  0x99: {
    code: 0x99,
    name: '魔法攻击力增加(百分比)',
    category: 'special',
    params: [{ label: '魔攻百分比', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `魔法攻击力增加 +${p1}%`
  },

  // --- 0x9A, 0x9B, 0x9F 收益类 (官方真实映射) ---
  0x9a: {
    code: 0x9a,
    name: '经验值获得增加',
    category: 'special',
    params: [{ label: '经验值比例', min: 1, max: 100, defaultVal: 20, unit: '%' }],
    format: (p1) => `经验值获得增加 +${p1}%`
  },
  0x9b: {
    code: 0x9b,
    name: '道具掉落率增加',
    category: 'special',
    params: [{ label: '掉落率比例', min: 1, max: 100, defaultVal: 20, unit: '%' }],
    format: (p1) => `道具掉落率增加 +${p1}%`
  },
  0x9f: {
    code: 0x9f,
    name: '金币获得量增加',
    category: 'special',
    params: [{ label: '金币增加比例', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `金币获得量 +${p1}%`
  }
}

// 常见强力附魔预设（Presets）
// 严格对齐官方 3.etc 莎兰附魔卡片原生排列顺序与品质（普通/高级/稀有/神器/史诗），且按装备部位（武器/护肩/上衣/下衣/手腕/戒指）精准匹配
export const ENCHANT_PRESETS: EnchantPreset[] = [
  {
    id: 'sharan_fire_attr',
    name: '🔥 赋予火属性攻击',
    desc: '官方莎兰附魔卡(普通)：使武器赋予火属性攻击效果',
    code: 0x79,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '🔥',
    parts: ['weapon'],
    quality: 'white'
  },
  {
    id: 'sharan_mag_atk_39',
    name: '🔮 魔法攻击力 +39',
    desc: '官方莎兰附魔卡(普通)：魔法攻击力提升 39 点',
    code: 0x0b,
    param1: 39,
    param2: 0,
    param3: 0,
    icon: '🔮',
    parts: ['weapon', 'top', 'bottom'],
    quality: 'white'
  },
  {
    id: 'sharan_ice_attr',
    name: '❄️ 赋予冰属性攻击',
    desc: '官方莎兰附魔卡(普通)：使武器赋予冰属性攻击效果',
    code: 0x7a,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '❄️',
    parts: ['weapon'],
    quality: 'white'
  },
  {
    id: 'sharan_dark_attr',
    name: '🌑 赋予暗属性攻击',
    desc: '官方莎兰附魔卡(高级)：使武器赋予暗属性攻击效果',
    code: 0x7c,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '🌑',
    parts: ['weapon'],
    quality: 'blue'
  },
  {
    id: 'sharan_phy_atk_63',
    name: '⚔️ 物理攻击力 +63',
    desc: '官方莎兰附魔卡(高级)：物理攻击力提升 63 点',
    code: 0x0a,
    param1: 63,
    param2: 0,
    param3: 0,
    icon: '⚔️',
    parts: ['weapon', 'top', 'bottom'],
    quality: 'blue'
  },
  {
    id: 'sharan_light_attr',
    name: '⚡ 赋予光属性攻击',
    desc: '官方莎兰附魔卡(稀有)：使武器赋予光属性攻击效果',
    code: 0x7b,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '⚡',
    parts: ['weapon'],
    quality: 'purple'
  },
  {
    id: 'sharan_extra_dmg_180',
    name: '💥 追加伤害 +180',
    desc: '官方莎兰附魔卡(史诗)：攻击时追加 180 点固定白字伤害',
    code: 0x0e,
    param1: 180,
    param2: 0,
    param3: 0,
    icon: '💥',
    parts: ['weapon', 'top', 'bottom'],
    quality: 'orange'
  },
  {
    id: 'sharan_all_stat_15',
    name: '🌟 全属性增加 +15',
    desc: '官方莎兰极品卡片(史诗)：力量、智力、体力、精神全部增加 15 点',
    code: 0x60,
    param1: 15,
    param2: 0,
    param3: 0,
    icon: '🌟',
    parts: ['bracelet', 'ring'],
    quality: 'orange'
  },
  {
    id: 'sharan_str_20',
    name: '💪 力量 +20',
    desc: '官方莎兰附魔卡(稀有)：角色力量提升 20 点',
    code: 0x01,
    param1: 20,
    param2: 0,
    param3: 0,
    icon: '💪',
    parts: ['weapon', 'top', 'bottom'],
    quality: 'purple'
  },
  {
    id: 'sharan_int_40',
    name: '🧠 智力 +40',
    desc: '官方莎兰附魔卡(史诗)：角色智力提升 40 点',
    code: 0x02,
    param1: 40,
    param2: 0,
    param3: 0,
    icon: '🧠',
    parts: ['weapon', 'top', 'bottom', 'shoulder'],
    quality: 'orange'
  },
  {
    id: 'sharan_hp_max_10pct',
    name: '💎 HP MAX +10%',
    desc: '官方莎兰极品卡片(史诗)：角色生命上限增加 10%',
    code: 0x7e,
    param1: 10,
    param2: 0,
    param3: 0,
    icon: '💎',
    parts: ['shoulder', 'top', 'bottom', 'bracelet', 'ring'],
    quality: 'orange'
  },
  {
    id: 'sharan_hp_mp_rec_15',
    name: '💖 HP、MP恢复 +15',
    desc: '官方莎兰附魔卡(史诗)：HP与MP自然恢复量提升 15 点',
    code: 0x09,
    param1: 15,
    param2: 0,
    param3: 0,
    icon: '💖',
    parts: ['bracelet', 'ring', 'shoulder'],
    quality: 'orange'
  },
  {
    id: 'sharan_hp_max_200',
    name: '🩸 HP MAX +200',
    desc: '官方莎兰附魔卡(史诗)：角色生命上限提升 200 点',
    code: 0x05,
    param1: 200,
    param2: 0,
    param3: 0,
    icon: '🩸',
    parts: ['shoulder', 'top', 'bottom', 'bracelet', 'ring'],
    quality: 'orange'
  },
  {
    id: 'sharan_move_speed_6',
    name: '🏃 移动速度 +6%',
    desc: '官方莎兰附魔卡(神器)：角色移动速度提升 6%',
    code: 0x11,
    param1: 6,
    param2: 0,
    param3: 0,
    icon: '🏃',
    parts: ['bracelet', 'ring', 'shoulder'],
    quality: 'pink'
  },
  {
    id: 'sharan_all_res_15',
    name: '🛡️ 所有属性抗性 +15',
    desc: '官方莎兰顶级卡片(史诗)：火、冰、光、暗全属性抗性增加 15 点',
    code: 0x65,
    param1: 15,
    param2: 0,
    param3: 0,
    icon: '🛡️',
    parts: ['bracelet', 'ring'],
    quality: 'orange'
  },
  {
    id: 'sharan_crit_10',
    name: '🎯 暴击率 +10%',
    desc: '官方莎兰顶级卡片(史诗)：物理与魔法暴击率提升 10%',
    code: 0x0f,
    param1: 10,
    param2: 0,
    param3: 0,
    icon: '🎯',
    parts: ['shoulder'],
    quality: 'orange'
  },
  {
    id: 'sharan_hit_recover_60',
    name: '⚡ 硬直恢复 +60',
    desc: '官方莎兰附魔卡(史诗)：硬直恢复时间提升 60 点',
    code: 0x10,
    param1: 60,
    param2: 0,
    param3: 0,
    icon: '⚡',
    parts: ['shoulder'],
    quality: 'orange'
  },
  {
    id: 'sharan_hit_rate_8',
    name: '🎯 命中率 +8%',
    desc: '官方莎兰顶级卡片(史诗)：攻击命中率提升 8%',
    code: 0x12,
    param1: 8,
    param2: 0,
    param3: 0,
    icon: '🎯',
    parts: ['weapon'],
    quality: 'orange'
  },
  {
    id: 'sharan_avoid_rate_8',
    name: '🍃 回避率 +8%',
    desc: '官方莎兰顶级卡片(史诗)：攻击回避率提升 8%',
    code: 0x13,
    param1: 8,
    param2: 0,
    param3: 0,
    icon: '🍃',
    parts: ['bracelet', 'ring'],
    quality: 'orange'
  }
]

/**
 * 根据物品 typeId 获取装备部位 (用于附魔卡片适用部位过滤)
 */
export function getEquipPartByTypeId(typeId: number): EquipPart | null {
  if (typeId >= 0x00 && typeId <= 0x03) return 'weapon' // 短剑、太刀、巨剑、光剑
  if (typeId === 0x04) return 'shoulder' // 护肩
  if (typeId === 0x05) return 'top'      // 上衣
  if (typeId === 0x06) return 'bottom'   // 下衣
  if (typeId === 0x07) return 'bracelet' // 手腕
  if (typeId === 0x08) return 'ring'     // 戒指
  return null
}

/**
 * 获取部位中文显示名称
 */
export function getEquipPartName(part: EquipPart | null): string {
  switch (part) {
    case 'weapon': return '武器'
    case 'shoulder': return '护肩'
    case 'top': return '上衣'
    case 'bottom': return '下衣'
    case 'bracelet': return '手腕'
    case 'ring': return '戒指'
    default: return '装备'
  }
}

/**
 * 根据部位过滤适用的附魔预设
 */
export function getEnchantPresetsForPart(part: EquipPart | null): EnchantPreset[] {
  if (!part) return ENCHANT_PRESETS
  return ENCHANT_PRESETS.filter(p => !p.parts || p.parts.includes(part))
}

/**
 * 格式化附魔说明文本
 */
export function formatEnchantText(code: number, p1: number = 0, p2: number = 0, p3: number = 0): string {
  if (!code || code === 0) return '无附魔'
  const def = ENCHANT_DEFINITIONS[code]
  if (def) {
    return def.format(p1, p2, p3)
  }
  // 未知或未定义代码通用格式化
  if (p3 > 0) {
    return `附魔 [0x${code.toString(16).padStart(2, '0').toUpperCase()}]: ${p1}, ${p2}, ${p3}`
  } else if (p2 > 0) {
    return `附魔 [0x${code.toString(16).padStart(2, '0').toUpperCase()}]: ${p1}, ${p2}`
  } else if (p1 > 0) {
    return `附魔 [0x${code.toString(16).padStart(2, '0').toUpperCase()}]: +${p1}`
  }
  return `附魔 [0x${code.toString(16).padStart(2, '0').toUpperCase()}]`
}

/**
 * 校验并限制词条参数数值：
 * 如果输入超过该参数的上限限制，则自动视为最大值 (max)；
 * 如果小于最小值，则视为最小值 (min)；
 * 物理硬上限严格锁死在 uint16 (0 ~ 65535)。
 */
export function clampEnchantParam(code: number, paramIndex: number, val: number): number {
  if (val === undefined || val === null || isNaN(val)) return 0
  const def = ENCHANT_DEFINITIONS[code]
  const intVal = Math.floor(val)
  if (!def || !def.params || !def.params[paramIndex]) {
    return Math.max(0, Math.min(65535, intVal))
  }
  const pDef = def.params[paramIndex]
  const effectiveMax = Math.min(65535, pDef.max)
  if (intVal > effectiveMax) {
    return effectiveMax
  }
  if (intVal < pDef.min) {
    return pDef.min
  }
  return intVal
}
