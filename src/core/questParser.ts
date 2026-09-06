import type { DnfQuestSave, QuestItem } from './types'
import { OFFICIAL_QUESTS } from './officialQuests'

const QUEST_FILE_SIZE = 790
const TOTAL_QUEST_COUNT = 530

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
  }

  const quests: QuestItem[] = []
  for (let i = 0; i < TOTAL_QUEST_COUNT; i++) {
    const official = OFFICIAL_QUESTS[i] || {
      id: i,
      type: 0,
      typeName: '普通',
      name: `任务 #${i}`
    }
    const state = safeBuffer[i] // 0, 1, 2
    quests.push({
      id: i,
      name: official.name,
      type: official.type,
      typeName: official.typeName,
      state: state
    })
  }

  return {
    characterIndex: charIndex,
    rawBuffer: safeBuffer,
    quests
  }
}

/**
 * 序列化并回写 DnfQuest 存档
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

  return output
}

/**
 * 生成默认全初始化的 DnfQuest 存档
 */
export function createDefaultQuestSave(charIndex: number = 0): DnfQuestSave {
  const buffer = new Uint8Array(QUEST_FILE_SIZE)
  return parseQuestSave(buffer.buffer, charIndex)
}
