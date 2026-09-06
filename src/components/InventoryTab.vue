<template>
  <div class="space-y-4">
    <!-- 顶部过滤与操作栏 -->
    <div class="bg-[#141722] p-3 rounded-xl border border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
      <div class="flex items-center gap-2">
        <span class="text-gray-400">背包总容量:</span>
        <span class="text-amber-400 font-bold font-mono">{{ save.bagSlotCount }} / 90 格</span>
        <span class="text-gray-500">|</span>
        <span class="text-gray-400">已使用:</span>
        <span class="text-emerald-400 font-bold font-mono">{{ usedSlotsCount }}</span>
        <span class="text-gray-400">空闲:</span>
        <span class="text-blue-400 font-bold font-mono">{{ emptySlotsCount }}</span>
      </div>

      <!-- 游戏同款分类 Tab + 空槽筛选 -->
      <div class="flex flex-wrap items-center gap-1.5">
        <button
          @click="filterType = 'all'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'all' ? 'bg-amber-600 border-amber-500 text-black font-bold shadow-md shadow-amber-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700']"
        >
          全部 <span class="text-[10px] font-mono opacity-80">({{ save.inventory.length }})</span>
        </button>
        <button
          @click="filterType = 'equip'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'equip' ? 'bg-amber-600 border-amber-500 text-black font-bold shadow-md shadow-amber-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700']"
        >
          🗡️ 装备 <span class="text-[10px] font-mono opacity-80">({{ equipSlotsCount }})</span>
        </button>
        <button
          @click="filterType = 'consumable'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'consumable' ? 'bg-amber-600 border-amber-500 text-black font-bold shadow-md shadow-amber-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700']"
        >
          🧪 消耗品 <span class="text-[10px] font-mono opacity-80">({{ consumableSlotsCount }})</span>
        </button>
        <button
          @click="filterType = 'material'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'material' ? 'bg-amber-600 border-amber-500 text-black font-bold shadow-md shadow-amber-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700']"
        >
          💎 材料 <span class="text-[10px] font-mono opacity-80">({{ materialSlotsCount }})</span>
        </button>
        <button
          @click="filterType = 'quest'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'quest' ? 'bg-amber-600 border-amber-500 text-black font-bold shadow-md shadow-amber-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700']"
        >
          📜 任务 <span class="text-[10px] font-mono opacity-80">({{ questSlotsCount }})</span>
        </button>
        <button
          @click="filterType = 'empty'"
          :class="['px-2.5 py-1.5 rounded-lg text-xs transition flex items-center gap-1 border', filterType === 'empty' ? 'bg-blue-600 border-blue-500 text-white font-bold shadow-md shadow-blue-600/30' : 'bg-gray-800/90 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700']"
        >
          ➕ 仅空槽 <span class="text-[10px] font-mono opacity-80">({{ emptySlotsCount }})</span>
        </button>
      </div>
    </div>

    <!-- 游戏同款一行10格网格容器 (手机单屏宽度完整容纳10格，无需横向滚动) -->
    <div class="w-full pb-3">
      <div class="grid grid-cols-10 gap-1 sm:gap-1.5 w-full">
        <div
          v-for="slot in filteredSlots"
          :key="slot.slotIndex"
          @click="openEditModal(slot)"
          :title="getSlotHoverTitle(slot)"
          :class="[
            'relative p-0.5 sm:p-1.5 rounded-md sm:rounded-lg border cursor-pointer transition flex flex-col justify-between h-[48px] sm:h-20 overflow-hidden group select-none',
            slot.isEmpty
              ? 'bg-[#10131d]/60 border-dashed border-gray-800 hover:border-amber-600/50 hover:bg-[#161a27]'
              : getQualityClass(slot)
          ]"
        >
          <!-- 槽位角标: 左侧装备标记/强化等级，右侧槽位序号 -->
          <div class="flex items-center justify-between text-[8px] sm:text-[10px] leading-none">
            <span v-if="!slot.isEmpty && isEquip(slot.typeId)" class="font-bold">
              <span
                v-if="slot.refineLevel > 0"
                :class="[
                  'drop-shadow font-black',
                  slot.refineLevel >= 15 ? 'text-red-400 animate-pulse' :
                  slot.refineLevel >= 13 ? 'text-amber-300' :
                  slot.refineLevel >= 10 ? 'text-fuchsia-400' :
                  'text-amber-400'
                ]"
              >
                +{{ slot.refineLevel }}
              </span>
              <span v-else class="text-amber-300/80 bg-black/50 px-0.5 sm:px-1 py-0.2 rounded text-[7px] sm:text-[9px] border border-amber-600/30">
                E
              </span>
            </span>
            <span v-else-if="!slot.isEmpty" class="text-gray-400 scale-90 origin-left text-[7px] sm:text-[9px] truncate max-w-[20px] sm:max-w-[40px]">
              {{ slot.categoryName.slice(0, 2) }}
            </span>
            <span v-else class="text-gray-600 text-[7px] sm:text-[9px]">空</span>

            <span class="font-mono text-gray-500 text-[7px] sm:text-[9px]">#{{ slot.slotIndex + 1 }}</span>
          </div>

          <!-- 中间物品名称 -->
          <div class="my-auto py-0.5 text-center px-0.5">
            <div
              v-if="!slot.isEmpty"
              class="text-[8px] sm:text-[11px] leading-tight line-clamp-2 text-gray-200 group-hover:text-white font-medium break-all"
              :title="slot.itemName + (slot.refineLevel > 0 ? ` (+${slot.refineLevel})` : '')"
            >
              {{ slot.itemName }}
            </div>
            <div v-else class="text-xs sm:text-sm text-gray-600 group-hover:text-amber-400 transition font-bold font-mono">
              +
            </div>
          </div>

          <!-- 底部栏: 手机端优先精简显示数量 -->
          <div class="flex items-center justify-between text-[7px] sm:text-[10px] leading-none">
            <span v-if="!slot.isEmpty" class="hidden sm:inline text-[9px] text-gray-500 scale-90 origin-left truncate max-w-[45px]">
              {{ slot.categoryName }}
            </span>
            <span v-else class="hidden sm:inline text-[9px] text-gray-600">可添加</span>

            <span v-if="!slot.isEmpty" class="w-full sm:w-auto text-right text-[8px] sm:text-[10px] font-mono text-amber-300 font-semibold">
              x{{ slot.count }}
            </span>
            <span v-else class="w-full sm:w-auto text-right text-[7px] sm:text-[9px] text-gray-600 font-mono">--</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 槽位编辑 / 添加 Modal -->
    <div
      v-if="editingSlot !== null"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm"
      @click.self="closeEditModal"
    >
      <div class="bg-[#161925] border border-amber-600/40 rounded-2xl w-full max-w-lg p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b border-gray-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-amber-400 font-bold">槽位 #{{ editingSlot.slotIndex + 1 }} 物品修改</span>
            <span v-if="editingSlot.isEmpty" class="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
              新物品录入
            </span>
          </div>
          <button @click="closeEditModal" class="text-gray-400 hover:text-white text-lg">✕</button>
        </div>

        <!-- 顶部全局物品名称搜索 (在物品大类上方，搜索全部物品) -->
        <div class="bg-amber-950/20 p-2.5 rounded-xl border border-amber-800/40 space-y-1.5 shadow-inner">
          <div class="flex items-center justify-between">
            <label class="text-xs text-amber-300 font-bold flex items-center gap-1.5">
              <span>🔍</span>
              <span>全局搜索物品 (搜索全部物品，快速定位):</span>
            </label>
            <span
              v-if="modalSearchQuery"
              @click="modalSearchQuery = ''"
              class="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer bg-amber-900/40 px-1.5 py-0.5 rounded border border-amber-700/50"
            >
              ✕ 清空搜索
            </span>
          </div>
          <div class="relative">
            <input
              v-model="modalSearchQuery"
              type="text"
              placeholder="输入任意物品名称关键词 (例如: 梵风衣 / 流光 / 钻石 / 地狱 / 泰拉 / 冰)..."
              class="w-full bg-[#0e1119] text-xs text-gray-100 placeholder-gray-500 pl-8 pr-3 py-2 rounded-lg border border-gray-700 focus:border-amber-400 focus:outline-none transition shadow-inner"
            />
            <span class="absolute left-2.5 top-2 text-gray-500 text-xs">🔎</span>
          </div>
        </div>

        <!-- 1. 物品大类选择 (支持切换全部类别与具体类别) -->
        <div>
          <label class="block text-xs text-gray-400 mb-1 font-medium">1. 物品大类:</label>
          <select
            v-model.number="selectedCategoryFilter"
            @change="onCategoryFilterChange"
            class="w-full bg-[#0e1119] text-xs text-amber-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none cursor-pointer font-medium"
          >
            <option :value="-1">
              {{ modalSearchQuery.trim() ? `🌟 全部类别 (全库匹配共 ${totalMatchedCount} 件)` : '🌟 全部类别 (全库浏览)' }}
            </option>
            <option v-for="cat in categoryFilterOptions" :key="cat.id" :value="cat.id">
              {{ cat.label }}
            </option>
          </select>
        </div>

        <!-- 2. 物品选择列表 -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">
              {{ modalSearchQuery.trim() ? '搜索匹配物品列表 (含穿戴等级与品级分类):' : '2. 选择物品 (含穿戴等级与品级分类):' }}
            </label>
            <span class="text-[10px] text-gray-500 font-mono">
              共 {{ modalDisplayItems.length }} 件物品
            </span>
          </div>
          <select
            :value="selectedItemCompositeKey"
            @change="onSelectKeyChange"
            class="w-full bg-[#0e1119] text-xs text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none cursor-pointer"
          >
            <option
              v-for="item in modalDisplayItems"
              :key="item.typeId + '_' + item.itemId"
              :value="item.typeId + '_' + item.itemId"
            >
              {{ formatOptionLabel(item, selectedCategoryFilter === -1 || !!modalSearchQuery.trim()) }}
            </option>
          </select>
        </div>

        <!-- 4. 选定物品实时详情卡片 (等级、品级分类、属性完整呈现) -->
        <div
          :class="[
            'p-3 rounded-xl border transition-all space-y-2',
            currentQualityInfo.bgColor,
            currentQualityInfo.borderColor
          ]"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="space-y-1.5 min-w-0 flex-1">
              <!-- 物品名称与品级分类徽章 -->
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-sm font-black truncate" :class="currentQualityInfo.color">
                  {{ currentSelectedInfo.name }}
                </span>
                <span
                  :class="[
                    'text-[10px] px-2 py-0.5 rounded border font-bold font-mono tracking-wide',
                    currentQualityInfo.badgeClass
                  ]"
                >
                  {{ currentQualityInfo.label }}
                </span>
                <span
                  v-if="isSingleCategory(formTypeId)"
                  class="text-[9px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 font-mono"
                >
                  🔒 独立装备 (数量固定1)
                </span>
              </div>

              <!-- 详细属性栏: 分类、等级、强化、价格等 -->
              <div class="text-[11px] text-gray-300 flex flex-wrap items-center gap-x-3.5 gap-y-1 pt-0.5">
                <span class="flex items-center gap-1">
                  <span class="text-gray-500">品级:</span>
                  <span class="font-bold" :class="currentQualityInfo.color">{{ currentQualityInfo.name }}</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="text-gray-500">分类:</span>
                  <span class="text-amber-200 font-semibold">{{ currentSelectedInfo.categoryName }}</span>
                </span>
                <span v-if="currentSelectedInfo.reqLevel !== undefined" class="flex items-center gap-1">
                  <span class="text-gray-500">穿戴等级:</span>
                  <span class="text-emerald-400 font-black font-mono">Lv.{{ currentSelectedInfo.reqLevel }}</span>
                </span>
                <span v-else-if="isSingleCategory(formTypeId)" class="flex items-center gap-1">
                  <span class="text-gray-500">穿戴等级:</span>
                  <span class="text-gray-400 font-mono">通用 / 无限制</span>
                </span>
                <span v-if="isEquipCategory(formTypeId)" class="flex items-center gap-1">
                  <span class="text-gray-500">当前强化:</span>
                  <span class="text-amber-300 font-black font-mono">+{{ formRefineLevel }}</span>
                </span>
                <span v-if="currentSelectedInfo.price" class="flex items-center gap-1">
                  <span class="text-gray-500">售价:</span>
                  <span class="text-yellow-400 font-mono">{{ currentSelectedInfo.price }} 金币</span>
                </span>
              </div>

              <!-- 物品说明/备注 -->
              <div v-if="currentSelectedInfo.desc" class="text-[10px] text-gray-400 font-mono pt-0.5 border-t border-gray-800/60">
                {{ currentSelectedInfo.desc }}
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 物品数量 (装备数量锁死为1不可更改，非装备最高99) -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">
              {{ isSingleCategory(formTypeId) ? '物品数量 (装备锁死):' : '物品数量 (1 ~ 99):' }}
            </label>
            <span
              v-if="isSingleCategory(formTypeId)"
              class="text-[10px] text-amber-400 font-mono flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40"
            >
              🔒 装备单件独立，数量锁死为 1
            </span>
            <div v-else class="flex gap-1">
              <button
                v-for="amt in [1, 10, 20, 30, 50, 99]"
                :key="amt"
                @click="formCount = amt"
                class="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                {{ amt }}
              </button>
            </div>
          </div>
          <div v-if="isSingleCategory(formTypeId)" class="relative">
            <input
              type="text"
              value="1 (装备独立不可叠加，数量已锁死)"
              disabled
              class="w-full bg-[#0e1119]/80 text-xs font-mono text-amber-300/80 p-2 rounded-lg border border-gray-800 cursor-not-allowed select-none font-bold"
            />
            <span class="absolute right-3 top-2 text-xs text-gray-500">🔒 锁定</span>
          </div>
          <input
            v-else
            v-model.number="formCount"
            type="number"
            min="1"
            max="99"
            class="w-full bg-[#0e1119] text-xs font-mono text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <!-- 5. 装备强化等级 (仅武器/防具/首饰可用) -->
        <div v-if="isEquipCategory(formTypeId)" class="bg-amber-950/20 p-3 rounded-lg border border-amber-800/30">
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-amber-300 font-bold">4. 装备强化等级 (+0 ~ +34+):</label>
            <div class="flex gap-1">
              <button
                v-for="lvl in [0, 10, 12, 15, 18, 31]"
                :key="lvl"
                @click="formRefineLevel = lvl"
                class="text-[10px] px-1.5 py-0.5 rounded bg-amber-900/50 hover:bg-amber-800/80 text-amber-200 border border-amber-700/40"
              >
                +{{ lvl }}
              </button>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-2">
            <input
              v-model.number="formRefineLevel"
              type="range"
              min="0"
              max="63"
              step="1"
              class="flex-1 accent-amber-500 cursor-pointer"
            />
            <span class="text-sm font-mono font-bold text-amber-400 w-12 text-right">
              +{{ formRefineLevel }}
            </span>
          </div>
        </div>

        <!-- 底部按钮操作 -->
        <div class="flex items-center justify-between pt-3 border-t border-gray-800">
          <button
            v-if="!editingSlot.isEmpty"
            @click="clearCurrentSlot"
            class="text-xs px-3 py-2 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800/50 transition flex items-center gap-1"
          >
            🗑️ 清空该槽位
          </button>
          <div v-else class="text-[11px] text-gray-500">
            保存后将在空槽中生成该物品
          </div>

          <div class="flex items-center gap-2">
            <button
              @click="closeEditModal"
              class="text-xs px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
            >
              取消
            </button>
            <button
              @click="saveSlotEdit"
              class="text-xs px-5 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold transition shadow-lg shadow-amber-500/20"
            >
              确定保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { DnfHeroSave, InventorySlot } from '../core/types'
