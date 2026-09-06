// 鬼剑士单机版 装备附魔 / 魔法词条 (Option Table) 核心字典
// 逆向基准：libBNVModule.so drawStrInt2DOption (0x00061710 ~ 0x00061b90) 与 loadMagicTable (0x000aa358)

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

export interface EnchantPreset {
  id: string
  name: string
  desc: string
  code: number
  param1: number
  param2: number
  param3: number
  icon: string
}

export const ENCHANT_CATEGORIES: { id: EnchantCategory; name: string; icon: string }[] = [
  { id: 'element', name: '属性与属强', icon: '🔥' },
  { id: 'stat', name: '基础与暴击', icon: '⚔️' },
  { id: 'special', name: '增伤与特效', icon: '✨' },
  { id: 'abnormal', name: '异常状态', icon: '⚡' },
  { id: 'trigger', name: '概率触发', icon: '🎲' }
]

// 全量附魔词条映射表
export const ENCHANT_DEFINITIONS: Record<number, EnchantDefinition> = {
  // --- 0x01 ~ 0x13 基础四维与攻防速度 ---
  0x01: {
    code: 0x01,
    name: '力量',
    category: 'stat',
    params: [{ label: '增加力量', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `力量 +${p1}`
  },
  0x02: {
    code: 0x02,
    name: '智力',
    category: 'stat',
    params: [{ label: '增加智力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `智力 +${p1}`
  },
  0x03: {
    code: 0x03,
    name: '体力',
    category: 'stat',
    params: [{ label: '增加体力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `体力 +${p1}`
  },
  0x04: {
    code: 0x04,
    name: '精神',
    category: 'stat',
    params: [{ label: '增加精神', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `精神 +${p1}`
  },
  0x05: {
    code: 0x05,
    name: 'HP 最大值',
    category: 'stat',
    params: [{ label: '增加HP上限', min: 1, max: 65535, defaultVal: 500, unit: '点' }],
    format: (p1) => `HP MAX +${p1}`
  },
  0x06: {
    code: 0x06,
    name: 'MP 最大值',
    category: 'stat',
    params: [{ label: '增加MP上限', min: 1, max: 65535, defaultVal: 500, unit: '点' }],
    format: (p1) => `MP MAX +${p1}`
  },
  0x07: {
    code: 0x07,
    name: 'HP 每分钟恢复',
    category: 'stat',
    params: [{ label: '每分钟恢复量', min: 1, max: 9999, defaultVal: 60, unit: '点' }],
    format: (p1) => `HP 每分钟恢复 +${p1}`
  },
  0x08: {
    code: 0x08,
    name: 'MP 每分钟恢复',
    category: 'stat',
    params: [{ label: '每分钟恢复量', min: 1, max: 9999, defaultVal: 60, unit: '点' }],
    format: (p1) => `MP 每分钟恢复 +${p1}`
  },
  0x09: {
    code: 0x09,
    name: '攻击速度',
    category: 'stat',
    params: [{ label: '攻击速度', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `攻击速度 +${p1}%`
  },
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
    name: '施放速度',
    category: 'stat',
    params: [{ label: '施放速度', min: 1, max: 100, defaultVal: 5, unit: '%' }],
    format: (p1) => `施放速度 +${p1}%`
  },
  0x0f: {
    code: 0x0f,
    name: '物理暴击率',
    category: 'stat',
    params: [{ label: '物理暴击率', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `物理暴击率 +${p1}%`
  },
  0x10: {
    code: 0x10,
    name: '魔法暴击率',
    category: 'stat',
    params: [{ label: '魔法暴击率', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `魔法暴击率 +${p1}%`
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

  // --- 0x19 ~ 0x24 攻击时使敌人陷入异常状态 ---
  0x19: {
    code: 0x19,
    name: '攻击时触发出血',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 出血状态 ${p3} 秒`
  },
  0x1a: {
    code: 0x1a,
    name: '攻击时触发中毒',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 中毒状态 ${p3} 秒`
  },
  0x1b: {
    code: 0x1b,
    name: '攻击时触发灼伤',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 灼伤状态 ${p3} 秒`
  },
  0x1c: {
    code: 0x1c,
    name: '攻击时触发减速',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 减速状态 ${p3} 秒`
  },
  0x1d: {
    code: 0x1d,
    name: '攻击时触发感电',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 感电状态 ${p3} 秒`
  },
  0x1e: {
    code: 0x1e,
    name: '攻击时触发失明',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 失明状态 ${p3} 秒`
  },
  0x1f: {
    code: 0x1f,
    name: '攻击时触发眩晕',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 眩晕状态 ${p3} 秒`
  },
  0x20: {
    code: 0x20,
    name: '攻击时触发冰冻',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 15, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 4, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 冰冻状态 ${p3} 秒`
  },
  0x21: {
    code: 0x21,
    name: '攻击时触发石化',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 石化状态 ${p3} 秒`
  },
  0x22: {
    code: 0x22,
    name: '攻击时触发束缚',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 4, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 束缚状态 ${p3} 秒`
  },
  0x23: {
    code: 0x23,
    name: '攻击时触发混乱',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 混乱状态 ${p3} 秒`
  },
  0x24: {
    code: 0x24,
    name: '攻击时触发诅咒',
    category: 'abnormal',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '异常等级', min: 1, max: 100, defaultVal: 60, unit: '级' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率使敌人陷入 Lv.${p2} 诅咒状态 ${p3} 秒`
  },

  // --- 0x25 ~ 0x30 异常抗性 ---
  0x25: { code: 0x25, name: '出血抗性', category: 'abnormal', params: [{ label: '出血抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `出血抗性 +${p1}` },
  0x26: { code: 0x26, name: '中毒抗性', category: 'abnormal', params: [{ label: '中毒抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `中毒抗性 +${p1}` },
  0x27: { code: 0x27, name: '灼伤抗性', category: 'abnormal', params: [{ label: '灼伤抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `灼伤抗性 +${p1}` },
  0x28: { code: 0x28, name: '减速抗性', category: 'abnormal', params: [{ label: '减速抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `减速抗性 +${p1}` },
  0x29: { code: 0x29, name: '感电抗性', category: 'abnormal', params: [{ label: '感电抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `感电抗性 +${p1}` },
  0x2a: { code: 0x2a, name: '失明抗性', category: 'abnormal', params: [{ label: '失明抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `失明抗性 +${p1}` },
  0x2b: { code: 0x2b, name: '眩晕抗性', category: 'abnormal', params: [{ label: '眩晕抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `眩晕抗性 +${p1}` },
  0x2c: { code: 0x2c, name: '冰冻抗性', category: 'abnormal', params: [{ label: '冰冻抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `冰冻抗性 +${p1}` },
  0x2d: { code: 0x2d, name: '石化抗性', category: 'abnormal', params: [{ label: '石化抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `石化抗性 +${p1}` },
  0x2e: { code: 0x2e, name: '束缚抗性', category: 'abnormal', params: [{ label: '束缚抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `束缚抗性 +${p1}` },
  0x2f: { code: 0x2f, name: '混乱抗性', category: 'abnormal', params: [{ label: '混乱抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `混乱抗性 +${p1}` },
  0x30: { code: 0x30, name: '诅咒抗性', category: 'abnormal', params: [{ label: '诅咒抗性', min: 1, max: 100, defaultVal: 20, unit: '点' }], format: (p1) => `诅咒抗性 +${p1}` },

  // --- 0x37 削血神器 ---
  0x37: {
    code: 0x37,
    name: '攻击时削减敌人HP (削血)',
    category: 'special',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '削减百分比', min: 1, max: 100, defaultVal: 20, unit: '%' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率削减敌人当前 HP ${p2}%`
  },
  0x38: {
    code: 0x38,
    name: '攻击时恢复 HP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 100, unit: '点' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率恢复 HP ${p2}`
  },
  0x39: {
    code: 0x39,
    name: '攻击时恢复 MP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 100, unit: '点' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率恢复 MP ${p2}`
  },
  0x3a: {
    code: 0x3a,
    name: '被击时恢复 HP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 200, unit: '点' }
    ],
    format: (p1, p2) => `被击时以 ${p1}% 几率恢复 HP ${p2}`
  },
  0x3b: {
    code: 0x3b,
    name: '被击时恢复 MP',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复数值', min: 1, max: 9999, defaultVal: 200, unit: '点' }
    ],
    format: (p1, p2) => `被击时以 ${p1}% 几率恢复 MP ${p2}`
  },

  // --- 0x45 ~ 0x50 攻击时触发属性增强 (三参数: 几率, 持续秒, 数值) ---
  0x45: {
    code: 0x45,
    name: '攻击时提升力量',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升力量', min: 1, max: 9999, defaultVal: 50, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内力量增加 ${p3}`
  },
  0x46: {
    code: 0x46,
    name: '攻击时提升智力',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升智力', min: 1, max: 9999, defaultVal: 50, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内智力增加 ${p3}`
  },
  0x49: {
    code: 0x49,
    name: '攻击时提升物攻',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升物攻', min: 1, max: 9999, defaultVal: 50, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内物理攻击力增加 ${p3}`
  },
  0x4a: {
    code: 0x4a,
    name: '攻击时提升魔攻',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升魔攻', min: 1, max: 9999, defaultVal: 50, unit: '点' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内魔法攻击力增加 ${p3}`
  },
  0x4b: {
    code: 0x4b,
    name: '攻击时提升移速',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升移速', min: 1, max: 100, defaultVal: 10, unit: '%' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内移动速度增加 ${p3}%`
  },
  0x4c: {
    code: 0x4c,
    name: '攻击时提升攻速',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升攻速', min: 1, max: 100, defaultVal: 10, unit: '%' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内攻击速度增加 ${p3}%`
  },
  0x4e: {
    code: 0x4e,
    name: '攻击时提升物理暴击率',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升暴击率', min: 1, max: 100, defaultVal: 15, unit: '%' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内物理暴击率增加 ${p3}%`
  },
  0x4f: {
    code: 0x4f,
    name: '攻击时提升魔法暴击率',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '持续时间', min: 1, max: 60, defaultVal: 20, unit: '秒' },
      { label: '提升暴击率', min: 1, max: 100, defaultVal: 15, unit: '%' }
    ],
    format: (p1, p2, p3) => `攻击时以 ${p1}% 几率在 ${p2} 秒内魔法暴击率增加 ${p3}%`
  },

  // --- 0x59 ~ 0x5D 霸体与无敌 ---
  0x59: {
    code: 0x59,
    name: '被击时霸体',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 20, unit: '%' },
      { label: '霸体时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `被击时以 ${p1}% 几率进入超级装甲(霸体)状态 ${p2} 秒`
  },
  0x5a: {
    code: 0x5a,
    name: '被击时无敌',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 15, unit: '%' },
      { label: '无敌时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2) => `被击时以 ${p1}% 几率进入无敌状态 ${p2} 秒`
  },
  0x5b: {
    code: 0x5b,
    name: '攻击时霸体',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 20, unit: '%' },
      { label: '霸体时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率进入超级装甲(霸体)状态 ${p2} 秒`
  },
  0x5c: {
    code: 0x5c,
    name: '攻击时隐身伪装',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '伪装时间', min: 1, max: 60, defaultVal: 5, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率进入伪装(隐身)状态 ${p2} 秒`
  },
  0x5d: {
    code: 0x5d,
    name: '攻击时无敌',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '无敌时间', min: 1, max: 60, defaultVal: 3, unit: '秒' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率进入无敌状态 ${p2} 秒`
  },

  // --- 0x5E ~ 0x66 伤害吸收、白字附加、属强 ---
  0x5e: {
    code: 0x5e,
    name: '伤害吸收',
    category: 'stat',
    params: [{ label: '吸收百分比', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `伤害吸收 +${p1}%`
  },
  0x5f: {
    code: 0x5f,
    name: '白字附加伤害',
    category: 'special',
    params: [{ label: '附加伤害', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `攻击时附加伤害 +${p1}%`
  },
  0x60: {
    code: 0x60,
    name: '最终伤害增加',
    category: 'special',
    params: [{ label: '最终伤害', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `最终伤害增加 +${p1}%`
  },
  0x61: {
    code: 0x61,
    name: '火属性强化',
    category: 'element',
    params: [{ label: '火属性强化', min: 1, max: 999, defaultVal: 15, unit: '点' }],
    format: (p1) => `火属性强化 +${p1}`
  },
  0x62: {
    code: 0x62,
    name: '冰属性强化',
    category: 'element',
    params: [{ label: '冰属性强化', min: 1, max: 999, defaultVal: 15, unit: '点' }],
    format: (p1) => `冰属性强化 +${p1}`
  },
  0x63: {
    code: 0x63,
    name: '光属性强化',
    category: 'element',
    params: [{ label: '光属性强化', min: 1, max: 999, defaultVal: 15, unit: '点' }],
    format: (p1) => `光属性强化 +${p1}`
  },
  0x64: {
    code: 0x64,
    name: '暗属性强化',
    category: 'element',
    params: [{ label: '暗属性强化', min: 1, max: 999, defaultVal: 15, unit: '点' }],
    format: (p1) => `暗属性强化 +${p1}`
  },
  0x65: {
    code: 0x65,
    name: '全属性抗性',
    category: 'element',
    params: [{ label: '全属性抗性', min: 1, max: 999, defaultVal: 10, unit: '点' }],
    format: (p1) => `全属性抗性 +${p1}`
  },
  0x66: {
    code: 0x66,
    name: '全属性强化',
    category: 'element',
    params: [{ label: '全属性强化', min: 1, max: 999, defaultVal: 15, unit: '点' }],
    format: (p1) => `全属性强化 +${p1}`
  },

  // --- 0x67 ~ 0x6C 种族特攻伤害 ---
  0x67: { code: 0x67, name: '对人型敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对人型敌人伤害 +${p1}%` },
  0x68: { code: 0x68, name: '对不死族敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对不死族敌人伤害 +${p1}%` },
  0x69: { code: 0x69, name: '对恶魔族敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对恶魔族敌人伤害 +${p1}%` },
  0x6a: { code: 0x6a, name: '对野兽族敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对野兽族敌人伤害 +${p1}%` },
  0x6b: { code: 0x6b, name: '对机械族敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对机械族敌人伤害 +${p1}%` },
  0x6c: { code: 0x6c, name: '对精灵族敌人伤害增加', category: 'special', params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }], format: (p1) => `对精灵族敌人伤害 +${p1}%` },

  // --- 0x6D ~ 0x76 暴击伤害、背击破招 ---
  0x6d: {
    code: 0x6d,
    name: '暴击伤害增加',
    category: 'special',
    params: [{ label: '暴击伤害', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `暴击伤害增加 +${p1}%`
  },
  0x6e: {
    code: 0x6e,
    name: '背击物理暴击率',
    category: 'special',
    params: [{ label: '暴击率', min: 1, max: 100, defaultVal: 15, unit: '%' }],
    format: (p1) => `背击物理暴击率 +${p1}%`
  },
  0x6f: {
    code: 0x6f,
    name: '背击魔法暴击率',
    category: 'special',
    params: [{ label: '暴击率', min: 1, max: 100, defaultVal: 15, unit: '%' }],
    format: (p1) => `背击魔法暴击率 +${p1}%`
  },
  0x70: {
    code: 0x70,
    name: '背击物理攻击力',
    category: 'special',
    params: [{ label: '物理攻击力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `背击物理攻击力 +${p1}`
  },
  0x71: {
    code: 0x71,
    name: '背击魔法攻击力',
    category: 'special',
    params: [{ label: '魔法攻击力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `背击魔法攻击力 +${p1}`
  },
  0x72: {
    code: 0x72,
    name: '破招物理攻击力',
    category: 'special',
    params: [{ label: '破招物攻增加', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `破招物理攻击力 +${p1}%`
  },
  0x73: {
    code: 0x73,
    name: '破招魔法攻击力',
    category: 'special',
    params: [{ label: '破招魔攻增加', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `破招魔法攻击力 +${p1}%`
  },
  0x74: {
    code: 0x74,
    name: '处于异常状态时攻击力增加',
    category: 'special',
    params: [{ label: '攻击力增加', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `处于异常状态时攻击力增加 +${p1}%`
  },
  0x75: {
    code: 0x75,
    name: '近战攻击伤害增加',
    category: 'special',
    params: [{ label: '近战伤害增加', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `近战攻击伤害增加 +${p1}%`
  },
  0x76: {
    code: 0x76,
    name: '远程攻击伤害增加',
    category: 'special',
    params: [{ label: '远程伤害增加', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `远程攻击伤害增加 +${p1}%`
  },
  0x77: {
    code: 0x77,
    name: '固定伤害增加',
    category: 'special',
    params: [{ label: '固定伤害', min: 1, max: 9999, defaultVal: 100, unit: '点' }],
    format: (p1) => `固定伤害增加 +${p1}`
  },

  // --- 0x78 ~ 0x7C 武器属性赋予 (重点特色) ---
  0x78: {
    code: 0x78,
    name: '赋予武器属性：无属性',
    category: 'element',
    params: [],
    format: () => '赋予武器属性：无属性'
  },
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

  // --- 0x7D ~ 0x81 附加伤害与暴伤 ---
  0x7d: {
    code: 0x7d,
    name: '攻击时概率触发额外伤害',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 10, unit: '%' },
      { label: '额外伤害', min: 1, max: 65535, defaultVal: 500, unit: '点' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率附加 ${p2} 点额外伤害`
  },
  0x7e: {
    code: 0x7e,
    name: '攻击时恢复 HP百分比',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复百分比', min: 1, max: 100, defaultVal: 5, unit: '%' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率恢复 HP ${p2}%`
  },
  0x7f: {
    code: 0x7f,
    name: '攻击时恢复 MP百分比',
    category: 'trigger',
    params: [
      { label: '触发几率', min: 1, max: 100, defaultVal: 5, unit: '%' },
      { label: '恢复百分比', min: 1, max: 100, defaultVal: 5, unit: '%' }
    ],
    format: (p1, p2) => `攻击时以 ${p1}% 几率恢复 MP ${p2}%`
  },
  0x80: {
    code: 0x80,
    name: '物理暴击伤害增加',
    category: 'special',
    params: [{ label: '物暴伤害', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `物理暴击伤害增加 +${p1}%`
  },
  0x81: {
    code: 0x81,
    name: '魔法暴击伤害增加',
    category: 'special',
    params: [{ label: '魔暴伤害', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `魔法暴击伤害增加 +${p1}%`
  },

  // --- 0x82 ~ 0x86 削减防御、冷却缩减 ---
  0x82: {
    code: 0x82,
    name: '命中时削减物理防御力(固定值)',
    category: 'special',
    params: [{ label: '削减防御', min: 1, max: 9999, defaultVal: 300, unit: '点' }],
    format: (p1) => `命中时减少敌人物理防御力 ${p1} 点`
  },
  0x83: {
    code: 0x83,
    name: '命中时削减物理防御力(百分比)',
    category: 'special',
    params: [{ label: '削减百分比', min: 1, max: 100, defaultVal: 10, unit: '%' }],
    format: (p1) => `命中时减少敌人物理防御力 ${p1}%`
  },
  0x84: {
    code: 0x84,
    name: '命中时减少敌人全属性抗性',
    category: 'element',
    params: [{ label: '减少属抗', min: 1, max: 100, defaultVal: 15, unit: '点' }],
    format: (p1) => `命中时减少敌人全属性抗性 ${p1} 点`
  },
  0x85: {
    code: 0x85,
    name: '技能冷却时间减少',
    category: 'special',
    params: [{ label: '减少冷却', min: 1, max: 80, defaultVal: 10, unit: '%' }],
    format: (p1) => `技能冷却时间减少 ${p1}%`
  },
  0x86: {
    code: 0x86,
    name: '技能 MP 消耗量减少',
    category: 'special',
    params: [{ label: '减少MP消耗', min: 1, max: 90, defaultVal: 15, unit: '%' }],
    format: (p1) => `技能 MP 消耗量减少 ${p1}%`
  },

  // --- 0x87 ~ 0x89 掉落、经验、金币增益 ---
  0x87: {
    code: 0x87,
    name: '地下城物品掉落率增加',
    category: 'special',
    params: [{ label: '掉落率增加', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `地下城物品掉落率增加 +${p1}%`
  },
  0x88: {
    code: 0x88,
    name: '地下城通关经验值增加',
    category: 'special',
    params: [{ label: '经验值增加', min: 1, max: 999, defaultVal: 30, unit: '%' }],
    format: (p1) => `通关地下城经验值增加 +${p1}%`
  },
  0x89: {
    code: 0x89,
    name: '地下城金币掉落量增加',
    category: 'special',
    params: [{ label: '金币掉落增加', min: 1, max: 999, defaultVal: 30, unit: '%' }],
    format: (p1) => `地下城金币掉落量增加 +${p1}%`
  },

  // --- 0x8A ~ 0x93 战斗辅助与觉醒 ---
  0x8a: { code: 0x8a, name: '硬直时间增加', category: 'stat', params: [{ label: '硬直数值', min: 1, max: 999, defaultVal: 100, unit: '点' }], format: (p1) => `硬直时间增加 +${p1}` },
  0x8b: { code: 0x8b, name: '击飞力增加', category: 'stat', params: [{ label: '击飞力', min: 1, max: 100, defaultVal: 20, unit: '%' }], format: (p1) => `击飞力增加 +${p1}%` },
  0x8c: { code: 0x8c, name: '攻击范围增加', category: 'special', params: [{ label: '范围增加', min: 1, max: 100, defaultVal: 15, unit: '%' }], format: (p1) => `攻击范围增加 +${p1}%` },
  0x8d: { code: 0x8d, name: '跳跃力增加', category: 'stat', params: [{ label: '跳跃力', min: 1, max: 500, defaultVal: 30, unit: '点' }], format: (p1) => `跳跃力增加 +${p1}` },
  0x8e: { code: 0x8e, name: '移动攻击速度增加', category: 'stat', params: [{ label: '移攻速度', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `移动攻击速度增加 +${p1}%` },
  0x8f: { code: 0x8f, name: '暴击抗性增加', category: 'stat', params: [{ label: '暴击抗性', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `暴击抗性增加 +${p1}%` },
  0x90: { code: 0x90, name: '攻击时反弹伤害', category: 'special', params: [{ label: '反弹比例', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `攻击时反弹伤害 ${p1}%` },
  0x91: { code: 0x91, name: '被击时反弹伤害', category: 'special', params: [{ label: '反弹比例', min: 1, max: 100, defaultVal: 20, unit: '%' }], format: (p1) => `被击时反弹伤害 ${p1}%` },
  0x92: { code: 0x92, name: '致命一击几率增加', category: 'special', params: [{ label: '致命几率', min: 1, max: 100, defaultVal: 10, unit: '%' }], format: (p1) => `致命一击几率增加 +${p1}%` },
  0x93: { code: 0x93, name: '觉醒技能伤害增加', category: 'special', params: [{ label: '觉醒增伤', min: 1, max: 999, defaultVal: 30, unit: '%' }], format: (p1) => `觉醒技能伤害增加 +${p1}%` },

  // --- 0x94 ~ 0x97 四大转职职业专属增益 ---
  0x94: { code: 0x94, name: '狂战士狂暴持续时间增加', category: 'special', params: [{ label: '持续时间', min: 1, max: 60, defaultVal: 10, unit: '秒' }], format: (p1) => `[狂战士] 嗜血/暴走持续时间增加 +${p1} 秒` },
  0x95: { code: 0x95, name: '剑魂里鬼剑术伤害增加', category: 'special', params: [{ label: '里鬼增伤', min: 1, max: 999, defaultVal: 25, unit: '%' }], format: (p1) => `[剑魂] 里·鬼剑术伤害增加 +${p1}%` },
  0x96: { code: 0x96, name: '阿修罗杀意波动伤害增加', category: 'special', params: [{ label: '杀意增伤', min: 1, max: 999, defaultVal: 25, unit: '%' }], format: (p1) => `[阿修罗] 杀意波动伤害增加 +${p1}%` },
  0x97: { code: 0x97, name: '鬼泣阵法技能效果提升', category: 'special', params: [{ label: '阵法提升', min: 1, max: 999, defaultVal: 25, unit: '%' }], format: (p1) => `[鬼泣] 阵法光环增益效果提升 +${p1}%` },

  // --- 0x98 ~ 0x9F 百分比攻强、独立与特色功能 ---
  0x98: {
    code: 0x98,
    name: '物理攻击力增加(百分比)',
    category: 'special',
    params: [{ label: '物攻百分比', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `物理攻击力增加 +${p1}%`
  },
  0x99: {
    code: 0x99,
    name: '魔法攻击力增加(百分比)',
    category: 'special',
    params: [{ label: '魔攻百分比', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `魔法攻击力增加 +${p1}%`
  },
  0x9a: {
    code: 0x9a,
    name: '独立攻击力增加',
    category: 'stat',
    params: [{ label: '独立攻击力', min: 1, max: 9999, defaultVal: 50, unit: '点' }],
    format: (p1) => `独立攻击力增加 +${p1}`
  },
  0x9b: {
    code: 0x9b,
    name: '独立攻击力增加(百分比)',
    category: 'special',
    params: [{ label: '独立百分比', min: 1, max: 999, defaultVal: 15, unit: '%' }],
    format: (p1) => `独立攻击力增加 +${p1}%`
  },
  0x9c: {
    code: 0x9c,
    name: '最终伤害增加(加成)',
    category: 'special',
    params: [{ label: '增伤比例', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `最终伤害增加 +${p1}%`
  },
  0x9d: {
    code: 0x9d,
    name: '技能攻击力增加',
    category: 'special',
    params: [{ label: '技攻增加', min: 1, max: 999, defaultVal: 20, unit: '%' }],
    format: (p1) => `技能攻击力增加 +${p1}%`
  },
  0x9e: {
    code: 0x9e,
    name: '自动拾取金币与掉落物',
    category: 'special',
    params: [],
    format: () => '自动吸附与拾取附近的金币及掉落物'
  },
  0x9f: {
    code: 0x9f,
    name: '地下城结算金币奖励增加',
    category: 'special',
    params: [{ label: '金币增加', min: 1, max: 999, defaultVal: 50, unit: '%' }],
    format: (p1) => `结算通关金币奖励增加 +${p1}%`
  }
}

// 常见强力附魔预设（Presets），玩家一键应用
export const ENCHANT_PRESETS: EnchantPreset[] = [
  {
    id: 'fire_attr',
    name: '🔥 赋予火属性攻击',
    desc: '武器赋予火属性攻击效果',
    code: 0x79,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '🔥'
  },
  {
    id: 'ice_attr',
    name: '❄️ 赋予冰属性攻击',
    desc: '武器赋予冰属性攻击效果',
    code: 0x7a,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '❄️'
  },
  {
    id: 'light_attr',
    name: '⚡ 赋予光属性攻击',
    desc: '武器赋予光属性攻击效果',
    code: 0x7b,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '⚡'
  },
  {
    id: 'dark_attr',
    name: '🌑 赋予暗属性攻击',
    desc: '武器赋予暗属性攻击效果',
    code: 0x7c,
    param1: 0,
    param2: 0,
    param3: 0,
    icon: '🌑'
  },
  {
    id: 'drain_hp_boss',
    name: '🩸 神器削血 (5%削减20%HP)',
    desc: '攻击时5%几率削减敌人当前HP 20%（高血量领主克星）',
    code: 0x37,
    param1: 5,
    param2: 20,
    param3: 0,
    icon: '🩸'
  },
  {
    id: 'crit_dmg_50',
    name: '💥 暴击伤害 +50%',
    desc: '暴击时造成的最终伤害提升 50%',
    code: 0x6d,
    param1: 50,
    param2: 0,
    param3: 0,
    icon: '💥'
  },
  {
    id: 'bonus_dmg_50',
    name: '⚔️ 白字附加伤害 +50%',
    desc: '攻击时额外附加 50% 伤害',
    code: 0x5f,
    param1: 50,
    param2: 0,
    param3: 0,
    icon: '⚔️'
  },
  {
    id: 'skill_dmg_30',
    name: '🎯 技能攻击力 +30%',
    desc: '所有技能直接增伤 30%',
    code: 0x9d,
    param1: 30,
    param2: 0,
    param3: 0,
    icon: '🎯'
  },
  {
    id: 'freeze_cc',
    name: '🧊 永冻控制 (50%冰冻5秒)',
    desc: '攻击时以 50% 几率冰冻敌人 5 秒',
    code: 0x20,
    param1: 50,
    param2: 60,
    param3: 5,
    icon: '🧊'
  },
  {
    id: 'shock_atk',
    name: '⚡ 感电打击 (50%感电5秒)',
    desc: '攻击时以 50% 几率感电敌人 5 秒',
    code: 0x1d,
    param1: 50,
    param2: 60,
    param3: 5,
    icon: '⚡'
  },
  {
    id: 'phy_crit_max',
    name: '🎯 满暴击 (物理暴击率+99%)',
    desc: '物理暴击率提升 99%，招招必暴',
    code: 0x0f,
    param1: 99,
    param2: 0,
    param3: 0,
    icon: '🎯'
  },
  {
    id: 'mag_crit_max',
    name: '🔮 满暴击 (魔法暴击率+99%)',
    desc: '魔法暴击率提升 99%，招招必暴',
    code: 0x10,
    param1: 99,
    param2: 0,
    param3: 0,
    icon: '🔮'
  },
  {
    id: 'all_ele_50',
    name: '🌈 全属性强化 +50',
    desc: '火冰光暗全属性强化 +50 点',
    code: 0x66,
    param1: 50,
    param2: 0,
    param3: 0,
    icon: '🌈'
  },
  {
    id: 'super_armor',
    name: '🛡️ 攻击霸体 (30%触发10秒)',
    desc: '攻击时以 30% 几率进入霸体状态 10 秒',
    code: 0x5b,
    param1: 30,
    param2: 10,
    param3: 0,
    icon: '🛡️'
  },
  {
    id: 'invincible',
    name: '👑 被击无敌 (20%触发5秒)',
    desc: '受到攻击时以 20% 几率进入无敌状态 5 秒',
    code: 0x5a,
    param1: 20,
    param2: 5,
    param3: 0,
    icon: '👑'
  },
  {
    id: 'cd_reduce_30',
    name: '⏱️ 冷却时间减少 30%',
    desc: '全技能冷却时间缩短 30%',
    code: 0x85,
    param1: 30,
    param2: 0,
    param3: 0,
    icon: '⏱️'
  },
  {
    id: 'auto_loot',
    name: '🧲 自动吸附拾取掉落物',
    desc: '自动拾取附近的金币与物品',
    code: 0x9e,
    param1: 1,
    param2: 0,
    param3: 0,
    icon: '🧲'
  }
]

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
