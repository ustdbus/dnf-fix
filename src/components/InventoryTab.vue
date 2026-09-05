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

    <!-- 游戏同款一行10格网格容器 (支持横向滑动自适应) -->
    <div class="overflow-x-auto pb-3 -mx-1 px-1 custom-scrollbar">
      <div class="grid grid-cols-10 min-w-[780px] gap-1.5">
        <div
          v-for="slot in filteredSlots"
          :key="slot.slotIndex"
          @click="openEditModal(slot)"
          :class="[
            'relative p-1.5 rounded-lg border cursor-pointer transition flex flex-col justify-between h-20 overflow-hidden group select-none',
            slot.isEmpty
              ? 'bg-[#10131d]/60 border-dashed border-gray-800 hover:border-amber-600/50 hover:bg-[#161a27]'
              : getQualityClass(slot)
          ]"
        >
          <!-- 槽位角标: 左侧装备标记/强化等级，右侧槽位序号 -->
          <div class="flex items-center justify-between text-[10px] leading-none">
            <span v-if="!slot.isEmpty && isEquip(slot.typeId)" class="font-bold">
              <span v-if="slot.refineLevel > 0" class="text-amber-400 drop-shadow">
                +{{ slot.refineLevel }}
              </span>
              <span v-else class="text-amber-300/80 bg-black/40 px-1 py-0.5 rounded text-[9px]">
                E
              </span>
            </span>
            <span v-else-if="!slot.isEmpty" class="text-gray-500 scale-90 origin-left text-[9px]">
              {{ slot.categoryName.slice(0, 3) }}
            </span>
            <span v-else class="text-gray-600 text-[9px]">空</span>

            <span class="font-mono text-gray-500 text-[9px]">#{{ slot.slotIndex + 1 }}</span>
          </div>

          <!-- 中间物品名称 -->
          <div class="my-auto py-0.5 text-center">
            <div
              v-if="!slot.isEmpty"
              class="text-[11px] leading-tight line-clamp-2 text-gray-200 group-hover:text-white font-medium break-all"
              :title="slot.itemName + (slot.refineLevel > 0 ? ` (+${slot.refineLevel})` : '')"
            >
              {{ slot.itemName }}
            </div>
            <div v-else class="text-[11px] text-gray-600 group-hover:text-amber-400 transition font-mono">
              +
            </div>
          </div>

          <!-- 底部栏: 左侧类别/提示，右侧数量 -->
          <div class="flex items-center justify-between text-[10px] leading-none">
            <span v-if="!slot.isEmpty" class="text-[9px] text-gray-500 scale-90 origin-left truncate max-w-[45px]">
              {{ slot.categoryName }}
            </span>
            <span v-else class="text-[9px] text-gray-600">可添加</span>

            <span v-if="!slot.isEmpty" class="text-[10px] font-mono text-amber-300 font-semibold">
              x{{ slot.count }}
            </span>
            <span v-else class="text-[9px] text-gray-600 font-mono">--</span>
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

        <!-- 1. 物品大类选择 -->
        <div>
          <label class="block text-xs text-gray-400 mb-1 font-medium">1. 物品大类:</label>
          <select
            v-model.number="formTypeId"
            @change="onCategoryChange"
            class="w-full bg-[#0e1119] text-xs text-amber-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none"
          >
            <option v-for="cat in CATEGORIES" :key="cat.id" :value="cat.id">
              {{ cat.name }} (0x{{ cat.id.toString(16).padStart(2, '0') }})
            </option>
          </select>
        </div>

        <!-- 2. 预置物品库选择 -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">2. 选择预置物品 (或手动填写ID):</label>
            <span class="text-[10px] text-gray-500">匹配本类别预设</span>
          </div>
          <select
            v-model.number="formItemId"
            class="w-full bg-[#0e1119] text-xs text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none"
          >
            <option v-for="item in currentCategoryItems" :key="item.itemId" :value="item.itemId">
              {{ item.name }} [0x{{ item.itemId.toString(16).padStart(2, '0') }}]
            </option>
          </select>
        </div>

        <!-- 3. 手动 16 进制 ID 调整 (支持任意冷门装备代码) -->
        <div class="grid grid-cols-2 gap-3 bg-black/30 p-3 rounded-lg border border-gray-800/80">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">大类代码 (16进制):</label>
            <input
              type="text"
              :value="'0x' + formTypeId.toString(16).padStart(2, '0')"
              @change="onHexTypeInput(($event.target as HTMLInputElement).value)"
              class="w-full bg-[#121520] text-xs font-mono text-amber-300 px-2.5 py-1.5 rounded border border-gray-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">子ID代码 (16进制):</label>
            <input
              type="text"
              :value="'0x' + formItemId.toString(16).padStart(2, '0')"
              @change="onHexItemInput(($event.target as HTMLInputElement).value)"
              class="w-full bg-[#121520] text-xs font-mono text-amber-300 px-2.5 py-1.5 rounded border border-gray-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <!-- 4. 物品数量 -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">3. 物品数量 (1 ~ 255):</label>
            <div class="flex gap-1">
              <button
                v-for="amt in [1, 10, 50, 99, 255]"
                :key="amt"
                @click="formCount = amt"
                class="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                {{ amt }}
              </button>
            </div>
          </div>
          <input
            v-model.number="formCount"
            type="number"
            min="1"
            max="255"
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
import { ref, computed } from 'vue'
import { DnfHeroSave, InventorySlot } from '../core/types'
import { CATEGORIES, ITEM_DICTIONARY, findItemInfo } from '../core/itemDict'
import { isEquipCategory } from '../core/saveParser'