import { CATEGORIES, ITEM_DICTIONARY, findItemInfo, getQualityInfo, getAllAvailableItems } from '../core/itemDict'
import { isEquipCategory } from '../core/saveParser'

const props = defineProps<{
  save: DnfHeroSave
}>()

type FilterType = 'all' | 'equip' | 'consumable' | 'material' | 'quest' | 'empty'
const filterType = ref<FilterType>('all')
const editingSlot = ref<InventorySlot | null>(null)

const modalSearchQuery = ref('')
const selectedCategoryFilter = ref<number>(-1)
const formTypeId = ref<number>(0x01)
const formItemId = ref<number>(0x28)
const formCount = ref<number>(1)
const formRefineLevel = ref<number>(0)

// 装备判定 (武器、防具、首饰、称号、宠物，数量锁死为1)
const isSingleCategory = (typeId: number) => typeId >= 0x00 && typeId <= 0x0a
const isEquip = (typeId: number) => typeId >= 0x00 && typeId <= 0x0a
const isConsumable = (typeId: number) => typeId >= 0x0d && typeId <= 0x12
const isMaterial = (typeId: number) => typeId === 0x0b || typeId === 0x0c
const isQuest = (typeId: number) => typeId === 0x13

function toHex(val: number | undefined | null, pad = 2): string {
  if (val === undefined || val === null || isNaN(val)) return '00'
  return (val & 0xff).toString(16).padStart(pad, '0').toUpperCase()
}

