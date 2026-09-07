// 官方 0.etc 完整提取全量装备固有属性数据库
// 包含 11 类装备的基础物理/魔法攻防、四维、耐久度、固有属性攻击与特殊能力 (如削血、冰冻、技能加成等)

export interface EquipInnateOption {
  code: number
  p1: number
  p2: number
  p3: number
  desc?: string
}

export interface EquipInnateInfo {
  base1: number        // 基础物理攻击/防御
  base2: number        // 基础魔法攻击/防御
  stat4: number        // 基础四维属性
  durability: number   // 耐久度
  element: 'fire' | 'ice' | 'light' | 'dark' | 'none'
  elementName: string
  options: EquipInnateOption[]
  optionDescs: string[]
  skillDescs: string[]
  specialDesc?: string | null
}

export const EQUIP_INNATE_DATABASE: Record<string, EquipInnateInfo> = {
  "0_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_18": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      }
    ],
    "optionDescs": [
      "智力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      }
    ],
    "optionDescs": [
      "智力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      }
    ],
    "optionDescs": [
      "智力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      }
    ],
    "optionDescs": [
      "智力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      }
    ],
    "optionDescs": [
      "智力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_23": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      }
    ],
    "optionDescs": [
      "智力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +9"
      }
    ],
    "optionDescs": [
      "智力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +11"
      }
    ],
    "optionDescs": [
      "智力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_27": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      }
    ],
    "optionDescs": [
      "智力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +13"
      }
    ],
    "optionDescs": [
      "智力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      }
    ],
    "optionDescs": [
      "智力 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [连突刺] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +7",
      "🎯 [连突刺] 等级 +1"
    ],
    "skillDescs": [
      "[连突刺] Lv+1"
    ],
    "specialDesc": null
  },
  "0_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +7",
      "🎯 [上挑] 等级 +1"
    ],
    "skillDescs": [
      "[上挑] Lv+1"
    ],
    "specialDesc": null
  },
  "0_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "🎯 [裂波斩] 等级 +1"
    ],
    "skillDescs": [
      "[裂波斩] Lv+1"
    ],
    "specialDesc": null
  },
  "0_33": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰刃·波动剑] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "🎯 [冰刃·波动剑] 等级 +1"
    ],
    "skillDescs": [
      "[冰刃·波动剑] Lv+1"
    ],
    "specialDesc": null
  },
  "0_34": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +9"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 8,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv8 出血"
      }
    ],
    "optionDescs": [
      "智力 +9",
      "攻击时 2% 几率造成 Lv8 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 2% 几率使敌人陷入出血状态"
  },
  "0_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "MP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +30"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "魔法攻击力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "词条[0x24]: +2"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "词条[0x24]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_39": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_40": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 42,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +15"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "词条[0x2A]: +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv21 中毒"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 2% 几率造成 Lv21 中毒"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [邪光斩] 等级 +2"
    ],
    "skillDescs": [
      "[邪光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "0_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 38,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +15"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "词条[0x26]: +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv2 感电"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "攻击时 2% 几率造成 Lv2 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "0_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "攻击时 2% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 2% 几率使敌人陷入眩晕状态"
  },
  "0_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "词条[0x39]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 4,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [爆炎·波动剑] 等级 +1"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+1"
    ],
    "specialDesc": null
  },
  "0_49": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "攻击时 3% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "0_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +200"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "物理防御力 +200"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [邪光波动阵] 等级 +1"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+1"
    ],
    "specialDesc": null
  },
  "0_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [不动明王阵] 等级 +2"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+2"
    ],
    "specialDesc": null
  },
  "0_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "词条[0x22]: +3"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "词条[0x22]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_54": {
    "base1": 1280,
    "base2": 1495,
    "stat4": 0,
    "durability": 0,
    "element": "dark",
    "elementName": "暗属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +9"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +2"
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "智力 +9",
      "🎯 [地裂·波动剑] 等级 +2",
      "精神 +12"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "0_55": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +9"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +9",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "0_56": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 25,
        "p1": 10,
        "p2": 7,
        "p3": 0,
        "desc": "攻击时 10% 几率造成 Lv7 出血"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "攻击时 10% 几率造成 Lv7 出血",
      "🎯 [裂波斩] 等级 +2"
    ],
    "skillDescs": [
      "[裂波斩] Lv+2"
    ],
    "specialDesc": "🗡️ 致命出血：攻击时以 10% 几率使敌人陷入出血状态"
  },
  "0_57": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [短剑精通] 等级 +2"
      },
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "🎯 [短剑精通] 等级 +2",
      "精神 +16"
    ],
    "skillDescs": [
      "[短剑精通] Lv+2"
    ],
    "specialDesc": null
  },
  "0_58": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +11"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv1 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +11",
      "HP MAX +150",
      "攻击时 3% 几率造成 Lv1 眩晕"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 3% 几率使敌人陷入眩晕状态"
  },
  "0_59": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +6%"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "暴击率 +6%",
      "🎯 [鬼印珠] 等级 +2"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+2"
    ],
    "specialDesc": null
  },
  "0_60": {
    "base1": 7681,
    "base2": 8970,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      },
      {
        "code": 11,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +40"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "MP恢复 +5",
      "魔法攻击力 +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 11,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +70"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv1 感电"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "魔法攻击力 +70",
      "攻击时 2% 几率造成 Lv1 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "0_62": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "词条[0x24]: +2"
      },
      {
        "code": 8,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +9"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "词条[0x24]: +2",
      "MP恢复 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_63": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +6%"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 19,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv19 出血"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "暴击率 +6%",
      "攻击时 2% 几率造成 Lv19 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 2% 几率使敌人陷入出血状态"
  },
  "0_64": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 5,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv5 出血"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +100"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 5% 几率造成 Lv5 出血",
      "魔法攻击力 +100"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 5% 几率使敌人陷入出血状态"
  },
  "0_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +8%"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "暴击率 +8%",
      "攻击时 3% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 3% 几率使敌人陷入眩晕状态"
  },
  "0_66": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 22,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv22 灼伤"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "移动速度 +3",
      "攻击时 2% 几率造成 Lv22 灼伤"
    ],
    "skillDescs": [],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 2% 几率使敌人陷入灼伤状态"
  },
  "0_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +2"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [短剑精通] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [爆炎·波动剑] 等级 +2",
      "🎯 [短剑精通] 等级 +2"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+2",
      "[短剑精通] Lv+2"
    ],
    "specialDesc": null
  },
  "0_68": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +6"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +8"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "移动速度 +6",
      "HP、MP恢复 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "词条[0x24]: +2"
      },
      {
        "code": 10,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +35"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "词条[0x24]: +2",
      "物理攻击力 +35"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_70": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 3% 几率削减敌人当前 HP 15%"
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +5%"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "攻击时 3% 几率削减敌人当前 HP 15%",
      "回避率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 3% 几率削减敌人当前 HP 15%"
  },
  "0_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 40,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "词条[0x39]: +2",
      "智力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_72": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +2"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "🎯 [邪光波动阵] 等级 +2",
      "🎯 [不动明王阵] 等级 +1"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+2",
      "[不动明王阵] Lv+1"
    ],
    "specialDesc": null
  },
  "0_73": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 200,
        "p3": 100,
        "desc": "词条[0x4A]: +3"
      },
      {
        "code": 75,
        "p1": 3,
        "p2": 200,
        "p3": 100,
        "desc": "词条[0x4B]: +3"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "词条[0x4A]: +3",
      "词条[0x4B]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_74": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +100"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "攻击时 3% 几率造成 Lv2 冰冻",
      "体力 +100"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "0_75": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +100"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "命中率 +20%",
      "追加伤害 +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +3"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +6"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "🎯 [裂波斩] 等级 +3",
      "移动速度 +6"
    ],
    "skillDescs": [
      "[裂波斩] Lv+3"
    ],
    "specialDesc": null
  },
  "0_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 冰冻"
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +210"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "攻击时 5% 几率造成 Lv2 冰冻",
      "MP MAX +210"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 5% 几率使敌人陷入冰冻状态"
  },
  "0_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 10,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +12"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +6"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "物理攻击力 +12",
      "移动速度 +6",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +3"
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +20"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "🎯 [地裂·波动剑] 等级 +3",
      "追加伤害 +20"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+3"
    ],
    "specialDesc": null
  },
  "0_80": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 冰冻"
      },
      {
        "code": 11,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +35"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 5% 几率造成 Lv2 冰冻",
      "魔法攻击力 +35"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 5% 几率使敌人陷入冰冻状态"
  },
  "0_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 3,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 感电"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "攻击时 5% 几率造成 Lv2 感电",
      "HP MAX +200"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 5% 几率使敌人陷入感电状态"
  },
  "0_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +8%"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +70"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "暴击率 +8%",
      "物理攻击力 +70"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [波动刻印] 等级 +3"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +250"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "🎯 [波动刻印] 等级 +3",
      "MP MAX +250"
    ],
    "skillDescs": [
      "[波动刻印] Lv+3"
    ],
    "specialDesc": null
  },
  "0_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +3"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "🎯 [邪光波动阵] 等级 +3",
      "精神 +30"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+3"
    ],
    "specialDesc": null
  },
  "0_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +26"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [暗天波动眼] 等级 +1"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "智力 +26",
      "🎯 [暗天波动眼] 等级 +1",
      "硬直恢复 +60"
    ],
    "skillDescs": [
      "[暗天波动眼] Lv+1"
    ],
    "specialDesc": null
  },
  "0_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 5,
        "p3": 0,
        "desc": "🎯 [刀魂之卡赞] 等级 +5"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "🎯 [刀魂之卡赞] 等级 +5",
      "暴击率 +5%"
    ],
    "skillDescs": [
      "[刀魂之卡赞] Lv+5"
    ],
    "specialDesc": null
  },
  "0_87": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +3"
      },
      {
        "code": 14,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +200"
      }
    ],
    "optionDescs": [
      "智力 +30",
      "🎯 [鬼印珠] 等级 +3",
      "追加伤害 +200"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+3"
    ],
    "specialDesc": null
  },
  "0_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 1,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +3"
      },
      {
        "code": 56,
        "p1": 60,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 60% 几率恢复 HP 30"
      }
    ],
    "optionDescs": [
      "智力 +30",
      "🎯 [爆炎·波动剑] 等级 +3",
      "攻击时 60% 几率恢复 HP 30"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+3"
    ],
    "specialDesc": "💚 灵魂汲取：攻击时以 60% 几率恢复 HP"
  },
  "0_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +3"
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0,
        "desc": "词条[0x39]: +60"
      }
    ],
    "optionDescs": [
      "智力 +30",
      "🎯 [邪光波动阵] 等级 +3",
      "词条[0x39]: +60"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+3"
    ],
    "specialDesc": null
  },
  "0_90": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +3"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +10"
      }
    ],
    "optionDescs": [
      "智力 +30",
      "🎯 [不动明王阵] 等级 +3",
      "HP、MP恢复 +10"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+3"
    ],
    "specialDesc": null
  },
  "0_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +42"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 5,
        "p3": 0,
        "desc": "🎯 [波动刻印] 等级 +5"
      },
      {
        "code": 11,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +300"
      }
    ],
    "optionDescs": [
      "智力 +42",
      "🎯 [波动刻印] 等级 +5",
      "魔法攻击力 +300"
    ],
    "skillDescs": [
      "[波动刻印] Lv+5"
    ],
    "specialDesc": null
  },
  "0_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暗天波动眼] 等级 +2"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +30",
      "🎯 [暗天波动眼] 等级 +2",
      "攻击时 5% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [
      "[暗天波动眼] Lv+2"
    ],
    "specialDesc": "💫 眩晕打击：攻击时以 5% 几率使敌人陷入眩晕状态"
  },
  "0_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +33"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +100"
      }
    ],
    "optionDescs": [
      "智力 +33",
      "攻击时 3% 几率造成 Lv2 冰冻",
      "体力 +100"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "0_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +33"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +300"
      }
    ],
    "optionDescs": [
      "智力 +33",
      "命中率 +20%",
      "追加伤害 +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "0_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +33"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +3"
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +5"
      }
    ],
    "optionDescs": [
      "智力 +33",
      "🎯 [裂波斩] 等级 +3",
      "移动速度 +5"
    ],
    "skillDescs": [
      "[裂波斩] Lv+3"
    ],
    "specialDesc": null
  },
  "0_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +33"
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv29 出血"
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +210"
      }
    ],
    "optionDescs": [
      "智力 +33",
      "攻击时 5% 几率造成 Lv29 出血",
      "MP MAX +210"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 5% 几率使敌人陷入出血状态"
  },
  "0_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 51,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +51"
      },
      {
        "code": 24,
        "p1": 19,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [修罗邪光斩] 等级 +3"
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0,
        "desc": "词条[0x39]: +60"
      }
    ],
    "optionDescs": [
      "智力 +51",
      "🎯 [修罗邪光斩] 等级 +3",
      "词条[0x39]: +60"
    ],
    "skillDescs": [
      "[修罗邪光斩] Lv+3"
    ],
    "specialDesc": null
  },
  "0_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +60"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +3"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +10"
      }
    ],
    "optionDescs": [
      "智力 +60",
      "🎯 [鬼印珠] 等级 +3",
      "HP、MP恢复 +10"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+3"
    ],
    "specialDesc": null
  },
  "0_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 66,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +66"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 5,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +5"
      },
      {
        "code": 11,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +400"
      }
    ],
    "optionDescs": [
      "智力 +66",
      "🎯 [邪光波动阵] 等级 +5",
      "魔法攻击力 +400"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+5"
    ],
    "specialDesc": null
  },
  "0_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 75,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +75"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暗天波动眼] 等级 +2"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +75",
      "🎯 [暗天波动眼] 等级 +2",
      "攻击时 5% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [
      "[暗天波动眼] Lv+2"
    ],
    "specialDesc": "💫 眩晕打击：攻击时以 5% 几率使敌人陷入眩晕状态"
  },
  "0_101": {
    "base1": 1281,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +4"
      }
    ],
    "optionDescs": [
      "智力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +4"
      }
    ],
    "optionDescs": [
      "智力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +4"
      }
    ],
    "optionDescs": [
      "智力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +4"
      }
    ],
    "optionDescs": [
      "智力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_18": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      }
    ],
    "optionDescs": [
      "智力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      }
    ],
    "optionDescs": [
      "智力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      }
    ],
    "optionDescs": [
      "智力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_23": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      }
    ],
    "optionDescs": [
      "智力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      }
    ],
    "optionDescs": [
      "智力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      }
    ],
    "optionDescs": [
      "智力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_27": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +11"
      }
    ],
    "optionDescs": [
      "智力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      }
    ],
    "optionDescs": [
      "智力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +5",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +5",
      "🎯 [裂波斩] 等级 +1"
    ],
    "skillDescs": [
      "[裂波斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +6",
      "🎯 [月光斩] 等级 +1"
    ],
    "skillDescs": [
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_33": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      },
      {
        "code": 11,
        "p1": 5,
        "p2": 20,
        "p3": 0,
        "desc": "魔法攻击力 +5"
      }
    ],
    "optionDescs": [
      "智力 +6",
      "魔法攻击力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_34": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      }
    ],
    "optionDescs": [
      "智力 +7",
      "移动速度 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "🎯 [冰霜之萨亚] 等级 +1"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+1"
    ],
    "specialDesc": null
  },
  "1_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "词条[0x24]: +2"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "词条[0x24]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +20"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "追加伤害 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "🎯 [月光斩] 等级 +1"
    ],
    "skillDescs": [
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_39": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 17,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv17 出血"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "攻击时 3% 几率造成 Lv17 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "1_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "🎯 [侵蚀之普戾蒙] 等级 +1"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+1"
    ],
    "specialDesc": null
  },
  "1_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "🎯 [死亡墓碑] 等级 +1"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+1"
    ],
    "specialDesc": null
  },
  "1_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 21,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv21 中毒"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "攻击时 3% 几率造成 Lv21 中毒"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv1 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 2% 几率造成 Lv1 眩晕"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 2% 几率使敌人陷入眩晕状态"
  },
  "1_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "🎯 [侵蚀之普戾蒙] 等级 +2"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+2"
    ],
    "specialDesc": null
  },
  "1_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "desc": "词条[0x22]: +3"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "词条[0x22]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [鬼斩] 等级 +2"
    ],
    "skillDescs": [
      "[鬼斩] Lv+2"
    ],
    "specialDesc": null
  },
  "1_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 32,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "攻击时 2% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 2% 几率使敌人陷入冰冻状态"
  },
  "1_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [死亡墓碑] 等级 +1"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+1"
    ],
    "specialDesc": null
  },
  "1_49": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 28,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv28 灼伤"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "攻击时 2% 几率造成 Lv28 灼伤"
    ],
    "skillDescs": [],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 2% 几率使敌人陷入灼伤状态"
  },
  "1_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 3,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv3 感电"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "攻击时 2% 几率造成 Lv3 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "1_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 4,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冥炎之卡洛] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [冥炎之卡洛] 等级 +1"
    ],
    "skillDescs": [
      "[冥炎之卡洛] Lv+1"
    ],
    "specialDesc": null
  },
  "1_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +8%"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "暴击率 +8%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 13,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "魔法防御力 +44"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "魔法防御力 +44"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_54": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +2"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [刀魂之卡赞] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +7",
      "🎯 [上挑] 等级 +2",
      "🎯 [刀魂之卡赞] 等级 +2"
    ],
    "skillDescs": [
      "[上挑] Lv+2",
      "[刀魂之卡赞] Lv+2"
    ],
    "specialDesc": null
  },
  "1_55": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +7"
      },
      {
        "code": 11,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +20"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "智力 +7",
      "魔法攻击力 +20",
      "暴击率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_56": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +2"
      },
      {
        "code": 11,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +25"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "🎯 [月光斩] 等级 +2",
      "魔法攻击力 +25"
    ],
    "skillDescs": [
      "[月光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "1_57": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +8"
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 20,
        "p3": 0,
        "desc": "攻击时 2% 几率削减敌人当前 HP 20%"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      }
    ],
    "optionDescs": [
      "智力 +8",
      "攻击时 2% 几率削减敌人当前 HP 20%",
      "精神 +30"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 2% 几率削减敌人当前 HP 20%"
  },
  "1_58": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +9"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +9",
      "移动速度 +3",
      "🎯 [月光斩] 等级 +2"
    ],
    "skillDescs": [
      "[月光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "1_59": {
    "base1": 7681,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [刀魂之卡赞] 等级 +3"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv15 出血"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "🎯 [刀魂之卡赞] 等级 +3",
      "攻击时 3% 几率造成 Lv15 出血"
    ],
    "skillDescs": [
      "[刀魂之卡赞] Lv+3"
    ],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "1_60": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 1,
        "p3": 0,
        "desc": "词条[0x24]: +4"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "词条[0x24]: +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 14,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +40"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +50"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "追加伤害 +40",
      "精神 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_62": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +2"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [噬灵鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "🎯 [冰霜之萨亚] 等级 +2",
      "🎯 [噬灵鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+2",
      "[噬灵鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_63": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +2"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "🎯 [鬼影步] 等级 +2",
      "攻击时 2% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [
      "[鬼影步] Lv+2"
    ],
    "specialDesc": "💫 眩晕打击：攻击时以 2% 几率使敌人陷入眩晕状态"
  },
  "1_64": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +2"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "🎯 [死亡墓碑] 等级 +2",
      "🎯 [月光斩] 等级 +1"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+2",
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv1 眩晕"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +100"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 5% 几率造成 Lv1 眩晕",
      "魔法攻击力 +100"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 5% 几率使敌人陷入眩晕状态"
  },
  "1_66": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +7%"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +10"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "暴击率 +7%",
      "HP、MP恢复 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +2"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +200"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [鬼影闪] 等级 +2",
      "MP MAX +200"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+2"
    ],
    "specialDesc": null
  },
  "1_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冥炎之卡洛] 等级 +1"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +150"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [冥炎之卡洛] 等级 +1",
      "魔法攻击力 +150"
    ],
    "skillDescs": [
      "[冥炎之卡洛] Lv+1"
    ],
    "specialDesc": null
  },
  "1_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "desc": "词条[0x60]: +20"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "暴击率 +10%",
      "词条[0x60]: +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [第七鬼神：邪神之怖拉修] 等级 +1"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [第七鬼神：邪神之怖拉修] 等级 +1",
      "🎯 [鬼影步] 等级 +1"
    ],
    "skillDescs": [
      "[第七鬼神：邪神之怖拉修] Lv+1",
      "[鬼影步] Lv+1"
    ],
    "specialDesc": null
  },
  "1_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "攻击时 3% 几率造成 Lv2 冰冻",
      "🎯 [侵蚀之普戾蒙] 等级 +1"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+1"
    ],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "1_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +3"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [侵蚀之普戾蒙] 等级 +3",
      "🎯 [冰霜之萨亚] 等级 +1"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+3",
      "[冰霜之萨亚] Lv+1"
    ],
    "specialDesc": null
  },
  "1_73": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 75,
        "p1": 2,
        "p2": 200,
        "p3": 100,
        "desc": "词条[0x4B]: +2"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 28,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv28 出血"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "词条[0x4B]: +2",
      "攻击时 3% 几率造成 Lv28 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "1_74": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 出血"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "攻击时 3% 几率造成 Lv29 出血",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "1_75": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +3"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 灼伤"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [死亡墓碑] 等级 +3",
      "攻击时 3% 几率造成 Lv29 灼伤"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+3"
    ],
    "specialDesc": "🔥 天火流星：攻击时以 3% 几率召唤流星陨石坠落轰击"
  },
  "1_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +2"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +150"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "🎯 [鬼影闪] 等级 +2",
      "魔法攻击力 +150"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+2"
    ],
    "specialDesc": null
  },
  "1_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [噬灵鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "词条[0x39]: +2",
      "🎯 [噬灵鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[噬灵鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 7,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv7 出血"
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +30"
      }
    ],
    "optionDescs": [
      "智力 +10",
      "攻击时 4% 几率造成 Lv7 出血",
      "魔法攻击力 +30"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 4% 几率使敌人陷入出血状态"
  },
  "1_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +12"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率削减敌人当前 HP 30%"
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +40"
      }
    ],
    "optionDescs": [
      "智力 +12",
      "攻击时 3% 几率削减敌人当前 HP 30%",
      "智力 +40"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 灵魂削血：攻击时以 3% 几率削减敌人当前 HP 30%"
  },
  "1_80": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +14"
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 100,
        "p3": 10,
        "desc": "词条[0x4F]: +3"
      },
      {
        "code": 26,
        "p1": 4,
        "p2": 12,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv12 中毒"
      }
    ],
    "optionDescs": [
      "智力 +14",
      "词条[0x4F]: +3",
      "攻击时 4% 几率造成 Lv12 中毒"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 2,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 50,
        "p3": 0,
        "desc": "攻击时 3% 几率恢复 HP 50"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 40,
        "p3": 0,
        "desc": "词条[0x39]: +3"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "攻击时 3% 几率恢复 HP 50",
      "词条[0x39]: +3"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 3% 几率恢复 HP"
  },
  "1_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +18"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +3"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      }
    ],
    "optionDescs": [
      "智力 +18",
      "🎯 [冰霜之萨亚] 等级 +3",
      "暴击率 +10%"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+3"
    ],
    "specialDesc": null
  },
  "1_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      },
      {
        "code": 11,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +120"
      }
    ],
    "optionDescs": [
      "智力 +20",
      "暴击率 +10%",
      "魔法攻击力 +120"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +22"
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +40"
      },
      {
        "code": 14,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +120"
      }
    ],
    "optionDescs": [
      "智力 +22",
      "智力 +40",
      "追加伤害 +120"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "1_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +3"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [噬灵鬼斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "🎯 [鬼斩] 等级 +3",
      "🎯 [噬灵鬼斩] 等级 +2"
    ],
    "skillDescs": [
      "[鬼斩] Lv+3",
      "[噬灵鬼斩] Lv+2"
    ],
    "specialDesc": null
  },
  "1_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +26"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +3"
      },
      {
        "code": 11,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +200"
      }
    ],
    "optionDescs": [
      "智力 +26",
      "🎯 [鬼影步] 等级 +3",
      "魔法攻击力 +200"
    ],
    "skillDescs": [
      "[鬼影步] Lv+3"
    ],
    "specialDesc": null
  },
  "1_87": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv29 出血"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "命中率 +20%",
      "攻击时 4% 几率造成 Lv29 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 4% 几率使敌人陷入出血状态"
  },
  "1_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "dark",
    "elementName": "暗属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 15,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +15%"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [冥炎之卡洛] 等级 +3"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "暴击率 +15%",
      "🎯 [冥炎之卡洛] 等级 +3"
    ],
    "skillDescs": [
      "[冥炎之卡洛] Lv+3"
    ],
    "specialDesc": null
  },
  "1_89": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +3"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "🎯 [鬼影步] 等级 +3",
      "词条[0x39]: +2"
    ],
    "skillDescs": [
      "[鬼影步] Lv+3"
    ],
    "specialDesc": null
  },
  "1_90": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [短剑精通] 等级 +3"
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 5% 几率削减敌人当前 HP 10%"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "🎯 [短剑精通] 等级 +3",
      "攻击时 5% 几率削减敌人当前 HP 10%"
    ],
    "skillDescs": [
      "[短剑精通] Lv+3"
    ],
    "specialDesc": "🩸 神器削血：攻击时以 5% 几率削减敌人当前 HP 10%"
  },
  "1_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 39,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +39"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +3"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "智力 +39",
      "🎯 [死亡墓碑] 等级 +3",
      "攻击时 5% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+3"
    ],
    "specialDesc": "🧊 极寒冰冻：攻击时以 5% 几率使敌人陷入冰冻状态"
  },
  "1_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +28"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [第七鬼神：邪神之怖拉修] 等级 +2"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +300"
      }
    ],
    "optionDescs": [
      "智力 +28",
      "🎯 [第七鬼神：邪神之怖拉修] 等级 +2",
      "追加伤害 +300"
    ],
    "skillDescs": [
      "[第七鬼神：邪神之怖拉修] Lv+2"
    ],
    "specialDesc": null
  },
  "1_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 出血"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "攻击时 3% 几率造成 Lv29 出血",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "1_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +3"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 灼伤"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "🎯 [鬼影步] 等级 +3",
      "攻击时 3% 几率造成 Lv29 灼伤"
    ],
    "skillDescs": [
      "[鬼影步] Lv+3"
    ],
    "specialDesc": "🔥 天火流星：攻击时以 3% 几率召唤流星陨石坠落轰击"
  },
  "1_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +2"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +150"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "🎯 [鬼影闪] 等级 +2",
      "魔法攻击力 +150"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+2"
    ],
    "specialDesc": null
  },
  "1_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +24"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [噬灵鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +24",
      "词条[0x39]: +2",
      "🎯 [噬灵鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[噬灵鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 47,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +47"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +3"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "desc": "词条[0x39]: +2"
      }
    ],
    "optionDescs": [
      "智力 +47",
      "🎯 [鬼影步] 等级 +3",
      "词条[0x39]: +2"
    ],
    "skillDescs": [
      "[鬼影步] Lv+3"
    ],
    "specialDesc": null
  },
  "1_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 56,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +56"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +3"
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 5% 几率削减敌人当前 HP 10%"
      }
    ],
    "optionDescs": [
      "智力 +56",
      "🎯 [冰霜之萨亚] 等级 +3",
      "攻击时 5% 几率削减敌人当前 HP 10%"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+3"
    ],
    "specialDesc": "🩸 神器削血：攻击时以 5% 几率削减敌人当前 HP 10%"
  },
  "1_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 2,
        "p1": 61,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +61"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +3"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "智力 +61",
      "🎯 [鬼影闪] 等级 +3",
      "攻击时 5% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+3"
    ],
    "specialDesc": "🧊 极寒冰冻：攻击时以 5% 几率使敌人陷入冰冻状态"
  },
  "1_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +70"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [第七鬼神：邪神之怖拉修] 等级 +2"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +300"
      }
    ],
    "optionDescs": [
      "智力 +70",
      "🎯 [第七鬼神：邪神之怖拉修] 等级 +2",
      "追加伤害 +300"
    ],
    "skillDescs": [
      "[第七鬼神：邪神之怖拉修] Lv+2"
    ],
    "specialDesc": null
  },
  "1_101": {
    "base1": 4609,
    "base2": 2538,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +6"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "智力 +6",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "1_102": {
    "base1": 768,
    "base2": 300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +6"
      }
    ],
    "optionDescs": [
      "力量 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +6"
      }
    ],
    "optionDescs": [
      "力量 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +6"
      }
    ],
    "optionDescs": [
      "力量 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +6"
      }
    ],
    "optionDescs": [
      "力量 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_18": {
    "base1": 2561,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +7"
      }
    ],
    "optionDescs": [
      "力量 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +7"
      }
    ],
    "optionDescs": [
      "力量 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +7"
      }
    ],
    "optionDescs": [
      "力量 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_23": {
    "base1": 7681,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      }
    ],
    "optionDescs": [
      "力量 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      }
    ],
    "optionDescs": [
      "力量 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      }
    ],
    "optionDescs": [
      "力量 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      }
    ],
    "optionDescs": [
      "力量 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_27": {
    "base1": 12801,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      }
    ],
    "optionDescs": [
      "力量 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +14"
      }
    ],
    "optionDescs": [
      "力量 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      }
    ],
    "optionDescs": [
      "力量 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +7"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +7",
      "🎯 [上挑] 等级 +1"
    ],
    "skillDescs": [
      "[上挑] Lv+1"
    ],
    "specialDesc": null
  },
  "2_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      },
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "力量 +8",
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "力量 +9",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_33": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +10",
      "🎯 [十字斩] 等级 +1"
    ],
    "skillDescs": [
      "[十字斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_34": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +10",
      "🎯 [崩山击] 等级 +1"
    ],
    "skillDescs": [
      "[崩山击] Lv+1"
    ],
    "specialDesc": null
  },
  "2_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 4,
    "element": "dark",
    "elementName": "暗属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "🎯 [怒气爆发] 等级 +1"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+1"
    ],
    "specialDesc": null
  },
  "2_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "词条[0x24]: +2"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "词条[0x24]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂之手] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +12",
      "🎯 [嗜魂之手] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂之手] Lv+1"
    ],
    "specialDesc": null
  },
  "2_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "力量 +12",
      "暴击率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_39": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +30"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "物理攻击力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv2 感电"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "攻击时 2% 几率造成 Lv2 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "2_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "🎯 [血之狂暴] 等级 +1"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+1"
    ],
    "specialDesc": null
  },
  "2_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 24,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv24 出血"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "攻击时 2% 几率造成 Lv24 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 2% 几率使敌人陷入出血状态"
  },
  "2_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "🎯 [怒气爆发] 等级 +1"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+1"
    ],
    "specialDesc": null
  },
  "2_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 28,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv28 中毒"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "攻击时 2% 几率造成 Lv28 中毒"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 76,
        "p1": 2,
        "p2": 100,
        "p3": 300,
        "desc": "词条[0x4C]: +2"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "词条[0x4C]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [嗜魂封魔斩] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [崩山裂地斩] 等级 +1"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_49": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "HP MAX +200"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [怒气爆发] 等级 +2"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": null
  },
  "2_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [嗜魂封魔斩] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +60"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "物理攻击力 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_54": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [连突刺] 等级 +2"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +9",
      "🎯 [连突刺] 等级 +2",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[连突刺] Lv+2",
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_55": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 10,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +15"
      }
    ],
    "optionDescs": [
      "力量 +10",
      "体力 +15",
      "物理攻击力 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_56": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 8,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv8 灼伤"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "攻击时 3% 几率造成 Lv8 灼伤",
      "🎯 [十字斩] 等级 +1"
    ],
    "skillDescs": [
      "[十字斩] Lv+1"
    ],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 3% 几率使敌人陷入灼伤状态"
  },
  "2_57": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +2"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "力量 +12",
      "🎯 [十字斩] 等级 +2",
      "HP MAX +100"
    ],
    "skillDescs": [
      "[十字斩] Lv+2"
    ],
    "specialDesc": null
  },
  "2_58": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +12",
      "暴击率 +5%",
      "🎯 [崩山击] 等级 +2"
    ],
    "skillDescs": [
      "[崩山击] Lv+2"
    ],
    "specialDesc": null
  },
  "2_59": {
    "base1": 7681,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "dark",
    "elementName": "暗属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +40"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "物理攻击力 +40",
      "🎯 [暴走] 等级 +2"
    ],
    "skillDescs": [
      "[暴走] Lv+2"
    ],
    "specialDesc": null
  },
  "2_60": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 16,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv16 出血"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "攻击时 3% 几率造成 Lv16 出血",
      "命中率 +20%"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 3% 几率使敌人陷入出血状态"
  },
  "2_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +14"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      },
      {
        "code": 16,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +80"
      }
    ],
    "optionDescs": [
      "力量 +14",
      "🎯 [怒气爆发] 等级 +2",
      "硬直恢复 +80"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": null
  },
  "2_62": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +14"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +70"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      }
    ],
    "optionDescs": [
      "力量 +14",
      "物理攻击力 +70",
      "HP MAX +200"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_63": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +2"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "🎯 [血之狂暴] 等级 +2",
      "HP恢复 +5"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+2"
    ],
    "specialDesc": null
  },
  "2_64": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "词条[0x22]: +3"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "词条[0x22]: +3",
      "🎯 [嗜魂封魔斩] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+1"
    ],
    "specialDesc": null
  },
  "2_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 眩晕"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "暴击率 +3%",
      "攻击时 3% 几率造成 Lv2 眩晕"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 3% 几率使敌人陷入眩晕状态"
  },
  "2_66": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "🎯 [崩山裂地斩] 等级 +2",
      "🎯 [暴走] 等级 +1"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+2",
      "[暴走] Lv+1"
    ],
    "specialDesc": null
  },
  "2_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 10,
        "p1": 90,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +90"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +250"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "物理攻击力 +90",
      "HP MAX +250"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 灼伤"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "🎯 [怒气爆发] 等级 +2",
      "攻击时 3% 几率造成 Lv29 灼伤"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 3% 几率使敌人陷入灼伤状态"
  },
  "2_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 中毒"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "攻击时 3% 几率造成 Lv29 中毒",
      "🎯 [魔狱血刹] 等级 +1"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+1"
    ],
    "specialDesc": null
  },
  "2_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +100"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +200"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "物理攻击力 +100",
      "物理防御力 +200"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 3% 几率造成 Lv2 冰冻",
      "暴击率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "2_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +250"
      },
      {
        "code": 10,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +120"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "HP MAX +250",
      "物理攻击力 +120"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_73": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv30 灼伤"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 3% 几率造成 Lv30 灼伤",
      "🎯 [血之狂暴] 等级 +2"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+2"
    ],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 3% 几率使敌人陷入灼伤状态"
  },
  "2_74": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "暴击率 +5%",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_75": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "🎯 [崩山裂地斩] 等级 +2"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2",
      "[崩山裂地斩] Lv+2"
    ],
    "specialDesc": null
  },
  "2_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +1"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +400"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [魔狱血刹] 等级 +1",
      "物理防御力 +400"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+1"
    ],
    "specialDesc": null
  },
  "2_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 15%"
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +300"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 10% 几率削减敌人当前 HP 15%",
      "物理攻击力 +300"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 15%"
  },
  "2_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +10"
      },
      {
        "code": 56,
        "p1": 2,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 2% 几率恢复 HP 15"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "HP恢复 +10",
      "攻击时 2% 几率恢复 HP 15"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 2% 几率恢复 HP"
  },
  "2_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "desc": "攻击时 2% 几率附加 50 点伤害"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "攻击时 2% 几率附加 50 点伤害",
      "🎯 [十字斩] 等级 +2"
    ],
    "skillDescs": [
      "[十字斩] Lv+2"
    ],
    "specialDesc": "✨ 额外追伤：攻击时以 2% 几率附加 50 点伤害"
  },
  "2_80": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 0,
    "durability": 4,
    "element": "dark",
    "elementName": "暗属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 3,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +50"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +70"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "体力 +50",
      "物理攻击力 +70"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +16"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率恢复 HP 30"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      }
    ],
    "optionDescs": [
      "力量 +16",
      "攻击时 3% 几率恢复 HP 30",
      "暴击率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 3% 几率恢复 HP"
  },
  "2_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 0,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +16"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +3"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +16",
      "🎯 [怒气爆发] 等级 +3",
      "🎯 [暴走] 等级 +2"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+3",
      "[暴走] Lv+2"
    ],
    "specialDesc": null
  },
  "2_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +250"
      },
      {
        "code": 12,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +250"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "HP MAX +250",
      "物理防御力 +250"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 10,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +80"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +350"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "物理攻击力 +80",
      "HP MAX +350"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "🎯 [崩山击] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2",
      "[崩山击] Lv+1"
    ],
    "specialDesc": null
  },
  "2_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "desc": "词条[0x24]: +4"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 100 点伤害"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "词条[0x24]: +4",
      "攻击时 3% 几率附加 100 点伤害"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 3% 几率附加 100 点伤害"
  },
  "2_87": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +400"
      },
      {
        "code": 13,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "魔法防御力 +400"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "物理防御力 +400",
      "魔法防御力 +400"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +50"
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +100"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "力量 +50",
      "物理攻击力 +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +3"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [十字斩] 等级 +3",
      "🎯 [血之狂暴] 等级 +2"
    ],
    "skillDescs": [
      "[十字斩] Lv+3",
      "[血之狂暴] Lv+2"
    ],
    "specialDesc": null
  },
  "2_90": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率恢复 HP 30"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0,
        "desc": "词条[0x39]: +3"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "攻击时 3% 几率恢复 HP 30",
      "词条[0x39]: +3"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 3% 几率恢复 HP"
  },
  "2_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +35"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +3"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +35",
      "🎯 [崩山裂地斩] 等级 +3",
      "命中率 +20%"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+3"
    ],
    "specialDesc": null
  },
  "2_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [魔狱血刹] 等级 +2"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+2"
    ],
    "specialDesc": null
  },
  "2_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "暴击率 +5%",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "2_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "🎯 [崩山裂地斩] 等级 +2"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2",
      "[崩山裂地斩] Lv+2"
    ],
    "specialDesc": null
  },
  "2_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +1"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +400"
      }
    ],
    "optionDescs": [
      "力量 +30",
      "🎯 [魔狱血刹] 等级 +1",
      "物理防御力 +400"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+1"
    ],
    "specialDesc": null
  },
  "2_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 15%"
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +300"
      }
    ],
    "optionDescs": [
      "力量 +30",
      "攻击时 10% 几率削减敌人当前 HP 15%",
      "物理攻击力 +300"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 15%"
  },
  "2_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +42"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 5,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +5"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +42",
      "🎯 [十字斩] 等级 +5",
      "🎯 [嗜魂封魔斩] 等级 +3"
    ],
    "skillDescs": [
      "[十字斩] Lv+5",
      "[嗜魂封魔斩] Lv+3"
    ],
    "specialDesc": null
  },
  "2_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +50"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率恢复 HP 30"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0,
        "desc": "词条[0x39]: +3"
      }
    ],
    "optionDescs": [
      "力量 +50",
      "攻击时 3% 几率恢复 HP 30",
      "词条[0x39]: +3"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 3% 几率恢复 HP"
  },
  "2_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +55"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +3"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +55",
      "🎯 [崩山裂地斩] 等级 +3",
      "命中率 +20%"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+3"
    ],
    "specialDesc": null
  },
  "2_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 62,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +62"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +62",
      "🎯 [魔狱血刹] 等级 +2"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+2"
    ],
    "specialDesc": null
  },
  "3_0": {
    "base1": 1,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_1": {
    "base1": 257,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_2": {
    "base1": 1281,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_3": {
    "base1": 2561,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_4": {
    "base1": 4608,
    "base2": 1800,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_14": {
    "base1": 1281,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_15": {
    "base1": 1537,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_16": {
    "base1": 1793,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_17": {
    "base1": 2305,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_18": {
    "base1": 2561,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_19": {
    "base1": 3073,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_20": {
    "base1": 4608,
    "base2": 2538,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +8"
      }
    ],
    "optionDescs": [
      "力量 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      }
    ],
    "optionDescs": [
      "力量 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_23": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      }
    ],
    "optionDescs": [
      "力量 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      }
    ],
    "optionDescs": [
      "力量 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      }
    ],
    "optionDescs": [
      "力量 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      }
    ],
    "optionDescs": [
      "力量 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_27": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +14"
      }
    ],
    "optionDescs": [
      "力量 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      }
    ],
    "optionDescs": [
      "力量 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +16"
      }
    ],
    "optionDescs": [
      "力量 +16"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_30": {
    "base1": 1281,
    "base2": 1025,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      }
    ],
    "optionDescs": [
      "力量 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      }
    ],
    "optionDescs": [
      "力量 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_32": {
    "base1": 4608,
    "base2": 3690,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +9"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +9",
      "🎯 [上挑] 等级 +1"
    ],
    "skillDescs": [
      "[上挑] Lv+1"
    ],
    "specialDesc": null
  },
  "3_33": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_34": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv1 感电"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "攻击时 2% 几率造成 Lv1 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "3_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 3,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [光剑精通] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "🎯 [光剑精通] 等级 +1"
    ],
    "skillDescs": [
      "[光剑精通] Lv+1"
    ],
    "specialDesc": null
  },
  "3_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 4,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 2% 几率附加 10 点伤害"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "攻击时 2% 几率附加 10 点伤害"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 2% 几率附加 10 点伤害"
  },
  "3_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "🎯 [拔刀斩] 等级 +1"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+1"
    ],
    "specialDesc": null
  },
  "3_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 1,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 20,
        "p3": 0,
        "desc": "攻击时 2% 几率附加 20 点伤害"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "攻击时 2% 几率附加 20 点伤害"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 2% 几率附加 20 点伤害"
  },
  "3_39": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv1 感电"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "攻击时 2% 几率造成 Lv1 感电"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 2% 几率使敌人陷入感电状态"
  },
  "3_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +30"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "物理攻击力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv21 中毒"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "攻击时 2% 几率造成 Lv21 中毒"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "🎯 [幻影剑舞] 等级 +1"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+1"
    ],
    "specialDesc": null
  },
  "3_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 23,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv23 出血"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "攻击时 2% 几率造成 Lv23 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 2% 几率使敌人陷入出血状态"
  },
  "3_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [破军升龙击] 等级 +1"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+1"
    ],
    "specialDesc": null
  },
  "3_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [猛龙断空斩] 等级 +1"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+1"
    ],
    "specialDesc": null
  },
  "3_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [幻影剑舞] 等级 +1"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+1"
    ],
    "specialDesc": null
  },
  "3_49": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +60"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "物理攻击力 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 2% 几率削减敌人当前 HP 10%"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 2% 几率削减敌人当前 HP 10%"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 2% 几率削减敌人当前 HP 10%"
  },
  "3_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "fire",
    "elementName": "火属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv29 灼伤"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 2% 几率造成 Lv29 灼伤"
    ],
    "skillDescs": [],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 2% 几率使敌人陷入灼伤状态"
  },
  "3_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [幻影剑舞] 等级 +1"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+1"
    ],
    "specialDesc": null
  },
  "3_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "ice",
    "elementName": "冰属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +50"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "力量 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_54": {
    "base1": 1281,
    "base2": 1495,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "攻击时 3% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "3_55": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "攻击时 3% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "3_56": {
    "base1": 4608,
    "base2": 5382,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +11"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +2"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "力量 +11",
      "🎯 [十字斩] 等级 +2",
      "攻击时 3% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [
      "[十字斩] Lv+2"
    ],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "3_57": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [光剑精通] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "暴击率 +3%",
      "🎯 [光剑精通] 等级 +2"
    ],
    "skillDescs": [
      "[光剑精通] Lv+2"
    ],
    "specialDesc": null
  },
  "3_58": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 感电"
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      }
    ],
    "optionDescs": [
      "力量 +13",
      "攻击时 3% 几率造成 Lv2 感电",
      "力量 +15"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 3% 几率使敌人陷入感电状态"
  },
  "3_59": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +2"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "🎯 [破极兵刃] 等级 +2",
      "🎯 [十字斩] 等级 +1"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+2",
      "[十字斩] Lv+1"
    ],
    "specialDesc": null
  },
  "3_60": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 黑暗"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "攻击时 3% 几率造成 Lv2 黑暗",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 5,
        "p1": 125,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +125"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "🎯 [拔刀斩] 等级 +2",
      "HP MAX +125"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2"
    ],
    "specialDesc": null
  },
  "3_62": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +40"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "暴击率 +3%",
      "物理攻击力 +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_63": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 眩晕"
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +50"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "攻击时 3% 几率造成 Lv2 眩晕",
      "物理攻击力 +50"
    ],
    "skillDescs": [],
    "specialDesc": "💫 眩晕打击：攻击时以 3% 几率使敌人陷入眩晕状态"
  },
  "3_64": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 3,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +2"
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +4%"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "🎯 [破军升龙击] 等级 +2",
      "暴击率 +4%"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+2"
    ],
    "specialDesc": null
  },
  "3_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 感电"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "攻击时 3% 几率造成 Lv2 感电",
      "力量 +30"
    ],
    "skillDescs": [],
    "specialDesc": "⚡ 雷霆感电：攻击时以 3% 几率使敌人陷入感电状态"
  },
  "3_66": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +60"
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 20,
        "p3": 10,
        "desc": "词条[0x4F]: +3"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "物理攻击力 +60",
      "词条[0x4F]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_67": {
    "base1": 12800,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 黑暗"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "攻击时 3% 几率造成 Lv2 黑暗",
      "🎯 [猛龙断空斩] 等级 +2"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "3_68": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "词条[0x22]: +3"
      },
      {
        "code": 6,
        "p1": 125,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +125"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "词条[0x22]: +3",
      "MP MAX +125"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_69": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +10"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "HP恢复 +10",
      "MP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [拔刀斩] 等级 +2",
      "🎯 [猛龙断空斩] 等级 +2"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2",
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "3_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      },
      {
        "code": 22,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +20"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [幻影剑舞] 等级 +2",
      "光属性抗性 +20"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": null
  },
  "3_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +2"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv2 冰冻"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [破极兵刃] 等级 +2",
      "攻击时 3% 几率造成 Lv2 冰冻"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+2"
    ],
    "specialDesc": "🧊 极寒冰冻：攻击时以 3% 几率使敌人陷入冰冻状态"
  },
  "3_73": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 4,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 200,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 200 点伤害"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +7%"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "攻击时 3% 几率附加 200 点伤害",
      "暴击率 +7%"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 3% 几率附加 200 点伤害"
  },
  "3_74": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "HP MAX +200",
      "🎯 [破军升龙击] 等级 +3"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+3"
    ],
    "specialDesc": null
  },
  "3_75": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 100,
        "p3": 200,
        "desc": "词条[0x4A]: +3"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +7%"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "词条[0x4A]: +3",
      "暴击率 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [极·鬼剑术暴风式] 等级 +1"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "🎯 [极·鬼剑术暴风式] 等级 +1",
      "命中率 +20%"
    ],
    "skillDescs": [
      "[极·鬼剑术暴风式] Lv+1"
    ],
    "specialDesc": null
  },
  "3_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 15%"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 出血"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "攻击时 10% 几率削减敌人当前 HP 15%",
      "攻击时 3% 几率造成 Lv29 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 15%"
  },
  "3_78": {
    "base1": 4608,
    "base2": 7848,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 4,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +4"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "力量 +15",
      "🎯 [上挑] 等级 +4",
      "暴击率 +5%"
    ],
    "skillDescs": [
      "[上挑] Lv+4"
    ],
    "specialDesc": null
  },
  "3_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 30 点伤害"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "攻击时 3% 几率附加 30 点伤害",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 3% 几率附加 30 点伤害"
  },
  "3_80": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +17"
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +50"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +17",
      "物理攻击力 +50",
      "🎯 [猛龙断空斩] 等级 +3"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+3"
    ],
    "specialDesc": null
  },
  "3_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +18"
      },
      {
        "code": 32,
        "p1": 4,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv2 冰冻"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +18",
      "攻击时 4% 几率造成 Lv2 冰冻",
      "命中率 +20%"
    ],
    "skillDescs": [],
    "specialDesc": "🧊 极寒冰冻：攻击时以 4% 几率使敌人陷入冰冻状态"
  },
  "3_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +18"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 10,
        "p3": 0,
        "desc": "词条[0x39]: +3"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +100"
      }
    ],
    "optionDescs": [
      "力量 +18",
      "词条[0x39]: +3",
      "MP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +3"
      },
      {
        "code": 29,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv3 感电"
      }
    ],
    "optionDescs": [
      "力量 +19",
      "🎯 [猛龙断空斩] 等级 +3",
      "攻击时 4% 几率造成 Lv3 感电"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+3"
    ],
    "specialDesc": "⚡ 雷霆感电：攻击时以 4% 几率使敌人陷入感电状态"
  },
  "3_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      },
      {
        "code": 27,
        "p1": 4,
        "p2": 22,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv22 灼伤"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      }
    ],
    "optionDescs": [
      "力量 +21",
      "攻击时 4% 几率造成 Lv22 灼伤",
      "暴击率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 4% 几率使敌人陷入灼伤状态"
  },
  "3_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +23"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +3"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +23",
      "🎯 [猛龙断空斩] 等级 +3",
      "🎯 [拔刀斩] 等级 +3"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+3",
      "[拔刀斩] Lv+3"
    ],
    "specialDesc": null
  },
  "3_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 10%"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +25",
      "攻击时 10% 几率削减敌人当前 HP 10%",
      "🎯 [破极兵刃] 等级 +2"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+2"
    ],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 10%"
  },
  "3_87": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 70,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 70 点伤害"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +40"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "攻击时 3% 几率附加 70 点伤害",
      "精神 +40"
    ],
    "skillDescs": [],
    "specialDesc": "✨ 额外追伤：攻击时以 3% 几率附加 70 点伤害"
  },
  "3_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x60]: +20"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "硬直恢复 +60",
      "词条[0x60]: +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 30,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "desc": "攻击时 4% 几率造成 Lv3 黑暗"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +150"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "攻击时 4% 几率造成 Lv3 黑暗",
      "MP MAX +150"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_90": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 100 点伤害"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "攻击时 3% 几率附加 100 点伤害",
      "🎯 [幻影剑舞] 等级 +2"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": "✨ 额外追伤：攻击时以 3% 几率附加 100 点伤害"
  },
  "3_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 37,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +37"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "力量 +37",
      "🎯 [幻影剑舞] 等级 +2",
      "🎯 [拔刀斩] 等级 +1"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2",
      "[拔刀斩] Lv+1"
    ],
    "specialDesc": null
  },
  "3_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +27"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 15%"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 80,
        "p3": 0,
        "desc": "攻击时 3% 几率附加 80 点伤害"
      }
    ],
    "optionDescs": [
      "力量 +27",
      "攻击时 10% 几率削减敌人当前 HP 15%",
      "攻击时 3% 几率附加 80 点伤害"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 15%"
  },
  "3_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +26"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +26",
      "HP MAX +200",
      "🎯 [破军升龙击] 等级 +3"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+3"
    ],
    "specialDesc": null
  },
  "3_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +26"
      },
      {
        "code": 74,
        "p1": 5,
        "p2": 300,
        "p3": 130,
        "desc": "词条[0x4A]: +5"
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +4%"
      }
    ],
    "optionDescs": [
      "力量 +26",
      "词条[0x4A]: +5",
      "暴击率 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +26"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +3"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +20%"
      }
    ],
    "optionDescs": [
      "力量 +26",
      "🎯 [猛龙断空斩] 等级 +3",
      "命中率 +20%"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+3"
    ],
    "specialDesc": null
  },
  "3_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +26"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 3% 几率削减敌人当前 HP 10%"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "desc": "攻击时 3% 几率造成 Lv29 出血"
      }
    ],
    "optionDescs": [
      "力量 +26",
      "攻击时 3% 几率削减敌人当前 HP 10%",
      "攻击时 3% 几率造成 Lv29 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 3% 几率削减敌人当前 HP 10%"
  },
  "3_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +45"
      },
      {
        "code": 3,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +60"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "力量 +45",
      "体力 +60",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "3_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 54,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +54"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +3"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      }
    ],
    "optionDescs": [
      "力量 +54",
      "🎯 [猛龙断空斩] 等级 +3",
      "🎯 [幻影剑舞] 等级 +2"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+3",
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": null
  },
  "3_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 59,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +59"
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "desc": "攻击时 5% 几率造成 Lv2 感电"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "力量 +59",
      "攻击时 5% 几率造成 Lv2 感电",
      "🎯 [拔刀斩] 等级 +3"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+3"
    ],
    "specialDesc": "⚡ 雷霆感电：攻击时以 5% 几率使敌人陷入感电状态"
  },
  "3_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [
      {
        "code": 1,
        "p1": 67,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +67"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [极·鬼剑术暴风式] 等级 +2"
      },
      {
        "code": 96,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x60]: +30"
      }
    ],
    "optionDescs": [
      "力量 +67",
      "🎯 [极·鬼剑术暴风式] 等级 +2",
      "词条[0x60]: +30"
    ],
    "skillDescs": [
      "[极·鬼剑术暴风式] Lv+2"
    ],
    "specialDesc": null
  },
  "4_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +5"
      }
    ],
    "optionDescs": [
      "精神 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +5"
      }
    ],
    "optionDescs": [
      "精神 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +5"
      }
    ],
    "optionDescs": [
      "精神 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +6"
      }
    ],
    "optionDescs": [
      "精神 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +6"
      }
    ],
    "optionDescs": [
      "精神 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +6"
      }
    ],
    "optionDescs": [
      "精神 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      }
    ],
    "optionDescs": [
      "精神 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      }
    ],
    "optionDescs": [
      "精神 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      }
    ],
    "optionDescs": [
      "精神 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      }
    ],
    "optionDescs": [
      "精神 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "精神 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "精神 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "精神 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "精神 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      }
    ],
    "optionDescs": [
      "精神 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      }
    ],
    "optionDescs": [
      "精神 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      }
    ],
    "optionDescs": [
      "精神 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      }
    ],
    "optionDescs": [
      "精神 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      }
    ],
    "optionDescs": [
      "精神 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      }
    ],
    "optionDescs": [
      "精神 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      }
    ],
    "optionDescs": [
      "精神 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      }
    ],
    "optionDescs": [
      "精神 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      }
    ],
    "optionDescs": [
      "精神 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      }
    ],
    "optionDescs": [
      "精神 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      }
    ],
    "optionDescs": [
      "精神 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      }
    ],
    "optionDescs": [
      "精神 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +10"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "HP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +10"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "HP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +10"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "MP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +15"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP MAX +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 8,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +2"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP恢复 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "HP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "HP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +30"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "硬直恢复 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +15"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "智力 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "MP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "HP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "MP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "HP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "HP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "体力 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +3"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "MP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "MP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "硬直恢复 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +15"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP MAX +15",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "HP MAX +20",
      "回避率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 16,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +15"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "HP MAX +50",
      "硬直恢复 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +5%"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP MAX +20",
      "命中率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      },
      {
        "code": 7,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +2"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "HP MAX +30",
      "HP恢复 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +3"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "MP MAX +30",
      "MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "体力 +20",
      "移动速度 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +5%"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "MP恢复 +4",
      "命中率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +15"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "HP MAX +40",
      "智力 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "HP MAX +30",
      "力量 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +45"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "硬直恢复 +45",
      "HP MAX +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "命中率 +10%",
      "MP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP MAX +30",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP MAX +30",
      "回避率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "HP MAX +40",
      "硬直恢复 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP MAX +30",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +60",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +3"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +40",
      "MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +25"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "体力 +25",
      "移动速度 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "MP恢复 +4",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "MP MAX +60",
      "智力 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "MP MAX +40",
      "力量 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 16,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +55"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "硬直恢复 +55",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "命中率 +10%",
      "MP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "HP MAX +60",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +3"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "HP MAX +30",
      "MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "体力 +20",
      "移动速度 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +5%"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "MP恢复 +4",
      "命中率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP MAX +60",
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "MP MAX +40",
      "力量 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +45"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "硬直恢复 +45",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 18,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +8%"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "命中率 +8%",
      "MP MAX +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +100",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +50",
      "回避率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +60",
      "硬直恢复 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +5%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "MP MAX +60",
      "命中率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +100"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "MP MAX +100",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "MP MAX +60",
      "MP恢复 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "体力 +20",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +7%"
      }
    ],
    "optionDescs": [
      "精神 +20",
      "MP恢复 +5",
      "命中率 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +22"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      }
    ],
    "optionDescs": [
      "精神 +22",
      "HP MAX +150",
      "智力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +22"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +70"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      }
    ],
    "optionDescs": [
      "精神 +22",
      "HP MAX +70",
      "力量 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +22"
      },
      {
        "code": 16,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +42"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +120"
      }
    ],
    "optionDescs": [
      "精神 +22",
      "硬直恢复 +42",
      "HP MAX +120"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +22"
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +12%"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      }
    ],
    "optionDescs": [
      "精神 +22",
      "命中率 +12%",
      "MP MAX +80"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +26"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +150"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +26",
      "MP MAX +150",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +26"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +70"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +30"
      }
    ],
    "optionDescs": [
      "精神 +26",
      "MP MAX +70",
      "物理攻击力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +26"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +200"
      }
    ],
    "optionDescs": [
      "精神 +26",
      "HP MAX +150",
      "物理防御力 +200"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +26"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +100"
      }
    ],
    "optionDescs": [
      "精神 +26",
      "MP MAX +80",
      "魔法攻击力 +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_158": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +20"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "HP MAX +150",
      "智力 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_159": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "HP MAX +150",
      "力量 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_160": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +100"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "硬直恢复 +100",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_161": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +100"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "命中率 +10%",
      "MP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_162": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +150"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP MAX +150",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_163": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +150"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP MAX +150",
      "回避率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_164": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +100"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "HP MAX +200",
      "硬直恢复 +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_165": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +150"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP MAX +150",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_166": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +250"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "HP MAX +250",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_167": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +250"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +3"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "HP MAX +250",
      "MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_168": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +40"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "体力 +40",
      "移动速度 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_169": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP恢复 +4",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_170": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +200"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP MAX +200",
      "智力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_171": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +200"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "MP MAX +200",
      "力量 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_172": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 16,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +120"
      },
      {
        "code": 5,
        "p1": 130,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +130"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "硬直恢复 +120",
      "HP MAX +130"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_173": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +120"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "命中率 +10%",
      "MP MAX +120"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_174": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +23"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +23",
      "HP MAX +300",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_175": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +23"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +23",
      "HP MAX +300",
      "回避率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_176": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +23"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      },
      {
        "code": 16,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +140"
      }
    ],
    "optionDescs": [
      "精神 +23",
      "HP MAX +300",
      "硬直恢复 +140"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_177": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +23"
      },
      {
        "code": 6,
        "p1": 220,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +220"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +5%"
      }
    ],
    "optionDescs": [
      "精神 +23",
      "MP MAX +220",
      "命中率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_178": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +250"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +25",
      "MP MAX +250",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_179": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +250"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +4"
      }
    ],
    "optionDescs": [
      "精神 +25",
      "MP MAX +250",
      "MP恢复 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_180": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 3,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +80"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +25",
      "体力 +80",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_181": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +7%"
      }
    ],
    "optionDescs": [
      "精神 +25",
      "MP恢复 +5",
      "命中率 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_182": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +27"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +350"
      },
      {
        "code": 2,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +50"
      }
    ],
    "optionDescs": [
      "精神 +27",
      "HP MAX +350",
      "智力 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_183": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +27"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +350"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +50"
      }
    ],
    "optionDescs": [
      "精神 +27",
      "HP MAX +350",
      "力量 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_184": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +27"
      },
      {
        "code": 16,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +150"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +300"
      }
    ],
    "optionDescs": [
      "精神 +27",
      "硬直恢复 +150",
      "HP MAX +300"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_185": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +27"
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +12%"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +250"
      }
    ],
    "optionDescs": [
      "精神 +27",
      "命中率 +12%",
      "MP MAX +250"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_186": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +280"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      }
    ],
    "optionDescs": [
      "精神 +35",
      "MP MAX +280",
      "暴击率 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_187": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +280"
      },
      {
        "code": 10,
        "p1": 170,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +170"
      }
    ],
    "optionDescs": [
      "精神 +35",
      "MP MAX +280",
      "物理攻击力 +170"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_188": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 5,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +400"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +400"
      }
    ],
    "optionDescs": [
      "精神 +35",
      "HP MAX +400",
      "物理防御力 +400"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "4_189": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +280"
      },
      {
        "code": 11,
        "p1": 170,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +170"
      }
    ],
    "optionDescs": [
      "精神 +35",
      "MP MAX +280",
      "魔法攻击力 +170"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +3"
      }
    ],
    "optionDescs": [
      "体力 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +3"
      }
    ],
    "optionDescs": [
      "体力 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +3"
      }
    ],
    "optionDescs": [
      "体力 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +4"
      }
    ],
    "optionDescs": [
      "体力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +4"
      }
    ],
    "optionDescs": [
      "体力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +4"
      }
    ],
    "optionDescs": [
      "体力 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +5"
      }
    ],
    "optionDescs": [
      "体力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +5"
      }
    ],
    "optionDescs": [
      "体力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +5"
      }
    ],
    "optionDescs": [
      "体力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +5"
      }
    ],
    "optionDescs": [
      "体力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      }
    ],
    "optionDescs": [
      "体力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      }
    ],
    "optionDescs": [
      "体力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      }
    ],
    "optionDescs": [
      "体力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      }
    ],
    "optionDescs": [
      "体力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      }
    ],
    "optionDescs": [
      "体力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      }
    ],
    "optionDescs": [
      "体力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      }
    ],
    "optionDescs": [
      "体力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      }
    ],
    "optionDescs": [
      "体力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [刀魂之卡赞] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +6",
      "🎯 [刀魂之卡赞] 等级 +1"
    ],
    "skillDescs": [
      "[刀魂之卡赞] Lv+1"
    ],
    "specialDesc": null
  },
  "5_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +6",
      "🎯 [上挑] 等级 +1"
    ],
    "skillDescs": [
      "[上挑] Lv+1"
    ],
    "specialDesc": null
  },
  "5_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [连突刺] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +6",
      "🎯 [连突刺] 等级 +1"
    ],
    "skillDescs": [
      "[连突刺] Lv+1"
    ],
    "specialDesc": null
  },
  "5_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +6",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [鬼影步] 等级 +1"
    ],
    "skillDescs": [
      "[鬼影步] Lv+1"
    ],
    "specialDesc": null
  },
  "5_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [十字斩] 等级 +1"
    ],
    "skillDescs": [
      "[十字斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [崩山击] 等级 +1"
    ],
    "skillDescs": [
      "[崩山击] Lv+1"
    ],
    "specialDesc": null
  },
  "5_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [波动刻印] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [波动刻印] 等级 +1"
    ],
    "skillDescs": [
      "[波动刻印] Lv+1"
    ],
    "specialDesc": null
  },
  "5_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [侵蚀之普戾蒙] 等级 +1"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+1"
    ],
    "specialDesc": null
  },
  "5_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [破极兵刃] 等级 +1"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+1"
    ],
    "specialDesc": null
  },
  "5_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [暴走] 等级 +1"
    ],
    "skillDescs": [
      "[暴走] Lv+1"
    ],
    "specialDesc": null
  },
  "5_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰刃·波动剑] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [冰刃·波动剑] 等级 +1"
    ],
    "skillDescs": [
      "[冰刃·波动剑] Lv+1"
    ],
    "specialDesc": null
  },
  "5_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [冰霜之萨亚] 等级 +1"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+1"
    ],
    "specialDesc": null
  },
  "5_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [破军升龙击] 等级 +1"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+1"
    ],
    "specialDesc": null
  },
  "5_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [怒气爆发] 等级 +1"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+1"
    ],
    "specialDesc": null
  },
  "5_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [邪光斩] 等级 +1"
    ],
    "skillDescs": [
      "[邪光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [鬼斩] 等级 +1"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [拔刀斩] 等级 +1"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [血之狂暴] 等级 +1"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+1"
    ],
    "specialDesc": null
  },
  "5_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [鬼印珠] 等级 +1"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+1"
    ],
    "specialDesc": null
  },
  "5_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [鬼影闪] 等级 +1"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+1"
    ],
    "specialDesc": null
  },
  "5_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [幻影剑舞] 等级 +1"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+1"
    ],
    "specialDesc": null
  },
  "5_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [嗜魂封魔斩] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [爆炎·波动剑] 等级 +1"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+1"
    ],
    "specialDesc": null
  },
  "5_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +1"
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +2"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [鬼斩] 等级 +1",
      "火属性抗性 +2"
    ],
    "skillDescs": [
      "[鬼斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [连突刺] 等级 +2"
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +2"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [连突刺] 等级 +2",
      "冰属性抗性 +2"
    ],
    "skillDescs": [
      "[连突刺] Lv+2"
    ],
    "specialDesc": null
  },
  "5_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +2"
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +2%"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [十字斩] 等级 +2",
      "出血抗性 +2%"
    ],
    "skillDescs": [
      "[十字斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +2"
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +2"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "🎯 [地裂·波动剑] 等级 +2",
      "词条[0x26]: +2"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +3"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [月光斩] 等级 +1",
      "光属性抗性 +3"
    ],
    "skillDescs": [
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "5_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +2"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +3"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [崩山击] 等级 +2",
      "暗属性抗性 +3"
    ],
    "skillDescs": [
      "[崩山击] Lv+2"
    ],
    "specialDesc": null
  },
  "5_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山击] 等级 +2"
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "灼伤抗性 +3%"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [崩山击] 等级 +2",
      "灼伤抗性 +3%"
    ],
    "skillDescs": [
      "[崩山击] Lv+2"
    ],
    "specialDesc": null
  },
  "5_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰刃·波动剑] 等级 +2"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x28]: +3"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "🎯 [冰刃·波动剑] 等级 +2",
      "词条[0x28]: +3"
    ],
    "skillDescs": [
      "[冰刃·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [侵蚀之普戾蒙] 等级 +1"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [侵蚀之普戾蒙] 等级 +1",
      "火属性抗性 +4"
    ],
    "skillDescs": [
      "[侵蚀之普戾蒙] Lv+1"
    ],
    "specialDesc": null
  },
  "5_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +2"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [破极兵刃] 等级 +2",
      "冰属性抗性 +4"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+2"
    ],
    "specialDesc": null
  },
  "5_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +4%"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [怒气爆发] 等级 +2",
      "感电抗性 +4%"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": null
  },
  "5_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +2"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +4"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "🎯 [邪光斩] 等级 +2",
      "词条[0x2A]: +4"
    ],
    "skillDescs": [
      "[邪光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +1"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [冰霜之萨亚] 等级 +1",
      "光属性抗性 +5"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+1"
    ],
    "specialDesc": null
  },
  "5_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [拔刀斩] 等级 +2",
      "暗属性抗性 +5"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +2"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [血之狂暴] 等级 +2",
      "眩晕抗性 +5%"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+2"
    ],
    "specialDesc": null
  },
  "5_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +2"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [鬼印珠] 等级 +2",
      "冰冻抗性 +5%"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+2"
    ],
    "specialDesc": null
  },
  "5_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +1"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [死亡墓碑] 等级 +1",
      "火属性抗性 +6"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+1"
    ],
    "specialDesc": null
  },
  "5_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [猛龙断空斩] 等级 +2",
      "冰属性抗性 +6"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +6"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "词条[0x2D]: +6"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +2"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +6"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [爆炎·波动剑] 等级 +2",
      "词条[0x2E]: +6"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +1"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [鬼影闪] 等级 +1",
      "光属性抗性 +7"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+1"
    ],
    "specialDesc": null
  },
  "5_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [幻影剑舞] 等级 +2",
      "暗属性抗性 +7"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": null
  },
  "5_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +7"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [崩山裂地斩] 等级 +2",
      "词条[0x2F]: +7"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +2"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +7%"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [不动明王阵] 等级 +2",
      "出血抗性 +7%"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+2"
    ],
    "specialDesc": null
  },
  "5_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +2"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +3"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [鬼斩] 等级 +2",
      "火属性抗性 +3"
    ],
    "skillDescs": [
      "[鬼斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +2"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +3"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [十字斩] 等级 +2",
      "冰属性抗性 +3"
    ],
    "skillDescs": [
      "[十字斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +2"
      },
      {
        "code": 37,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +3%"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [暴走] 等级 +2",
      "出血抗性 +3%"
    ],
    "skillDescs": [
      "[暴走] Lv+2"
    ],
    "specialDesc": null
  },
  "5_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +2"
      },
      {
        "code": 38,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +3"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "🎯 [邪光斩] 等级 +2",
      "词条[0x26]: +3"
    ],
    "skillDescs": [
      "[邪光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +2"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [冰霜之萨亚] 等级 +2",
      "光属性抗性 +4"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+2"
    ],
    "specialDesc": null
  },
  "5_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [拔刀斩] 等级 +2",
      "暗属性抗性 +4"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +3"
      },
      {
        "code": 39,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "灼伤抗性 +4%"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [十字斩] 等级 +3",
      "灼伤抗性 +4%"
    ],
    "skillDescs": [
      "[十字斩] Lv+3"
    ],
    "specialDesc": null
  },
  "5_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼印珠] 等级 +2"
      },
      {
        "code": 40,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x28]: +4"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [鬼印珠] 等级 +2",
      "词条[0x28]: +4"
    ],
    "skillDescs": [
      "[鬼印珠] Lv+2"
    ],
    "specialDesc": null
  },
  "5_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +2"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [死亡墓碑] 等级 +2",
      "火属性抗性 +5"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破军升龙击] 等级 +2"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [破军升龙击] 等级 +2",
      "冰属性抗性 +5"
    ],
    "skillDescs": [
      "[破军升龙击] Lv+2"
    ],
    "specialDesc": null
  },
  "5_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [血之狂暴] 等级 +2"
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [血之狂暴] 等级 +2",
      "感电抗性 +5%"
    ],
    "skillDescs": [
      "[血之狂暴] Lv+2"
    ],
    "specialDesc": null
  },
  "5_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +2"
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +5"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "🎯 [爆炎·波动剑] 等级 +2",
      "词条[0x2A]: +5"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +2"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +20",
      "🎯 [鬼影闪] 等级 +2",
      "光属性抗性 +6"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+2"
    ],
    "specialDesc": null
  },
  "5_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +20",
      "🎯 [猛龙断空斩] 等级 +2",
      "暗属性抗性 +6"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +6%"
      }
    ],
    "optionDescs": [
      "体力 +20",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "眩晕抗性 +6%"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +20"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光波动阵] 等级 +2"
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +6%"
      }
    ],
    "optionDescs": [
      "体力 +20",
      "🎯 [邪光波动阵] 等级 +2",
      "冰冻抗性 +6%"
    ],
    "skillDescs": [
      "[邪光波动阵] Lv+2"
    ],
    "specialDesc": null
  },
  "5_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +22"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +2"
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +22",
      "🎯 [冰霜之萨亚] 等级 +2",
      "火属性抗性 +7"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+2"
    ],
    "specialDesc": null
  },
  "5_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +22"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +22",
      "🎯 [幻影剑舞] 等级 +2",
      "冰属性抗性 +7"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": null
  },
  "5_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +22"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +7"
      }
    ],
    "optionDescs": [
      "体力 +22",
      "🎯 [崩山裂地斩] 等级 +2",
      "词条[0x2D]: +7"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +22"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +2"
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +7"
      }
    ],
    "optionDescs": [
      "体力 +22",
      "🎯 [不动明王阵] 等级 +2",
      "词条[0x2E]: +7"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+2"
    ],
    "specialDesc": null
  },
  "5_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +26"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影步] 等级 +2"
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +8"
      }
    ],
    "optionDescs": [
      "体力 +26",
      "🎯 [鬼影步] 等级 +2",
      "光属性抗性 +8"
    ],
    "skillDescs": [
      "[鬼影步] Lv+2"
    ],
    "specialDesc": null
  },
  "5_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +26"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [破极兵刃] 等级 +2"
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +8"
      }
    ],
    "optionDescs": [
      "体力 +26",
      "🎯 [破极兵刃] 等级 +2",
      "暗属性抗性 +8"
    ],
    "skillDescs": [
      "[破极兵刃] Lv+2"
    ],
    "specialDesc": null
  },
  "5_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +26"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +2"
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +8"
      }
    ],
    "optionDescs": [
      "体力 +26",
      "🎯 [暴走] 等级 +2",
      "词条[0x2F]: +8"
    ],
    "skillDescs": [
      "[暴走] Lv+2"
    ],
    "specialDesc": null
  },
  "5_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +26"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [波动刻印] 等级 +2"
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +8%"
      }
    ],
    "optionDescs": [
      "体力 +26",
      "🎯 [波动刻印] 等级 +2",
      "出血抗性 +8%"
    ],
    "skillDescs": [
      "[波动刻印] Lv+2"
    ],
    "specialDesc": null
  },
  "5_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "5_158": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +2"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [冰霜之萨亚] 等级 +2",
      "火属性抗性 +4"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+2"
    ],
    "specialDesc": null
  },
  "5_159": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [拔刀斩] 等级 +2",
      "冰属性抗性 +4"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_160": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +4%"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [怒气爆发] 等级 +2",
      "感电抗性 +4%"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": null
  },
  "5_161": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +2"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +4"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [邪光斩] 等级 +2",
      "词条[0x2A]: +4"
    ],
    "skillDescs": [
      "[邪光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_162": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +2"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [死亡墓碑] 等级 +2",
      "光属性抗性 +5"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_163": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [猛龙断空斩] 等级 +2",
      "暗属性抗性 +5"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_164": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "眩晕抗性 +5%"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_165": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +2"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [爆炎·波动剑] 等级 +2",
      "冰冻抗性 +5%"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_166": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +2"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [鬼影闪] 等级 +2",
      "火属性抗性 +6"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+2"
    ],
    "specialDesc": null
  },
  "5_167": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +2"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [幻影剑舞] 等级 +2",
      "冰属性抗性 +6"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+2"
    ],
    "specialDesc": null
  },
  "5_168": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +2"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +6"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [崩山裂地斩] 等级 +2",
      "词条[0x2D]: +6"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_169": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +2"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +6"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [不动明王阵] 等级 +2",
      "词条[0x2E]: +6"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+2"
    ],
    "specialDesc": null
  },
  "5_170": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [第七鬼神：邪神之怖拉修] 等级 +1"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [第七鬼神：邪神之怖拉修] 等级 +1",
      "光属性抗性 +7"
    ],
    "skillDescs": [
      "[第七鬼神：邪神之怖拉修] Lv+1"
    ],
    "specialDesc": null
  },
  "5_171": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [极·鬼剑术暴风式] 等级 +1"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [极·鬼剑术暴风式] 等级 +1",
      "暗属性抗性 +7"
    ],
    "skillDescs": [
      "[极·鬼剑术暴风式] Lv+1"
    ],
    "specialDesc": null
  },
  "5_172": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +1"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +7"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [魔狱血刹] 等级 +1",
      "词条[0x2F]: +7"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+1"
    ],
    "specialDesc": null
  },
  "5_173": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [暗天波动眼] 等级 +1"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +7%"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "🎯 [暗天波动眼] 等级 +1",
      "出血抗性 +7%"
    ],
    "skillDescs": [
      "[暗天波动眼] Lv+1"
    ],
    "specialDesc": null
  },
  "5_174": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +23"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰霜之萨亚] 等级 +2"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +23",
      "🎯 [冰霜之萨亚] 等级 +2",
      "火属性抗性 +5"
    ],
    "skillDescs": [
      "[冰霜之萨亚] Lv+2"
    ],
    "specialDesc": null
  },
  "5_175": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +23"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [拔刀斩] 等级 +2"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +23",
      "🎯 [拔刀斩] 等级 +2",
      "冰属性抗性 +5"
    ],
    "skillDescs": [
      "[拔刀斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_176": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +23"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [怒气爆发] 等级 +2"
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +5%"
      }
    ],
    "optionDescs": [
      "体力 +23",
      "🎯 [怒气爆发] 等级 +2",
      "感电抗性 +5%"
    ],
    "skillDescs": [
      "[怒气爆发] Lv+2"
    ],
    "specialDesc": null
  },
  "5_177": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +23"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [邪光斩] 等级 +2"
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +5"
      }
    ],
    "optionDescs": [
      "体力 +23",
      "🎯 [邪光斩] 等级 +2",
      "词条[0x2A]: +5"
    ],
    "skillDescs": [
      "[邪光斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_178": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +25"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [死亡墓碑] 等级 +2"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +25",
      "🎯 [死亡墓碑] 等级 +2",
      "光属性抗性 +6"
    ],
    "skillDescs": [
      "[死亡墓碑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_179": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +25"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [猛龙断空斩] 等级 +2"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +25",
      "🎯 [猛龙断空斩] 等级 +2",
      "暗属性抗性 +6"
    ],
    "skillDescs": [
      "[猛龙断空斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_180": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +25"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂封魔斩] 等级 +2"
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +6%"
      }
    ],
    "optionDescs": [
      "体力 +25",
      "🎯 [嗜魂封魔斩] 等级 +2",
      "眩晕抗性 +6%"
    ],
    "skillDescs": [
      "[嗜魂封魔斩] Lv+2"
    ],
    "specialDesc": null
  },
  "5_181": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +25"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [爆炎·波动剑] 等级 +2"
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +6%"
      }
    ],
    "optionDescs": [
      "体力 +25",
      "🎯 [爆炎·波动剑] 等级 +2",
      "冰冻抗性 +6%"
    ],
    "skillDescs": [
      "[爆炎·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "5_182": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼影闪] 等级 +3"
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "🎯 [鬼影闪] 等级 +3",
      "火属性抗性 +7"
    ],
    "skillDescs": [
      "[鬼影闪] Lv+3"
    ],
    "specialDesc": null
  },
  "5_183": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [幻影剑舞] 等级 +3"
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "🎯 [幻影剑舞] 等级 +3",
      "冰属性抗性 +7"
    ],
    "skillDescs": [
      "[幻影剑舞] Lv+3"
    ],
    "specialDesc": null
  },
  "5_184": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [崩山裂地斩] 等级 +3"
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +7"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "🎯 [崩山裂地斩] 等级 +3",
      "词条[0x2D]: +7"
    ],
    "skillDescs": [
      "[崩山裂地斩] Lv+3"
    ],
    "specialDesc": null
  },
  "5_185": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [不动明王阵] 等级 +3"
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +7"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "🎯 [不动明王阵] 等级 +3",
      "词条[0x2E]: +7"
    ],
    "skillDescs": [
      "[不动明王阵] Lv+3"
    ],
    "specialDesc": null
  },
  "5_186": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +28"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [第七鬼神：邪神之怖拉修] 等级 +3"
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +8"
      }
    ],
    "optionDescs": [
      "体力 +28",
      "🎯 [第七鬼神：邪神之怖拉修] 等级 +3",
      "光属性抗性 +8"
    ],
    "skillDescs": [
      "[第七鬼神：邪神之怖拉修] Lv+3"
    ],
    "specialDesc": null
  },
  "5_187": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +28"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [极·鬼剑术暴风式] 等级 +3"
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +8"
      }
    ],
    "optionDescs": [
      "体力 +28",
      "🎯 [极·鬼剑术暴风式] 等级 +3",
      "暗属性抗性 +8"
    ],
    "skillDescs": [
      "[极·鬼剑术暴风式] Lv+3"
    ],
    "specialDesc": null
  },
  "5_188": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +28"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [魔狱血刹] 等级 +3"
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +8"
      }
    ],
    "optionDescs": [
      "体力 +28",
      "🎯 [魔狱血刹] 等级 +3",
      "词条[0x2F]: +8"
    ],
    "skillDescs": [
      "[魔狱血刹] Lv+3"
    ],
    "specialDesc": null
  },
  "5_189": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +28"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [暗天波动眼] 等级 +3"
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +8%"
      }
    ],
    "optionDescs": [
      "体力 +28",
      "🎯 [暗天波动眼] 等级 +3",
      "出血抗性 +8%"
    ],
    "skillDescs": [
      "[暗天波动眼] Lv+3"
    ],
    "specialDesc": null
  },
  "6_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +10"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +7"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +10"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +15"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +13"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +25"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +25"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +16"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +16"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +19"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +19"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +25"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +35"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +35"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +21"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +21"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      },
      {
        "code": 20,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +20",
      "火属性抗性 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      },
      {
        "code": 21,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +1"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +10",
      "冰属性抗性 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      },
      {
        "code": 37,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +1%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +20",
      "出血抗性 +1%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 38,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +1"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +10",
      "词条[0x26]: +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +2"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +30",
      "光属性抗性 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +15"
      },
      {
        "code": 23,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +2"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +15",
      "暗属性抗性 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      },
      {
        "code": 39,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "灼伤抗性 +2%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +30",
      "灼伤抗性 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 40,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x28]: +2"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +15",
      "词条[0x28]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +40",
      "火属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +20",
      "冰属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +3%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +40",
      "感电抗性 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +20",
      "词条[0x2A]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +50",
      "光属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +25",
      "暗属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +50",
      "眩晕抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +25",
      "冰冻抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +60",
      "火属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +30",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +60",
      "词条[0x2D]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +30",
      "词条[0x2E]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +70"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +70",
      "光属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +35"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +35",
      "暗属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +70"
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +70",
      "词条[0x2F]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +6%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +35",
      "出血抗性 +6%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +2"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +40",
      "火属性抗性 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +2"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +20",
      "冰属性抗性 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +2%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +40",
      "出血抗性 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +2"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +25",
      "词条[0x26]: +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +60",
      "光属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +25",
      "暗属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "灼伤抗性 +3%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +60",
      "灼伤抗性 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x28]: +3"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +30",
      "词条[0x28]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +80",
      "火属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +30",
      "冰属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +80"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +80",
      "感电抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +35",
      "词条[0x2A]: +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +100"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +100",
      "光属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +35"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +35",
      "暗属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +5%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +100",
      "眩晕抗性 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +40"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +5%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +40",
      "冰冻抗性 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +120"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +120",
      "火属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +40"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +40",
      "冰属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +120"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +120",
      "词条[0x2D]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +45"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +45",
      "词条[0x2E]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +140"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +140",
      "光属性抗性 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +45"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +45",
      "暗属性抗性 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +140"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +140",
      "词条[0x2F]: +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +50"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +7%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +50",
      "出血抗性 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_158": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +40",
      "火属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_159": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +20",
      "冰属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_160": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +3%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +40",
      "感电抗性 +3%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_161": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +20"
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +3"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +20",
      "词条[0x2A]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_162": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +50",
      "光属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_163": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +25"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +25",
      "暗属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_164": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +50",
      "眩晕抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_165": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +25"
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +25",
      "冰冻抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_166": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +60",
      "火属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_167": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +30",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_168": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +60",
      "词条[0x2D]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_169": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +5"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +30",
      "词条[0x2E]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_170": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +70"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "MP MAX +70",
      "光属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_171": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +35"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "力量 +35",
      "暗属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_172": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +70"
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "HP MAX +70",
      "词条[0x2F]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_173": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +6%"
      }
    ],
    "optionDescs": [
      "移动速度 +2",
      "精神 +35",
      "出血抗性 +6%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_174": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +80",
      "火属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_175": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +30",
      "冰属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_176": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +80"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "感电抗性 +4%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +80",
      "感电抗性 +4%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_177": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +35"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +4"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +35",
      "词条[0x2A]: +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_178": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +100"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +100",
      "光属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_179": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +35"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +5"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +35",
      "暗属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_180": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "眩晕抗性 +5%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +100",
      "眩晕抗性 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_181": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +40"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +5%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +40",
      "冰冻抗性 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_182": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +120"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +120",
      "火属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_183": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +40"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +40",
      "冰属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_184": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +120"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2D]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +120",
      "词条[0x2D]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_185": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +45"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2E]: +6"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +45",
      "词条[0x2E]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_186": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +140"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "MP MAX +140",
      "光属性抗性 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_187": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +45"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "力量 +45",
      "暗属性抗性 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_188": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +140"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +7"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "HP MAX +140",
      "词条[0x2F]: +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "6_189": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +50"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "出血抗性 +7%"
      }
    ],
    "optionDescs": [
      "移动速度 +3",
      "精神 +50",
      "出血抗性 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_2": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_3": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_4": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_5": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_6": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_7": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_8": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_9": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_10": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_11": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_12": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_13": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +6"
      }
    ],
    "optionDescs": [
      "体力 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_14": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_15": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      }
    ],
    "optionDescs": [
      "体力 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_17": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      }
    ],
    "optionDescs": [
      "体力 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_18": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_19": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      }
    ],
    "optionDescs": [
      "体力 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_20": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      }
    ],
    "optionDescs": [
      "体力 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_21": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      }
    ],
    "optionDescs": [
      "体力 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_22": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      }
    ],
    "optionDescs": [
      "体力 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_23": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      }
    ],
    "optionDescs": [
      "体力 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_24": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      },
      {
        "code": 12,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +50"
      }
    ],
    "optionDescs": [
      "体力 +7",
      "物理防御力 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_25": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +7"
      },
      {
        "code": 47,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2F]: +5"
      }
    ],
    "optionDescs": [
      "体力 +7",
      "词条[0x2F]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_26": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "所有属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_27": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "MP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_28": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      }
    ],
    "optionDescs": [
      "体力 +9",
      "HP MAX +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_29": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +3"
      }
    ],
    "optionDescs": [
      "体力 +9",
      "光属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_30": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "移动速度 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_31": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +11",
      "🎯 [月光斩] 等级 +1"
    ],
    "skillDescs": [
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "7_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 18,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +9%"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "命中率 +9%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_33": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +4"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "暗属性抗性 +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_34": {
    "base1": 14081,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +5"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "词条[0x26]: +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_35": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +6"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "词条[0x26]: +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_36": {
    "base1": 15361,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "HP MAX +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_37": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "🎯 [上挑] 等级 +1"
    ],
    "skillDescs": [
      "[上挑] Lv+1"
    ],
    "specialDesc": null
  },
  "7_38": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +6"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "冰属性抗性 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_39": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +1"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "🎯 [地裂·波动剑] 等级 +1"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+1"
    ],
    "specialDesc": null
  },
  "7_40": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 12,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +100"
      },
      {
        "code": 13,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "魔法防御力 +80"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "物理防御力 +100",
      "魔法防御力 +80"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_41": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +8"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 16,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +20"
      }
    ],
    "optionDescs": [
      "体力 +8",
      "HP MAX +50",
      "硬直恢复 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_42": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +10"
      },
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +5"
      }
    ],
    "optionDescs": [
      "体力 +9",
      "所有属性抗性 +10",
      "智力 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_43": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +9"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +1"
      },
      {
        "code": 44,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "冰冻抗性 +2%"
      }
    ],
    "optionDescs": [
      "体力 +9",
      "🎯 [十字斩] 等级 +1",
      "冰冻抗性 +2%"
    ],
    "skillDescs": [
      "[十字斩] Lv+1"
    ],
    "specialDesc": null
  },
  "7_44": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +150"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "HP MAX +150",
      "MP MAX +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_45": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +10"
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +5"
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +5%"
      }
    ],
    "optionDescs": [
      "体力 +10",
      "词条[0x26]: +5",
      "回避率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_46": {
    "base1": 8961,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "体力 +11",
      "移动速度 +2",
      "HP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_47": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +200"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "物理防御力 +200",
      "暴击率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_48": {
    "base1": 11521,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +6"
      },
      {
        "code": 39,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "灼伤抗性 +6%"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "火属性抗性 +6",
      "灼伤抗性 +6%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_49": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +50"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "所有属性抗性 +5",
      "硬直恢复 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_50": {
    "base1": 14081,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x26]: +6"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "词条[0x26]: +6",
      "暗属性抗性 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_51": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 14,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +60"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "精神 +12",
      "追加伤害 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_52": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +200"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "HP MAX +200",
      "MP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_53": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +2"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [上挑] 等级 +2",
      "HP MAX +100"
    ],
    "skillDescs": [
      "[上挑] Lv+2"
    ],
    "specialDesc": null
  },
  "7_54": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +8"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "冰属性抗性 +8",
      "硬直恢复 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_55": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +2"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "🎯 [地裂·波动剑] 等级 +2",
      "所有属性抗性 +5"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "7_56": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +12"
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +2"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "体力 +12",
      "所有属性抗性 +2",
      "暴击率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_57": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +14"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +5"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +45"
      }
    ],
    "optionDescs": [
      "体力 +14",
      "HP、MP恢复 +5",
      "硬直恢复 +45"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_58": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +16"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +3"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +100"
      }
    ],
    "optionDescs": [
      "体力 +16",
      "移动速度 +3",
      "追加伤害 +100"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_59": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +8"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "HP、MP恢复 +8",
      "所有属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_60": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +60"
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +240"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "物理攻击力 +60",
      "物理防御力 +240"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_61": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +18"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +100"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "体力 +18",
      "追加伤害 +100",
      "🎯 [鬼斩] 等级 +3"
    ],
    "skillDescs": [
      "[鬼斩] Lv+3"
    ],
    "specialDesc": null
  },
  "7_62": {
    "base1": 10241,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +11"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      }
    ],
    "optionDescs": [
      "体力 +11",
      "HP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_63": {
    "base1": 12801,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +13"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +13",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_64": {
    "base1": 15361,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +6"
      }
    ],
    "optionDescs": [
      "体力 +15",
      "HP、MP恢复 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_65": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +19"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +2"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "体力 +19",
      "🎯 [上挑] 等级 +2",
      "HP MAX +100"
    ],
    "skillDescs": [
      "[上挑] Lv+2"
    ],
    "specialDesc": null
  },
  "7_66": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +19"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +8"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "体力 +19",
      "冰属性抗性 +8",
      "硬直恢复 +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_67": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +19"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [地裂·波动剑] 等级 +2"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +19",
      "🎯 [地裂·波动剑] 等级 +2",
      "所有属性抗性 +5"
    ],
    "skillDescs": [
      "[地裂·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "7_68": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +8"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "HP、MP恢复 +8",
      "所有属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_69": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +60"
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0,
        "desc": "物理防御力 +240"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "物理攻击力 +60",
      "物理防御力 +240"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_70": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +27"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +100"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "体力 +27",
      "追加伤害 +100",
      "🎯 [鬼斩] 等级 +3"
    ],
    "skillDescs": [
      "[鬼斩] Lv+3"
    ],
    "specialDesc": null
  },
  "7_71": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 36,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +36"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      }
    ],
    "optionDescs": [
      "体力 +36",
      "HP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_72": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +40"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "体力 +40",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_73": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 44,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +44"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +6"
      }
    ],
    "optionDescs": [
      "体力 +44",
      "HP、MP恢复 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "7_74": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 3,
        "p1": 48,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +48"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [上挑] 等级 +2"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      }
    ],
    "optionDescs": [
      "体力 +48",
      "🎯 [上挑] 等级 +2",
      "HP MAX +100"
    ],
    "skillDescs": [
      "[上挑] Lv+2"
    ],
    "specialDesc": null
  },
  "8_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_2": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_3": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_4": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_5": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_6": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_7": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_8": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_9": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_10": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_11": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_12": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +6"
      }
    ],
    "optionDescs": [
      "精神 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_13": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +6"
      }
    ],
    "optionDescs": [
      "精神 +6"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_14": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_15": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_16": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_17": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      }
    ],
    "optionDescs": [
      "精神 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_18": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      }
    ],
    "optionDescs": [
      "精神 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_19": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_20": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_21": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      }
    ],
    "optionDescs": [
      "精神 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_22": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      }
    ],
    "optionDescs": [
      "精神 +13"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_23": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      }
    ],
    "optionDescs": [
      "精神 +14"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_24": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +10"
      }
    ],
    "optionDescs": [
      "精神 +7",
      "HP MAX +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_25": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +15"
      }
    ],
    "optionDescs": [
      "精神 +7",
      "MP MAX +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_26": {
    "base1": 3841,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +2"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "光属性抗性 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_27": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      },
      {
        "code": 8,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +12"
      }
    ],
    "optionDescs": [
      "精神 +9",
      "MP恢复 +12"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_28": {
    "base1": 6401,
    "base2": 5125,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv10 出血"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "攻击时 2% 几率造成 Lv10 出血"
    ],
    "skillDescs": [],
    "specialDesc": "🗡️ 致命出血：攻击时以 2% 几率使敌人陷入出血状态"
  },
  "8_29": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +3"
      }
    ],
    "optionDescs": [
      "精神 +11",
      "暗属性抗性 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_30": {
    "base1": 8961,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +7%"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "命中率 +7%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_31": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +2%"
      }
    ],
    "optionDescs": [
      "精神 +13",
      "暴击率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_32": {
    "base1": 11521,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x2A]: +4"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "词条[0x2A]: +4"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_33": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 24,
        "p1": 49,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [不屈意志] 等级 +1"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "🎯 [不屈意志] 等级 +1"
    ],
    "skillDescs": [
      "[不屈意志] Lv+1"
    ],
    "specialDesc": null
  },
  "8_34": {
    "base1": 14081,
    "base2": 11275,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_35": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [嗜魂之手] 等级 +1"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "🎯 [嗜魂之手] 等级 +1"
    ],
    "skillDescs": [
      "[嗜魂之手] Lv+1"
    ],
    "specialDesc": null
  },
  "8_36": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +60"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "HP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_37": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "desc": "🎯 [月光斩] 等级 +1"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "🎯 [月光斩] 等级 +1"
    ],
    "skillDescs": [
      "[月光斩] Lv+1"
    ],
    "specialDesc": null
  },
  "8_38": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +60"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "MP MAX +60"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_39": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +10"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "所有属性抗性 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_40": {
    "base1": 1280,
    "base2": 1495,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +30"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "硬直恢复 +30",
      "MP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_41": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +8"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +20"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "精神 +8",
      "MP MAX +20",
      "🎯 [裂波斩] 等级 +2"
    ],
    "skillDescs": [
      "[裂波斩] Lv+2"
    ],
    "specialDesc": null
  },
  "8_42": {
    "base1": 3841,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +9"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "光属性抗性 +3"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x28]: +3"
      }
    ],
    "optionDescs": [
      "精神 +9",
      "光属性抗性 +3",
      "词条[0x28]: +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_43": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "MP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +10",
      "MP MAX +50",
      "MP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_44": {
    "base1": 6401,
    "base2": 7475,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      },
      {
        "code": 23,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +10"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [鬼斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "精神 +11",
      "暗属性抗性 +10",
      "🎯 [鬼斩] 等级 +2"
    ],
    "skillDescs": [
      "[鬼斩] Lv+2"
    ],
    "specialDesc": null
  },
  "8_45": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +12"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +30"
      }
    ],
    "optionDescs": [
      "精神 +12",
      "HP MAX +50",
      "MP MAX +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_46": {
    "base1": 8961,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +13"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [暴走] 等级 +2"
      }
    ],
    "optionDescs": [
      "精神 +13",
      "命中率 +10%",
      "🎯 [暴走] 等级 +2"
    ],
    "skillDescs": [
      "[暴走] Lv+2"
    ],
    "specialDesc": null
  },
  "8_47": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [冰刃·波动剑] 等级 +2"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "暴击率 +5%",
      "🎯 [冰刃·波动剑] 等级 +2"
    ],
    "skillDescs": [
      "[冰刃·波动剑] Lv+2"
    ],
    "specialDesc": null
  },
  "8_48": {
    "base1": 11521,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +45"
      },
      {
        "code": 14,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +35"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "硬直恢复 +45",
      "追加伤害 +35"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_49": {
    "base1": 12800,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 101,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +3"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +50"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "所有属性抗性 +3",
      "MP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_50": {
    "base1": 14081,
    "base2": 16445,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [嗜魂之手] 等级 +2"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP恢复 +5"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "🎯 [嗜魂之手] 等级 +2",
      "HP恢复 +5"
    ],
    "skillDescs": [
      "[嗜魂之手] Lv+2"
    ],
    "specialDesc": null
  },
  "8_51": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +100"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP MAX +100",
      "暴击率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_52": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 24,
        "p1": 4,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [三段斩(一段)] 等级 +2"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +60"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "🎯 [三段斩(一段)] 等级 +2",
      "硬直恢复 +60"
    ],
    "skillDescs": [
      "[三段斩(一段)] Lv+2"
    ],
    "specialDesc": null
  },
  "8_53": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +8"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "MP MAX +80",
      "冰属性抗性 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_54": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +55"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "力量 +20",
      "物理攻击力 +55"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_55": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +18"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +5"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +50"
      }
    ],
    "optionDescs": [
      "精神 +18",
      "HP、MP恢复 +5",
      "追加伤害 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_56": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +14"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 14,
        "p3": 0,
        "desc": "攻击时 2% 几率造成 Lv14 灼伤"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "火属性抗性 +5"
      }
    ],
    "optionDescs": [
      "精神 +14",
      "攻击时 2% 几率造成 Lv14 灼伤",
      "火属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": "🔥 烈焰灼伤：攻击时以 2% 几率使敌人陷入灼伤状态"
  },
  "8_57": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +17"
      },
      {
        "code": 11,
        "p1": 72,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力 +72"
      },
      {
        "code": 13,
        "p1": 147,
        "p2": 0,
        "p3": 0,
        "desc": "魔法防御力 +147"
      }
    ],
    "optionDescs": [
      "精神 +17",
      "魔法攻击力 +72",
      "魔法防御力 +147"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_58": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +19"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "暗属性抗性 +7"
      },
      {
        "code": 14,
        "p1": 54,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +54"
      }
    ],
    "optionDescs": [
      "精神 +19",
      "暗属性抗性 +7",
      "追加伤害 +54"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_59": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +6"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "HP、MP恢复 +6",
      "🎯 [十字斩] 等级 +3"
    ],
    "skillDescs": [
      "[十字斩] Lv+3"
    ],
    "specialDesc": null
  },
  "8_60": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +4"
      },
      {
        "code": 9,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +9"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "所有属性抗性 +4",
      "HP、MP恢复 +9"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_61": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +64"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "追加伤害 +64",
      "所有属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_62": {
    "base1": 3841,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +7"
      }
    ],
    "optionDescs": [
      "精神 +7"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_63": {
    "base1": 8961,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +10"
      }
    ],
    "optionDescs": [
      "精神 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_64": {
    "base1": 10241,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +11"
      }
    ],
    "optionDescs": [
      "精神 +11"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_65": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +15"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +15"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +50"
      }
    ],
    "optionDescs": [
      "精神 +15",
      "智力 +15",
      "HP MAX +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_66": {
    "base1": 14081,
    "base2": 11275,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +16"
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +5"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +5"
      }
    ],
    "optionDescs": [
      "智力 +16",
      "移动速度 +5",
      "冰属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +16"
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +2"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "desc": "🎯 [裂波斩] 等级 +2"
      }
    ],
    "optionDescs": [
      "精神 +16",
      "所有属性抗性 +2",
      "🎯 [裂波斩] 等级 +2"
    ],
    "skillDescs": [
      "[裂波斩] Lv+2"
    ],
    "specialDesc": null
  },
  "8_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +8"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "MP MAX +80",
      "冰属性抗性 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +55"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "力量 +20",
      "物理攻击力 +55"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +21"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +5"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +50"
      }
    ],
    "optionDescs": [
      "精神 +21",
      "HP、MP恢复 +5",
      "追加伤害 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_71": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 9,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +7"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "精神 +30",
      "HP、MP恢复 +7",
      "🎯 [十字斩] 等级 +3"
    ],
    "skillDescs": [
      "[十字斩] Lv+3"
    ],
    "specialDesc": null
  },
  "8_72": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +4"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +10"
      }
    ],
    "optionDescs": [
      "精神 +30",
      "所有属性抗性 +4",
      "HP、MP恢复 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_73": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +30"
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +64"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +5"
      }
    ],
    "optionDescs": [
      "精神 +30",
      "追加伤害 +64",
      "所有属性抗性 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_74": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 39,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +39"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +80"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +8"
      }
    ],
    "optionDescs": [
      "精神 +39",
      "MP MAX +80",
      "冰属性抗性 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_75": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 44,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +44"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力 +55"
      }
    ],
    "optionDescs": [
      "精神 +44",
      "力量 +20",
      "物理攻击力 +55"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_76": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 48,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +48"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +5"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "追加伤害 +50"
      }
    ],
    "optionDescs": [
      "精神 +48",
      "HP、MP恢复 +5",
      "追加伤害 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "8_77": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 4,
        "p1": 52,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +52"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +10"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "desc": "🎯 [十字斩] 等级 +3"
      }
    ],
    "optionDescs": [
      "精神 +52",
      "HP、MP恢复 +10",
      "🎯 [十字斩] 等级 +3"
    ],
    "skillDescs": [
      "[十字斩] Lv+3"
    ],
    "specialDesc": null
  },
  "9_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_1": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +30"
      },
      {
        "code": 6,
        "p1": 75,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +75"
      },
      {
        "code": 9,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +2"
      }
    ],
    "optionDescs": [
      "HP MAX +30",
      "MP MAX +75",
      "HP、MP恢复 +2"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_2": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +20"
      },
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +1"
      }
    ],
    "optionDescs": [
      "HP MAX +20",
      "移动速度 +1"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_3": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +40"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "回避率 +2%"
      }
    ],
    "optionDescs": [
      "HP MAX +40",
      "回避率 +2%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_4": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "所有属性抗性 +10"
      }
    ],
    "optionDescs": [
      "MP MAX +40",
      "智力 +10",
      "所有属性抗性 +10"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_5": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +40"
      },
      {
        "code": 21,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "冰属性抗性 +10"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +20"
      }
    ],
    "optionDescs": [
      "MP MAX +40",
      "冰属性抗性 +10",
      "力量 +20"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_6": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +10"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +3%"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +30"
      }
    ],
    "optionDescs": [
      "力量 +10",
      "暴击率 +3%",
      "硬直恢复 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_7": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +12"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +10"
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +15"
      }
    ],
    "optionDescs": [
      "力量 +12",
      "智力 +10",
      "体力 +15"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_8": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 152,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力增加 +10%"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "体力 +40"
      }
    ],
    "optionDescs": [
      "物理攻击力增加 +10%",
      "力量 +30",
      "体力 +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_9": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 153,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力增加 +10%"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "desc": "精神 +40"
      }
    ],
    "optionDescs": [
      "魔法攻击力增加 +10%",
      "智力 +30",
      "精神 +40"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_10": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      },
      {
        "code": 109,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "暴击伤害增加 +20%"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +50"
      }
    ],
    "optionDescs": [
      "暴击率 +10%",
      "暴击伤害增加 +20%",
      "硬直恢复 +50"
    ],
    "skillDescs": [],
    "specialDesc": "💥 暴击增幅：暴击伤害增加 +20%"
  },
  "9_11": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 154,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x9A]: +20"
      },
      {
        "code": 155,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x9B]: +30"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +8"
      }
    ],
    "optionDescs": [
      "词条[0x9A]: +20",
      "词条[0x9B]: +30",
      "HP、MP恢复 +8"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "9_12": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x60]: +20"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 9,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +3"
      }
    ],
    "optionDescs": [
      "词条[0x60]: +20",
      "移动速度 +2",
      "HP、MP恢复 +3"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "10_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [],
    "optionDescs": [],
    "skillDescs": [],
    "specialDesc": null
  },
  "10_1": {
    "base1": 1281,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 126,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +7%"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +5%"
      }
    ],
    "optionDescs": [
      "HP MAX +7%",
      "暴击率 +5%"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 7% 几率恢复 HP"
  },
  "10_2": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 152,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "物理攻击力增加 +10%"
      },
      {
        "code": 126,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "HP MAX +15%"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "力量 +30"
      }
    ],
    "optionDescs": [
      "物理攻击力增加 +10%",
      "HP MAX +15%",
      "力量 +30"
    ],
    "skillDescs": [],
    "specialDesc": "💚 灵魂汲取：攻击时以 15% 几率恢复 HP"
  },
  "10_3": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 153,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "魔法攻击力增加 +10%"
      },
      {
        "code": 127,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "desc": "MP MAX +15%"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "desc": "智力 +30"
      }
    ],
    "optionDescs": [
      "魔法攻击力增加 +10%",
      "MP MAX +15%",
      "智力 +30"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "10_4": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x60]: +20"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0,
        "desc": "攻击时 10% 几率削减敌人当前 HP 10%"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "词条[0x60]: +20",
      "攻击时 10% 几率削减敌人当前 HP 10%",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": "🩸 神器削血：攻击时以 10% 几率削减敌人当前 HP 10%"
  },
  "10_5": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "暴击率 +10%"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "desc": "移动速度 +2"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "desc": "硬直恢复 +50"
      }
    ],
    "optionDescs": [
      "暴击率 +10%",
      "移动速度 +2",
      "硬直恢复 +50"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "10_6": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 154,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x9A]: +10"
      },
      {
        "code": 155,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x9B]: +20"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "命中率 +10%"
      }
    ],
    "optionDescs": [
      "词条[0x9A]: +10",
      "词条[0x9B]: +20",
      "命中率 +10%"
    ],
    "skillDescs": [],
    "specialDesc": null
  },
  "10_7": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "无属性",
    "options": [
      {
        "code": 158,
        "p1": 0,
        "p2": 0,
        "p3": 0,
        "desc": "词条[0x9E]: +0"
      },
      {
        "code": 159,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "desc": "金币获得量 +10%"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "desc": "HP、MP恢复 +5"
      }
    ],
    "optionDescs": [
      "词条[0x9E]: +0",
      "金币获得量 +10%",
      "HP、MP恢复 +5"
    ],
    "skillDescs": [],
    "specialDesc": null
  }
};

export function getEquipInnateInfo(typeId: number, itemId: number): EquipInnateInfo | null {
  const key = `${typeId}_${itemId}`
  return EQUIP_INNATE_DATABASE[key] || null
}
