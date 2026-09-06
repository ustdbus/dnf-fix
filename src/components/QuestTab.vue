<template>
  <div class="space-y-6">
    <!-- 顶部状态栏与批量控制：DNF 史诗任务卷轴 -->
    <div class="bg-gradient-to-b from-[#181b26] to-[#10121a] p-4 sm:p-5 rounded-2xl border border-amber-900/40 shadow-xl space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/30 pb-3.5">
        <div>
          <h2 class="text-sm sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 flex items-center gap-2">
            <span>📜</span> 任务系统管理 (全量 530 个官方任务)
          </h2>
          <p class="text-[11px] text-gray-400 mt-0.5">
            阿拉德大陆主线/支线/重复/转职/觉醒任务状态编辑 (00未接取 · 01进行中 · 02已完成)
          </p>
        </div>

        <!-- 批量操作按钮 -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            @click="setAllQuestsState(2)"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black transition shadow-lg shadow-amber-500/30 flex items-center gap-1.5 active:scale-95"
            :disabled="!questSave"
          >
            <span>✨ 一键全通 (All Clear)</span>
          </button>
          <button
            @click="setEpicQuestsState(2)"
            class="text-xs px-3 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-600/50 text-amber-200 font-bold transition flex items-center gap-1 active:scale-95"
            :disabled="!questSave"
          >
            <span>🎯 一键完成主线</span>
          </button>
          <button
            @click="setAllQuestsState(0)"
            class="text-xs px-2.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 text-[11px] font-medium transition active:scale-95"
            :disabled="!questSave"
          >
            <span>🔄 重置未接取</span>
          </button>
        </div>
      </div>

      <!-- 任务存档未载入时的导入提示 -->
      <div v-if="!questSave" class="p-4 bg-[#0d0f17] border border-amber-900/40 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
        <div class="flex items-center gap-2 text-xs text-amber-200/90">
          <span class="text-lg">💡</span>
          <span>当前角色尚未关联 DnfQuest 任务存档文件 (DnfQuest{{ charIndex }})</span>
        </div>
        <div class="flex items-center gap-2">
          <label class="cursor-pointer text-xs px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold rounded-lg transition shadow-md shadow-amber-600/20 active:scale-95">
            <span>📂 导入 DnfQuest{{ charIndex }}</span>
            <input type="file" class="hidden" @change="onQuestFileSelected" />
          </label>
          <button
            @click="createDefaultQuest"
            class="text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition border border-gray-700 active:scale-95"
          >
            ➕ 创建空白任务
          </button>
        </div>
      </div>

      <!-- 任务统计卡片 -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div class="bg-[#0b0e15] p-3 rounded-xl border border-gray-800 flex items-center justify-between shadow-inner">
          <span class="text-xs text-gray-400">总任务数</span>
          <span class="text-xs font-black text-amber-300 font-mono">530</span>
        </div>
        <div class="bg-[#0b0e15] p-3 rounded-xl border border-gray-800 flex items-center justify-between shadow-inner">
          <span class="text-xs text-gray-400">已完成任务</span>
          <span class="text-xs font-black text-emerald-400 font-mono">{{ completedCount }}</span>
        </div>
        <div class="bg-[#0b0e15] p-3 rounded-xl border border-gray-800 flex items-center justify-between shadow-inner">
          <span class="text-xs text-gray-400">进行中 (已接取)</span>
          <span class="text-xs font-black text-amber-400 font-mono">{{ activeCount }}</span>
        </div>
        <div class="bg-[#0b0e15] p-3 rounded-xl border border-gray-800 flex items-center justify-between shadow-inner">
          <span class="text-xs text-gray-400">未完成任务</span>
          <span class="text-xs font-black text-gray-400 font-mono">{{ unfinishedCount }}</span>
        </div>
      </div>
    </div>

    <!-- 任务筛选与检索区 -->
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <!-- 5 大核心筛选类别：全部、已接取、未完成、已完成、重复 -->
        <div class="flex flex-wrap gap-1.5 bg-[#10131c] p-1.5 rounded-xl border border-gray-800/90 shadow-sm">
          <button
            v-for="f in filterOptions"
            :key="f.key"
            @click="currentFilter = f.key"
            :class="[
              'px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 active:scale-95',
              currentFilter === f.key
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-md shadow-amber-500/30'
                : 'text-gray-400 hover:text-gray-200'
            ]"
          >
            <span>{{ f.icon }}</span>
            <span>{{ f.label }}</span>
            <span class="text-[10px] opacity-80 font-mono">({{ getFilterCount(f.key) }})</span>
          </button>
        </div>

        <!-- 搜索输入框 -->
        <div class="relative sm:w-64">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索任务名称或 ID..."
            class="w-full bg-[#10131c] border border-gray-800 rounded-xl px-3.5 py-1.5 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition shadow-inner"
          />
          <span v-if="searchQuery" @click="searchQuery = ''" class="absolute right-2.5 top-1.5 text-gray-500 hover:text-gray-300 text-xs cursor-pointer">
            ✕
          </span>
        </div>
      </div>

      <!-- 任务列表卡片网格 -->
      <div v-if="filteredQuests.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        <div
          v-for="q in paginatedQuests"
          :key="q.id"
          :class="[
            'p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 shadow-sm hover:scale-[1.01]',
            q.state === 2
              ? 'bg-[#121622] border-emerald-900/50 hover:border-emerald-600/50'
              : q.state === 1
                ? 'bg-[#1a1715] border-amber-700/60 hover:border-amber-500 shadow-amber-500/10'
                : 'bg-[#11131c] border-gray-800/90 hover:border-gray-700'
          ]"
        >
          <!-- 任务头：ID 与类别徽章 -->
          <div class="flex items-center justify-between gap-1.5">
            <span class="text-[10px] text-gray-500 font-mono">#{{ String(q.id).padStart(3, '0') }}</span>
            <span
              :class="[
                'text-[10px] px-1.5 py-0.5 rounded font-bold border',
                getTypeBadgeClass(q.type)
              ]"
            >
              {{ q.typeName }}
            </span>
          </div>

          <!-- 任务官方名称 -->
          <div class="text-xs font-semibold text-gray-200 truncate py-0.5" :title="q.name">
            {{ q.name }}
          </div>

          <!-- 任务状态选择器 -->
          <div class="pt-1 border-t border-gray-800/60 flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-500">状态：</span>
            <select
              v-model.number="q.state"
              :class="[
                'text-[11px] py-0.5 px-2 rounded border focus:outline-none font-bold transition flex-1 text-right',
                getStateSelectClass(q.state)
              ]"
            >
              <option :value="0">未完成 (00)</option>
              <option :value="1">已接取 (01)</option>
              <option :value="2">已完成 (02)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-12 text-gray-500 text-xs bg-[#121520] rounded-xl border border-gray-800">
        没有匹配的任务项
      </div>

      <!-- 分页控制 -->
      <div v-if="totalPages > 1" class="flex items-center justify-between pt-2 px-1 text-xs text-gray-400">
        <div>
          显示 {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, filteredQuests.length) }} 项 (共 {{ filteredQuests.length }} 项)
        </div>
        <div class="flex items-center gap-1.5">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage <= 1"
            class="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-200"
          >
            上一页
          </button>
          <span class="px-2 font-mono text-amber-300">{{ currentPage }} / {{ totalPages }}</span>
          <button
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
            :disabled="currentPage >= totalPages"
            class="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-200"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DnfQuestSave, QuestItem } from '../core/types'