// 复合键，用于跨大类搜索时唯一标识物品
const selectedItemCompositeKey = computed(() => {
  return `${formTypeId.value}_${formItemId.value}`
})

// 实时选中的装备信息与品级样式
const currentSelectedInfo = computed(() => {
  const tId = typeof formTypeId.value === 'number' && !isNaN(formTypeId.value) ? formTypeId.value : 0
  const iId = typeof formItemId.value === 'number' && !isNaN(formItemId.value) ? formItemId.value : 0
  return findItemInfo(tId, iId)
})

const currentQualityInfo = computed(() => {
  return getQualityInfo(currentSelectedInfo.value.quality)
})

const usedSlotsCount = computed(() => {
  return props.save.inventory.filter(s => !s.isEmpty).length
})

const equipSlotsCount = computed(() => {
  return props.save.inventory.filter(s => !s.isEmpty && isEquip(s.typeId)).length
})

const consumableSlotsCount = computed(() => {
  return props.save.inventory.filter(s => !s.isEmpty && isConsumable(s.typeId)).length
})

const materialSlotsCount = computed(() => {
  return props.save.inventory.filter(s => !s.isEmpty && isMaterial(s.typeId)).length
})

const questSlotsCount = computed(() => {
  return props.save.inventory.filter(s => !s.isEmpty && isQuest(s.typeId)).length
})

