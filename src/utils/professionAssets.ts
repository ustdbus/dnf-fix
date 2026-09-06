import slayerImg from '../assets/official/prof_slayer.png'
import bladeMasterImg from '../assets/official/prof_blade_master.png'
import grandMasterImg from '../assets/official/prof_grand_master.png'
import berserkerImg from '../assets/official/prof_berserker.png'
import hellbringerImg from '../assets/official/prof_hellbringer.png'
import soulBenderImg from '../assets/official/prof_soul_bender.png'
import soulReaperImg from '../assets/official/prof_soul_reaper.png'
import asuraImg from '../assets/official/prof_asura.png'
import darkNightImg from '../assets/official/prof_dark_night.png'

export interface ProfessionInfo {
  id: number
  name: string
  awakenName?: string
  isAwakened: boolean
  avatar: string
  color: string
  tagText: string
}

export const PROFESSION_MAP: Record<number, ProfessionInfo> = {
  0: {
    id: 0,
    name: '鬼剑士 (未转职)',
    isAwakened: false,
    avatar: slayerImg,
    color: '#9ca3af',
    tagText: '初始剑士'
  },
  1: {
    id: 1,
    name: '剑魂',
    awakenName: '剑圣',
    isAwakened: false,
    avatar: bladeMasterImg,
    color: '#38bdf8',
    tagText: '武器大师'
  },
  2: {
    id: 2,
    name: '鬼泣',
    awakenName: '弑魂',
    isAwakened: false,
    avatar: soulBenderImg,
    color: '#a855f7',
    tagText: '驱使百鬼'
  },
  3: {
    id: 3,
    name: '狂战士',
    awakenName: '狱血魔神',
    isAwakened: false,
    avatar: berserkerImg,
    color: '#f87171',
    tagText: '狂暴之血'
  },
  4: {
    id: 4,
    name: '阿修罗',
    awakenName: '大暗黑天',
    isAwakened: false,
    avatar: asuraImg,
    color: '#fbbf24',
    tagText: '心眼通明'
  },
  5: {
    id: 5,
    name: '剑圣',
    awakenName: '极·鬼剑术',
    isAwakened: true,
    avatar: grandMasterImg,
    color: '#0284c7',
    tagText: '剑术大成'
  },
  6: {
    id: 6,
    name: '弑魂',
    awakenName: '第7鬼神邪神',
    isAwakened: true,
    avatar: soulReaperImg,
    color: '#7e22ce',
    tagText: '鬼神之主'
  },
  7: {
    id: 7,
    name: '狱血魔神',
    awakenName: '魔狱血刹',
    isAwakened: true,
    avatar: hellbringerImg,
    color: '#dc2626',
    tagText: '魔神临世'
  },
  8: {
    id: 8,
    name: '大暗黑天',
    awakenName: '暗天波动眼',
    isAwakened: true,
    avatar: darkNightImg,
    color: '#d97706',
    tagText: '天帝波动'
  }
}

export function getProfessionInfo(profId: number | undefined): ProfessionInfo {
  if (profId === undefined || profId === null) {
    return PROFESSION_MAP[0]
  }
  return PROFESSION_MAP[profId] || {
    id: profId,
    name: `未知职业 (0x${profId.toString(16)})`,
    isAwakened: false,
    avatar: slayerImg,
    color: '#6b7280',
    tagText: '隐藏职业'
  }
}
