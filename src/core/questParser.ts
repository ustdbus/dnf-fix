import type { DnfQuestSave, QuestItem, ActiveQuestSlot } from './types'
import { OFFICIAL_QUESTS } from './officialQuests'

const QUEST_FILE_SIZE = 790
const TOTAL_QUEST_COUNT = 530
const ACTIVE_SLOT_COUNT = 20
const SLOT_SIZE = 13
const ACTIVE_SLOT_START = 530

// 默认标准空槽数据
const EMPTY_SLOT_BYTES = new Uint8Array([
  0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0xff, 0x09, 0x00, 0x00, 0x00, 0x00
])

/**
 * 解析 DnfQuest 存档 (固定 790 字节)
 * 前 530 字节为 530 个任务的全局状态 (0: 未接取/未完成, 1: 进行中, 2: 已完成)
 * 后 260 字节为 20 个进行中活跃任务槽位详情 (每槽 13 字节)
 */
export function parseQuestSave(buffer: ArrayBuffer, charIndex: number = 0): DnfQuestSave {
  const bytes = new Uint8Array(buffer)
  
  // 保证底层 buffer 至少有 790 字节
  let safeBuffer: Uint8Array
  if (bytes.length >= QUEST_FILE_SIZE) {
    safeBuffer = new Uint8Array(bytes.buffer.slice(0, QUEST_FILE_SIZE))
  } else {
    safeBuffer = new Uint8Array(QUEST_FILE_SIZE)
    safeBuffer.set(bytes)
    // 填充剩余活跃槽为空
    for (let s = 0; s < ACTIVE_SLOT_COUNT; s++) {
      const off = ACTIVE_SLOT_START + s * SLOT_SIZE
      if (off + SLOT_SIZE <= QUEST_FILE_SIZE && safeBuffer[off] === 0) {
        safeBuffer.set(EMPTY_SLOT_BYTES, off)
      }
    }
  }

  // 1. 解析 20 个活跃槽位
  const activeSlots: ActiveQuestSlot[] = []
  const activeSlotMap = new Map<number, { slotIndex: number; isReady: boolean }>()

  for (let s = 0; s < ACTIVE_SLOT_COUNT; s++) {
    const offset = ACTIVE_SLOT_START + s * SLOT_SIZE
    const flag = safeBuffer[offset]
    const isActive = flag === 0x01
    const qid = safeBuffer[offset + 1] | (safeBuffer[offset + 2] << 8)
    const step = safeBuffer[offset + 3]
    const p1 = safeBuffer[offset + 4]
    const p2 = safeBuffer[offset + 5]
    const p3 = safeBuffer[offset + 6]
    const rawBytes = safeBuffer.slice(offset, offset + SLOT_SIZE)

    activeSlots.push({
      slotIndex: s,
      isActive,
      questId: isActive ? qid : -1,
      step,
      progress1: p1,
      progress2: p2,
      progress3: p3,
      rawBytes
    })

    if (isActive && qid >= 0 && qid < TOTAL_QUEST_COUNT) {
      // 待领奖判定：step === 3 或目标进度均拉满
      const isReady = step === 0x03 || p1 >= 99 || p2 >= 99 || p3 >= 99
      activeSlotMap.set(qid, { slotIndex: s, isReady })
    }
  }

  // 2. 解析 530 个任务项
  const quests: QuestItem[] = []
  for (let i = 0; i < TOTAL_QUEST_COUNT; i++) {
    const official = OFFICIAL_QUESTS[i] || {
      id: i,
      type: 0,
      typeName: '普通',
      name: `任务 #${i}`
    }
    let state = safeBuffer[i] // 0: 未接取, 1: 进行中, 2: 已完成
    const activeInfo = activeSlotMap.get(i)
    let isReadyToReward = false
    const activeSlotIndex = activeInfo ? activeInfo.slotIndex : -1

    if (activeInfo) {
      if (activeInfo.isReady) {
        // 活跃槽中目标已达成 (step === 3 或条件满额)：智能修复/识别为待领奖状态
        isReadyToReward = true
        state = 1
      } else {
        isReadyToReward = false
        // 如果活跃槽位被占用但状态被误标为 2，修复为进行中
        if (state === 2) {
          state = 1
        }
      }
    }

    quests.push({
      id: i,
      name: official.name,
      type: official.type,
      typeName: official.typeName,
      state: state,
      isReadyToReward,
      activeSlotIndex,
      desc: official.desc,
      requires: official.requires,
      rewards: official.rewards
    })
  }

  return {
    characterIndex: charIndex,
    rawBuffer: safeBuffer,
    quests,
    activeSlots
  }
}

/**
 * 序列化并回写 DnfQuest 存档
 * 严密保证：
 * 1. 已完成 (2) 或未接取 (0) 的任务，绝对不残留在活跃槽位中，释放为空槽；
 * 2. 进行中 (1) 的任务，写入 20 个活跃槽位；
 * 3. 标记为待领奖的任务，写入 step=0x03 及满额进度 (99)，使得 NPC 头上亮起问号可直接交付！
 */
export function serializeQuestSave(questSave: DnfQuestSave): Uint8Array {
  const output = new Uint8Array(questSave.rawBuffer)

  // 1. 回写前 530 字节任务状态
  for (let i = 0; i < TOTAL_QUEST_COUNT; i++) {
    const q = questSave.quests[i]
    if (q) {
      output[i] = q.state & 0xff
    }
  }

  // 2. 收集所有 state === 1 (进行中 / 待领奖) 的活跃任务
  const activeQuests = questSave.quests.filter(q => q.state === 1)
  // 游戏引擎最多容纳 20 个活跃任务
  const activeToSave = activeQuests.slice(0, ACTIVE_SLOT_COUNT)

  // 3. 回写 20 个活跃任务槽位 (530 ~ 789 字节)
  for (let s = 0; s < ACTIVE_SLOT_COUNT; s++) {
    const offset = ACTIVE_SLOT_START + s * SLOT_SIZE
    if (s < activeToSave.length) {
      const q = activeToSave[s]
      output[offset] = 0x01 // 活跃占用
      output[offset + 1] = q.id & 0xff
      output[offset + 2] = (q.id >> 8) & 0xff

      if (q.isReadyToReward) {
        // 目标达成（待领奖状态）：step 设为 0x03，条件计数拉满为 99 (0x63)
        output[offset + 3] = 0x03
        output[offset + 4] = 0x63
        output[offset + 5] = 0x63
        output[offset + 6] = 0x63
      } else {
        // 普通进行中未达成状态
        output[offset + 3] = 0x00
        output[offset + 4] = 0x00
        output[offset + 5] = 0x00
        output[offset + 6] = 0x00
      }

      output[offset + 7] = 0xff
      output[offset + 8] = 0x09
      output[offset + 9] = 0x00
      output[offset + 10] = 0x00
      output[offset + 11] = 0x00
      output[offset + 12] = 0x00
    } else {
      // 写入标准空槽数据
      output.set(EMPTY_SLOT_BYTES, offset)
    }
  }

  return output
}

/**
 * 生成默认全初始化的 DnfQuest 存档
 */
export function createDefaultQuestSave(charIndex: number = 0): DnfQuestSave {
  const buffer = new Uint8Array(QUEST_FILE_SIZE)
  // 初始化 20 个活跃槽位为空
  for (let s = 0; s < ACTIVE_SLOT_COUNT; s++) {
    const offset = ACTIVE_SLOT_START + s * SLOT_SIZE
    buffer.set(EMPTY_SLOT_BYTES, offset)
  }
  return parseQuestSave(buffer.buffer, charIndex)
}