const emptySlotsCount = computed(() => {
  return props.save.inventory.filter(s => s.isEmpty).length
})

const filteredSlots = computed(() => {
  switch (filterType.value) {
    case 'equip':
      return props.save.inventory.filter(s => !s.isEmpty && isEquip(s.typeId))
    case 'consumable':
      return props.save.inventory.filter(s => !s.isEmpty && isConsumable(s.typeId))
    case 'material':
      return props.save.inventory.filter(s => !s.isEmpty && isMaterial(s.typeId))
    case 'quest':
      return props.save.inventory.filter(s => !s.isEmpty && isQuest(s.typeId))
    case 'empty':
      return props.save.inventory.filter(s => s.isEmpty)
    case 'all':
    default:
      return props.save.inventory
  }
})

// 全量匹配搜索词的物品列表 (全库检索近2000件物品)
const allSearchMatchedItems = computed(() => {
  const q = modalSearchQuery.value.trim().toLowerCase()
  const allAvailable = getAllAvailableItems()
  if (!q) {
    return allAvailable
  }
  return allAvailable.filter(item => {
    return item.name.toLowerCase().includes(q) ||
           (item.desc && item.desc.toLowerCase().includes(q)) ||
           item.categoryName.toLowerCase().includes(q)
  })
})

// 当前匹配的总物品数
const totalMatchedCount = computed(() => {
  return allSearchMatchedItems.value.length
})