import { parseQuestSave, createDefaultQuestSave } from '../core/questParser'

const props = defineProps<{
  charIndex: number
  questSave?: DnfQuestSave | null
}>()

const emit = defineEmits<{
  (e: 'update:questSave', value: DnfQuestSave): void
}>()

// 5 大核心筛选选项
const filterOptions = [
  { key: 'all', label: '全部', icon: '📋' },
  { key: 'active', label: '已接取', icon: '⚡' },
  { key: 'unfinished', label: '未完成', icon: '⏳' },
  { key: 'completed', label: '已完成', icon: '✅' },
  { key: 'repeat', label: '重复', icon: '🔁' },
] as const

type FilterKey = typeof filterOptions[number]['key']
const currentFilter = ref<FilterKey>('all')
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = 48

// 重置分页
watch([currentFilter, searchQuery], () => {
  currentPage.value = 1
})

const questList = computed<QuestItem[]>(() => {
  return props.questSave?.quests || []
})

// 统计数据
const completedCount = computed(() => questList.value.filter(q => q.state === 2).length)
const activeCount = computed(() => questList.value.filter(q => q.state === 1).length)
const unfinishedCount = computed(() => questList.value.filter(q => q.state !== 2).length)
const repeatCount = computed(() => questList.value.filter(q => q.type === 2).length)

