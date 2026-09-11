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
          全部 <span class="text-[10px] font-mono opacity-80">({{ ownedSlots.length }})</span>
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
          <!-- 槽位角标: 左侧装备标记/强化等级/附魔，右侧槽位序号 -->
          <div class="flex items-center justify-between text-[8px] sm:text-[10px] leading-none">
            <span v-if="!slot.isEmpty && isEquip(slot.typeId)" class="font-bold flex items-center gap-0.5">
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
              <!-- 附魔标识 (紫色微光标签) -->
              <span
                v-if="slot.enchant && slot.enchant.code > 0"
                class="text-[7px] sm:text-[8px] text-fuchsia-300 bg-fuchsia-950/90 px-0.5 rounded border border-fuchsia-500/50 leading-tight shadow-sm shadow-fuchsia-500/30 font-mono"
                title="已附魔"
              >
                魔
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

            <span v-if="!slot.isEmpty && !isSingleCategory(slot.typeId)" class="w-full sm:w-auto text-right text-[8px] sm:text-[10px] font-mono text-amber-300 font-semibold">
              x{{ slot.count }}
            </span>
            <span v-else-if="!slot.isEmpty && isSingleCategory(slot.typeId)" class="w-full sm:w-auto text-right text-[7px] sm:text-[9px] font-mono text-gray-500">
              --
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
        <div class="flex items-center justify-between border-b border-gray-800 pb-3 gap-2 flex-wrap sm:flex-nowrap">
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-amber-400 font-bold">槽位 #{{ editingSlot.slotIndex + 1 }} 物品修改</span>
            <span v-if="editingSlot.isEmpty" class="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
              新物品录入
            </span>
          </div>

          <!-- 批量复制控件 (直接指定复制数量，自动计算并填充后续槽位) -->
          <div class="flex items-center gap-1.5 bg-[#0e1119] border border-gray-700/80 rounded-lg px-2 py-1 shadow-inner ml-auto mr-1">
            <span class="text-xs text-gray-300 font-medium select-none">复制:</span>
            <input
              v-model.number="copyCountInput"
              type="number"
              min="1"
              placeholder="数量"
              class="w-16 bg-[#161925] border border-gray-600 rounded px-1.5 py-0.5 text-xs text-amber-300 font-mono text-center focus:border-amber-400 focus:outline-none"
              @keydown.enter.prevent="executeBatchCopy"
            />
            <button
              type="button"
              @click="executeBatchCopy"
              title="按指定数量复制到背包后续空槽位"
              class="text-xs px-2.5 py-0.5 rounded bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold transition shadow-sm active:scale-95"
            >
              确定
            </button>
          </div>

          <button @click="closeEditModal" class="text-gray-400 hover:text-white text-lg shrink-0">✕</button>
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

        <!-- 2. 装备品质筛选分类 (全部品质 / 普通 / 高级 / 稀有 / 神器 / 史诗) -->
        <div v-if="showQualityFilter" class="space-y-1.5">
          <div class="flex items-center justify-between">
            <label class="text-xs text-gray-400 font-medium flex items-center gap-1.5">
              <span>💎</span>
              <span>2. 装备品质分类:</span>
            </label>
            <span
              v-if="selectedQualityFilter !== 'all'"
              @click="selectedQualityFilter = 'all'; onQualityFilterChange()"
              class="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-700/40 transition"
            >
              ✕ 重置为全部品质
            </span>
          </div>
          <!-- 品质药丸快捷切换按钮组 (6列自适应布局，直观展示专属颜色与当前分类下数量) -->
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            <button
              v-for="q in QUALITY_FILTER_OPTIONS"
              :key="q.value"
              type="button"
              @click="selectedQualityFilter = q.value; onQualityFilterChange()"
              :disabled="qualityCounts[q.value] === 0"
              :class="[
                'text-xs py-1.5 px-1.5 rounded-lg font-bold border transition-all flex items-center justify-center gap-1 active:scale-95 select-none',
                qualityCounts[q.value] === 0
                  ? 'opacity-30 border-gray-800 bg-gray-900/40 text-gray-600 cursor-not-allowed'
                  : selectedQualityFilter === q.value
                    ? q.activeClass
                    : 'bg-[#0e1119] border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700 cursor-pointer'
              ]"
            >
              <span class="w-2 h-2 rounded-full shrink-0" :class="q.dotClass"></span>
              <span class="truncate">{{ q.label }}</span>
              <span class="text-[10px] font-mono opacity-80">({{ qualityCounts[q.value] || 0 }})</span>
            </button>
          </div>
        </div>

        <!-- 3. 防具材质分类 (仅在护肩 0x04、上衣 0x05、下衣 0x06 时显示: 全部材质 / 布甲 / 轻甲 / 重甲 / 板甲) -->
        <div v-if="showArmorTypeFilter" class="space-y-1.5">
          <div class="flex items-center justify-between">
            <label class="text-xs text-gray-400 font-medium flex items-center gap-1.5">
              <span>🛡️</span>
              <span>3. 防具材质分类 (布甲 / 轻甲 / 重甲 / 板甲):</span>
            </label>
            <span
              v-if="selectedArmorTypeFilter !== 'all'"
              @click="selectedArmorTypeFilter = 'all'; onArmorTypeFilterChange()"
              class="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-700/40 transition"
            >
              ✕ 重置为全部材质
            </span>
          </div>
          <!-- 材质药丸快捷切换按钮组 (5列自适应布局，直观展示专属颜色与当前筛选下的数量) -->
          <div class="grid grid-cols-5 gap-1.5">
            <button
              v-for="mat in ARMOR_FILTER_OPTIONS"
              :key="mat.value"
              type="button"
              @click="selectedArmorTypeFilter = mat.value; onArmorTypeFilterChange()"
              :disabled="armorTypeCounts[mat.value] === 0"
              :class="[
                'text-xs py-1.5 px-1 rounded-lg font-bold border transition-all flex items-center justify-center gap-1 active:scale-95 select-none',
                armorTypeCounts[mat.value] === 0
                  ? 'opacity-30 border-gray-800 bg-gray-900/40 text-gray-600 cursor-not-allowed'
                  : selectedArmorTypeFilter === mat.value
                    ? mat.activeClass
                    : 'bg-[#0e1119] border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700 cursor-pointer'
              ]"
            >
              <span class="w-2 h-2 rounded-full shrink-0" :class="mat.dotClass"></span>
              <span class="truncate">{{ mat.label }}</span>
              <span class="text-[10px] font-mono opacity-80">({{ armorTypeCounts[mat.value] || 0 }})</span>
            </button>
          </div>
        </div>

        <!-- 4. 物品选择列表 -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">
              {{ modalSearchQuery.trim() ? '搜索匹配物品列表 (含穿戴等级、材质与品级分类):' : (showArmorTypeFilter ? '4. 选择物品 (含穿戴等级、材质与品级分类):' : (showQualityFilter ? '3. 选择物品 (含穿戴等级与品级分类):' : '2. 选择物品:')) }}
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

        <!-- 5. 选定物品实时详情卡片 (等级、品级分类、属性完整呈现) -->
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
              <div class="flex flex-wrap items-center justify-between gap-2">
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
                    v-if="currentSelectedInfo.armorType"
                    class="text-[10px] px-1.5 py-0.5 rounded bg-sky-950/70 text-sky-300 border border-sky-600/60 font-bold font-mono tracking-wide"
                  >
                    {{ currentSelectedInfo.armorType }}
                  </span>
                </div>
              </div>

              <!-- 详细属性栏: 分类、材质、等级、强化、价格等 -->
              <div class="text-[11px] text-gray-300 flex flex-wrap items-center gap-x-3.5 gap-y-1 pt-0.5">
                <span class="flex items-center gap-1">
                  <span class="text-gray-500">品级:</span>
                  <span class="font-bold" :class="currentQualityInfo.color">{{ currentQualityInfo.name }}</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="text-gray-500">分类:</span>
                  <span class="text-amber-200 font-semibold">{{ currentSelectedInfo.categoryName }}</span>
                </span>
                <span v-if="currentSelectedInfo.armorType" class="flex items-center gap-1">
                  <span class="text-gray-500">材质:</span>
                  <span class="text-sky-300 font-bold font-mono">{{ currentSelectedInfo.armorType }}</span>
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
                <span v-if="isEquipCategory(formTypeId) && formEnchantCode > 0" class="flex items-center gap-1">
                  <span class="text-gray-500">附魔:</span>
                  <span class="text-fuchsia-300 font-bold font-mono">{{ currentEnchantFormatText }}</span>
                </span>
              </div>

              <!-- 装备效果与套装效果区域：若存在套装效果，在右半边展示套装效果 (左右双栏布局) -->
              <div
                v-if="(currentEquipInnate && (currentEquipInnate.lines.length > 0 || currentEquipInnate.elementName)) || currentSetInfo"
                :class="[
                  'gap-2.5 items-start',
                  currentSetInfo ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col'
                ]"
              >
                <!-- 左栏: 游戏原版装备词条面板 (完全对齐官方游戏内显示) -->
                <div
                  v-if="currentEquipInnate && (currentEquipInnate.lines.length > 0 || currentEquipInnate.elementName)"
                  class="w-full bg-[#0b1220] border border-[#1c2c48] rounded-lg p-2.5 font-mono text-xs space-y-1 shadow-inner select-none"
                >
                  <!-- 官方固有词条 (基础属性白色，技能与触发特效淡蓝色，四维动态绑定当前属性) -->
                  <div
                    v-for="(line, lIdx) in displayInnateLines"
                    :key="lIdx"
                    :class="line.color === 'white' ? 'text-gray-100 font-normal' : 'text-sky-400 font-medium'"
                    class="tracking-wide"
                  >
                    {{ line.text }}
                  </div>

                  <!-- 装备附魔效果 (如浅绿色 "追加伤害 + 5%") -->
                  <div
                    v-if="formEnchantCode > 0 && currentEnchantFormatText"
                    class="text-lime-400 font-medium tracking-wide"
                  >
                    {{ currentEnchantFormatText }}
                  </div>

                  <!-- 最下面再加一条: xx属性攻击 (没有属性攻击就不写) -->
                  <div
                    v-if="currentEquipInnate.elementName"
                    class="text-sky-300 font-medium tracking-wide"
                  >
                    {{ currentEquipInnate.elementName }}
                  </div>
                </div>

                <!-- 右栏: 套装效果面板 (如果该装备存在套装效果，在右半边显示套装效果) -->
                <div
                  v-if="currentSetInfo"
                  class="w-full bg-[#0b1220] border border-[#1c2c48] rounded-lg p-2.5 font-mono text-xs space-y-1 shadow-inner select-none"
                >
                  <div class="text-amber-300 font-medium tracking-wide">
                    [套装效果]
                  </div>
                  <div
                    v-for="(eff, eIdx) in currentSetInfo.effects"
                    :key="eIdx"
                    class="text-emerald-400 font-medium tracking-wide"
                  >
                    {{ eff }}
                  </div>
                </div>
              </div>

              <!-- 物品特别说明/备注 (过滤掉重复的 Lv.xx 提示，保留真正的特殊说明) -->
              <div v-if="currentSelectedInfo.desc && !currentSelectedInfo.desc.startsWith('Lv.')" class="text-[10px] text-gray-400 font-mono pt-0.5 border-t border-gray-800/60">
                {{ currentSelectedInfo.desc }}
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 物品数量 (仅对非装备物品显示，装备为独立单件不可叠加，完全隐藏数量词条) -->
        <div v-if="!isSingleCategory(formTypeId)">
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs text-gray-400 font-medium">
              物品数量 (1 ~ 99):
            </label>
            <div class="flex gap-1">
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
          <input
            v-model.number="formCount"
            type="number"
            min="1"
            max="99"
            @blur="formCount = Math.max(1, Math.min(99, Math.floor(formCount || 1)))"
            @change="formCount = Math.max(1, Math.min(99, Math.floor(formCount || 1)))"
            class="w-full bg-[#0e1119] text-xs font-mono text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <!-- 装备高级属性控制面板 (强化等级、品级耐久、底层攻防与四维加成，默认置灰锁定保护) -->
        <div v-if="isEquipCategory(formTypeId)" class="bg-[#121522] p-3.5 rounded-xl border border-amber-800/40 space-y-3 shadow-inner">
          <!-- 锁定状态与切换工具栏 -->
          <div
            class="flex items-center justify-between p-2.5 rounded-lg border transition-all"
            :class="isEquipStatsLocked ? 'bg-gray-900/80 border-gray-800 text-gray-500' : 'bg-amber-950/40 border-amber-500/60 text-amber-200 shadow-md shadow-amber-950/40'"
          >
            <div class="flex items-center gap-2">
              <span class="text-base">{{ isEquipStatsLocked ? '🔒' : '🔓' }}</span>
              <div>
                <div class="text-xs font-bold" :class="isEquipStatsLocked ? 'text-gray-400' : 'text-amber-300'">
                  {{ isEquipStatsLocked ? '攻防数值、强化等级与四维已锁定保护' : '攻防数值、强化等级与四维已解锁编辑' }}
                </div>
                <div class="text-[10px]" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-amber-400/80'">
                  {{ isEquipStatsLocked ? '点击右侧按钮解锁后方可修改强化与底层攻防数值' : '可自由微调或魔改装备强化等级与攻防底层数值' }}
                </div>
              </div>
            </div>

            <button
              type="button"
              @click="isEquipStatsLocked = !isEquipStatsLocked"
              :class="[
                'text-xs px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1 active:scale-95 border',
                isEquipStatsLocked
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-amber-600 hover:bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-600/30'
              ]"
            >
              <span>{{ isEquipStatsLocked ? '🔒 点击解锁' : '🔓 已解锁(锁定)' }}</span>
            </button>
          </div>

          <!-- 强化等级 (+0 ~ +31) -->
          <div
            class="p-2.5 rounded-lg border transition-all"
            :class="isEquipStatsLocked ? 'bg-gray-900/40 border-gray-800/80 opacity-60' : 'bg-amber-950/20 border-amber-700/40'"
          >
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold flex items-center gap-1.5" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-amber-300'">
                <span>⚡</span>
                <span>装备强化等级 (+0 ~ +31+):</span>
              </label>
              <div class="flex gap-1">
                <button
                  v-for="lvl in [0, 10, 12, 15, 18, 31]"
                  :key="lvl"
                  type="button"
                  :disabled="isEquipStatsLocked"
                  @click="formRefineLevel = lvl"
                  :class="[
                    'text-[10px] px-1.5 py-0.5 rounded border transition',
                    isEquipStatsLocked
                      ? 'bg-gray-800/40 text-gray-600 border-gray-800 cursor-not-allowed'
                      : 'bg-amber-900/50 hover:bg-amber-800/80 text-amber-200 border-amber-700/40 cursor-pointer active:scale-95'
                  ]"
                >
                  +{{ lvl }}
                </button>
              </div>
            </div>
            <div class="flex items-center gap-3 mt-1.5">
              <input
                v-model.number="formRefineLevel"
                type="range"
                min="0"
                max="63"
                step="1"
                :disabled="isEquipStatsLocked"
                :class="isEquipStatsLocked ? 'cursor-not-allowed opacity-40' : 'accent-amber-500 cursor-pointer'"
                class="flex-1"
              />
              <span
                class="text-sm font-mono font-bold w-12 text-right"
                :class="isEquipStatsLocked ? 'text-gray-500' : 'text-amber-400'"
              >
                +{{ formRefineLevel }}
              </span>
            </div>
          </div>

          <!-- 装备品级与耐久度 (首饰无耐久度直接不展示耐久度栏，无任何额外小字) -->
          <div :class="canHaveDurability ? 'grid grid-cols-1 sm:grid-cols-2 gap-2.5' : 'block'">
            <!-- 品级 -->
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[11px] font-medium text-amber-300/90">
                  装备品级 (Byte 5):
                </label>
                <button
                  v-if="formGrade !== 3"
                  type="button"
                  @click="onGradeChange"
                  class="text-[10px] text-amber-400 hover:text-amber-300 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-700/50 px-1.5 py-0.5 rounded transition flex items-center gap-1 active:scale-95 cursor-pointer"
                  title="按官方游戏规则在当前品级区间内重新随机掷点属性"
                >
                  <span>🎲</span>
                  <span>重新随机</span>
                </button>
              </div>
              <select
                v-model.number="formGrade"
                @change="onGradeChange"
                class="w-full text-xs p-2 rounded-lg border font-bold transition bg-[#0e1119] text-amber-200 border-gray-700 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option v-for="g in GRADE_LIST" :key="g.value" :value="g.value">
                  {{ g.label }}
                </option>
              </select>
            </div>

            <!-- 耐久度 (仅在有耐久度时显示，首饰无耐久度直接不渲染) -->
            <div v-if="canHaveDurability">
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                当前耐久度 (Byte 6, Max 255):
              </label>
              <input
                v-model.number="formDurability"
                type="number"
                min="0"
                max="255"
                :disabled="isEquipStatsLocked"
                @blur="formDurability = Math.max(0, Math.min(255, Math.floor(formDurability || 0)))"
                @change="formDurability = Math.max(0, Math.min(255, Math.floor(formDurability || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-white border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
          </div>

          <!-- 底层攻防数值 (Byte 7~10 uint16 LE) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                {{ isWeapon ? '基础物理攻击 (Byte 7~8):' : '基础物理防御 (Byte 7~8):' }}
              </label>
              <input
                v-model.number="formBaseAtkDef1"
                type="number"
                min="0"
                max="65535"
                :disabled="isEquipStatsLocked"
                @blur="formBaseAtkDef1 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef1 || 0)))"
                @change="formBaseAtkDef1 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef1 || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-white border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
            <div>
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                {{ isWeapon ? '基础魔法攻击 (Byte 9~10):' : '基础魔法防御 (Byte 9~10):' }}
              </label>
              <input
                v-model.number="formBaseAtkDef2"
                type="number"
                min="0"
                max="65535"
                :disabled="isEquipStatsLocked"
                @blur="formBaseAtkDef2 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef2 || 0)))"
                @change="formBaseAtkDef2 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef2 || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-white border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
          </div>

          <!-- 强化附加数值与四维属性 (Byte 11~15) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                强化物攻/防加成 (B11~12):
              </label>
              <input
                v-model.number="formRefineBonus1"
                type="number"
                min="0"
                max="65535"
                :disabled="isEquipStatsLocked"
                @blur="formRefineBonus1 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus1 || 0)))"
                @change="formRefineBonus1 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus1 || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-white border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
            <div>
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                强化魔攻/防加成 (B13~14):
              </label>
              <input
                v-model.number="formRefineBonus2"
                type="number"
                min="0"
                max="65535"
                :disabled="isEquipStatsLocked"
                @blur="formRefineBonus2 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus2 || 0)))"
                @change="formRefineBonus2 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus2 || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-white border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
            <div>
              <label class="text-[11px] block mb-1 font-medium" :class="isEquipStatsLocked ? 'text-gray-500' : 'text-gray-400'">
                四维属性加成 (Byte 15):
              </label>
              <input
                v-model.number="formStat4"
                type="number"
                min="0"
                max="255"
                :disabled="isEquipStatsLocked"
                @blur="formStat4 = Math.max(0, Math.min(255, Math.floor(formStat4 || 0)))"
                @change="formStat4 = Math.max(0, Math.min(255, Math.floor(formStat4 || 0)))"
                :class="[
                  'w-full text-xs font-mono p-2 rounded-lg border transition',
                  isEquipStatsLocked
                    ? 'bg-gray-900/60 text-gray-500 border-gray-800 cursor-not-allowed'
                    : 'bg-[#0e1119] text-amber-300 font-bold border-gray-700 focus:border-amber-500 focus:outline-none'
                ]"
              />
            </div>
          </div>
        </div>

        <!-- 5. 装备附魔 / 魔法词条 (仅武器/防具/首饰可用) -->
        <div v-if="isEquipCategory(formTypeId)" class="bg-[#121624] p-3 rounded-xl border border-fuchsia-900/40 space-y-3 shadow-inner">
          <div class="flex items-center justify-between">
            <label class="text-xs text-fuchsia-300 font-bold flex items-center gap-1.5">
              <span>🔮</span>
              <span>5. 装备附魔 / 魔法词条 (官方全量 0x01~0x9F):</span>
            </label>
            <button
              v-if="formEnchantCode > 0"
              @click="clearEnchant"
              class="text-[10px] px-2 py-0.5 rounded bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-800/40 transition"
            >
              ✕ 清除附魔
            </button>
          </div>

          <!-- 快捷预设横向药丸栏 (Presets) -->
          <div class="space-y-1.5">
            <div class="text-[10px] text-gray-400 flex items-center justify-between flex-wrap gap-1">
              <span class="flex items-center gap-1">
                <span>🔮 莎兰附魔卡预设</span>
                <span v-if="enchantPresetFilterMode === 'part' && currentEquipPart" class="text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-600/40">
                  ({{ currentEquipPartName }}适用)
                </span>
                <span v-else class="text-gray-500 font-mono">(全量)</span>:
              </span>
              <div class="flex items-center gap-1 text-[9px]">
                <button
                  type="button"
                  @click="enchantPresetFilterMode = 'part'"
                  :class="[
                    'px-2 py-0.5 rounded transition font-medium',
                    enchantPresetFilterMode === 'part'
                      ? 'bg-amber-600 text-black font-bold shadow-sm'
                      : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                  ]"
                >
                  {{ currentEquipPartName }}专属 ({{ getEnchantPresetsForPart(currentEquipPart).length }})
                </button>
                <button
                  type="button"
                  @click="enchantPresetFilterMode = 'all'"
                  :class="[
                    'px-2 py-0.5 rounded transition font-medium',
                    enchantPresetFilterMode === 'all'
                      ? 'bg-amber-600 text-black font-bold shadow-sm'
                      : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                  ]"
                >
                  全部 ({{ ENCHANT_PRESETS.length }})
                </button>
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              <button
                v-for="preset in displayedEnchantPresets"
                :key="preset.id"
                @click="applyPreset(preset)"
                :class="[
                  'text-[10px] px-2 py-1 rounded-lg border transition flex items-center gap-1',
                  formEnchantCode === preset.code && formEnchantParam1 === preset.param1 && formEnchantParam2 === preset.param2 && formEnchantParam3 === preset.param3
                    ? 'bg-fuchsia-600 border-fuchsia-400 text-white font-bold shadow-md shadow-fuchsia-600/30'
                    : 'bg-gray-800/80 hover:bg-gray-700 border-gray-700 text-gray-300 hover:text-white'
                ]"
                :title="preset.desc"
              >
                <span>{{ preset.name }}</span>
              </button>
            </div>
          </div>

          <!-- 附魔词条细分选择 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-gray-800/60">
            <!-- 分类筛选 -->
            <div>
              <label class="text-[10px] text-gray-400 block mb-1">词条大类:</label>
              <select
                v-model="selectedEnchantCategory"
                class="w-full bg-[#0d1018] text-xs text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
              >
                <option value="all">全部大类 (全量词条)</option>
                <option v-for="cat in ENCHANT_CATEGORIES" :key="cat.id" :value="cat.id">
                  {{ cat.icon }} {{ cat.name }}
                </option>
              </select>
            </div>

            <!-- 具体附魔选项 -->
            <div>
              <label class="text-[10px] text-gray-400 block mb-1">附魔效果:</label>
              <select
                v-model.number="formEnchantCode"
                @change="onEnchantCodeChange"
                class="w-full bg-[#0d1018] text-xs text-gray-200 p-2 rounded-lg border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
              >
                <option :value="0">-- 无附魔效果 --</option>
                <option
                  v-for="item in filteredEnchantList"
                  :key="item.code"
                  :value="item.code"
                >
                  [0x{{ item.code.toString(16).padStart(2, '0').toUpperCase() }}] {{ item.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- 当前附魔实时效果展示条 -->
          <div
            v-if="formEnchantCode > 0"
            class="p-2.5 rounded-lg bg-fuchsia-950/30 border border-fuchsia-700/40 text-xs text-fuchsia-200 flex items-center justify-between shadow-inner"
          >
            <div class="flex items-center gap-2">
              <span class="text-fuchsia-400 font-bold">✨ 词条属性:</span>
              <span class="font-bold text-white tracking-wide">{{ currentEnchantFormatText }}</span>
            </div>
            <span class="text-[10px] font-mono text-fuchsia-400/80 bg-black/40 px-1.5 py-0.5 rounded border border-fuchsia-700/30">
              Code: 0x{{ formEnchantCode.toString(16).padStart(2, '0').toUpperCase() }}
            </span>
          </div>

          <!-- 参数动态输入 (根据选中的词条参数要求) -->
          <div v-if="currentEnchantDef && currentEnchantDef.params.length > 0" class="space-y-2 pt-1 border-t border-gray-800/60">
            <div class="text-[10px] text-gray-400">词条数值设置:</div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <!-- 参数 1 -->
              <div v-if="currentEnchantDef.params[0]" class="space-y-1">
                <label class="text-[10px] text-gray-400 flex items-center justify-between">
                  <span>{{ currentEnchantDef.params[0].label }}:</span>
                  <span class="text-fuchsia-400/80 font-mono text-[9px]">
                    上限: {{ currentEnchantDef.params[0].max }}{{ currentEnchantDef.params[0].unit || '' }}
                  </span>
                </label>
                <input
                  v-model.number="formEnchantParam1"
                  type="number"
                  :min="currentEnchantDef.params[0].min"
                  :max="currentEnchantDef.params[0].max"
                  @blur="handleParamInput(0)"
                  @change="handleParamInput(0)"
                  class="w-full bg-[#0d1018] text-xs font-mono text-white p-2 rounded-lg border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
                />
              </div>

              <!-- 参数 2 -->
              <div v-if="currentEnchantDef.params[1]" class="space-y-1">
                <label class="text-[10px] text-gray-400 flex items-center justify-between">
                  <span>{{ currentEnchantDef.params[1].label }}:</span>
                  <span class="text-fuchsia-400/80 font-mono text-[9px]">
                    上限: {{ currentEnchantDef.params[1].max }}{{ currentEnchantDef.params[1].unit || '' }}
                  </span>
                </label>
                <input
                  v-model.number="formEnchantParam2"
                  type="number"
                  :min="currentEnchantDef.params[1].min"
                  :max="currentEnchantDef.params[1].max"
                  @blur="handleParamInput(1)"
                  @change="handleParamInput(1)"
                  class="w-full bg-[#0d1018] text-xs font-mono text-white p-2 rounded-lg border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
                />
              </div>

              <!-- 参数 3 -->
              <div v-if="currentEnchantDef.params[2]" class="space-y-1">
                <label class="text-[10px] text-gray-400 flex items-center justify-between">
                  <span>{{ currentEnchantDef.params[2].label }}:</span>
                  <span class="text-fuchsia-400/80 font-mono text-[9px]">
                    上限: {{ currentEnchantDef.params[2].max }}{{ currentEnchantDef.params[2].unit || '' }}
                  </span>
                </label>
                <input
                  v-model.number="formEnchantParam3"
                  type="number"
                  :min="currentEnchantDef.params[2].min"
                  :max="currentEnchantDef.params[2].max"
                  @blur="handleParamInput(2)"
                  @change="handleParamInput(2)"
                  class="w-full bg-[#0d1018] text-xs font-mono text-white p-2 rounded-lg border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
                />
              </div>
            </div>
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
import { CATEGORIES, findItemInfo, getQualityInfo, getAllAvailableItems, getCategoryFirstItemId, isArmorCategory, isWeaponCategory, hasDurability } from '../core/itemDict'
import { isEquipCategory } from '../core/saveParser'
import { ENCHANT_CATEGORIES, ENCHANT_DEFINITIONS, ENCHANT_PRESETS, formatEnchantText, clampEnchantParam, EnchantPreset, getEquipPartByTypeId, getEquipPartName, getEnchantPresetsForPart, type EquipPart } from '../core/enchantDict'
import { getEquipInnateInfo, EquipInnateInfo } from '../core/equipInnateDict'
import { getEquipSetInfo, type EquipSetInfo } from '../core/setEffectDict'

const props = defineProps<{
  save: DnfHeroSave
}>()

// 品质筛选选项配置 (全部品质 / 普通 / 高级 / 稀有 / 神器 / 史诗)
const QUALITY_FILTER_OPTIONS = [
  { value: 'all', label: '全部品质', dotClass: 'bg-amber-400', activeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm shadow-amber-500/20' },
  { value: 'white', label: '普通', dotClass: 'bg-gray-300', activeClass: 'bg-gray-800 text-gray-200 border-gray-500/60 shadow-sm shadow-gray-500/20' },
  { value: 'blue', label: '高级', dotClass: 'bg-blue-400', activeClass: 'bg-blue-900/40 text-blue-300 border-blue-500/60 shadow-sm shadow-blue-500/20' },
  { value: 'purple', label: '稀有', dotClass: 'bg-purple-400', activeClass: 'bg-purple-900/40 text-purple-300 border-purple-500/60 shadow-sm shadow-purple-500/20' },
  { value: 'pink', label: '神器', dotClass: 'bg-fuchsia-400', activeClass: 'bg-fuchsia-900/40 text-fuchsia-300 border-fuchsia-500/60 shadow-sm shadow-fuchsia-500/20' },
  { value: 'orange', label: '史诗', dotClass: 'bg-amber-500', activeClass: 'bg-amber-950/60 text-amber-400 border-amber-500/80 shadow-sm shadow-amber-500/30' },
] as const

// 防具材质筛选配置 (仅护肩、上衣、下衣可用: 布甲 / 轻甲 / 重甲 / 板甲)
const ARMOR_FILTER_OPTIONS = [
  { value: 'all', label: '全部材质', dotClass: 'bg-amber-400', activeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm shadow-amber-500/20' },
  { value: '布甲', label: '布甲', dotClass: 'bg-sky-400', activeClass: 'bg-sky-950/60 text-sky-300 border-sky-500/60 shadow-sm shadow-sky-500/20' },
  { value: '轻甲', label: '轻甲', dotClass: 'bg-emerald-400', activeClass: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/60 shadow-sm shadow-emerald-500/20' },
  { value: '重甲', label: '重甲', dotClass: 'bg-rose-400', activeClass: 'bg-rose-950/60 text-rose-300 border-rose-500/60 shadow-sm shadow-rose-500/20' },
  { value: '板甲', label: '板甲', dotClass: 'bg-yellow-200', activeClass: 'bg-yellow-950/60 text-yellow-200 border-yellow-500/60 shadow-sm shadow-yellow-500/20' },
] as const

type FilterType = 'all' | 'equip' | 'consumable' | 'material' | 'quest' | 'empty'
const filterType = ref<FilterType>('all')
const editingSlot = ref<InventorySlot | null>(null)

const modalSearchQuery = ref('')
const selectedCategoryFilter = ref<number>(-1)
const selectedQualityFilter = ref<string>('all')
const selectedArmorTypeFilter = ref<string>('all')
const formTypeId = ref<number>(0x00)
const formItemId = ref<number>(1)
const formCount = ref<number>(1)
const formRefineLevel = ref<number>(0)
const copyCountInput = ref<number | null>(null)

// 装备高级属性锁定状态 (攻防、强化等级与四维，默认锁定保护)
const isEquipStatsLocked = ref<boolean>(true)

// 装备底层属性响应式状态 (依据官方 24 字节结构)
const formGrade = ref<number>(3)           // 3:最上级(+7%), 2:上级(+5%), 1:中级(+3.5%), 0:下级(原值)
const formDurability = ref<number>(35)     // 耐久度
const formBaseAtkDef1 = ref<number>(0)     // 基础物理攻/防 (uint16 LE)
const formBaseAtkDef2 = ref<number>(0)     // 基础魔法攻/防 (uint16 LE)
const formRefineBonus1 = ref<number>(0)    // 强化物理加成 (uint16 LE)
const formRefineBonus2 = ref<number>(0)    // 强化魔法加成 (uint16 LE)
const formStat4 = ref<number>(0)           // 四维加成 (uint8)

// 附魔响应式状态
const selectedEnchantCategory = ref<string>('all')
const formEnchantCode = ref<number>(0)
const formEnchantParam1 = ref<number>(0)
const formEnchantParam2 = ref<number>(0)
const formEnchantParam3 = ref<number>(0)

// 附魔预设部位筛选：'part' 表示仅显示当前部位专属推荐；'all' 表示显示全部
const enchantPresetFilterMode = ref<'part' | 'all'>('part')

// 当前装备的部位 ('weapon' | 'shoulder' | 'top' | 'bottom' | 'bracelet' | 'ring' | null)
const currentEquipPart = computed<EquipPart | null>(() => {
  return getEquipPartByTypeId(formTypeId.value)
})

// 当前部位名称
const currentEquipPartName = computed<string>(() => {
  return getEquipPartName(currentEquipPart.value)
})

// 当前展示的预设列表 (依据当前部位智能过滤或全量查看)
const displayedEnchantPresets = computed<EnchantPreset[]>(() => {
  if (enchantPresetFilterMode.value === 'all') {
    return ENCHANT_PRESETS
  }
  return getEnchantPresetsForPart(currentEquipPart.value)
})

// 装备固有属性计算属性
const currentEquipInnate = computed<EquipInnateInfo | null>(() => {
  if (!isEquip(formTypeId.value)) return null
  return getEquipInnateInfo(formTypeId.value, formItemId.value)
})

// 套装效果计算属性 (若当前装备属于某套装，则返回套装信息)
const currentSetInfo = computed<EquipSetInfo | null>(() => {
  if (!isEquip(formTypeId.value)) return null
  return getEquipSetInfo(formTypeId.value, formItemId.value)
})

// 解析装备固有的四维属性基准值 (出厂下级值) 与类型 (力量、智力、体力、精神)
function getInnateStat4Info(innate: EquipInnateInfo | null): { type: string | null; baseVal: number } {
  if (!innate) return { type: null, baseVal: 0 }
  if (innate.options) {
    for (const opt of innate.options) {
      if (opt.code === 1) return { type: '力量', baseVal: opt.p1 }
      if (opt.code === 2) return { type: '智力', baseVal: opt.p1 }
      if (opt.code === 3) return { type: '体力', baseVal: opt.p1 }
      if (opt.code === 4) return { type: '精神', baseVal: opt.p1 }
    }
  }
  if (innate.stat4 > 0) {
    return { type: '力量', baseVal: innate.stat4 }
  }
  return { type: null, baseVal: 0 }
}

// 动态词条列表：四维属性动态对齐当前的 formStat4.value (Byte 15)
const displayInnateLines = computed(() => {
  if (!currentEquipInnate.value) return []
  const statInfo = getInnateStat4Info(currentEquipInnate.value)
  return currentEquipInnate.value.lines.map(line => {
    if (statInfo.type && line.text.startsWith(statInfo.type)) {
      const currentVal = formStat4.value > 0 ? formStat4.value : statInfo.baseVal
      return {
        ...line,
        text: `${statInfo.type} +${currentVal}`
      }
    }
    return line
  })
})

const isWeapon = computed(() => isWeaponCategory(formTypeId.value))
const canHaveDurability = computed(() => hasDurability(formTypeId.value))


const GRADE_LIST = [
  { value: 3, label: '最上级', color: 'text-amber-400' },
  { value: 2, label: '上级', color: 'text-yellow-400' },
  { value: 1, label: '中级', color: 'text-purple-400' },
  { value: 0, label: '下级', color: 'text-blue-400' },
]

// 切换装备品级或点击重新随机时，按官方游戏引擎原生算法在区间内随机加成
// 逆向源码依据：libBNVModule.so: createItem @ 0x000b7801
// 0.etc 为出厂基准下级值 (Grade 0, 100%)
// 最上级 (Grade 3): 固定 +7% 顶格满属性 (无需随机，保存自动路由到上级 Grade 2 确保游戏正常显示)
// 上级 (Grade 2): 官方原生代码 bl getRandom(5, 7)，在 +5% ~ +7% 之间随机波动，耐久度 +0 ~ +2
// 中级 (Grade 1): 官方原生代码围绕中间基准小幅随机浮动 +0% ~ +3%，耐久度 -1 ~ 0
// 下级 (Grade 0): 官方原生代码扣减 -3% ~ -7% (基准值的 93% ~ 97%)，耐久度 -2 ~ -4
function onGradeChange() {
  if (!isEquip(formTypeId.value)) return
  const innate = getEquipInnateInfo(formTypeId.value, formItemId.value)
  if (!innate) return

  const statInfo = getInnateStat4Info(innate)

  let ratio1 = 1.07
  let ratio2 = 1.07
  let statRatio = 1.07
  let durOffset = 0

  if (formGrade.value === 3) {
    // 最上级: 107% 官方满属性 (固定顶格最大值)
    ratio1 = 1.07
    ratio2 = 1.07
    statRatio = 1.07
    durOffset = 0
  } else if (formGrade.value === 2) {
    // 上级: 官方代码 bl getRandom(5, 7)，在 +5% ~ +7% 随机掷点
    const rate1 = Math.floor(Math.random() * 3) + 5 // 5, 6, 7 (%)
    const rate2 = Math.floor(Math.random() * 3) + 5 // 5, 6, 7 (%)
    const statRate = Math.max(rate1, rate2)
    ratio1 = 1 + rate1 / 100
    ratio2 = 1 + rate2 / 100
    statRatio = 1 + statRate / 100
    durOffset = Math.floor(Math.random() * 3) // +0 ~ +2
  } else if (formGrade.value === 1) {
    // 中级: 官方代码在基准线上浮动 0% ~ 3%
    const rate1 = Math.floor(Math.random() * 4) // 0, 1, 2, 3 (%)
    const rate2 = Math.floor(Math.random() * 4) // 0, 1, 2, 3 (%)
    const statRate = Math.max(rate1, rate2)
    ratio1 = 1 + rate1 / 100
    ratio2 = 1 + rate2 / 100
    statRatio = 1 + statRate / 100
    durOffset = -Math.floor(Math.random() * 2) // -1 ~ 0
  } else if (formGrade.value === 0) {
    // 下级: 官方代码扣减 3% ~ 7% (基准原值的 93% ~ 97%)
    const rate1 = Math.floor(Math.random() * 5) + 3 // 3, 4, 5, 6, 7 (%)
    const rate2 = Math.floor(Math.random() * 5) + 3 // 3, 4, 5, 6, 7 (%)
    const statRate = Math.max(rate1, rate2)
    ratio1 = Math.max(0.90, 1 - rate1 / 100)
    ratio2 = Math.max(0.90, 1 - rate2 / 100)
    statRatio = Math.max(0.90, 1 - statRate / 100)
    durOffset = -(Math.floor(Math.random() * 3) + 2) // -2 ~ -4
  }

  // 基础攻防向下取整，100% 对齐游戏实机
  formBaseAtkDef1.value = Math.floor((innate.base1 || 0) * ratio1)
  formBaseAtkDef2.value = Math.floor((innate.base2 || 0) * ratio2)
  // 四维属性四舍五入对齐游戏实机
  if (statInfo.baseVal > 0) {
    formStat4.value = Math.round(statInfo.baseVal * statRatio)
  }
  if (canHaveDurability.value) {
    formDurability.value = Math.max(1, (innate.durability || 35) + durOffset)
  } else {
    formDurability.value = 0
  }
}

// 附魔计算属性
const currentEnchantDef = computed(() => {
  if (!formEnchantCode.value) return null
  return ENCHANT_DEFINITIONS[formEnchantCode.value] || null
})

const currentEnchantFormatText = computed(() => {
  return formatEnchantText(
    formEnchantCode.value,
    formEnchantParam1.value,
    formEnchantParam2.value,
    formEnchantParam3.value
  )
})

const filteredEnchantList = computed(() => {
  const list = Object.values(ENCHANT_DEFINITIONS)
  if (selectedEnchantCategory.value === 'all') {
    return list
  }
  return list.filter(item => item.category === selectedEnchantCategory.value)
})

function applyPreset(preset: EnchantPreset) {
  formEnchantCode.value = preset.code
  formEnchantParam1.value = preset.param1
  formEnchantParam2.value = preset.param2
  formEnchantParam3.value = preset.param3
}

function clearEnchant() {
  formEnchantCode.value = 0
  formEnchantParam1.value = 0
  formEnchantParam2.value = 0
  formEnchantParam3.value = 0
}

function onEnchantCodeChange() {
  const def = ENCHANT_DEFINITIONS[formEnchantCode.value]
  if (def && def.params) {
    formEnchantParam1.value = def.params[0]?.defaultVal || 0
    formEnchantParam2.value = def.params[1]?.defaultVal || 0
    formEnchantParam3.value = def.params[2]?.defaultVal || 0
  } else {
    formEnchantParam1.value = 0
    formEnchantParam2.value = 0
    formEnchantParam3.value = 0
  }
}

// 参数超出上限时自动设为上限最大值 (如果小于最小值则设为最小值)
function handleParamInput(paramIndex: number) {
  if (!formEnchantCode.value) return
  if (paramIndex === 0) {
    formEnchantParam1.value = clampEnchantParam(formEnchantCode.value, 0, formEnchantParam1.value)
  } else if (paramIndex === 1) {
    formEnchantParam2.value = clampEnchantParam(formEnchantCode.value, 1, formEnchantParam2.value)
  } else if (paramIndex === 2) {
    formEnchantParam3.value = clampEnchantParam(formEnchantCode.value, 2, formEnchantParam3.value)
  }
}

// 装备判定 (武器、防具、首饰、称号、宠物，数量锁死为1)
const isSingleCategory = (typeId: number) => typeId >= 0x00 && typeId <= 0x0a
const isEquip = (typeId: number) => typeId >= 0x00 && typeId <= 0x0a
const isConsumable = (typeId: number) => typeId >= 0x0d && typeId <= 0x12
const isMaterial = (typeId: number) => typeId === 0x0b || typeId === 0x0c
const isQuest = (typeId: number) => typeId === 0x13

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

// 角色有效拥有的背包槽位列表 (依据当前角色属性 bagSlotCount，有效上限为 90 格)
const ownedSlots = computed(() => {
  const cap = Math.min(90, Math.max(1, props.save.bagSlotCount || 24))
  return props.save.inventory.slice(0, cap)
})

// 物品占的槽位数 (当前角色有效背包中非空的格子数)
const usedSlotsCount = computed(() => {
  return ownedSlots.value.filter(s => !s.isEmpty).length
})

// 空槽位的计算：当前角色属性里，角色所拥有的背包槽位 - 物品占的槽位
const emptySlotsCount = computed(() => {
  const cap = Math.min(90, Math.max(1, props.save.bagSlotCount || 24))
  return Math.max(0, cap - usedSlotsCount.value)
})

const equipSlotsCount = computed(() => {
  return ownedSlots.value.filter(s => !s.isEmpty && isEquip(s.typeId)).length
})

const consumableSlotsCount = computed(() => {
  return ownedSlots.value.filter(s => !s.isEmpty && isConsumable(s.typeId)).length
})

const materialSlotsCount = computed(() => {
  return ownedSlots.value.filter(s => !s.isEmpty && isMaterial(s.typeId)).length
})

const questSlotsCount = computed(() => {
  return ownedSlots.value.filter(s => !s.isEmpty && isQuest(s.typeId)).length
})

const filteredSlots = computed(() => {
  switch (filterType.value) {
    case 'equip':
      return ownedSlots.value.filter(s => !s.isEmpty && isEquip(s.typeId))
    case 'consumable':
      return ownedSlots.value.filter(s => !s.isEmpty && isConsumable(s.typeId))
    case 'material':
      return ownedSlots.value.filter(s => !s.isEmpty && isMaterial(s.typeId))
    case 'quest':
      return ownedSlots.value.filter(s => !s.isEmpty && isQuest(s.typeId))
    case 'empty':
      return ownedSlots.value.filter(s => s.isEmpty)
    case 'all':
    default:
      return ownedSlots.value
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

// 是否展示装备品质分类筛选 (全库浏览 -1 或 装备大类 0x00~0x08 时展示)
const showQualityFilter = computed(() => {
  return selectedCategoryFilter.value === -1 || isEquip(selectedCategoryFilter.value)
})

// 是否展示防具材质分类筛选 (仅护肩 0x04、上衣 0x05、下衣 0x06 时展示)
const showArmorTypeFilter = computed(() => {
  return isArmorCategory(selectedCategoryFilter.value)
})

// 当前大类下各品质装备的动态统计数量
const qualityCounts = computed<Record<string, number>>(() => {
  let list = allSearchMatchedItems.value
  if (selectedCategoryFilter.value !== -1) {
    list = list.filter(i => i.typeId === selectedCategoryFilter.value)
  }
  const counts: Record<string, number> = {
    all: list.length,
    white: 0,
    blue: 0,
    purple: 0,
    pink: 0,
    orange: 0,
  }
  for (const it of list) {
    const q = it.quality || 'white'
    if (counts[q] !== undefined) {
      counts[q]++
    }
  }
  return counts
})

// 当前防具大类与品质筛选下各材质装备的动态统计数量
const armorTypeCounts = computed<Record<string, number>>(() => {
  let list = allSearchMatchedItems.value
  if (selectedCategoryFilter.value !== -1) {
    list = list.filter(i => i.typeId === selectedCategoryFilter.value)
  }
  if (selectedQualityFilter.value !== 'all') {
    list = list.filter(i => (i.quality || 'white') === selectedQualityFilter.value)
  }
  const counts: Record<string, number> = {
    all: list.length,
    '布甲': 0,
    '轻甲': 0,
    '重甲': 0,
    '板甲': 0,
  }
  for (const it of list) {
    if (it.armorType && counts[it.armorType] !== undefined) {
      counts[it.armorType]++
    }
  }
  return counts
})

// 弹窗中展示的物品列表：根据搜索词、选定大类、品质与防具材质多重联动过滤
const modalDisplayItems = computed(() => {
  const q = modalSearchQuery.value.trim().toLowerCase()
  let list = allSearchMatchedItems.value
  
  // 1. 如果选择了特定类别（非“全部类别”），按该类别过滤
  if (selectedCategoryFilter.value !== -1) {
    list = list.filter(i => i.typeId === selectedCategoryFilter.value)
  }

  // 2. 如果在装备类别下且指定了品质筛选，按品质过滤
  if (showQualityFilter.value && selectedQualityFilter.value !== 'all') {
    list = list.filter(i => (i.quality || 'white') === selectedQualityFilter.value)
  }

  // 3. 如果在防具大类下且指定了材质筛选，按防具材质过滤 (布甲/轻甲/重甲/板甲)
  if (showArmorTypeFilter.value && selectedArmorTypeFilter.value !== 'all') {
    list = list.filter(i => i.armorType === selectedArmorTypeFilter.value)
  }

  if (list.length === 0) {
    return [{
      typeId: formTypeId.value,
      itemId: formItemId.value,
      name: q ? `未找到包含 "${modalSearchQuery.value}" 的物品` : '当前分类、品质与材质下无匹配物品',
      categoryName: '无匹配'
    }]
  }
  return list
})

function syncEquipInnateDefaults(tId: number, iId: number) {
  if (isEquip(tId)) {
    const innate = getEquipInnateInfo(tId, iId)
    if (innate) {
      formGrade.value = 3 // 切换装备默认最上级 (+7% 满属性)
      formDurability.value = hasDurability(tId) ? (innate.durability || 35) : 0
      formBaseAtkDef1.value = Math.floor((innate.base1 || 0) * 1.07)
      formBaseAtkDef2.value = Math.floor((innate.base2 || 0) * 1.07)
      const statInfo = getInnateStat4Info(innate)
      formStat4.value = statInfo.baseVal > 0 ? Math.round(statInfo.baseVal * 1.07) : 0
    }
  }
}

// 监听搜索输入，自动重置大类为全部类别，列出全库所有类别的匹配物品
watch(modalSearchQuery, (newQ) => {
  selectedCategoryFilter.value = -1
  selectedQualityFilter.value = 'all'
  selectedArmorTypeFilter.value = 'all'
  const q = newQ.trim().toLowerCase()
  if (!q) {
    if (editingSlot.value?.isEmpty) {
      formTypeId.value = 0x00
      const firstId = getCategoryFirstItemId(0x00)
      formItemId.value = firstId
      syncEquipInnateDefaults(0x00, firstId)
    }
    return
  }

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
      syncEquipInnateDefaults(first.typeId, first.itemId)
    }
  }
})

// 切换大类分类时触发：按用户要求，默认显示该类别的第一件真实物品 (彻底杜绝初始值)
function onCategoryFilterChange() {
  // 若切换出防具分类，重置防具材质筛选为全部
  if (!isArmorCategory(selectedCategoryFilter.value)) {
    selectedArmorTypeFilter.value = 'all'
  } else if (selectedArmorTypeFilter.value !== 'all' && armorTypeCounts.value[selectedArmorTypeFilter.value] === 0) {
    selectedArmorTypeFilter.value = 'all'
  }

  // 若当前选中的品质在该大类下没有物品，自动切回全部品质
  if (selectedQualityFilter.value !== 'all' && qualityCounts.value[selectedQualityFilter.value] === 0) {
    selectedQualityFilter.value = 'all'
  }

  const list = modalDisplayItems.value
  if (list.length > 0 && list[0].categoryName !== '无匹配') {
    const first = list[0]
    formTypeId.value = first.typeId
    formItemId.value = first.itemId
    if (isSingleCategory(first.typeId)) {
      formCount.value = 1
    }
    syncEquipInnateDefaults(first.typeId, first.itemId)
  }
}

// 切换品质分类时触发：若当前选中的物品不属于该品质，自动定位到该品质首件物品
function onQualityFilterChange() {
  // 若材质在当前品质下无物品，自动切回全部材质
  if (showArmorTypeFilter.value && selectedArmorTypeFilter.value !== 'all' && armorTypeCounts.value[selectedArmorTypeFilter.value] === 0) {
    selectedArmorTypeFilter.value = 'all'
  }

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
      syncEquipInnateDefaults(first.typeId, first.itemId)
    }
  }
}

// 切换防具材质分类时触发：若当前选中的物品不属于该材质，自动定位到该材质首件物品
function onArmorTypeFilterChange() {
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
      syncEquipInnateDefaults(first.typeId, first.itemId)
    }
  }
}

function formatOptionLabel(item: any, isSearching: boolean = false): string {
  if (!item) return ''
  const qInfo = getQualityInfo(item.quality)
  const lvlStr = item.reqLevel !== undefined && item.reqLevel > 0 ? `Lv.${item.reqLevel} ` : ''
  const matStr = item.armorType ? `${item.armorType} ` : ''
  const categoryPrefix = isSearching ? `[${item.categoryName}] ` : ''
  return `${categoryPrefix}[${lvlStr}${matStr}${qInfo.name}] ${item.name}`
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
    syncEquipInnateDefaults(tId, iId)
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
  const isEq = isEquip(slot.typeId)
  let extraStr = ''
  if (isEq) {
    const gradeLabel = (slot.grade !== undefined && slot.grade >= 2) ? '上级' : (slot.grade === 1 ? '中级' : (slot.grade === 0 ? '下级' : ''))
    if (gradeLabel) {
      extraStr += ` | [${gradeLabel}]`
    }
    const innate = getEquipInnateInfo(slot.typeId, slot.itemId)
    if (innate) {
      const statInfo = getInnateStat4Info(innate)
      if (innate.lines && innate.lines.length > 0) {
        const dynamicLines = innate.lines.map(line => {
          if (statInfo.type && line.text.startsWith(statInfo.type)) {
            const currentVal = (slot.stat4 !== undefined && slot.stat4 > 0) ? slot.stat4 : statInfo.baseVal
            return `${statInfo.type} +${currentVal}`
          }
          return line.text
        })
        extraStr += ` | ${dynamicLines.join(' | ')}`
      }
      if (innate.elementName) {
        extraStr += ` | ${innate.elementName}`
      }
    }
  }
  const enchantStr = (slot.enchant && slot.enchant.code > 0)
    ? ` | 🔮 附魔: ${formatEnchantText(slot.enchant.code, slot.enchant.param1, slot.enchant.param2, slot.enchant.param3)}`
    : ''
  const countStr = isSingleCategory(slot.typeId) ? '' : ` | 数量: ${slot.count}`
  return `${slot.itemName}${refineStr} [${qInfo.label}] | ${info.categoryName}${lvlStr}${countStr}${extraStr}${enchantStr}`
}

function openEditModal(slot: InventorySlot) {
  editingSlot.value = slot
  copyCountInput.value = null
  modalSearchQuery.value = ''
  selectedEnchantCategory.value = 'all'
  selectedQualityFilter.value = 'all'
  selectedArmorTypeFilter.value = 'all'
  isEquipStatsLocked.value = true
  if (slot.isEmpty) {
    selectedCategoryFilter.value = 0x00 // 默认短剑分类
    formTypeId.value = 0x00 // 默认短剑
    const firstItemId = getCategoryFirstItemId(0x00)
    formItemId.value = firstItemId // 默认第一件有效装备 (破损的铁剑)
    formCount.value = 1
    formRefineLevel.value = 0
    formGrade.value = 2
    formDurability.value = 35
    formBaseAtkDef1.value = 0
    formBaseAtkDef2.value = 0
    formRefineBonus1.value = 0
    formRefineBonus2.value = 0
    formStat4.value = 0
    syncEquipInnateDefaults(0x00, firstItemId)
    clearEnchant()
  } else {
    selectedCategoryFilter.value = slot.typeId
    formTypeId.value = slot.typeId
    const safeItemId = slot.itemId > 0 ? slot.itemId : getCategoryFirstItemId(slot.typeId)
    formItemId.value = safeItemId
    formCount.value = isSingleCategory(slot.typeId) ? 1 : Math.min(99, slot.count || 1)
    formRefineLevel.value = slot.refineLevel || 0
    const innate = getEquipInnateInfo(slot.typeId, safeItemId)
    const statInfo = getInnateStat4Info(innate)
    // 最上级与上级回显：如果存档为 3 或攻防达到 +7% 满属性，回显为最上级；普通 2 回显为上级
    let initGrade = slot.grade !== undefined ? slot.grade : 3
    if (initGrade >= 2) {
      if (initGrade === 3 || (innate && innate.base1 && slot.baseAtkDef1 && slot.baseAtkDef1 >= Math.floor(innate.base1 * 1.07))) {
        formGrade.value = 3
      } else {
        formGrade.value = 2
      }
    } else {
      formGrade.value = initGrade
    }
    formDurability.value = hasDurability(slot.typeId)
      ? (slot.durability !== undefined ? slot.durability : (innate?.durability || 35))
      : 0
    
    const defaultRatio = formGrade.value === 3 ? 1.07 : (formGrade.value === 2 ? 1.05 : (formGrade.value === 1 ? 1.035 : 1.0))
    formBaseAtkDef1.value = slot.baseAtkDef1 !== undefined ? slot.baseAtkDef1 : Math.floor((innate?.base1 || 0) * defaultRatio)
    formBaseAtkDef2.value = slot.baseAtkDef2 !== undefined ? slot.baseAtkDef2 : Math.floor((innate?.base2 || 0) * defaultRatio)
    formRefineBonus1.value = slot.refineBonus1 !== undefined ? slot.refineBonus1 : 0
    formRefineBonus2.value = slot.refineBonus2 !== undefined ? slot.refineBonus2 : 0

    if (slot.stat4 !== undefined && slot.stat4 > 0) {
      formStat4.value = slot.stat4
    } else if (statInfo.baseVal > 0) {
      formStat4.value = Math.round(statInfo.baseVal * defaultRatio)
    } else {
      formStat4.value = 0
    }

    if (slot.enchant && slot.enchant.code > 0) {
      formEnchantCode.value = slot.enchant.code
      formEnchantParam1.value = slot.enchant.param1
      formEnchantParam2.value = slot.enchant.param2
      formEnchantParam3.value = slot.enchant.param3
    } else {
      clearEnchant()
    }
  }
}

function closeEditModal() {
  editingSlot.value = null
  copyCountInput.value = null
  modalSearchQuery.value = ''
  selectedCategoryFilter.value = -1
  selectedQualityFilter.value = 'all'
  selectedArmorTypeFilter.value = 'all'
  formTypeId.value = 0x00
  formItemId.value = 1
  clearEnchant()
}

function clearCurrentSlot() {
  if (!editingSlot.value) return
  editingSlot.value.isEmpty = true
  editingSlot.value.typeId = 0
  editingSlot.value.itemId = 0
  editingSlot.value.count = 0
  editingSlot.value.refineLevel = 0
  editingSlot.value.grade = undefined
  editingSlot.value.durability = undefined
  editingSlot.value.baseAtkDef1 = undefined
  editingSlot.value.baseAtkDef2 = undefined
  editingSlot.value.refineBonus1 = undefined
  editingSlot.value.refineBonus2 = undefined
  editingSlot.value.stat4 = undefined
  editingSlot.value.enchant = undefined
  editingSlot.value.itemName = '空槽位'
  editingSlot.value.categoryName = '空'
  clearEnchant()
  closeEditModal()
}

function applySlotEdit(targetSlot: InventorySlot) {
  const info = findItemInfo(formTypeId.value, formItemId.value)
  const isEquip = isEquipCategory(formTypeId.value)
  const isSingle = isSingleCategory(formTypeId.value)

  targetSlot.isEmpty = false
  targetSlot.typeId = formTypeId.value
  targetSlot.itemId = formItemId.value
  // 装备数量严格锁死为 1，非装备最大限制 99
  targetSlot.count = isSingle ? 1 : Math.max(1, Math.min(99, formCount.value || 1))
  targetSlot.refineLevel = isEquip ? Math.max(0, Math.min(63, formRefineLevel.value || 0)) : 0

  if (isEquip) {
    // 最上级 (value 3) 自动路由写入上级 (Byte 5 = 2)，确保在游戏实机中正常显示品级文字且拥有满属性
    targetSlot.grade = formGrade.value === 3 ? 2 : Math.max(0, Math.min(2, Math.floor(formGrade.value ?? 2)))
    targetSlot.durability = hasDurability(targetSlot.typeId) ? Math.max(0, Math.min(255, Math.floor(formDurability.value || 0))) : 0
    targetSlot.baseAtkDef1 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef1.value || 0)))
    targetSlot.baseAtkDef2 = Math.max(0, Math.min(65535, Math.floor(formBaseAtkDef2.value || 0)))
    targetSlot.refineBonus1 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus1.value || 0)))
    targetSlot.refineBonus2 = Math.max(0, Math.min(65535, Math.floor(formRefineBonus2.value || 0)))
    targetSlot.stat4 = Math.max(0, Math.min(255, Math.floor(formStat4.value || 0)))
  } else {
    targetSlot.grade = undefined
    targetSlot.durability = undefined
    targetSlot.baseAtkDef1 = undefined
    targetSlot.baseAtkDef2 = undefined
    targetSlot.refineBonus1 = undefined
    targetSlot.refineBonus2 = undefined
    targetSlot.stat4 = undefined
  }

  if (isEquip && formEnchantCode.value > 0) {
    const p1 = clampEnchantParam(formEnchantCode.value, 0, formEnchantParam1.value)
    const p2 = clampEnchantParam(formEnchantCode.value, 1, formEnchantParam2.value)
    const p3 = clampEnchantParam(formEnchantCode.value, 2, formEnchantParam3.value)
    formEnchantParam1.value = p1
    formEnchantParam2.value = p2
    formEnchantParam3.value = p3
    targetSlot.enchant = {
      code: formEnchantCode.value,
      param1: p1,
      param2: p2,
      param3: p3
    }
  } else {
    targetSlot.enchant = undefined
  }
  targetSlot.itemName = info.name
  targetSlot.categoryName = info.categoryName
}