// 弹窗大类下拉框的动态选项 (搜索时动态统计各分类匹配数量，且仅列出有匹配项的类别)
const categoryFilterOptions = computed(() => {
  const q = modalSearchQuery.value.trim().toLowerCase()
  const list = allSearchMatchedItems.value
  return CATEGORIES.map(cat => {
    const count = list.filter(i => i.typeId === cat.id).length
    return {
      id: cat.id,
      name: cat.name,
      count,
      label: q ? `${cat.name} (${count}件)` : `${cat.name} (${count})`
    }
  }).filter(cat => !q || cat.count > 0)
})

// 弹窗中展示的物品列表：根据搜索词与选定大类双重过滤
const modalDisplayItems = computed(() => {
  const q = modalSearchQuery.value.trim().toLowerCase()
  let list = allSearchMatchedItems.value
  
  // 如果选择了特定类别（非“全部类别”），按该类别过滤
  if (selectedCategoryFilter.value !== -1) {
    list = list.filter(i => i.typeId === selectedCategoryFilter.value)
  }

  if (list.length === 0) {
    return [{
      typeId: formTypeId.value,
      itemId: formItemId.value,
      name: q ? `未找到包含 "${modalSearchQuery.value}" 的物品` : '当前分类无物品',
      categoryName: '无匹配'
    }]
  }
  return list
})