const props = defineProps<{
  save: DnfHeroSave
}>()

type FilterType = 'all' | 'equip' | 'consumable' | 'material' | 'quest' | 'empty'
const filterType = ref<FilterType>('all')
const editingSlot = ref<InventorySlot | null>(null)

const formTypeId = ref<number>(0x01)
const formItemId = ref<number>(0x28)
const formCount = ref<number>(1)
const formRefineLevel = ref<number>(0)

const isEquip = (typeId: number) => (typeId >= 0x00 && typeId <= 0x0a) || typeId === 0x0c
const isConsumable = (typeId: number) => typeId >= 0x0d && typeId <= 0x12
const isMaterial = (typeId: number) => typeId === 0x0b
const isQuest = (typeId: number) => typeId === 0x13

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

const currentCategoryItems = computed(() => {
  const list = ITEM_DICTIONARY.filter(i => i.typeId === formTypeId.value)
  if (list.length === 0) {
    return [{
      typeId: formTypeId.value,
      itemId: formItemId.value,
      name: `默认物品 [0x${formItemId.value.toString(16)}]`,
      categoryName: '自定义'
    }]
  }
  return list
})

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

function openEditModal(slot: InventorySlot) {
  editingSlot.value = slot
  if (slot.isEmpty) {
    formTypeId.value = 0x01 // 默认太刀
    formItemId.value = 0x28 // 默认流光星陨刀
    formCount.value = 1
    formRefineLevel.value = 0
  } else {
    formTypeId.value = slot.typeId
    formItemId.value = slot.itemId
    formCount.value = slot.count || 1
    formRefineLevel.value = slot.refineLevel || 0
  }
}

function closeEditModal() {
  editingSlot.value = null
}

function onCategoryChange() {
  const firstItem = ITEM_DICTIONARY.find(i => i.typeId === formTypeId.value)
  if (firstItem) {
    formItemId.value = firstItem.itemId
  } else {
    formItemId.value = 0x01
  }
}

function onHexTypeInput(val: string) {
  const parsed = parseInt(val.replace('0x', ''), 16)
  if (!isNaN(parsed)) {
    formTypeId.value = parsed & 0xff
  }
}

function onHexItemInput(val: string) {
  const parsed = parseInt(val.replace('0x', ''), 16)
  if (!isNaN(parsed)) {
    formItemId.value = parsed & 0xff
  }
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

  editingSlot.value.isEmpty = false
  editingSlot.value.typeId = formTypeId.value
  editingSlot.value.itemId = formItemId.value
  editingSlot.value.count = formCount.value
  editingSlot.value.refineLevel = isEquip ? formRefineLevel.value : 0
  editingSlot.value.itemName = info.name
  editingSlot.value.categoryName = info.categoryName
  closeEditModal()
}
</script>
