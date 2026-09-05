export interface ItemDefinition {
  typeId: number;       // 物品大类ID (0x00 ~ 0x13)
  itemId: number;       // 物品子ID (0x00 ~ 0xFF)
  name: string;         // 物品名称
  categoryName: string; // 大类名称
  quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange'; // 品级
  canRefine?: boolean;  // 是否可强化 (武器/防具/首饰)
  desc?: string;        // 说明备注
}

export interface InventorySlot {
  slotIndex: number;    // 0 ~ 89
  isEmpty: boolean;     // 是否为空槽
  typeId: number;       // 大类 (0x00 ~ 0x13)
  itemId: number;       // 子ID
  count: number;        // 数量
  flag: number;         // 标志位 (如 0x01, 0x00)
  refineLevel: number;  // 强化等级 (+0 ~ +31)
  rawBytes: Uint8Array; // 完整的 24 字节备份
  itemName: string;     // 解析出的物品名
  categoryName: string; // 物品大类名
}

export interface MapDifficulty {
  id: string;
  name: string;
  level: number;        // 0: 普通, 1: 冒险, 2: 勇士, 3: 王者
}

export interface MapRegion {
  name: string;
  offset: number;
  length: number;
  maps: MapDifficulty[];
}

export interface DnfHeroSave {
  version: number;
  characterIndex: number; // 0, 1, 2, 3 对应 DnfHero0 ~ 3
  
  // 只读展示信息
  profession: number;     // 职业 0x00
  professionName: string;
  level: number;          // 等级 0x01
  
  // 角色界面可修改的四项数值
  gold: number;           // 金币 (0x25 ~ 0x28, int32)
  reviveCoins: number;    // 复活币 (0x29 ~ 0x2C, int32)
  victoryPoints: number;  // 胜点 (0x2D ~ 0x30, int32)
  bagSlotCount: number;   // 背包格数 (0x39, uint8)
  
  // 背包 90 槽位
  inventory: InventorySlot[];
  
  // 王图 (地图难度)
  dungeonRegions: MapRegion[];
  
  // 日志 (30个日志，每个2字节)
  logs: boolean[];        // 30个日志解锁状态
  
  // 原始二进制副本
  rawBuffer: Uint8Array;
}