// 监听搜索输入，自动重置大类为全部类别，列出全库所有类别的匹配物品
watch(modalSearchQuery, (newQ) => {
  selectedCategoryFilter.value = -1
  const q = newQ.trim().toLowerCase()
  if (!q) return

  const matched = allSearchMatchedItems.value
  if (matched.length > 0) {
    const hasCurrent = matched.some(m => m.typeId === formTypeId.value && m.itemId === formItemId.value)
    if (!hasCurrent) {
      const first = matched[0]
      formTypeId.value = first.typeId
      formItemId.value = first.itemId
      if (isSingleCategory(first.typeId)) {
        formCount.value = 1
      }
    }
  }
})

// 切换大类分类时触发：不修改搜索词，只定位选中的物品到当前分类的首项
function onCategoryFilterChange() {
  const list = modalDisplayItems.value
  if (list.length > 0 && list[0].categoryName !== '无匹配') {
    const hasCurrent = list.some(m => m.typeId === formTypeId.value && m.itemId === formItemId.value)
    if (!hasCurrent) {
      const first = list[0]
      formTypeId.value = first.typeId
      formItemId.value = first.itemId
      if (isSingleCategory(first.typeId)) {
        formCount.value = 1
      }
    }
  }
}

function formatOptionLabel(item: any, isSearching: boolean = false): string {
  if (!item) return ''
  const qInfo = getQualityInfo(item.quality)
  const lvlStr = item.reqLevel !== undefined && item.reqLevel > 0 ? `Lv.${item.reqLevel} ` : ''
  const categoryPrefix = isSearching ? `[${item.categoryName}] ` : ''
  return `${categoryPrefix}[${lvlStr}${qInfo.name}] ${item.name}`
}

