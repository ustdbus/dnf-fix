export interface ItemDefinition {
  typeId: number;       // 物品大类ID (0x00 ~ 0x13)
  itemId: number;       // 物品子ID (0x00 ~ 0xFF)
  name: string;         // 物品名称
  categoryName: string; // 大类名称
  quality?: 'white' | 'blue' | 'purple' | 'pink' | 'orange'; // 品级
  canRefine?: boolean;  // 是否可强化 (武器/防具/首饰)
  reqLevel?: number;    // 装备需求等级
  price?: number;       // 基础售价
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
  
  // 角色界面可修改的数值
  gold: number;           // 金币 (0x25 ~ 0x28, int32)
  reviveCoins: number;    // 复活币 (0x29 ~ 0x2C, int32)
  victoryPoints: number;  // 胜点 (0x2D ~ 0x30, int32)
  medal: number;          // 勋章 (0x31 ~ 0x34, int32)
  bagSlotCount: number;   // 背包格数 (0x39, uint8)
  sp: number;             // SP 技能点 (0x17 ~ 0x18, uint16 little-endian)
  
  // 背包 90 槽位
  inventory: InventorySlot[];
  
  // 王图 (地图难度)
  dungeonRegions: MapRegion[];
  
  // 日志 (30个日志，每个2字节)
  logs: boolean[];        // 30个日志解锁状态
  
  // 原始二进制副本
  rawBuffer: Uint8Array;

  // 任务存档（DnfQuestX），可选
  questSave?: DnfQuestSave;
}

export interface ActiveQuestSlot {
  slotIndex: number;    // 0 ~ 19
  isActive: boolean;    // 是否被占用 (byte 0 === 0x01)
  questId: number;      // 任务ID
  step: number;         // 阶段/状态 (0x03 为目标达成/待领奖)
  progress1: number;    // 条件1进度
  progress2: number;    // 条件2进度
  progress3: number;    // 条件3进度
  rawBytes: Uint8Array; // 13 字节原始切片
}

export interface QuestRequirementItem {
  typeId: number;
  itemId: number;
  count: number;
  name: string;
  quality?: string;
}

export interface QuestItem {
  id: number;           // 任务ID 0 ~ 529
  name: string;         // 官方任务名
  type: number;         // 0: 普通, 1: 主线, 2: 重复, 3: 转职, 4: 觉醒
  typeName: "普通" | "主线" | "重复" | "转职" | "觉醒";
  state: number;        // 0: 未接取/未完成, 1: 进行中(已接取), 2: 已完成
  isReadyToReward?: boolean; // 是否目标达成待领奖 (在活跃槽位且 step=3 或 progress满)
  activeSlotIndex?: number;  // 活跃槽位序号 (-1 表示未进活跃槽)
  desc?: string;        // 任务描述说明
  requires?: QuestRequirementItem[]; // 任务材料需求列表
  rewards?: QuestRequirementItem[];  // 任务完成奖励列表
}

export interface DnfQuestSave {
  characterIndex: number;
  rawBuffer: Uint8Array;          // 790 字节原始文件
  quests: QuestItem[];            // 全量 530 个任务
  activeSlots: ActiveQuestSlot[]; // 20 个活跃任务槽位
}

