// 官方 0.etc 完整提取全量装备固有属性数据库
// 纯净还原 DNF 原版装备词条面板

export interface EquipOptionLine {
  text: string
  color: 'white' | 'blue' | 'green'
}

export interface EquipInnateOption {
  code: number
  p1: number
  p2: number
  p3: number
  text: string
  color: 'white' | 'blue'
}

export interface EquipInnateInfo {
  base1: number        // 基础物理攻击/防御
  base2: number        // 基础魔法攻击/防御
  stat4: number        // 基础四维属性
  durability: number   // 耐久度
  element: 'fire' | 'ice' | 'light' | 'dark' | 'none'
  elementName: string  // '火属性攻击' | '冰属性攻击' 等，无则为空字符串
  options: EquipInnateOption[]
  lines: EquipOptionLine[]
}

export const EQUIP_INNATE_DATABASE: Record<string, EquipInnateInfo> = {
  "0_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "0_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "0_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "0_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "0_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "0_18": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      }
    ]
  },
  "0_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      }
    ]
  },
  "0_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      }
    ]
  },
  "0_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      }
    ]
  },
  "0_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      }
    ]
  },
  "0_23": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      }
    ]
  },
  "0_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "智力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +9",
        "color": "white"
      }
    ]
  },
  "0_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
  },
  "0_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "智力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +11",
        "color": "white"
      }
    ]
  },
  "0_27": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      }
    ]
  },
  "0_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "智力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +13",
        "color": "white"
      }
    ]
  },
  "0_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      }
    ]
  },
  "0_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "text": "连突刺 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      },
      {
        "text": "连突刺 Lv+1",
        "color": "blue"
      }
    ]
  },
  "0_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      },
      {
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "0_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0,
        "text": "裂波斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "裂波斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "0_33": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0,
        "text": "冰刃·波动剑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "冰刃·波动剑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "0_34": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "智力 +9",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 8,
        "p3": 0,
        "text": "攻击时2%几率造成Lv8出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +9",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv8出血",
        "color": "blue"
      }
    ]
  },
  "0_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      }
    ]
  },
  "0_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
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
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +30",
        "color": "white"
      }
    ]
  },
  "0_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      }
    ]
  },
  "0_39": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "0_40": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +15%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +15%",
        "color": "blue"
      }
    ]
  },
  "0_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "0_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0,
        "text": "攻击时2%几率造成Lv21中毒",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv21中毒",
        "color": "blue"
      }
    ]
  },
  "0_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "text": "邪光斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "0_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +15%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "中毒抗性 +15%",
        "color": "blue"
      }
    ]
  },
  "0_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2感电",
        "color": "blue"
      }
    ]
  },
  "0_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
  },
  "0_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 10",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时2%几率恢复 MP 10",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "0_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "物理防御力 +200",
        "color": "white"
      }
    ]
  },
  "0_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 1,
        "p3": 0,
        "text": "邪光波动阵 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      }
    ]
  },
  "0_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      }
    ]
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
        "text": "智力 +9",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +9",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "0_55": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "智力 +9",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +9",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "0_56": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 10,
        "p2": 7,
        "p3": 0,
        "text": "攻击时10%几率造成Lv7出血",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "攻击时10%几率造成Lv7出血",
        "color": "blue"
      },
      {
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "0_57": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0,
        "text": "短剑精通 Lv+2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "短剑精通 Lv+2",
        "color": "blue"
      },
      {
        "text": "精神 +16",
        "color": "white"
      }
    ]
  },
  "0_58": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "智力 +11",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "text": "攻击时3%几率造成Lv1眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +11",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv1眩晕",
        "color": "blue"
      }
    ]
  },
  "0_59": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +6%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "暴击率 +6%",
        "color": "blue"
      },
      {
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      }
    ]
  },
  "0_60": {
    "base1": 7681,
    "base2": 8970,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +40",
        "color": "white"
      }
    ]
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
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +70",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +70",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ]
  },
  "0_62": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      },
      {
        "code": 8,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      },
      {
        "text": "MP恢复 +9",
        "color": "white"
      }
    ]
  },
  "0_63": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +6%",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 19,
        "p3": 0,
        "text": "攻击时2%几率造成Lv19出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "暴击率 +6%",
        "color": "blue"
      },
      {
        "text": "攻击时2%几率造成Lv19出血",
        "color": "blue"
      }
    ]
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
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 5,
        "p3": 0,
        "text": "攻击时5%几率造成Lv5出血",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv5出血",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ]
  },
  "0_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +8%",
        "color": "blue"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "暴击率 +8%",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
  },
  "0_66": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 22,
        "p3": 0,
        "text": "攻击时2%几率造成Lv22灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "攻击时2%几率造成Lv22灼伤",
        "color": "blue"
      }
    ]
  },
  "0_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 2,
        "p3": 0,
        "text": "短剑精通 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "短剑精通 Lv+2",
        "color": "blue"
      }
    ]
  },
  "0_68": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +6",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "移动速度 +6",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +8",
        "color": "white"
      }
    ]
  },
  "0_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2减速",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +35",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2减速",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +35",
        "color": "white"
      }
    ]
  },
  "0_70": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 15,
        "p3": 0,
        "text": "攻击时3%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时3%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "text": "回避率 +5%",
        "color": "blue"
      }
    ]
  },
  "0_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 40,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 40",
        "color": "blue"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时2%几率恢复 MP 40",
        "color": "blue"
      },
      {
        "text": "智力 +30",
        "color": "white"
      }
    ]
  },
  "0_72": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0,
        "text": "邪光波动阵 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 1,
        "p3": 0,
        "text": "不动明王阵 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+2",
        "color": "blue"
      },
      {
        "text": "不动明王阵 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 200,
        "p3": 100,
        "text": "攻击时3%几率200秒物攻+100",
        "color": "blue"
      },
      {
        "code": 75,
        "p1": 3,
        "p2": 200,
        "p3": 100,
        "text": "攻击时3%几率200秒魔攻+100",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时3%几率200秒物攻+100",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率200秒魔攻+100",
        "color": "blue"
      }
    ]
  },
  "0_74": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "体力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "体力 +100",
        "color": "white"
      }
    ]
  },
  "0_75": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +100",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "text": "追加伤害 +100",
        "color": "blue"
      }
    ]
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
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0,
        "text": "裂波斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "裂波斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "移动速度 +6",
        "color": "blue"
      }
    ]
  },
  "0_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +210",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "MP MAX +210",
        "color": "white"
      }
    ]
  },
  "0_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 10,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +12",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +6",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "物理攻击力 +12",
        "color": "white"
      },
      {
        "text": "移动速度 +6",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "0_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 3,
        "p3": 0,
        "text": "地裂·波动剑 Lv+3",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+3",
        "color": "blue"
      },
      {
        "text": "追加伤害 +20",
        "color": "blue"
      }
    ]
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
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +35",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +35",
        "color": "white"
      }
    ]
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
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +8%",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +70",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "暴击率 +8%",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +70",
        "color": "white"
      }
    ]
  },
  "0_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 3,
        "p3": 0,
        "text": "波动刻印 Lv+3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +250",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "波动刻印 Lv+3",
        "color": "blue"
      },
      {
        "text": "MP MAX +250",
        "color": "white"
      }
    ]
  },
  "0_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0,
        "text": "邪光波动阵 Lv+3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+3",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      }
    ]
  },
  "0_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "智力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0,
        "text": "暗天波动眼 Lv+1",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +26",
        "color": "white"
      },
      {
        "text": "暗天波动眼 Lv+1",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "0_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 5,
        "p3": 0,
        "text": "刀魂之卡赞 Lv+5",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "刀魂之卡赞 Lv+5",
        "color": "blue"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "0_87": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "text": "鬼印珠 Lv+3",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +200",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "鬼印珠 Lv+3",
        "color": "blue"
      },
      {
        "text": "追加伤害 +200",
        "color": "blue"
      }
    ]
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
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 3,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+3",
        "color": "blue"
      },
      {
        "code": 56,
        "p1": 60,
        "p2": 30,
        "p3": 0,
        "text": "攻击时60%几率恢复 HP 30",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时60%几率恢复 HP 30",
        "color": "blue"
      }
    ]
  },
  "0_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 3,
        "p3": 0,
        "text": "邪光波动阵 Lv+3",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0,
        "text": "攻击时60%几率恢复 MP 20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时60%几率恢复 MP 20",
        "color": "blue"
      }
    ]
  },
  "0_90": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0,
        "text": "不动明王阵 Lv+3",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+3",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ]
  },
  "0_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "text": "智力 +42",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 5,
        "p3": 0,
        "text": "波动刻印 Lv+5",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +42",
        "color": "white"
      },
      {
        "text": "波动刻印 Lv+5",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +300",
        "color": "white"
      }
    ]
  },
  "0_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0,
        "text": "暗天波动眼 Lv+2",
        "color": "blue"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "暗天波动眼 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
  },
  "0_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "text": "智力 +33",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 3,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "体力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +33",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "体力 +100",
        "color": "white"
      }
    ]
  },
  "0_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "text": "智力 +33",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +33",
        "color": "white"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ]
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
        "text": "智力 +33",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 3,
        "p3": 0,
        "text": "裂波斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +33",
        "color": "white"
      },
      {
        "text": "裂波斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "移动速度 +5",
        "color": "blue"
      }
    ]
  },
  "0_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 33,
        "p2": 0,
        "p3": 0,
        "text": "智力 +33",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 5,
        "p2": 29,
        "p3": 0,
        "text": "攻击时5%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 210,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +210",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +33",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "text": "MP MAX +210",
        "color": "white"
      }
    ]
  },
  "0_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 51,
        "p2": 0,
        "p3": 0,
        "text": "智力 +51",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 19,
        "p2": 3,
        "p3": 0,
        "text": "修罗邪光斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 60,
        "p2": 20,
        "p3": 0,
        "text": "攻击时60%几率恢复 MP 20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +51",
        "color": "white"
      },
      {
        "text": "修罗邪光斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时60%几率恢复 MP 20",
        "color": "blue"
      }
    ]
  },
  "0_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "智力 +60",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "text": "鬼印珠 Lv+3",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +60",
        "color": "white"
      },
      {
        "text": "鬼印珠 Lv+3",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ]
  },
  "0_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 66,
        "p2": 0,
        "p3": 0,
        "text": "智力 +66",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 5,
        "p3": 0,
        "text": "邪光波动阵 Lv+5",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +400",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +66",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+5",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +400",
        "color": "white"
      }
    ]
  },
  "0_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 75,
        "p2": 0,
        "p3": 0,
        "text": "智力 +75",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 2,
        "p3": 0,
        "text": "暗天波动眼 Lv+2",
        "color": "blue"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +75",
        "color": "white"
      },
      {
        "text": "暗天波动眼 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
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
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "1_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "1_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "1_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "智力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +4",
        "color": "white"
      }
    ]
  },
  "1_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "智力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +4",
        "color": "white"
      }
    ]
  },
  "1_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "智力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +4",
        "color": "white"
      }
    ]
  },
  "1_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "智力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +4",
        "color": "white"
      }
    ]
  },
  "1_18": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +5",
        "color": "white"
      }
    ]
  },
  "1_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +5",
        "color": "white"
      }
    ]
  },
  "1_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +5",
        "color": "white"
      }
    ]
  },
  "1_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "1_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "1_23": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      }
    ]
  },
  "1_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      }
    ]
  },
  "1_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      }
    ]
  },
  "1_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
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
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
  },
  "1_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "智力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +11",
        "color": "white"
      }
    ]
  },
  "1_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      }
    ]
  },
  "1_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +5",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 1,
        "p3": 0,
        "text": "裂波斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +5",
        "color": "white"
      },
      {
        "text": "裂波斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_33": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 5,
        "p2": 20,
        "p3": 0,
        "text": "魔法攻击力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +5",
        "color": "white"
      }
    ]
  },
  "1_34": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      },
      {
        "text": "移动速度 +2",
        "color": "blue"
      }
    ]
  },
  "1_35": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1减速",
        "color": "blue"
      }
    ]
  },
  "1_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "追加伤害 +20",
        "color": "blue"
      }
    ]
  },
  "1_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_39": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 17,
        "p3": 0,
        "text": "攻击时3%几率造成Lv17出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv17出血",
        "color": "blue"
      }
    ]
  },
  "1_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 21,
        "p3": 0,
        "text": "攻击时3%几率造成Lv21中毒",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv21中毒",
        "color": "blue"
      }
    ]
  },
  "1_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1眩晕",
        "color": "blue"
      }
    ]
  },
  "1_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 2,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+2",
        "color": "blue"
      }
    ]
  },
  "1_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "text": "攻击时3%几率造成Lv1束缚",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv1束缚",
        "color": "blue"
      }
    ]
  },
  "1_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "text": "鬼斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "1_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 28,
        "p3": 0,
        "text": "攻击时2%几率造成Lv28灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv28灼伤",
        "color": "blue"
      }
    ]
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
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 3,
        "p3": 0,
        "text": "攻击时2%几率造成Lv3感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv3感电",
        "color": "blue"
      }
    ]
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
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0,
        "text": "冥炎之卡洛 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "冥炎之卡洛 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +8%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "暴击率 +8%",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 13,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "魔法防御力 +44",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "魔法防御力 +44",
        "color": "white"
      }
    ]
  },
  "1_54": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 2,
        "p3": 0,
        "text": "刀魂之卡赞 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      },
      {
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "text": "刀魂之卡赞 Lv+2",
        "color": "blue"
      }
    ]
  },
  "1_55": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "智力 +7",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +20",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +7",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +20",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "1_56": {
    "base1": 5121,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0,
        "text": "月光斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +25",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +25",
        "color": "white"
      }
    ]
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
        "text": "智力 +8",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 20,
        "p3": 0,
        "text": "攻击时2%几率削减敌人当前 HP 20%",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +8",
        "color": "white"
      },
      {
        "text": "攻击时2%几率削减敌人当前 HP 20%",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      }
    ]
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
        "text": "智力 +9",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 2,
        "p3": 0,
        "text": "月光斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +9",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "月光斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "1_59": {
    "base1": 7681,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 3,
        "p3": 0,
        "text": "刀魂之卡赞 Lv+3",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 15,
        "p3": 0,
        "text": "攻击时3%几率造成Lv15出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "刀魂之卡赞 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv15出血",
        "color": "blue"
      }
    ]
  },
  "1_60": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 1,
        "p3": 0,
        "text": "攻击时4%几率造成Lv1减速",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv1减速",
        "color": "blue"
      }
    ]
  },
  "1_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +40",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "精神 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "追加伤害 +40",
        "color": "blue"
      },
      {
        "text": "精神 +50",
        "color": "white"
      }
    ]
  },
  "1_62": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_63": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0,
        "text": "鬼影步 Lv+2",
        "color": "blue"
      },
      {
        "code": 31,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时2%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
  },
  "1_64": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 31,
        "p1": 5,
        "p2": 1,
        "p3": 0,
        "text": "攻击时5%几率造成Lv1眩晕",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv1眩晕",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ]
  },
  "1_66": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +7%",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "暴击率 +7%",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ]
  },
  "1_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "text": "MP MAX +200",
        "color": "white"
      }
    ]
  },
  "1_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 1,
        "p3": 0,
        "text": "冥炎之卡洛 Lv+1",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "冥炎之卡洛 Lv+1",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ]
  },
  "1_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 3,
        "p3": 0,
        "text": "全属性增加 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "text": "全属性增加 +20",
        "color": "blue"
      }
    ]
  },
  "1_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0,
        "text": "第七鬼神：邪神之怖拉修 Lv+1",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0,
        "text": "鬼影步 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "第七鬼神：邪神之怖拉修 Lv+1",
        "color": "blue"
      },
      {
        "text": "鬼影步 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 3,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+3",
        "color": "blue"
      },
      {
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 75,
        "p1": 2,
        "p2": 200,
        "p3": 100,
        "text": "攻击时2%几率200秒魔攻+100",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 28,
        "p3": 0,
        "text": "攻击时3%几率造成Lv28出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时2%几率200秒魔攻+100",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv28出血",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0,
        "text": "死亡墓碑 Lv+3",
        "color": "blue"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ]
  },
  "1_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ]
  },
  "1_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 70",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "攻击时2%几率恢复 MP 70",
        "color": "blue"
      },
      {
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 7,
        "p3": 0,
        "text": "攻击时4%几率造成Lv7出血",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv7出血",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +30",
        "color": "white"
      }
    ]
  },
  "1_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "智力 +12",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率削减敌人当前 HP 30%",
        "color": "blue"
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "智力 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +12",
        "color": "white"
      },
      {
        "text": "攻击时3%几率削减敌人当前 HP 30%",
        "color": "blue"
      },
      {
        "text": "智力 +40",
        "color": "white"
      }
    ]
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
        "text": "智力 +14",
        "color": "white"
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 100,
        "p3": 10,
        "text": "攻击时3%几率100秒暴击+10%",
        "color": "blue"
      },
      {
        "code": 26,
        "p1": 4,
        "p2": 12,
        "p3": 0,
        "text": "攻击时4%几率造成Lv12中毒",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +14",
        "color": "white"
      },
      {
        "text": "攻击时3%几率100秒暴击+10%",
        "color": "blue"
      },
      {
        "text": "攻击时4%几率造成Lv12中毒",
        "color": "blue"
      }
    ]
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
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 50,
        "p3": 0,
        "text": "攻击时3%几率恢复 HP 50",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 40,
        "p3": 0,
        "text": "攻击时3%几率恢复 MP 40",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "攻击时3%几率恢复 HP 50",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率恢复 MP 40",
        "color": "blue"
      }
    ]
  },
  "1_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "智力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+3",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +18",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+3",
        "color": "blue"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ]
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
        "text": "智力 +20",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +120",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +20",
        "color": "white"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +120",
        "color": "white"
      }
    ]
  },
  "1_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "智力 +22",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "智力 +40",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +120",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +22",
        "color": "white"
      },
      {
        "text": "智力 +40",
        "color": "white"
      },
      {
        "text": "追加伤害 +120",
        "color": "blue"
      }
    ]
  },
  "1_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "text": "鬼斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 2,
        "p3": 0,
        "text": "噬灵鬼斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "噬灵鬼斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "1_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "智力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +26",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +200",
        "color": "white"
      }
    ]
  },
  "1_87": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 4,
        "p2": 29,
        "p3": 0,
        "text": "攻击时4%几率造成Lv29出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      },
      {
        "text": "攻击时4%几率造成Lv29出血",
        "color": "blue"
      }
    ]
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
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +15%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 45,
        "p2": 3,
        "p3": 0,
        "text": "冥炎之卡洛 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "暴击率 +15%",
        "color": "blue"
      },
      {
        "text": "冥炎之卡洛 Lv+3",
        "color": "blue"
      }
    ]
  },
  "1_89": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时2%几率恢复 MP 50",
        "color": "blue"
      }
    ]
  },
  "1_90": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 50,
        "p2": 3,
        "p3": 0,
        "text": "短剑精通 Lv+3",
        "color": "blue"
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0,
        "text": "攻击时5%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "短剑精通 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ]
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
        "text": "智力 +39",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 3,
        "p3": 0,
        "text": "死亡墓碑 Lv+3",
        "color": "blue"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +39",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "1_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "智力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0,
        "text": "第七鬼神：邪神之怖拉修 Lv+2",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +28",
        "color": "white"
      },
      {
        "text": "第七鬼神：邪神之怖拉修 Lv+2",
        "color": "blue"
      },
      {
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ]
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
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
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
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ]
  },
  "1_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "code": 11,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "text": "魔法攻击力 +150",
        "color": "white"
      }
    ]
  },
  "1_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 24,
        "p2": 0,
        "p3": 0,
        "text": "智力 +24",
        "color": "white"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 70,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 70",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 10,
        "p2": 1,
        "p3": 0,
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +24",
        "color": "white"
      },
      {
        "text": "攻击时2%几率恢复 MP 70",
        "color": "blue"
      },
      {
        "text": "噬灵鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 47,
        "p2": 0,
        "p3": 0,
        "text": "智力 +47",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 3,
        "p3": 0,
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "text": "攻击时2%几率恢复 MP 50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +47",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时2%几率恢复 MP 50",
        "color": "blue"
      }
    ]
  },
  "1_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 56,
        "p2": 0,
        "p3": 0,
        "text": "智力 +56",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 3,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+3",
        "color": "blue"
      },
      {
        "code": 55,
        "p1": 5,
        "p2": 10,
        "p3": 0,
        "text": "攻击时5%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +56",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ]
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
        "text": "智力 +61",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0,
        "text": "鬼影闪 Lv+3",
        "color": "blue"
      },
      {
        "code": 32,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +61",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时5%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "1_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "智力 +70",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 2,
        "p3": 0,
        "text": "第七鬼神：邪神之怖拉修 Lv+2",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +70",
        "color": "white"
      },
      {
        "text": "第七鬼神：邪神之怖拉修 Lv+2",
        "color": "blue"
      },
      {
        "text": "追加伤害 +300",
        "color": "blue"
      }
    ]
  },
  "1_101": {
    "base1": 4609,
    "base2": 2538,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "智力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +6",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "1_102": {
    "base1": 768,
    "base2": 300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_1": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_3": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_4": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "2_14": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "力量 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +6",
        "color": "white"
      }
    ]
  },
  "2_15": {
    "base1": 1536,
    "base2": 846,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "力量 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +6",
        "color": "white"
      }
    ]
  },
  "2_16": {
    "base1": 1792,
    "base2": 987,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "力量 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +6",
        "color": "white"
      }
    ]
  },
  "2_17": {
    "base1": 2304,
    "base2": 1269,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "力量 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +6",
        "color": "white"
      }
    ]
  },
  "2_18": {
    "base1": 2561,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "力量 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +7",
        "color": "white"
      }
    ]
  },
  "2_19": {
    "base1": 3072,
    "base2": 1692,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "力量 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +7",
        "color": "white"
      }
    ]
  },
  "2_20": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "力量 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +7",
        "color": "white"
      }
    ]
  },
  "2_21": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
  },
  "2_22": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
  },
  "2_23": {
    "base1": 7681,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      }
    ]
  },
  "2_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      }
    ]
  },
  "2_25": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      }
    ]
  },
  "2_26": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      }
    ]
  },
  "2_27": {
    "base1": 12801,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      }
    ]
  },
  "2_28": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "力量 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +14",
        "color": "white"
      }
    ]
  },
  "2_29": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      }
    ]
  },
  "2_30": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "力量 +7",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +7",
        "color": "white"
      },
      {
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "力量 +8",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      },
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "2_32": {
    "base1": 3840,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "2_33": {
    "base1": 5121,
    "base2": 4100,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_34": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      },
      {
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_36": {
    "base1": 7681,
    "base2": 6150,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2减速",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2减速",
        "color": "blue"
      }
    ]
  },
  "2_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂之手 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      },
      {
        "text": "嗜魂之手 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_38": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "2_39": {
    "base1": 10241,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ]
  },
  "2_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "2_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 2,
        "p3": 0,
        "text": "攻击时2%几率造成Lv2感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv2感电",
        "color": "blue"
      }
    ]
  },
  "2_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0,
        "text": "血之狂暴 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "血之狂暴 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_43": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 24,
        "p3": 0,
        "text": "攻击时2%几率造成Lv24出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv24出血",
        "color": "blue"
      }
    ]
  },
  "2_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_45": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 28,
        "p3": 0,
        "text": "攻击时2%几率造成Lv28中毒",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv28中毒",
        "color": "blue"
      }
    ]
  },
  "2_46": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 76,
        "p1": 2,
        "p2": 100,
        "p3": 300,
        "text": "被击时2%几率100秒物防+300",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "被击时2%几率100秒物防+300",
        "color": "blue"
      }
    ]
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
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 1,
        "p3": 0,
        "text": "崩山裂地斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_49": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      }
    ]
  },
  "2_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_51": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "物理攻击力 +60",
        "color": "white"
      }
    ]
  },
  "2_53": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
  },
  "2_54": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "连突刺 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      },
      {
        "text": "连突刺 Lv+2",
        "color": "blue"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_55": {
    "base1": 3840,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      },
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "物理攻击力 +15",
        "color": "white"
      }
    ]
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
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 8,
        "p3": 0,
        "text": "攻击时3%几率造成Lv8灼伤",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv8灼伤",
        "color": "blue"
      },
      {
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_57": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "2_58": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "text": "崩山击 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "text": "崩山击 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +40",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "物理攻击力 +40",
        "color": "white"
      },
      {
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_60": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 16,
        "p3": 0,
        "text": "攻击时3%几率造成Lv16出血",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv16出血",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
  },
  "2_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "力量 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +80",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +14",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +80",
        "color": "blue"
      }
    ]
  },
  "2_62": {
    "base1": 10241,
    "base2": 11960,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "力量 +14",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +70",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +14",
        "color": "white"
      },
      {
        "text": "物理攻击力 +70",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      }
    ]
  },
  "2_63": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "2_64": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      },
      {
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_65": {
    "base1": 11520,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      }
    ]
  },
  "2_66": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0,
        "text": "暴走 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暴走 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 90,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +90",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +250",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "物理攻击力 +90",
        "color": "white"
      },
      {
        "text": "HP MAX +250",
        "color": "white"
      }
    ]
  },
  "2_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv29灼伤",
        "color": "blue"
      }
    ]
  },
  "2_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 26,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29中毒",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv29中毒",
        "color": "blue"
      },
      {
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +100",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "物理攻击力 +100",
        "color": "white"
      },
      {
        "text": "物理防御力 +200",
        "color": "white"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ]
  },
  "2_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +120",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "text": "物理攻击力 +120",
        "color": "white"
      }
    ]
  },
  "2_73": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率造成Lv30灼伤",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv30灼伤",
        "color": "blue"
      },
      {
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_74": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
  },
  "2_75": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_76": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +400",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "text": "物理防御力 +400",
        "color": "white"
      }
    ]
  },
  "2_77": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +300",
        "color": "white"
      }
    ]
  },
  "2_78": {
    "base1": 3840,
    "base2": 6540,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +10",
        "color": "white"
      },
      {
        "code": 56,
        "p1": 2,
        "p2": 15,
        "p3": 0,
        "text": "攻击时2%几率恢复 HP 15",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "HP恢复 +10",
        "color": "white"
      },
      {
        "text": "攻击时2%几率恢复 HP 15",
        "color": "blue"
      }
    ]
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
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 50,
        "p3": 0,
        "text": "攻击时2%几率追加伤害50",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "text": "十字斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "攻击时2%几率追加伤害50",
        "color": "blue"
      },
      {
        "text": "十字斩 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "体力 +50",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +70",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "体力 +50",
        "color": "white"
      },
      {
        "text": "物理攻击力 +70",
        "color": "white"
      }
    ]
  },
  "2_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "力量 +16",
        "color": "white"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +16",
        "color": "white"
      },
      {
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 3,
        "p3": 0,
        "text": "怒气爆发 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +16",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+3",
        "color": "blue"
      },
      {
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +250",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "text": "物理防御力 +250",
        "color": "white"
      }
    ]
  },
  "2_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +80",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +350",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "物理攻击力 +80",
        "color": "white"
      },
      {
        "text": "HP MAX +350",
        "color": "white"
      }
    ]
  },
  "2_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ]
  },
  "2_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 36,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "text": "攻击时4%几率造成Lv3减速",
        "color": "blue"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0,
        "text": "攻击时3%几率追加伤害100",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv3减速",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率追加伤害100",
        "color": "blue"
      }
    ]
  },
  "2_87": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +400",
        "color": "white"
      },
      {
        "code": 13,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "魔法防御力 +400",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "物理防御力 +400",
        "color": "white"
      },
      {
        "text": "魔法防御力 +400",
        "color": "white"
      }
    ]
  },
  "2_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "力量 +50",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "力量 +50",
        "color": "white"
      },
      {
        "text": "物理攻击力 +100",
        "color": "white"
      }
    ]
  },
  "2_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "text": "十字斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_90": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0,
        "text": "攻击时3%几率恢复 MP 20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率恢复 MP 20",
        "color": "blue"
      }
    ]
  },
  "2_91": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "力量 +35",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +35",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
  },
  "2_92": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0,
        "text": "魔狱血刹 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
  },
  "2_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "2_95": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +400",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "text": "物理防御力 +400",
        "color": "white"
      }
    ]
  },
  "2_96": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +300",
        "color": "white"
      }
    ]
  },
  "2_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "text": "力量 +42",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 5,
        "p3": 0,
        "text": "十字斩 Lv+5",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 3,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +42",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+5",
        "color": "blue"
      },
      {
        "text": "嗜魂封魔斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "2_98": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "力量 +50",
        "color": "white"
      },
      {
        "code": 56,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 20,
        "p3": 0,
        "text": "攻击时3%几率恢复 MP 20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +50",
        "color": "white"
      },
      {
        "text": "攻击时3%几率恢复 HP 30",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率恢复 MP 20",
        "color": "blue"
      }
    ]
  },
  "2_99": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "text": "力量 +55",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +55",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
  },
  "2_100": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 62,
        "p2": 0,
        "p3": 0,
        "text": "力量 +62",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 2,
        "p3": 0,
        "text": "魔狱血刹 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +62",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+2",
        "color": "blue"
      }
    ]
  },
  "3_0": {
    "base1": 1,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "3_1": {
    "base1": 257,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_2": {
    "base1": 1281,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_3": {
    "base1": 2561,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_4": {
    "base1": 4608,
    "base2": 1800,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_5": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_6": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_7": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_8": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_9": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_10": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_11": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "3_12": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
  },
  "3_13": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "light",
    "elementName": "光属性攻击",
    "options": [],
    "lines": []
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +8",
        "color": "white"
      }
    ]
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
        "text": "力量 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      }
    ]
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
        "text": "力量 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      }
    ]
  },
  "3_24": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      }
    ]
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
        "text": "力量 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      }
    ]
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
        "text": "力量 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +14",
        "color": "white"
      }
    ]
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
        "text": "力量 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      }
    ]
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
        "text": "力量 +16",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +16",
        "color": "white"
      }
    ]
  },
  "3_30": {
    "base1": 1281,
    "base2": 1025,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      }
    ]
  },
  "3_31": {
    "base1": 2561,
    "base2": 2050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      }
    ]
  },
  "3_32": {
    "base1": 4608,
    "base2": 3690,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "力量 +9",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +9",
        "color": "white"
      },
      {
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 1,
        "p3": 0,
        "text": "光剑精通 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "光剑精通 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "text": "攻击时2%几率追加伤害10",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "攻击时2%几率追加伤害10",
        "color": "blue"
      }
    ]
  },
  "3_37": {
    "base1": 8960,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 2,
        "p2": 20,
        "p3": 0,
        "text": "攻击时2%几率追加伤害20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "攻击时2%几率追加伤害20",
        "color": "blue"
      }
    ]
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
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 2,
        "p2": 1,
        "p3": 0,
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv1感电",
        "color": "blue"
      }
    ]
  },
  "3_40": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ]
  },
  "3_41": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
  },
  "3_42": {
    "base1": 11520,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 26,
        "p1": 2,
        "p2": 21,
        "p3": 0,
        "text": "攻击时2%几率造成Lv21中毒",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv21中毒",
        "color": "blue"
      }
    ]
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
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ]
  },
  "3_44": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 23,
        "p3": 0,
        "text": "攻击时2%几率造成Lv23出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv23出血",
        "color": "blue"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0,
        "text": "破军升龙击 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+1",
        "color": "blue"
      }
    ]
  },
  "3_47": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 1,
        "p3": 0,
        "text": "猛龙断空斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "3_48": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "物理攻击力 +60",
        "color": "white"
      }
    ]
  },
  "3_50": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "text": "攻击时2%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时2%几率削减敌人当前 HP 10%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 29,
        "p3": 0,
        "text": "攻击时2%几率造成Lv29灼伤",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv29灼伤",
        "color": "blue"
      }
    ]
  },
  "3_52": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "力量 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "力量 +50",
        "color": "white"
      }
    ]
  },
  "3_54": {
    "base1": 1281,
    "base2": 1495,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "3_55": {
    "base1": 2561,
    "base2": 2990,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
  },
  "3_56": {
    "base1": 4608,
    "base2": 5382,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "力量 +11",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +11",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 53,
        "p2": 2,
        "p3": 0,
        "text": "光剑精通 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "text": "光剑精通 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +13",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +13",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "text": "力量 +15",
        "color": "white"
      }
    ]
  },
  "3_59": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "3_60": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2黑暗",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2黑暗",
        "color": "blue"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "3_61": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 125,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +125",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP MAX +125",
        "color": "white"
      }
    ]
  },
  "3_62": {
    "base1": 8960,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +40",
        "color": "white"
      }
    ]
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
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 31,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2眩晕",
        "color": "blue"
      },
      {
        "text": "物理攻击力 +50",
        "color": "white"
      }
    ]
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
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0,
        "text": "破军升龙击 Lv+2",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+2",
        "color": "blue"
      },
      {
        "text": "暴击率 +4%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      }
    ]
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
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "code": 79,
        "p1": 3,
        "p2": 20,
        "p3": 10,
        "text": "攻击时3%几率20秒暴击+10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "text": "攻击时3%几率20秒暴击+10%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 30,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2黑暗",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2黑暗",
        "color": "blue"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "3_68": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 34,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 125,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +125",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "攻击时3%几率造成Lv2束缚",
        "color": "blue"
      },
      {
        "text": "MP MAX +125",
        "color": "white"
      }
    ]
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
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +10",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "HP恢复 +10",
        "color": "white"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      }
    ]
  },
  "3_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "3_71": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +20",
        "color": "blue"
      }
    ]
  },
  "3_72": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "code": 32,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv2冰冻",
        "color": "blue"
      }
    ]
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
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 200,
        "p3": 0,
        "text": "攻击时3%几率追加伤害200",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "攻击时3%几率追加伤害200",
        "color": "blue"
      },
      {
        "text": "暴击率 +7%",
        "color": "blue"
      }
    ]
  },
  "3_74": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0,
        "text": "破军升龙击 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+3",
        "color": "blue"
      }
    ]
  },
  "3_75": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 74,
        "p1": 3,
        "p2": 100,
        "p3": 200,
        "text": "攻击时3%几率100秒物攻+200",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "攻击时3%几率100秒物攻+200",
        "color": "blue"
      },
      {
        "text": "暴击率 +7%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0,
        "text": "极·鬼剑术暴风式 Lv+1",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "极·鬼剑术暴风式 Lv+1",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      }
    ]
  },
  "3_78": {
    "base1": 4608,
    "base2": 7848,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 4,
        "p3": 0,
        "text": "上挑 Lv+4",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "上挑 Lv+4",
        "color": "blue"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "3_79": {
    "base1": 5120,
    "base2": 8720,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 30,
        "p3": 0,
        "text": "攻击时3%几率追加伤害30",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "攻击时3%几率追加伤害30",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
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
        "text": "力量 +17",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +50",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +17",
        "color": "white"
      },
      {
        "text": "物理攻击力 +50",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "3_81": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "力量 +18",
        "color": "white"
      },
      {
        "code": 32,
        "p1": 4,
        "p2": 2,
        "p3": 0,
        "text": "攻击时4%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +18",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv2冰冻",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
  },
  "3_82": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "力量 +18",
        "color": "white"
      },
      {
        "code": 57,
        "p1": 3,
        "p2": 10,
        "p3": 0,
        "text": "攻击时3%几率恢复 MP 10",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +18",
        "color": "white"
      },
      {
        "text": "攻击时3%几率恢复 MP 10",
        "color": "blue"
      },
      {
        "text": "MP MAX +100",
        "color": "white"
      }
    ]
  },
  "3_83": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 29,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "text": "攻击时4%几率造成Lv3感电",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +19",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "攻击时4%几率造成Lv3感电",
        "color": "blue"
      }
    ]
  },
  "3_84": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 4,
        "p2": 22,
        "p3": 0,
        "text": "攻击时4%几率造成Lv22灼伤",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +21",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv22灼伤",
        "color": "blue"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ]
  },
  "3_85": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "力量 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0,
        "text": "拔刀斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +23",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "拔刀斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "3_86": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 70,
        "p3": 0,
        "text": "攻击时3%几率追加伤害70",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "精神 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "攻击时3%几率追加伤害70",
        "color": "blue"
      },
      {
        "text": "精神 +40",
        "color": "white"
      }
    ]
  },
  "3_88": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      },
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "全属性增加 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      },
      {
        "text": "全属性增加 +20",
        "color": "blue"
      }
    ]
  },
  "3_89": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 30,
        "p1": 4,
        "p2": 3,
        "p3": 0,
        "text": "攻击时4%几率造成Lv3黑暗",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +150",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "攻击时4%几率造成Lv3黑暗",
        "color": "blue"
      },
      {
        "text": "MP MAX +150",
        "color": "white"
      }
    ]
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
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 100,
        "p3": 0,
        "text": "攻击时3%几率追加伤害100",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "攻击时3%几率追加伤害100",
        "color": "blue"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +37",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +37",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ]
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
        "text": "力量 +27",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 15,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "code": 125,
        "p1": 3,
        "p2": 80,
        "p3": 0,
        "text": "攻击时3%几率追加伤害80",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +27",
        "color": "white"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 15%",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率追加伤害80",
        "color": "blue"
      }
    ]
  },
  "3_93": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "力量 +26",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 3,
        "p3": 0,
        "text": "破军升龙击 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +26",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+3",
        "color": "blue"
      }
    ]
  },
  "3_94": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "力量 +26",
        "color": "white"
      },
      {
        "code": 74,
        "p1": 5,
        "p2": 300,
        "p3": 130,
        "text": "攻击时5%几率300秒物攻+130",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +26",
        "color": "white"
      },
      {
        "text": "攻击时5%几率300秒物攻+130",
        "color": "blue"
      },
      {
        "text": "暴击率 +4%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +20%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +26",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "命中率 +20%",
        "color": "blue"
      }
    ]
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
        "text": "力量 +26",
        "color": "white"
      },
      {
        "code": 55,
        "p1": 3,
        "p2": 10,
        "p3": 0,
        "text": "攻击时3%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "code": 25,
        "p1": 3,
        "p2": 29,
        "p3": 0,
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +26",
        "color": "white"
      },
      {
        "text": "攻击时3%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "text": "攻击时3%几率造成Lv29出血",
        "color": "blue"
      }
    ]
  },
  "3_97": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 4,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "力量 +45",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "体力 +60",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +45",
        "color": "white"
      },
      {
        "text": "体力 +60",
        "color": "white"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
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
        "text": "力量 +54",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 3,
        "p3": 0,
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +54",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      }
    ]
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
        "text": "力量 +59",
        "color": "white"
      },
      {
        "code": 29,
        "p1": 5,
        "p2": 2,
        "p3": 0,
        "text": "攻击时5%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 3,
        "p3": 0,
        "text": "拔刀斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +59",
        "color": "white"
      },
      {
        "text": "攻击时5%几率造成Lv2感电",
        "color": "blue"
      },
      {
        "text": "拔刀斩 Lv+3",
        "color": "blue"
      }
    ]
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
        "text": "力量 +67",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 2,
        "p3": 0,
        "text": "极·鬼剑术暴风式 Lv+2",
        "color": "blue"
      },
      {
        "code": 96,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "全属性增加 +30",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +67",
        "color": "white"
      },
      {
        "text": "极·鬼剑术暴风式 Lv+2",
        "color": "blue"
      },
      {
        "text": "全属性增加 +30",
        "color": "blue"
      }
    ]
  },
  "4_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "精神 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +5",
        "color": "white"
      }
    ]
  },
  "4_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "精神 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +5",
        "color": "white"
      }
    ]
  },
  "4_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "精神 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +5",
        "color": "white"
      }
    ]
  },
  "4_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "精神 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +6",
        "color": "white"
      }
    ]
  },
  "4_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "精神 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +6",
        "color": "white"
      }
    ]
  },
  "4_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "精神 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +6",
        "color": "white"
      }
    ]
  },
  "4_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "4_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "4_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "4_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "4_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "4_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "4_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "4_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "4_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      }
    ]
  },
  "4_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      }
    ]
  },
  "4_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      }
    ]
  },
  "4_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      }
    ]
  },
  "4_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "4_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "4_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "4_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "4_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "4_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "4_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "4_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "4_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "4_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "4_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "4_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "4_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      }
    ]
  },
  "4_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      }
    ]
  },
  "4_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      }
    ]
  },
  "4_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      }
    ]
  },
  "4_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      }
    ]
  },
  "4_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      }
    ]
  },
  "4_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      }
    ]
  },
  "4_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      }
    ]
  },
  "4_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      }
    ]
  },
  "4_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      }
    ]
  },
  "4_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      }
    ]
  },
  "4_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      }
    ]
  },
  "4_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
  },
  "4_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "HP MAX +10",
        "color": "white"
      }
    ]
  },
  "4_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "HP MAX +10",
        "color": "white"
      }
    ]
  },
  "4_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "MP MAX +10",
        "color": "white"
      }
    ]
  },
  "4_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      }
    ]
  },
  "4_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +15",
        "color": "white"
      }
    ]
  },
  "4_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "4_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +2",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP恢复 +2",
        "color": "white"
      }
    ]
  },
  "4_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "HP MAX +20",
        "color": "white"
      }
    ]
  },
  "4_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +30",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "硬直恢复 +30",
        "color": "blue"
      }
    ]
  },
  "4_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "智力 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "智力 +15",
        "color": "white"
      }
    ]
  },
  "4_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      }
    ]
  },
  "4_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      }
    ]
  },
  "4_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      }
    ]
  },
  "4_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "体力 +20",
        "color": "white"
      }
    ]
  },
  "4_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "4_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "4_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +15",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +15",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "text": "回避率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +15",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "硬直恢复 +15",
        "color": "blue"
      }
    ]
  },
  "4_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "text": "命中率 +5%",
        "color": "blue"
      }
    ]
  },
  "4_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +2",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "text": "HP恢复 +2",
        "color": "white"
      }
    ]
  },
  "4_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "text": "MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "4_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      }
    ]
  },
  "4_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "text": "命中率 +5%",
        "color": "blue"
      }
    ]
  },
  "4_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "智力 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "智力 +15",
        "color": "white"
      }
    ]
  },
  "4_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "text": "力量 +10",
        "color": "white"
      }
    ]
  },
  "4_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      }
    ]
  },
  "4_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      }
    ]
  },
  "4_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "text": "回避率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "4_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "4_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "4_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "体力 +25",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "体力 +25",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      }
    ]
  },
  "4_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "智力 +20",
        "color": "white"
      }
    ]
  },
  "4_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      }
    ]
  },
  "4_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +55",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "硬直恢复 +55",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "4_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      }
    ]
  },
  "4_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "4_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "text": "MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "4_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      }
    ]
  },
  "4_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "text": "命中率 +5%",
        "color": "blue"
      }
    ]
  },
  "4_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
  },
  "4_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "力量 +10",
        "color": "white"
      }
    ]
  },
  "4_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "4_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +8%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "命中率 +8%",
        "color": "blue"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      }
    ]
  },
  "4_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "回避率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "4_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "命中率 +5%",
        "color": "blue"
      }
    ]
  },
  "4_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "4_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      }
    ]
  },
  "4_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "text": "命中率 +7%",
        "color": "blue"
      }
    ]
  },
  "4_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "精神 +22",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +22",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "智力 +10",
        "color": "white"
      }
    ]
  },
  "4_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "精神 +22",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +22",
        "color": "white"
      },
      {
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      }
    ]
  },
  "4_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "精神 +22",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 42,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +42",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +120",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +22",
        "color": "white"
      },
      {
        "text": "硬直恢复 +42",
        "color": "blue"
      },
      {
        "text": "HP MAX +120",
        "color": "white"
      }
    ]
  },
  "4_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "精神 +22",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +12%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +22",
        "color": "white"
      },
      {
        "text": "命中率 +12%",
        "color": "blue"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      }
    ]
  },
  "4_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "精神 +26",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +26",
        "color": "white"
      },
      {
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "精神 +26",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +26",
        "color": "white"
      },
      {
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "text": "物理攻击力 +30",
        "color": "white"
      }
    ]
  },
  "4_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "精神 +26",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +200",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +26",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "物理防御力 +200",
        "color": "white"
      }
    ]
  },
  "4_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "精神 +26",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +26",
        "color": "white"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +100",
        "color": "white"
      }
    ]
  },
  "4_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "4_158": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "智力 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "智力 +20",
        "color": "white"
      }
    ]
  },
  "4_159": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      }
    ]
  },
  "4_160": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +100",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "硬直恢复 +100",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "4_161": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "text": "MP MAX +100",
        "color": "white"
      }
    ]
  },
  "4_162": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_163": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "text": "回避率 +2%",
        "color": "blue"
      }
    ]
  },
  "4_164": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +100",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "text": "硬直恢复 +100",
        "color": "blue"
      }
    ]
  },
  "4_165": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP MAX +150",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_166": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "4_167": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +250",
        "color": "white"
      },
      {
        "text": "MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "4_168": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "体力 +40",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "体力 +40",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      }
    ]
  },
  "4_169": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_170": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +200",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP MAX +200",
        "color": "white"
      },
      {
        "text": "智力 +30",
        "color": "white"
      }
    ]
  },
  "4_171": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +200",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "MP MAX +200",
        "color": "white"
      },
      {
        "text": "力量 +30",
        "color": "white"
      }
    ]
  },
  "4_172": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +120",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 130,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +130",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "硬直恢复 +120",
        "color": "blue"
      },
      {
        "text": "HP MAX +130",
        "color": "white"
      }
    ]
  },
  "4_173": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +120",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "text": "MP MAX +120",
        "color": "white"
      }
    ]
  },
  "4_174": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "精神 +23",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +23",
        "color": "white"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_175": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "精神 +23",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +23",
        "color": "white"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "text": "回避率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_176": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "精神 +23",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +140",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +23",
        "color": "white"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      },
      {
        "text": "硬直恢复 +140",
        "color": "blue"
      }
    ]
  },
  "4_177": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "精神 +23",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 220,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +220",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +23",
        "color": "white"
      },
      {
        "text": "MP MAX +220",
        "color": "white"
      },
      {
        "text": "命中率 +5%",
        "color": "blue"
      }
    ]
  },
  "4_178": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +250",
        "color": "white"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "MP MAX +250",
        "color": "white"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "4_179": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +250",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "MP MAX +250",
        "color": "white"
      },
      {
        "text": "MP恢复 +4",
        "color": "white"
      }
    ]
  },
  "4_180": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "体力 +80",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "体力 +80",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "4_181": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      },
      {
        "text": "命中率 +7%",
        "color": "blue"
      }
    ]
  },
  "4_182": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "精神 +27",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +350",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "智力 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +27",
        "color": "white"
      },
      {
        "text": "HP MAX +350",
        "color": "white"
      },
      {
        "text": "智力 +50",
        "color": "white"
      }
    ]
  },
  "4_183": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "精神 +27",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 350,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +350",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "力量 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +27",
        "color": "white"
      },
      {
        "text": "HP MAX +350",
        "color": "white"
      },
      {
        "text": "力量 +50",
        "color": "white"
      }
    ]
  },
  "4_184": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "精神 +27",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +150",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 300,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +300",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +27",
        "color": "white"
      },
      {
        "text": "硬直恢复 +150",
        "color": "blue"
      },
      {
        "text": "HP MAX +300",
        "color": "white"
      }
    ]
  },
  "4_185": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "精神 +27",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +12%",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 250,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +250",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +27",
        "color": "white"
      },
      {
        "text": "命中率 +12%",
        "color": "blue"
      },
      {
        "text": "MP MAX +250",
        "color": "white"
      }
    ]
  },
  "4_186": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      }
    ]
  },
  "4_187": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 170,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +170",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "text": "物理攻击力 +170",
        "color": "white"
      }
    ]
  },
  "4_188": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +400",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 400,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +400",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "HP MAX +400",
        "color": "white"
      },
      {
        "text": "物理防御力 +400",
        "color": "white"
      }
    ]
  },
  "4_189": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 280,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 170,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +170",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "MP MAX +280",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +170",
        "color": "white"
      }
    ]
  },
  "5_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "体力 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +3",
        "color": "white"
      }
    ]
  },
  "5_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "体力 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +3",
        "color": "white"
      }
    ]
  },
  "5_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "体力 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +3",
        "color": "white"
      }
    ]
  },
  "5_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "体力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +4",
        "color": "white"
      }
    ]
  },
  "5_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "体力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +4",
        "color": "white"
      }
    ]
  },
  "5_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "体力 +4",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +4",
        "color": "white"
      }
    ]
  },
  "5_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "体力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +5",
        "color": "white"
      }
    ]
  },
  "5_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "体力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +5",
        "color": "white"
      }
    ]
  },
  "5_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "体力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +5",
        "color": "white"
      }
    ]
  },
  "5_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "体力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +5",
        "color": "white"
      }
    ]
  },
  "5_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "5_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "5_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "5_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "5_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "5_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "5_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "5_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "5_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "5_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "5_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "5_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "5_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "5_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "5_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "5_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "5_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "5_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "5_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "5_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "5_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      }
    ]
  },
  "5_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      }
    ]
  },
  "5_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      }
    ]
  },
  "5_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      }
    ]
  },
  "5_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "5_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "5_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "5_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "5_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      }
    ]
  },
  "5_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      }
    ]
  },
  "5_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      }
    ]
  },
  "5_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      }
    ]
  },
  "5_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 13,
        "p2": 1,
        "p3": 0,
        "text": "刀魂之卡赞 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      },
      {
        "text": "刀魂之卡赞 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      },
      {
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 1,
        "p3": 0,
        "text": "连突刺 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      },
      {
        "text": "连突刺 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 1,
        "p3": 0,
        "text": "鬼影步 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 1,
        "p3": 0,
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "崩山击 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 1,
        "p3": 0,
        "text": "波动刻印 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "波动刻印 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 1,
        "p3": 0,
        "text": "破极兵刃 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "破极兵刃 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 1,
        "p3": 0,
        "text": "暴走 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "暴走 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 1,
        "p3": 0,
        "text": "冰刃·波动剑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "冰刃·波动剑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 1,
        "p3": 0,
        "text": "破军升龙击 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 1,
        "p3": 0,
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 1,
        "p3": 0,
        "text": "邪光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 1,
        "p3": 0,
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 1,
        "p3": 0,
        "text": "血之狂暴 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "血之狂暴 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 1,
        "p3": 0,
        "text": "鬼印珠 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "鬼印珠 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0,
        "text": "鬼影闪 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 1,
        "p3": 0,
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 1,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "5_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 1,
        "p3": 0,
        "text": "鬼斩 Lv+1",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+1",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "5_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 3,
        "p2": 2,
        "p3": 0,
        "text": "连突刺 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "连突刺 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "5_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "出血抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "5_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "中毒抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "5_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "5_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "text": "崩山击 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "崩山击 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "5_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 15,
        "p2": 2,
        "p3": 0,
        "text": "崩山击 Lv+2",
        "color": "blue"
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "灼伤抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "崩山击 Lv+2",
        "color": "blue"
      },
      {
        "text": "灼伤抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "5_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0,
        "text": "冰刃·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "冰刃·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "5_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 41,
        "p2": 1,
        "p3": 0,
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "侵蚀之普戾蒙 Lv+1",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 1,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+1",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      },
      {
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 1,
        "p3": 0,
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+1",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 1,
        "p3": 0,
        "text": "鬼影闪 Lv+1",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+1",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "text": "鬼斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "鬼斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "5_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 2,
        "p3": 0,
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "5_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "text": "暴走 Lv+2",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "暴走 Lv+2",
        "color": "blue"
      },
      {
        "text": "出血抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "5_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 38,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "中毒抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "5_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "text": "十字斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 39,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "灼伤抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "灼伤抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 20,
        "p2": 2,
        "p3": 0,
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      },
      {
        "code": 40,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "感电抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "鬼印珠 Lv+2",
        "color": "blue"
      },
      {
        "text": "感电抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 29,
        "p2": 2,
        "p3": 0,
        "text": "破军升龙击 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "破军升龙击 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 36,
        "p2": 2,
        "p3": 0,
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "血之狂暴 Lv+2",
        "color": "blue"
      },
      {
        "text": "黑暗抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "眩晕抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰冻抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "体力 +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 23,
        "p2": 2,
        "p3": 0,
        "text": "邪光波动阵 Lv+2",
        "color": "blue"
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +20",
        "color": "white"
      },
      {
        "text": "邪光波动阵 Lv+2",
        "color": "blue"
      },
      {
        "text": "石化抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "体力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +22",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "体力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +22",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "体力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +22",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "束缚抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 22,
        "p2": 0,
        "p3": 0,
        "text": "体力 +22",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +22",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "text": "混乱抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "体力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 40,
        "p2": 2,
        "p3": 0,
        "text": "鬼影步 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +26",
        "color": "white"
      },
      {
        "text": "鬼影步 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "5_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "体力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 27,
        "p2": 2,
        "p3": 0,
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +26",
        "color": "white"
      },
      {
        "text": "破极兵刃 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "5_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "体力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "text": "暴走 Lv+2",
        "color": "blue"
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +8%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +26",
        "color": "white"
      },
      {
        "text": "暴走 Lv+2",
        "color": "blue"
      },
      {
        "text": "减速抗性 +8%",
        "color": "blue"
      }
    ]
  },
  "5_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 26,
        "p2": 0,
        "p3": 0,
        "text": "体力 +26",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 16,
        "p2": 2,
        "p3": 0,
        "text": "波动刻印 Lv+2",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +8%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +26",
        "color": "white"
      },
      {
        "text": "波动刻印 Lv+2",
        "color": "blue"
      },
      {
        "text": "出血抗性 +8%",
        "color": "blue"
      }
    ]
  },
  "5_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "5_158": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_159": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "5_160": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_161": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "5_162": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_163": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_164": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_165": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_166": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 2,
        "p3": 0,
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_167": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 2,
        "p3": 0,
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_168": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 2,
        "p3": 0,
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_169": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 2,
        "p3": 0,
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+2",
        "color": "blue"
      },
      {
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_170": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 1,
        "p3": 0,
        "text": "第七鬼神：邪神之怖拉修 Lv+1",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "第七鬼神：邪神之怖拉修 Lv+1",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_171": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 1,
        "p3": 0,
        "text": "极·鬼剑术暴风式 Lv+1",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "极·鬼剑术暴风式 Lv+1",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_172": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 1,
        "p3": 0,
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+1",
        "color": "blue"
      },
      {
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_173": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 1,
        "p3": 0,
        "text": "暗天波动眼 Lv+1",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "暗天波动眼 Lv+1",
        "color": "blue"
      },
      {
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_174": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "体力 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 42,
        "p2": 2,
        "p3": 0,
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +23",
        "color": "white"
      },
      {
        "text": "冰霜之萨亚 Lv+2",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_175": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "体力 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 28,
        "p2": 2,
        "p3": 0,
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +23",
        "color": "white"
      },
      {
        "text": "拔刀斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "5_176": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "体力 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 35,
        "p2": 2,
        "p3": 0,
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "code": 41,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +23",
        "color": "white"
      },
      {
        "text": "怒气爆发 Lv+2",
        "color": "blue"
      },
      {
        "text": "黑暗抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_177": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 23,
        "p2": 0,
        "p3": 0,
        "text": "体力 +23",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 18,
        "p2": 2,
        "p3": 0,
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 42,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +23",
        "color": "white"
      },
      {
        "text": "邪光斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "眩晕抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "5_178": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "体力 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 43,
        "p2": 2,
        "p3": 0,
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +25",
        "color": "white"
      },
      {
        "text": "死亡墓碑 Lv+2",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_179": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "体力 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 30,
        "p2": 2,
        "p3": 0,
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +25",
        "color": "white"
      },
      {
        "text": "猛龙断空斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "5_180": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "体力 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 37,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "code": 43,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +25",
        "color": "white"
      },
      {
        "text": "嗜魂封魔斩 Lv+2",
        "color": "blue"
      },
      {
        "text": "冰冻抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_181": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "体力 +25",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 22,
        "p2": 2,
        "p3": 0,
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 44,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +25",
        "color": "white"
      },
      {
        "text": "爆炎·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "石化抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "5_182": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 44,
        "p2": 3,
        "p3": 0,
        "text": "鬼影闪 Lv+3",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "鬼影闪 Lv+3",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_183": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 31,
        "p2": 3,
        "p3": 0,
        "text": "幻影剑舞 Lv+3",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "幻影剑舞 Lv+3",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "5_184": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 38,
        "p2": 3,
        "p3": 0,
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "code": 45,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "崩山裂地斩 Lv+3",
        "color": "blue"
      },
      {
        "text": "束缚抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_185": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 24,
        "p2": 3,
        "p3": 0,
        "text": "不动明王阵 Lv+3",
        "color": "blue"
      },
      {
        "code": 46,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "不动明王阵 Lv+3",
        "color": "blue"
      },
      {
        "text": "混乱抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "5_186": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "体力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 47,
        "p2": 3,
        "p3": 0,
        "text": "第七鬼神：邪神之怖拉修 Lv+3",
        "color": "blue"
      },
      {
        "code": 22,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +28",
        "color": "white"
      },
      {
        "text": "第七鬼神：邪神之怖拉修 Lv+3",
        "color": "blue"
      },
      {
        "text": "光属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "5_187": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "体力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 32,
        "p2": 3,
        "p3": 0,
        "text": "极·鬼剑术暴风式 Lv+3",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +28",
        "color": "white"
      },
      {
        "text": "极·鬼剑术暴风式 Lv+3",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "5_188": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "体力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 39,
        "p2": 3,
        "p3": 0,
        "text": "魔狱血刹 Lv+3",
        "color": "blue"
      },
      {
        "code": 47,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +8%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +28",
        "color": "white"
      },
      {
        "text": "魔狱血刹 Lv+3",
        "color": "blue"
      },
      {
        "text": "减速抗性 +8%",
        "color": "blue"
      }
    ]
  },
  "5_189": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 28,
        "p2": 0,
        "p3": 0,
        "text": "体力 +28",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 25,
        "p2": 3,
        "p3": 0,
        "text": "暗天波动眼 Lv+3",
        "color": "blue"
      },
      {
        "code": 37,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +8%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +28",
        "color": "white"
      },
      {
        "text": "暗天波动眼 Lv+3",
        "color": "blue"
      },
      {
        "text": "出血抗性 +8%",
        "color": "blue"
      }
    ]
  },
  "6_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_2": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_3": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_4": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_5": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_6": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_7": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_8": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_9": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_10": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_11": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_12": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_13": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_14": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_15": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_17": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_18": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_19": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_20": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_21": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_22": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_23": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_24": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_25": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_26": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_27": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_28": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_29": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_30": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_31": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_33": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_34": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_35": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_36": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_37": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_38": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_39": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_40": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_41": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_42": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_43": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_44": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_45": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_46": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_47": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_48": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_49": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_50": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_51": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_52": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_53": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_54": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_55": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_56": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_57": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_58": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_59": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_60": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_61": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_62": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_63": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_64": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_65": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_66": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_67": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_68": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_69": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_70": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_71": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_72": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_73": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_74": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_75": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_76": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_77": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_78": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_79": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_80": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_81": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_82": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_83": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_84": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "6_85": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 1,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +10",
        "color": "white"
      }
    ]
  },
  "6_86": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 2,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "力量 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +7",
        "color": "white"
      }
    ]
  },
  "6_87": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 3,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +10",
        "color": "white"
      }
    ]
  },
  "6_88": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 4,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "精神 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +5",
        "color": "white"
      }
    ]
  },
  "6_89": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 5,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +15",
        "color": "white"
      }
    ]
  },
  "6_90": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 6,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +10",
        "color": "white"
      }
    ]
  },
  "6_91": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 7,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +20",
        "color": "white"
      }
    ]
  },
  "6_92": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 8,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "6_93": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 9,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      }
    ]
  },
  "6_94": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 10,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "力量 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +13",
        "color": "white"
      }
    ]
  },
  "6_95": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 11,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      }
    ]
  },
  "6_96": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 12,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +15",
        "color": "white"
      }
    ]
  },
  "6_97": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 13,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +25",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +25",
        "color": "white"
      }
    ]
  },
  "6_98": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 14,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "力量 +16",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +16",
        "color": "white"
      }
    ]
  },
  "6_99": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 15,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      }
    ]
  },
  "6_100": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 16,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +20",
        "color": "white"
      }
    ]
  },
  "6_101": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 17,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      }
    ]
  },
  "6_102": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 18,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "力量 +19",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +19",
        "color": "white"
      }
    ]
  },
  "6_103": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 19,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      }
    ]
  },
  "6_104": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 20,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +25",
        "color": "white"
      }
    ]
  },
  "6_105": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 21,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +35",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +35",
        "color": "white"
      }
    ]
  },
  "6_106": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 22,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "力量 +21",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +21",
        "color": "white"
      }
    ]
  },
  "6_107": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 23,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      }
    ]
  },
  "6_108": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 24,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      }
    ]
  },
  "6_109": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 25,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "text": "火属性抗性 +1",
        "color": "blue"
      }
    ]
  },
  "6_110": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 26,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +10",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +1",
        "color": "blue"
      }
    ]
  },
  "6_111": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 27,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +1%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "text": "出血抗性 +1%",
        "color": "blue"
      }
    ]
  },
  "6_112": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 28,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +1%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "中毒抗性 +1%",
        "color": "blue"
      }
    ]
  },
  "6_113": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 29,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      },
      {
        "text": "光属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "6_114": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 30,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "力量 +15",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +15",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "6_115": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 31,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "code": 39,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "灼伤抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "text": "灼伤抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "6_116": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 32,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 40,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "感电抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "感电抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "6_117": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 33,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_118": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 34,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_119": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 35,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "黑暗抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_120": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 36,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_121": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 37,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_122": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 38,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_123": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 39,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "冰冻抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_124": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 40,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "石化抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_125": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 41,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_126": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 42,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_127": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 43,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "束缚抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_128": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 44,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "混乱抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_129": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 45,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_130": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 46,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "力量 +35",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +35",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_131": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 47,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "text": "减速抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_132": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 48,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "出血抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_133": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 49,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "火属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "6_134": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 50,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "6_135": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 51,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "出血抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "6_136": {
    "base1": 6400,
    "base2": 10900,
    "stat4": 52,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "中毒抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "6_137": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 53,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_138": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 54,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_139": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 55,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 39,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "灼伤抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "灼伤抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_140": {
    "base1": 8960,
    "base2": 15260,
    "stat4": 56,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_141": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 57,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_142": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 58,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_143": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 59,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +80",
        "color": "white"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +80",
        "color": "white"
      },
      {
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_144": {
    "base1": 11520,
    "base2": 19620,
    "stat4": 60,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_145": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 61,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_146": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 62,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "力量 +35",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +35",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_147": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 63,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_148": {
    "base1": 14081,
    "base2": 23980,
    "stat4": 64,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "精神 +40",
        "color": "white"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +40",
        "color": "white"
      },
      {
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_149": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 65,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +120",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +120",
        "color": "white"
      },
      {
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_150": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 66,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "力量 +40",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +40",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_151": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 67,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +120",
        "color": "white"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +120",
        "color": "white"
      },
      {
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_152": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 68,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "精神 +45",
        "color": "white"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +45",
        "color": "white"
      },
      {
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_153": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 69,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +140",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +140",
        "color": "white"
      },
      {
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "6_154": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 70,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "力量 +45",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +45",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "6_155": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 71,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +140",
        "color": "white"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +140",
        "color": "white"
      },
      {
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "6_156": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 72,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "精神 +50",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +50",
        "color": "white"
      },
      {
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "6_157": {
    "base1": 256,
    "base2": 100,
    "stat4": 0,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "6_158": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 73,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "火属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_159": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 74,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "6_160": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 75,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 41,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "黑暗抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_161": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 76,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "精神 +20",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +20",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "6_162": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 77,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "text": "光属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_163": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 78,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "力量 +25",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +25",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_164": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 79,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 43,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "冰冻抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_165": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 80,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 25,
        "p2": 0,
        "p3": 0,
        "text": "精神 +25",
        "color": "white"
      },
      {
        "code": 44,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +25",
        "color": "white"
      },
      {
        "text": "石化抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_166": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 81,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      },
      {
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_167": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 82,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_168": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 83,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "code": 45,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      },
      {
        "text": "束缚抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_169": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 84,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 46,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "混乱抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_170": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 85,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "MP MAX +70",
        "color": "white"
      },
      {
        "text": "光属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_171": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 86,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "力量 +35",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "力量 +35",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_172": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 87,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 70,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "code": 47,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP MAX +70",
        "color": "white"
      },
      {
        "text": "减速抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_173": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 88,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "出血抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_174": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 89,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "火属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_175": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 90,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "6_176": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 91,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +80",
        "color": "white"
      },
      {
        "code": 41,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +80",
        "color": "white"
      },
      {
        "text": "黑暗抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_177": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 92,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "精神 +35",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +35",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "6_178": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 93,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +100",
        "color": "white"
      },
      {
        "text": "光属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_179": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 94,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "力量 +35",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +35",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "6_180": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 95,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "code": 43,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "text": "冰冻抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_181": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 96,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "精神 +40",
        "color": "white"
      },
      {
        "code": 44,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +40",
        "color": "white"
      },
      {
        "text": "石化抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "6_182": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 97,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +120",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +120",
        "color": "white"
      },
      {
        "text": "火属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_183": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 98,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "力量 +40",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +40",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "6_184": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 99,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 120,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +120",
        "color": "white"
      },
      {
        "code": 45,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +120",
        "color": "white"
      },
      {
        "text": "束缚抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_185": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 100,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "精神 +45",
        "color": "white"
      },
      {
        "code": 46,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +45",
        "color": "white"
      },
      {
        "text": "混乱抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "6_186": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 101,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +140",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +140",
        "color": "white"
      },
      {
        "text": "光属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "6_187": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 102,
    "durability": 1,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "力量 +45",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "力量 +45",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "6_188": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 103,
    "durability": 2,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 140,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +140",
        "color": "white"
      },
      {
        "code": 47,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "HP MAX +140",
        "color": "white"
      },
      {
        "text": "减速抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "6_189": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 104,
    "durability": 3,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 4,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "精神 +50",
        "color": "white"
      },
      {
        "code": 37,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "精神 +50",
        "color": "white"
      },
      {
        "text": "出血抗性 +7%",
        "color": "blue"
      }
    ]
  },
  "7_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_2": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_3": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_4": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_5": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_6": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_7": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_8": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_9": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_10": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_11": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "7_12": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "7_13": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "体力 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +6",
        "color": "white"
      }
    ]
  },
  "7_14": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "7_15": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      }
    ]
  },
  "7_16": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "7_17": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      }
    ]
  },
  "7_18": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "7_19": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      }
    ]
  },
  "7_20": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      }
    ]
  },
  "7_21": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      }
    ]
  },
  "7_22": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      }
    ]
  },
  "7_23": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      }
    ]
  },
  "7_24": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      },
      {
        "text": "物理防御力 +50",
        "color": "white"
      }
    ]
  },
  "7_25": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "体力 +7",
        "color": "white"
      },
      {
        "code": 47,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "减速抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +7",
        "color": "white"
      },
      {
        "text": "减速抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "7_26": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_27": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      }
    ]
  },
  "7_28": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      },
      {
        "text": "HP MAX +20",
        "color": "white"
      }
    ]
  },
  "7_29": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      },
      {
        "text": "光属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "7_30": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      }
    ]
  },
  "7_31": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "7_32": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +9%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "命中率 +9%",
        "color": "blue"
      }
    ]
  },
  "7_33": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +4",
        "color": "blue"
      }
    ]
  },
  "7_34": {
    "base1": 14081,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "中毒抗性 +5%",
        "color": "blue"
      }
    ]
  },
  "7_35": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "中毒抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "7_36": {
    "base1": 15361,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "7_37": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 1,
        "p3": 0,
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "上挑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "7_38": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +6",
        "color": "blue"
      }
    ]
  },
  "7_39": {
    "base1": 15360,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 1,
        "p3": 0,
        "text": "地裂·波动剑 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+1",
        "color": "blue"
      }
    ]
  },
  "7_40": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +100",
        "color": "white"
      },
      {
        "code": 13,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "魔法防御力 +80",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "物理防御力 +100",
        "color": "white"
      },
      {
        "text": "魔法防御力 +80",
        "color": "white"
      }
    ]
  },
  "7_41": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "体力 +8",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +20",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +8",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "硬直恢复 +20",
        "color": "blue"
      }
    ]
  },
  "7_42": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +10",
        "color": "blue"
      },
      {
        "code": 2,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "智力 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +10",
        "color": "blue"
      },
      {
        "text": "智力 +5",
        "color": "white"
      }
    ]
  },
  "7_43": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "体力 +9",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 1,
        "p3": 0,
        "text": "十字斩 Lv+1",
        "color": "blue"
      },
      {
        "code": 44,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "石化抗性 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +9",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+1",
        "color": "blue"
      },
      {
        "text": "石化抗性 +2%",
        "color": "blue"
      }
    ]
  },
  "7_44": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 150,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "HP MAX +150",
        "color": "white"
      },
      {
        "text": "MP MAX +40",
        "color": "white"
      }
    ]
  },
  "7_45": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "体力 +10",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +5%",
        "color": "blue"
      },
      {
        "code": 19,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +10",
        "color": "white"
      },
      {
        "text": "中毒抗性 +5%",
        "color": "blue"
      },
      {
        "text": "回避率 +5%",
        "color": "blue"
      }
    ]
  },
  "7_46": {
    "base1": 8961,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      },
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "7_47": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +200",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "物理防御力 +200",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "7_48": {
    "base1": 11521,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 20,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +6",
        "color": "blue"
      },
      {
        "code": 39,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "灼伤抗性 +6%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "火属性抗性 +6",
        "color": "blue"
      },
      {
        "text": "灼伤抗性 +6%",
        "color": "blue"
      }
    ]
  },
  "7_49": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ]
  },
  "7_50": {
    "base1": 14081,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 38,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "中毒抗性 +6%",
        "color": "blue"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "中毒抗性 +6%",
        "color": "blue"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      }
    ]
  },
  "7_51": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "追加伤害 +60",
        "color": "blue"
      }
    ]
  },
  "7_52": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 200,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "HP MAX +200",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      }
    ]
  },
  "7_53": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "7_54": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +8",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +8",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "7_55": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_56": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "体力 +12",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +2",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +12",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +2",
        "color": "blue"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "7_57": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "体力 +14",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +45",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +14",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "text": "硬直恢复 +45",
        "color": "blue"
      }
    ]
  },
  "7_58": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "体力 +16",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +100",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +16",
        "color": "white"
      },
      {
        "text": "移动速度 +3",
        "color": "blue"
      },
      {
        "text": "追加伤害 +100",
        "color": "blue"
      }
    ]
  },
  "7_59": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +8",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +8",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_60": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +240",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "text": "物理防御力 +240",
        "color": "white"
      }
    ]
  },
  "7_61": {
    "base1": 15360,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "体力 +18",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +100",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "text": "鬼斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +18",
        "color": "white"
      },
      {
        "text": "追加伤害 +100",
        "color": "blue"
      },
      {
        "text": "鬼斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "7_62": {
    "base1": 10241,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "体力 +11",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +11",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      }
    ]
  },
  "7_63": {
    "base1": 12801,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "体力 +13",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +13",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_64": {
    "base1": 15361,
    "base2": 6000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +15",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +6",
        "color": "white"
      }
    ]
  },
  "7_65": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "体力 +19",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +19",
        "color": "white"
      },
      {
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "7_66": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "体力 +19",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +8",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +19",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +8",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "7_67": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "体力 +19",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 7,
        "p2": 2,
        "p3": 0,
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +19",
        "color": "white"
      },
      {
        "text": "地裂·波动剑 Lv+2",
        "color": "blue"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_68": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +8",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +8",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_69": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "code": 12,
        "p1": 240,
        "p2": 0,
        "p3": 0,
        "text": "物理防御力 +240",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "物理攻击力 +60",
        "color": "white"
      },
      {
        "text": "物理防御力 +240",
        "color": "white"
      }
    ]
  },
  "7_70": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 27,
        "p2": 0,
        "p3": 0,
        "text": "体力 +27",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +100",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 3,
        "p3": 0,
        "text": "鬼斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +27",
        "color": "white"
      },
      {
        "text": "追加伤害 +100",
        "color": "blue"
      },
      {
        "text": "鬼斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "7_71": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 36,
        "p2": 0,
        "p3": 0,
        "text": "体力 +36",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +36",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      }
    ]
  },
  "7_72": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "体力 +40",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "体力 +40",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "7_73": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 44,
        "p2": 0,
        "p3": 0,
        "text": "体力 +44",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +44",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +6",
        "color": "white"
      }
    ]
  },
  "7_74": {
    "base1": 15361,
    "base2": 8460,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 3,
        "p1": 48,
        "p2": 0,
        "p3": 0,
        "text": "体力 +48",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 6,
        "p2": 2,
        "p3": 0,
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "体力 +48",
        "color": "white"
      },
      {
        "text": "上挑 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      }
    ]
  },
  "8_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_1": {
    "base1": 1280,
    "base2": 500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_2": {
    "base1": 2560,
    "base2": 1000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_3": {
    "base1": 3840,
    "base2": 1500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_4": {
    "base1": 5120,
    "base2": 2000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_5": {
    "base1": 6400,
    "base2": 2500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_6": {
    "base1": 7680,
    "base2": 3000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_7": {
    "base1": 8960,
    "base2": 3500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_8": {
    "base1": 10240,
    "base2": 4000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_9": {
    "base1": 11520,
    "base2": 4500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_10": {
    "base1": 12800,
    "base2": 5000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_11": {
    "base1": 14080,
    "base2": 5500,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "8_12": {
    "base1": 1280,
    "base2": 705,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "精神 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +6",
        "color": "white"
      }
    ]
  },
  "8_13": {
    "base1": 2560,
    "base2": 1410,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "精神 +6",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +6",
        "color": "white"
      }
    ]
  },
  "8_14": {
    "base1": 3840,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "8_15": {
    "base1": 5120,
    "base2": 2820,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "8_16": {
    "base1": 6400,
    "base2": 3525,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "8_17": {
    "base1": 7680,
    "base2": 4230,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      }
    ]
  },
  "8_18": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      }
    ]
  },
  "8_19": {
    "base1": 8960,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "8_20": {
    "base1": 10240,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "8_21": {
    "base1": 11520,
    "base2": 6345,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      }
    ]
  },
  "8_22": {
    "base1": 12800,
    "base2": 7050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      }
    ]
  },
  "8_23": {
    "base1": 14080,
    "base2": 7755,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      }
    ]
  },
  "8_24": {
    "base1": 1280,
    "base2": 1025,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      },
      {
        "text": "HP MAX +10",
        "color": "white"
      }
    ]
  },
  "8_25": {
    "base1": 2560,
    "base2": 2050,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      },
      {
        "text": "MP MAX +15",
        "color": "white"
      }
    ]
  },
  "8_26": {
    "base1": 3841,
    "base2": 3075,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "光属性抗性 +2",
        "color": "blue"
      }
    ]
  },
  "8_27": {
    "base1": 5120,
    "base2": 4100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +12",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      },
      {
        "text": "MP恢复 +12",
        "color": "white"
      }
    ]
  },
  "8_28": {
    "base1": 6401,
    "base2": 5125,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 25,
        "p1": 2,
        "p2": 10,
        "p3": 0,
        "text": "攻击时2%几率造成Lv10出血",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv10出血",
        "color": "blue"
      }
    ]
  },
  "8_29": {
    "base1": 7680,
    "base2": 6150,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +3",
        "color": "blue"
      }
    ]
  },
  "8_30": {
    "base1": 8961,
    "base2": 7175,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +7%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "命中率 +7%",
        "color": "blue"
      }
    ]
  },
  "8_31": {
    "base1": 10240,
    "base2": 8200,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      },
      {
        "text": "暴击率 +2%",
        "color": "blue"
      }
    ]
  },
  "8_32": {
    "base1": 11521,
    "base2": 9225,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 42,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "眩晕抗性 +4%",
        "color": "blue"
      }
    ]
  },
  "8_33": {
    "base1": 12800,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 49,
        "p2": 1,
        "p3": 0,
        "text": "不屈意志 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "不屈意志 Lv+1",
        "color": "blue"
      }
    ]
  },
  "8_34": {
    "base1": 14081,
    "base2": 11275,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "8_35": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 1,
        "p3": 0,
        "text": "嗜魂之手 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "嗜魂之手 Lv+1",
        "color": "blue"
      }
    ]
  },
  "8_36": {
    "base1": 15361,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "HP MAX +60",
        "color": "white"
      }
    ]
  },
  "8_37": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 11,
        "p2": 1,
        "p3": 0,
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "月光斩 Lv+1",
        "color": "blue"
      }
    ]
  },
  "8_38": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +60",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "MP MAX +60",
        "color": "white"
      }
    ]
  },
  "8_39": {
    "base1": 15360,
    "base2": 12300,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +10",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +10",
        "color": "blue"
      }
    ]
  },
  "8_40": {
    "base1": 1280,
    "base2": 1495,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +30",
        "color": "blue"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "硬直恢复 +30",
        "color": "blue"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      }
    ]
  },
  "8_41": {
    "base1": 2560,
    "base2": 2990,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "精神 +8",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +8",
        "color": "white"
      },
      {
        "text": "MP MAX +20",
        "color": "white"
      },
      {
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "8_42": {
    "base1": 3841,
    "base2": 4485,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "精神 +9",
        "color": "white"
      },
      {
        "code": 22,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "光属性抗性 +3",
        "color": "blue"
      },
      {
        "code": 40,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +9",
        "color": "white"
      },
      {
        "text": "光属性抗性 +3",
        "color": "blue"
      },
      {
        "text": "感电抗性 +3%",
        "color": "blue"
      }
    ]
  },
  "8_43": {
    "base1": 5120,
    "base2": 5980,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "code": 8,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "MP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      },
      {
        "text": "MP恢复 +5",
        "color": "white"
      }
    ]
  },
  "8_44": {
    "base1": 6401,
    "base2": 7475,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +10",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 9,
        "p2": 2,
        "p3": 0,
        "text": "鬼斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +10",
        "color": "blue"
      },
      {
        "text": "鬼斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "8_45": {
    "base1": 7680,
    "base2": 8970,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "精神 +12",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +12",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      },
      {
        "text": "MP MAX +30",
        "color": "white"
      }
    ]
  },
  "8_46": {
    "base1": 8961,
    "base2": 10465,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 13,
        "p2": 0,
        "p3": 0,
        "text": "精神 +13",
        "color": "white"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 34,
        "p2": 2,
        "p3": 0,
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +13",
        "color": "white"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      },
      {
        "text": "暴走 Lv+2",
        "color": "blue"
      }
    ]
  },
  "8_47": {
    "base1": 10240,
    "base2": 11960,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 17,
        "p2": 2,
        "p3": 0,
        "text": "冰刃·波动剑 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      },
      {
        "text": "冰刃·波动剑 Lv+2",
        "color": "blue"
      }
    ]
  },
  "8_48": {
    "base1": 11521,
    "base2": 13455,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 16,
        "p1": 45,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 35,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +35",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "硬直恢复 +45",
        "color": "blue"
      },
      {
        "text": "追加伤害 +35",
        "color": "blue"
      }
    ]
  },
  "8_49": {
    "base1": 12800,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +3",
        "color": "blue"
      },
      {
        "code": 6,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +3",
        "color": "blue"
      },
      {
        "text": "MP MAX +50",
        "color": "white"
      }
    ]
  },
  "8_50": {
    "base1": 14081,
    "base2": 16445,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 33,
        "p2": 2,
        "p3": 0,
        "text": "嗜魂之手 Lv+2",
        "color": "blue"
      },
      {
        "code": 7,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "嗜魂之手 Lv+2",
        "color": "blue"
      },
      {
        "text": "HP恢复 +5",
        "color": "white"
      }
    ]
  },
  "8_51": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 100,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP MAX +100",
        "color": "white"
      },
      {
        "text": "暴击率 +10%",
        "color": "blue"
      }
    ]
  },
  "8_52": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 4,
        "p2": 2,
        "p3": 0,
        "text": "三段斩(一段) Lv+2",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 60,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "三段斩(一段) Lv+2",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +60",
        "color": "blue"
      }
    ]
  },
  "8_53": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "8_54": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ]
  },
  "8_55": {
    "base1": 15360,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 18,
        "p2": 0,
        "p3": 0,
        "text": "精神 +18",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +18",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ]
  },
  "8_56": {
    "base1": 7680,
    "base2": 13080,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 14,
        "p2": 0,
        "p3": 0,
        "text": "精神 +14",
        "color": "white"
      },
      {
        "code": 27,
        "p1": 2,
        "p2": 14,
        "p3": 0,
        "text": "攻击时2%几率造成Lv14灼伤",
        "color": "blue"
      },
      {
        "code": 20,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +14",
        "color": "white"
      },
      {
        "text": "攻击时2%几率造成Lv14灼伤",
        "color": "blue"
      },
      {
        "text": "火属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "8_57": {
    "base1": 10240,
    "base2": 17440,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 17,
        "p2": 0,
        "p3": 0,
        "text": "精神 +17",
        "color": "white"
      },
      {
        "code": 11,
        "p1": 72,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力 +72",
        "color": "white"
      },
      {
        "code": 13,
        "p1": 147,
        "p2": 0,
        "p3": 0,
        "text": "魔法防御力 +147",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +17",
        "color": "white"
      },
      {
        "text": "魔法攻击力 +72",
        "color": "white"
      },
      {
        "text": "魔法防御力 +147",
        "color": "white"
      }
    ]
  },
  "8_58": {
    "base1": 12800,
    "base2": 21800,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 19,
        "p2": 0,
        "p3": 0,
        "text": "精神 +19",
        "color": "white"
      },
      {
        "code": 23,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "暗属性抗性 +7",
        "color": "blue"
      },
      {
        "code": 14,
        "p1": 54,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +54",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +19",
        "color": "white"
      },
      {
        "text": "暗属性抗性 +7",
        "color": "blue"
      },
      {
        "text": "追加伤害 +54",
        "color": "blue"
      }
    ]
  },
  "8_59": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 6,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +6",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +6",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "8_60": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +4",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 9,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +9",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +4",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +9",
        "color": "white"
      }
    ]
  },
  "8_61": {
    "base1": 15360,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +64",
        "color": "blue"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "追加伤害 +64",
        "color": "blue"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "8_62": {
    "base1": 3841,
    "base2": 2115,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "精神 +7",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +7",
        "color": "white"
      }
    ]
  },
  "8_63": {
    "base1": 8961,
    "base2": 4935,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "精神 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +10",
        "color": "white"
      }
    ]
  },
  "8_64": {
    "base1": 10241,
    "base2": 5640,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 11,
        "p2": 0,
        "p3": 0,
        "text": "精神 +11",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +11",
        "color": "white"
      }
    ]
  },
  "8_65": {
    "base1": 12801,
    "base2": 10250,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "精神 +15",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "智力 +15",
        "color": "white"
      },
      {
        "code": 5,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +50",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +15",
        "color": "white"
      },
      {
        "text": "智力 +15",
        "color": "white"
      },
      {
        "text": "HP MAX +50",
        "color": "white"
      }
    ]
  },
  "8_66": {
    "base1": 14081,
    "base2": 11275,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 2,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "智力 +16",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +5",
        "color": "blue"
      },
      {
        "code": 21,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "智力 +16",
        "color": "white"
      },
      {
        "text": "移动速度 +5",
        "color": "blue"
      },
      {
        "text": "冰属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "8_67": {
    "base1": 12801,
    "base2": 14950,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 16,
        "p2": 0,
        "p3": 0,
        "text": "精神 +16",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +2",
        "color": "blue"
      },
      {
        "code": 24,
        "p1": 8,
        "p2": 2,
        "p3": 0,
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +16",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +2",
        "color": "blue"
      },
      {
        "text": "裂波斩 Lv+2",
        "color": "blue"
      }
    ]
  },
  "8_68": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "8_69": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ]
  },
  "8_70": {
    "base1": 15361,
    "base2": 17940,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 21,
        "p2": 0,
        "p3": 0,
        "text": "精神 +21",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +21",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ]
  },
  "8_71": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +7",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +7",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "8_72": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 4,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +4",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +4",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +10",
        "color": "white"
      }
    ]
  },
  "8_73": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "精神 +30",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 64,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +64",
        "color": "blue"
      },
      {
        "code": 101,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +30",
        "color": "white"
      },
      {
        "text": "追加伤害 +64",
        "color": "blue"
      },
      {
        "text": "所有属性抗性 +5",
        "color": "blue"
      }
    ]
  },
  "8_74": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 39,
        "p2": 0,
        "p3": 0,
        "text": "精神 +39",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 80,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +39",
        "color": "white"
      },
      {
        "text": "MP MAX +80",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +8",
        "color": "blue"
      }
    ]
  },
  "8_75": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 44,
        "p2": 0,
        "p3": 0,
        "text": "精神 +44",
        "color": "white"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      },
      {
        "code": 10,
        "p1": 55,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "精神 +44",
        "color": "white"
      },
      {
        "text": "力量 +20",
        "color": "white"
      },
      {
        "text": "物理攻击力 +55",
        "color": "white"
      }
    ]
  },
  "8_76": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 48,
        "p2": 0,
        "p3": 0,
        "text": "精神 +48",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "code": 14,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +48",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +5",
        "color": "white"
      },
      {
        "text": "追加伤害 +50",
        "color": "blue"
      }
    ]
  },
  "8_77": {
    "base1": 15361,
    "base2": 26160,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 4,
        "p1": 52,
        "p2": 0,
        "p3": 0,
        "text": "精神 +52",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +10",
        "color": "white"
      },
      {
        "code": 24,
        "p1": 14,
        "p2": 3,
        "p3": 0,
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "精神 +52",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +10",
        "color": "white"
      },
      {
        "text": "十字斩 Lv+3",
        "color": "blue"
      }
    ]
  },
  "9_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "9_1": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 5,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "code": 6,
        "p1": 75,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +75",
        "color": "white"
      },
      {
        "code": 9,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +2",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "HP MAX +30",
        "color": "white"
      },
      {
        "text": "MP MAX +75",
        "color": "white"
      },
      {
        "text": "HP、MP恢复 +2",
        "color": "white"
      }
    ]
  },
  "9_2": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 5,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "code": 17,
        "p1": 1,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +1",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "HP MAX +20",
        "color": "white"
      },
      {
        "text": "移动速度 +1",
        "color": "blue"
      }
    ]
  },
  "9_3": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 5,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "code": 19,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "回避率 +2%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "HP MAX +40",
        "color": "white"
      },
      {
        "text": "回避率 +2%",
        "color": "blue"
      }
    ]
  },
  "9_4": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 101,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "所有属性抗性 +10",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "所有属性抗性 +10",
        "color": "blue"
      }
    ]
  },
  "9_5": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 6,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "code": 21,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "冰属性抗性 +10",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "力量 +20",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "MP MAX +40",
        "color": "white"
      },
      {
        "text": "冰属性抗性 +10",
        "color": "blue"
      },
      {
        "text": "力量 +20",
        "color": "white"
      }
    ]
  },
  "9_6": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "力量 +10",
        "color": "white"
      },
      {
        "code": 15,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +30",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "力量 +10",
        "color": "white"
      },
      {
        "text": "暴击率 +3%",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +30",
        "color": "blue"
      }
    ]
  },
  "9_7": {
    "base1": 257,
    "base2": 45,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 1,
        "p1": 12,
        "p2": 0,
        "p3": 0,
        "text": "力量 +12",
        "color": "white"
      },
      {
        "code": 2,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "智力 +10",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "体力 +15",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "力量 +12",
        "color": "white"
      },
      {
        "text": "智力 +10",
        "color": "white"
      },
      {
        "text": "体力 +15",
        "color": "white"
      }
    ]
  },
  "9_8": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 152,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力增加 +10%",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      },
      {
        "code": 3,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "体力 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "物理攻击力增加 +10%",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      },
      {
        "text": "体力 +40",
        "color": "white"
      }
    ]
  },
  "9_9": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 153,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力增加 +10%",
        "color": "blue"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      },
      {
        "code": 4,
        "p1": 40,
        "p2": 0,
        "p3": 0,
        "text": "精神 +40",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "魔法攻击力增加 +10%",
        "color": "blue"
      },
      {
        "text": "智力 +30",
        "color": "white"
      },
      {
        "text": "精神 +40",
        "color": "white"
      }
    ]
  },
  "9_10": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "code": 109,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "暴击伤害增加 +20%",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "text": "暴击伤害增加 +20%",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ]
  },
  "9_11": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 154,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "经验值获得增加 +20%",
        "color": "blue"
      },
      {
        "code": 155,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "道具掉落率增加 +30%",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 8,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +8",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "经验值获得增加 +20%",
        "color": "blue"
      },
      {
        "text": "道具掉落率增加 +30%",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +8",
        "color": "white"
      }
    ]
  },
  "9_12": {
    "base1": 257,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "全属性增加 +20",
        "color": "blue"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 3,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +3",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "全属性增加 +20",
        "color": "blue"
      },
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +3",
        "color": "white"
      }
    ]
  },
  "10_0": {
    "base1": 0,
    "base2": 0,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [],
    "lines": []
  },
  "10_1": {
    "base1": 1281,
    "base2": 100,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 126,
        "p1": 7,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +7%",
        "color": "blue"
      },
      {
        "code": 15,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "HP MAX +7%",
        "color": "blue"
      },
      {
        "text": "暴击率 +5%",
        "color": "blue"
      }
    ]
  },
  "10_2": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 152,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "物理攻击力增加 +10%",
        "color": "blue"
      },
      {
        "code": 126,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "HP MAX +15%",
        "color": "blue"
      },
      {
        "code": 1,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "力量 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "物理攻击力增加 +10%",
        "color": "blue"
      },
      {
        "text": "HP MAX +15%",
        "color": "blue"
      },
      {
        "text": "力量 +30",
        "color": "white"
      }
    ]
  },
  "10_3": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 153,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "魔法攻击力增加 +10%",
        "color": "blue"
      },
      {
        "code": 127,
        "p1": 15,
        "p2": 0,
        "p3": 0,
        "text": "MP MAX +15%",
        "color": "blue"
      },
      {
        "code": 2,
        "p1": 30,
        "p2": 0,
        "p3": 0,
        "text": "智力 +30",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "魔法攻击力增加 +10%",
        "color": "blue"
      },
      {
        "text": "MP MAX +15%",
        "color": "blue"
      },
      {
        "text": "智力 +30",
        "color": "white"
      }
    ]
  },
  "10_4": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 96,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "全属性增加 +20",
        "color": "blue"
      },
      {
        "code": 55,
        "p1": 10,
        "p2": 10,
        "p3": 0,
        "text": "攻击时10%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "全属性增加 +20",
        "color": "blue"
      },
      {
        "text": "攻击时10%几率削减敌人当前 HP 10%",
        "color": "blue"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "10_5": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 15,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "code": 17,
        "p1": 2,
        "p2": 0,
        "p3": 0,
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "code": 16,
        "p1": 50,
        "p2": 0,
        "p3": 0,
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "暴击率 +10%",
        "color": "blue"
      },
      {
        "text": "移动速度 +2",
        "color": "blue"
      },
      {
        "text": "硬直恢复 +50",
        "color": "blue"
      }
    ]
  },
  "10_6": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 154,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "经验值获得增加 +10%",
        "color": "blue"
      },
      {
        "code": 155,
        "p1": 20,
        "p2": 0,
        "p3": 0,
        "text": "道具掉落率增加 +20%",
        "color": "blue"
      },
      {
        "code": 18,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "命中率 +10%",
        "color": "blue"
      }
    ],
    "lines": [
      {
        "text": "经验值获得增加 +10%",
        "color": "blue"
      },
      {
        "text": "道具掉落率增加 +20%",
        "color": "blue"
      },
      {
        "text": "命中率 +10%",
        "color": "blue"
      }
    ]
  },
  "10_7": {
    "base1": 1281,
    "base2": 30000,
    "stat4": 0,
    "durability": 0,
    "element": "none",
    "elementName": "",
    "options": [
      {
        "code": 158,
        "p1": 0,
        "p2": 0,
        "p3": 0,
        "text": "自动拾取道具",
        "color": "blue"
      },
      {
        "code": 159,
        "p1": 10,
        "p2": 0,
        "p3": 0,
        "text": "金币获得量 +10%",
        "color": "blue"
      },
      {
        "code": 9,
        "p1": 5,
        "p2": 0,
        "p3": 0,
        "text": "HP、MP恢复 +5",
        "color": "white"
      }
    ],
    "lines": [
      {
        "text": "自动拾取道具",
        "color": "blue"
      },
      {
        "text": "金币获得量 +10%",
        "color": "blue"
      },
      {
        "text": "HP、MP恢复 +5",
        "color": "white"
      }
    ]
  }
};

export function getEquipInnateInfo(typeId: number, itemId: number): EquipInnateInfo | null {
  const key = `${typeId}_${itemId}`
  return EQUIP_INNATE_DATABASE[key] || null
}