function getFilterCount(key: FilterKey): number {
  switch (key) {
    case 'all': return questList.value.length
    case 'active': return activeCount.value
    case 'unfinished': return unfinishedCount.value
    case 'completed': return completedCount.value
    case 'repeat': return repeatCount.value
  }
}

// 筛选后的列表
const filteredQuests = computed(() => {
  let list = questList.value

  // 1. 分类筛选
  if (currentFilter.value === 'active') {
    list = list.filter(q => q.state === 1)
  } else if (currentFilter.value === 'unfinished') {
    list = list.filter(q => q.state !== 2)
  } else if (currentFilter.value === 'completed') {
    list = list.filter(q => q.state === 2)
  } else if (currentFilter.value === 'repeat') {
    list = list.filter(q => q.type === 2)
  }

  // 2. 关键词搜索
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.id.toString() === q ||
      item.typeName.toLowerCase().includes(q)
    )
  }

  return list
})

const totalPages = computed(() => Math.ceil(filteredQuests.value.length / pageSize) || 1)

const paginatedQuests = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredQuests.value.slice(start, start + pageSize)
})

// 样式映射
function getTypeBadgeClass(type: number): string {
  switch (type) {
    case 1: // 主线 (史诗)
      return 'bg-amber-950/60 border-amber-600/50 text-amber-300'
    case 0: // 普通 (支线)
      return 'bg-blue-950/60 border-blue-600/50 text-blue-300'
    case 2: // 重复 (日常)
      return 'bg-emerald-950/60 border-emerald-600/50 text-emerald-300'
    case 3: // 转职
      return 'bg-purple-950/60 border-purple-600/50 text-purple-300'
    case 4: // 觉醒
      return 'bg-red-950/60 border-red-600/50 text-red-300'
    default:
      return 'bg-gray-800 border-gray-700 text-gray-400'
  }
}

function getStateSelectClass(state: number): string {
  switch (state) {
    case 2:
      return 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
    case 1:
      return 'bg-amber-950/80 border-amber-500 text-amber-300'
    case 0:
    default:
      return 'bg-gray-800 border-gray-600 text-gray-300'
  }
}

// 批量修改
function setAllQuestsState(targetState: number) {
  for (const q of questList.value) {
    q.state = targetState
  }
}

function setEpicQuestsState(targetState: number) {
  for (const q of questList.value) {
    if (q.type === 1) {
      q.state = targetState
    }
  }
}

function createDefaultQuest() {
  const newSave = createDefaultQuestSave(props.charIndex)
  emit('update:questSave', newSave)
}

function onQuestFileSelected(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return
  const file = input.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    const ab = reader.result as ArrayBuffer
    const save = parseQuestSave(ab, props.charIndex)
    emit('update:questSave', save)
    input.value = ''
  }
  reader.readAsArrayBuffer(file)
}
</script>