function onSelectKeyChange(event: Event) {
  const val = (event.target as HTMLSelectElement).value
  const parts = val.split('_')
  if (parts.length === 2) {
    const tId = Number(parts[0])
    const iId = Number(parts[1])
    formTypeId.value = tId
    formItemId.value = iId
    if (isSingleCategory(tId)) {
      formCount.value = 1
    }
  }
}

function getQualityClass(slot: InventorySlot): string {
  const info = findItemInfo(slot.typeId, slot.itemId)
  switch (info.quality) {
    case 'orange':
      return 'bg-amber-950/30 border-amber-500/60 shadow-amber-500/10 text-amber-200'
    case 'pink':
      return 'bg-fuchsia-950/30 border-fuchsia-500/60 shadow-fuchsia-500/10 text-fuchsia-200'
    case 'purple':
      return 'bg-purple-950/30 border-purple-500/60 shadow-purple-500/10 text-purple-200'
    case 'blue':
      return 'bg-blue-950/30 border-blue-500/60 shadow-blue-500/10 text-blue-200'
    default:
      return 'bg-[#151924] border-gray-700 text-gray-200'
  }
}

function getSlotHoverTitle(slot: InventorySlot): string {
  if (slot.isEmpty) return '空槽位 (点击录入物品)'
  const info = findItemInfo(slot.typeId, slot.itemId)
  const qInfo = getQualityInfo(info.quality)
  const lvlStr = info.reqLevel !== undefined ? ` | Lv.${info.reqLevel}` : ''
  const refineStr = slot.refineLevel > 0 ? ` (+${slot.refineLevel})` : ''
  return `${slot.itemName}${refineStr} [${qInfo.label}] | ${info.categoryName}${lvlStr} | 数量: ${slot.count}`
}

function openEditModal(slot: InventorySlot) {
  editingSlot.value = slot
  modalSearchQuery.value = ''
  if (slot.isEmpty) {
    selectedCategoryFilter.value = 0x01 // 默认太刀
    formTypeId.value = 0x01 // 默认太刀
    formItemId.value = 0x28 // 默认流光星陨刀
    formCount.value = 1
    formRefineLevel.value = 0
  } else {
    selectedCategoryFilter.value = slot.typeId
    formTypeId.value = slot.typeId
    formItemId.value = slot.itemId
    formCount.value = isSingleCategory(slot.typeId) ? 1 : Math.min(99, slot.count || 1)
    formRefineLevel.value = slot.refineLevel || 0
  }
}

function closeEditModal() {
  editingSlot.value = null
  modalSearchQuery.value = ''
  selectedCategoryFilter.value = -1
}

function clearCurrentSlot() {
  if (!editingSlot.value) return
  editingSlot.value.isEmpty = true
  editingSlot.value.typeId = 0
  editingSlot.value.itemId = 0
  editingSlot.value.count = 0
  editingSlot.value.refineLevel = 0
  editingSlot.value.itemName = '空槽位'
  editingSlot.value.categoryName = '空'
  closeEditModal()
}

function saveSlotEdit() {
  if (!editingSlot.value) return
  const info = findItemInfo(formTypeId.value, formItemId.value)
  const isEquip = isEquipCategory(formTypeId.value)
  const isSingle = isSingleCategory(formTypeId.value)

  editingSlot.value.isEmpty = false
  editingSlot.value.typeId = formTypeId.value
  editingSlot.value.itemId = formItemId.value
  // 装备数量严格锁死为 1，非装备最大限制 99
  editingSlot.value.count = isSingle ? 1 : Math.max(1, Math.min(99, formCount.value || 1))
  editingSlot.value.refineLevel = isEquip ? formRefineLevel.value : 0
  editingSlot.value.itemName = info.name
  editingSlot.value.categoryName = info.categoryName
  closeEditModal()
}
</script>