function saveSlotEdit() {
  if (!editingSlot.value) return
  applySlotEdit(editingSlot.value)
  closeEditModal()
}

// 批量复制当前编辑物品到背包后续空槽位
function executeBatchCopy() {
  if (!editingSlot.value) return
  const countToCopy = Math.floor(copyCountInput.value || 0)
  if (countToCopy <= 0) {
    alert('请输入有效的复制数量 (大于 0 的正整数)！')
    return
  }

  // 获取当前角色属性拥有的背包槽位容量 (0 ~ bagSlotCount-1)
  const cap = Math.min(90, Math.max(1, props.save.bagSlotCount || 24))
  const validBagSlots = props.save.inventory.slice(0, cap)

  // 当前角色拥有的可用空槽位列表 (排除当前正在编辑的槽位，按槽位序号升序排列)
  const availableEmptySlots = validBagSlots
    .filter(s => s.isEmpty && s.slotIndex !== editingSlot.value!.slotIndex)
    .sort((a, b) => a.slotIndex - b.slotIndex)

  // 必须要有空槽位才能进行复制
  if (availableEmptySlots.length === 0) {
    alert('当前角色背包无可用空槽位，无法进行复制！请先清理背包或在角色属性中扩展背包格数。')
    return
  }

  const isEquip = isEquipCategory(formTypeId.value)
  const isSingle = isSingleCategory(formTypeId.value)
  const info = findItemInfo(formTypeId.value, formItemId.value)

  if (isEquip || isSingle) {
    // 装备类：单件不可堆叠，1件占用1个独立槽位
    const neededEmptySlots = countToCopy
    if (availableEmptySlots.length < neededEmptySlots) {
      alert(`背包剩余空闲槽位不足！\n复制 ${neededEmptySlots} 件装备需要 ${neededEmptySlots} 个空槽位，但当前背包仅剩余 ${availableEmptySlots.length} 个空槽位。`)
      return
    }

    // 先保存当前槽位配置
    applySlotEdit(editingSlot.value)

    // 顺次克隆当前装备到后续空槽位
    for (let i = 0; i < neededEmptySlots; i++) {
      applySlotEdit(availableEmptySlots[i])
    }

    alert(`已成功复制 ${neededEmptySlots} 件 [${info.name}] 到背包空槽位！`)
    closeEditModal()
  } else {
    // 材料 / 消耗品等可堆叠物品：99个一个槽位
    const currentCount = editingSlot.value.isEmpty ? 0 : Math.max(1, Math.min(99, formCount.value || 1))
    const fillCurrent = Math.min(countToCopy, 99 - currentCount)
    const newCurrentCount = currentCount + fillCurrent
    const remainingToPlace = countToCopy - fillCurrent
    const neededEmptySlots = Math.ceil(remainingToPlace / 99)

    if (availableEmptySlots.length < neededEmptySlots) {
      alert(`背包剩余空闲槽位不足！\n存放剩余 ${remainingToPlace} 个物品还需要 ${neededEmptySlots} 个空槽位，但当前背包仅剩余 ${availableEmptySlots.length} 个空槽位。`)
      return
    }

    // 1. 更新当前槽位
    editingSlot.value.isEmpty = false
    editingSlot.value.typeId = formTypeId.value
    editingSlot.value.itemId = formItemId.value
    editingSlot.value.count = newCurrentCount
    editingSlot.value.refineLevel = 0
    editingSlot.value.grade = undefined
    editingSlot.value.durability = undefined
    editingSlot.value.baseAtkDef1 = undefined
    editingSlot.value.baseAtkDef2 = undefined
    editingSlot.value.refineBonus1 = undefined
    editingSlot.value.refineBonus2 = undefined
    editingSlot.value.stat4 = undefined
    editingSlot.value.enchant = undefined
    editingSlot.value.itemName = info.name
    editingSlot.value.categoryName = info.categoryName

    // 2. 将剩余数量顺次切片填入空槽位
    let rem = remainingToPlace
    for (let i = 0; i < neededEmptySlots; i++) {
      const take = Math.min(99, rem)
      const targetSlot = availableEmptySlots[i]
      targetSlot.isEmpty = false
      targetSlot.typeId = formTypeId.value
      targetSlot.itemId = formItemId.value
      targetSlot.count = take
      targetSlot.refineLevel = 0
      targetSlot.grade = undefined
      targetSlot.durability = undefined
      targetSlot.baseAtkDef1 = undefined
      targetSlot.baseAtkDef2 = undefined
      targetSlot.refineBonus1 = undefined
      targetSlot.refineBonus2 = undefined
      targetSlot.stat4 = undefined
      targetSlot.enchant = undefined
      targetSlot.itemName = info.name
      targetSlot.categoryName = info.categoryName
      rem -= take
    }

    const totalTotal = currentCount + countToCopy
    const totalSlotsUsed = (newCurrentCount > 0 ? 1 : 0) + neededEmptySlots
    alert(`成功复制 ${countToCopy} 个 [${info.name}]！\n当前槽位存入至 ${newCurrentCount} 个，另占用 ${neededEmptySlots} 个空槽位，总计 ${totalTotal} 个（共占用 ${totalSlotsUsed} 个槽位）。`)
    closeEditModal()
  }
}
</script>
