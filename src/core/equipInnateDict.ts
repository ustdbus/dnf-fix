// 官方 0.etc 完整提取全量装备固有属性数据库
// 包含 11 类装备的基础物理/魔法攻防、四维、耐久度、固有属性攻击与特殊能力 (如削血、冰冻等)

export interface EquipInnateOption {
  code: number
  p1: number
  p2: number
  p3: number
}

export interface EquipInnateInfo {
  base1: number        // 基础物理攻击/防御
  base2: number        // 基础魔法攻击/防御
  stat4: number        // 基础四维属性
  durability: number   // 耐久度
  element: 'fire' | 'ice' | 'light' | 'dark' | 'none'
  elementName: string
  options: EquipInnateOption[]
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 8,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 42,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 38,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 10,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 10,
        "p2": 7,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 11,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 9,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 19,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 5,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 22,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 35,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 15,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 40,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 200,
        "p3": 100
      },
      {
        "code": 75,
        "p1": 3,
        "p2": 200,
        "p3": 100
      }
    ],
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 35,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 5,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 56,
        "p1": 60,
        "p2": 30,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 5,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 29,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 19,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 5,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 400,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 11,
        "p1": 5,
        "p2": 20,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 17,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 21,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 28,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 3,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 13,
        "p1": 44,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 11,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 25,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 20,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 15,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 3,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 75,
        "p1": 2,
        "p2": 200,
        "p3": 100
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 28,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 7,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 100,
        "p3": 10
      },
      {
        "code": 26,
        "p1": 4,
        "p2": 12,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 50,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 40,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 120,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 120,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 29,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 24,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 28,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 76,
        "p1": 2,
        "p2": 100,
        "p3": 300
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 8,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 16,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 80,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 90,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 29,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 120,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 56,
        "p1": 2,
        "p2": 15,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 50,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 250,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 13,
        "p1": 400,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 5,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 10,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 20,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 23,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 10,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 29,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 125,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 20,
        "p3": 10
      }
    ],
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
        "p3": 0
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 125,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 200,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 100,
        "p3": 200
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 4,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 30,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 32,
        "p1": 4,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 10,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 29,
        "p1": 4,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 4,
        "p2": 22,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 70,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 30,
        "p1": 4,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 80,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 74,
        "p1": 5,
        "p2": 300,
        "p3": 130
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 10,
        "p3": 0
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 96,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 55,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 42,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 120,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 130,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 140,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 220,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 3,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 170,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 400,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 11,
        "p1": 170,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 38,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 39,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 40,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 3,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 25,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 35,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 1,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 1,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 1,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 38,
        "p1": 1,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 39,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 40,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 12,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 47,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 9,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 12,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 13,
        "p1": 80,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0
      },
      {
        "code": 44,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 39,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 8,
        "p1": 12,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 10,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 49,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 23,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 35,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 24,
        "p1": 4,
        "p2": 2,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 14,
        "p3": 0
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 11,
        "p1": 72,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 13,
        "p1": 147,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 54,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 9,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 7,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0
      }
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
        "p3": 0
      },
      {
        "code": 6,
        "p1": 75,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 21,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 109,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 155,
        "p1": 30,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 3,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 126,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 127,
        "p1": 15,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 155,
        "p1": 20,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0
      }
    ],
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
        "p3": 0
      },
      {
        "code": 159,
        "p1": 10,
        "p2": 0,
        "p3": 0
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0
      }
    ],
    "specialDesc": null
  }
};

export function getEquipInnateInfo(typeId: number, itemId: number): EquipInnateInfo | null {
  const key = `${typeId}_${itemId}`
  return EQUIP_INNATE_DATABASE[key] || null
}
