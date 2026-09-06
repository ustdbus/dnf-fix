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
            00未接取 · 01进行中 · <span class="text-yellow-300 font-bold">🎁待领奖 (NPC亮黄问号可交)</span> · 02彻底完成 (已领奖并清除)
          </p>
        </div>

        <!-- 批量操作按钮 -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            @click="setAllActiveQuestsReady"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-400 hover:from-yellow-400 hover:to-orange-300 text-black font-black transition shadow-lg shadow-yellow-500/25 flex items-center gap-1.5 active:scale-95"
            :disabled="!questSave"
            title="将已接取的任务进度拉满设为待领奖，进游戏可直接找 NPC 领取奖励！"
          >
            <span>🎁 一键达成待领奖</span>
          </button>
          <button
            @click="setAllReadyQuestsToOngoing"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold transition shadow-md shadow-amber-900/30 flex items-center gap-1.5 active:scale-95"
            :disabled="!questSave"
            title="将所有待领奖任务批量转回普通进行中状态（未完成进度）"
          >
            <span>⚡ 一键转为进行中</span>
          </button>
          <button
            @click="setNormalQuestsCompleted"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold transition shadow-md shadow-emerald-900/30 flex items-center gap-1.5 active:scale-95"
            :disabled="!questSave"
            title="一键彻底完成所有普通任务，不含日常重复任务"
          >
            <span>✅ 一键完成普通任务（不含重复任务）</span>
          </button>
          <button
            @click="syncAndReconcileQuests"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-gray-700 text-amber-300 font-bold border border-amber-900/40 transition flex items-center gap-1.5 active:scale-95 shadow-sm"
            :disabled="!questSave"
            title="根据当前背包实际材料重新核对所有待领奖任务，若背包材料不足则自动拉回进行中状态"
          >
            <span>🔄 校验材料状态</span>
          </button>

        </div>
      </div>

      <!-- 提示消息通知条 -->
      <div v-if="actionNotice" class="px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span>🔔</span>
          <span>{{ actionNotice }}</span>
        </div>
        <button @click="actionNotice = ''" class="text-amber-400/60 hover:text-amber-300 text-xs">✕</button>
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
            class="text-xs px-3.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition border border-gray-700 active:scale-95"
          >
            ➕ 创建空白任务
          </button>
        </div>
      </div>

      <!-- 任务核心状态分类切换栏 (兼具统计与Tab筛选功能，绝无重复) -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <!-- 1. 进行中 -->
        <button
          @click="currentFilter = 'active'"
          :class="[
            'p-3 rounded-xl border flex items-center justify-between transition-all duration-200 shadow-inner active:scale-95 text-left',
            currentFilter === 'active'
              ? 'bg-gradient-to-r from-amber-950/80 to-[#1f170f] border-amber-400 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/20'
              : 'bg-[#0b0e15] border-amber-900/30 hover:border-amber-600/50 hover:bg-amber-950/20'
          ]"
        >
          <span :class="['text-xs font-bold flex items-center gap-1.5', currentFilter === 'active' ? 'text-amber-200' : 'text-amber-400/90']">
            <span>⚡</span>
            <span>进行中</span>
          </span>
          <span class="text-xs font-black text-amber-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-amber-900/40">
            {{ ongoingCount }}
          </span>
        </button>

        <!-- 2. 待领奖 -->
        <button
          @click="currentFilter = 'ready'"
          :class="[
            'p-3 rounded-xl border flex items-center justify-between transition-all duration-200 shadow-inner active:scale-95 text-left',
            currentFilter === 'ready'
              ? 'bg-gradient-to-r from-yellow-950/80 to-[#221a0a] border-yellow-400 ring-2 ring-yellow-400/40 shadow-lg shadow-yellow-500/20'
              : 'bg-[#0b0e15] border-yellow-900/30 hover:border-yellow-600/50 hover:bg-yellow-950/20'
          ]"
        >
          <span :class="['text-xs font-bold flex items-center gap-1.5', currentFilter === 'ready' ? 'text-yellow-200' : 'text-yellow-400/90']">
            <span>🎁</span>
            <span>待领奖</span>
          </span>
          <span class="text-xs font-black text-yellow-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-yellow-900/40">
            {{ readyCount }}
          </span>
        </button>

        <!-- 3. 未接取 -->
        <button
          @click="currentFilter = 'unaccepted'"
          :class="[
            'p-3 rounded-xl border flex items-center justify-between transition-all duration-200 shadow-inner active:scale-95 text-left',
            currentFilter === 'unaccepted'
              ? 'bg-gradient-to-r from-gray-800/80 to-[#181a24] border-gray-300 ring-2 ring-gray-300/40 shadow-lg'
              : 'bg-[#0b0e15] border-gray-800 hover:border-gray-700 hover:bg-gray-900/40'
          ]"
        >
          <span :class="['text-xs font-bold flex items-center gap-1.5', currentFilter === 'unaccepted' ? 'text-gray-100' : 'text-gray-400']">
            <span>⏳</span>
            <span>未接取</span>
          </span>
          <span class="text-xs font-black text-gray-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-gray-800">
            {{ unacceptedCount }}
          </span>
        </button>

        <!-- 4. 彻底完成 -->
        <button
          @click="currentFilter = 'completed'"
          :class="[
            'p-3 rounded-xl border flex items-center justify-between transition-all duration-200 shadow-inner active:scale-95 text-left',
            currentFilter === 'completed'
              ? 'bg-gradient-to-r from-emerald-950/80 to-[#0e1f18] border-emerald-400 ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-500/20'
              : 'bg-[#0b0e15] border-emerald-900/30 hover:border-emerald-600/50 hover:bg-emerald-950/20'
          ]"
        >
          <span :class="['text-xs font-bold flex items-center gap-1.5', currentFilter === 'completed' ? 'text-emerald-200' : 'text-emerald-400/90']">
            <span>✅</span>
            <span>彻底完成</span>
          </span>
          <span class="text-xs font-black text-emerald-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-emerald-900/40">
            {{ completedCount }}
          </span>
        </button>

        <!-- 5. 重复任务 -->
        <button
          @click="currentFilter = 'repeat'"
          :class="[
            'p-3 rounded-xl border flex items-center justify-between transition-all duration-200 shadow-inner active:scale-95 text-left col-span-2 sm:col-span-1',
            currentFilter === 'repeat'
              ? 'bg-gradient-to-r from-blue-950/80 to-[#0f1726] border-blue-400 ring-2 ring-blue-400/40 shadow-lg shadow-blue-500/20'
              : 'bg-[#0b0e15] border-blue-900/30 hover:border-blue-600/50 hover:bg-blue-950/20'
          ]"
        >
          <span :class="['text-xs font-bold flex items-center gap-1.5', currentFilter === 'repeat' ? 'text-blue-200' : 'text-blue-400/90']">
            <span>🔁</span>
            <span>重复任务</span>
          </span>
          <span class="text-xs font-black text-blue-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-blue-900/40">
            {{ repeatCount }}
          </span>
        </button>
      </div>
    </div>

    <!-- 任务检索与状态指示区 (去重后极简且强大) -->
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div class="text-xs text-gray-400 flex items-center gap-2">
          <span class="text-gray-500">当前分类:</span>
          <span class="px-2.5 py-1 rounded-lg bg-[#10131c] text-amber-300 font-bold border border-amber-900/50 flex items-center gap-1.5 shadow-sm">
            <span>{{ activeFilterInfo.icon }}</span>
            <span>{{ activeFilterInfo.label }}</span>
            <span class="text-[11px] opacity-80 font-mono">({{ filteredQuests.length }} 项)</span>
          </span>
        </div>

        <!-- 搜索输入框 -->
        <div class="relative sm:w-72">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索任务名称、ID 或类别..."
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
          @click="openDetailModal(q)"
          :class="[
            'p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.99] cursor-pointer relative group touch-manipulation',
            q.state === 2
              ? 'bg-[#121622] border-emerald-900/50 hover:border-emerald-600/50 active:bg-emerald-950/40'
              : q.state === 1 && q.isReadyToReward
                ? 'bg-gradient-to-b from-[#251e12] to-[#16120b] border-yellow-500/80 hover:border-yellow-400 active:bg-[#2e2416] shadow-md shadow-yellow-500/10'
                : q.state === 1
                  ? 'bg-[#1a1715] border-amber-700/60 hover:border-amber-500 active:bg-amber-950/50 shadow-amber-500/10'
                  : 'bg-[#11131c] border-gray-800/90 hover:border-gray-700 active:bg-[#181a26]'
          ]"
        >
          <!-- 任务头：ID 与类别徽章 + 手机端专属详情按钮 -->
          <div class="flex items-center justify-between gap-1.5">
            <span class="text-[10px] text-gray-500 font-mono">#{{ String(q.id).padStart(3, '0') }}</span>
            <div class="flex items-center gap-1">
              <span
                v-if="q.requires && q.requires.length > 0"
                class="text-[9px] px-1 py-0.2 rounded font-bold bg-amber-950/60 text-amber-300 border border-amber-800/50"
                title="需要交付材料"
              >
                📦需材料 ({{ q.requires.length }})
              </span>
              <span
                v-if="q.state === 1 && q.isReadyToReward"
                class="text-[10px] px-1.5 py-0.5 rounded font-black border bg-yellow-500/20 text-yellow-300 border-yellow-500/60 animate-pulse"
              >
                🎁 待领奖
              </span>
              <span
                :class="[
                  'text-[10px] px-1.5 py-0.5 rounded font-bold border',
                  getTypeBadgeClass(q.type)
                ]"
              >
                {{ q.typeName }}
              </span>
              <!-- 明确的详情按钮：手机端一触即开，阻止冒泡直接打开弹窗 -->
              <button
                type="button"
                @click.stop="openDetailModal(q)"
                class="text-[10px] px-1.5 py-0.5 rounded font-bold bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 border border-amber-500/50 active:scale-95 transition flex items-center gap-0.5"
                title="查看任务要求与奖励详情"
              >
                <span>📜</span>
                <span>详情</span>
              </button>
            </div>
          </div>

          <!-- 任务官方名称与简要描述 -->
          <div>
            <div class="text-xs font-bold text-gray-200 truncate group-hover:text-amber-300 transition" :title="q.name">
              {{ q.name }}
            </div>
            <div v-if="q.desc" class="text-[10px] text-gray-400/80 truncate mt-0.5" :title="q.desc">
              {{ q.desc }}
            </div>
          </div>

          <!-- 任务状态选择器 (4 档状态选择) -->
          <div class="pt-1 border-t border-gray-800/60 flex items-center justify-between gap-2" @click.stop>
            <span class="text-[10px] text-gray-400">状态：</span>
            <select
              :value="getQuestUiState(q)"
              @change="onStateSelectChange(q, $event)"
              :class="[
                'text-[11px] py-0.5 px-1.5 rounded border focus:outline-none font-bold transition flex-1 text-right cursor-pointer',
                getUiSelectClass(q)
              ]"
            >
              <option :value="0">⚪ 未接取 (00)</option>
              <option :value="1">⚡ 进行中 (01-未达)</option>
              <option :value="3">🎁 待领奖 (01-达成)</option>
              <option :value="2">✅ 彻底完成 (02-清除)</option>
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

    <!-- 任务详情与材料联动弹窗 (Task Detail Modal) -->
    <div
      v-if="detailQuest"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 touch-manipulation"
    >
      <!-- 半透明磨砂背景遮罩：独立层级 + 防点透时间保护 -->
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-sm"
        @click="onBackdropClick"
      ></div>

      <!-- 弹窗本体容器 -->
      <div class="relative z-10 bg-gradient-to-b from-[#181b26] to-[#0f1118] border border-amber-500/50 rounded-2xl w-full max-w-lg shadow-2xl p-4 sm:p-5 space-y-4 max-h-[88vh] overflow-y-auto overscroll-contain">
        <!-- 头部标题与关闭 -->
        <div class="flex items-center justify-between border-b border-amber-900/40 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">📜</span>
            <h3 class="text-sm sm:text-base font-black text-amber-200">
              任务详情与达成要求
            </h3>
          </div>
          <button
            type="button"
            @click="forceCloseDetailModal"
            class="text-gray-400 hover:text-gray-200 text-base px-2.5 py-1 rounded-lg bg-gray-800/80 hover:bg-gray-700 transition"
          >
            ✕
          </button>
        </div>

        <!-- 任务核心卡片 -->
        <div class="p-3.5 rounded-xl bg-[#11131c] border border-amber-900/30 space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-mono text-gray-500">任务编号: #{{ String(detailQuest.id).padStart(3, '0') }}</span>
            <div class="flex items-center gap-1.5">
              <span :class="['text-xs px-2 py-0.5 rounded font-bold border', getTypeBadgeClass(detailQuest.type)]">
                {{ detailQuest.typeName }}
              </span>
              <span
                :class="[
                  'text-xs px-2 py-0.5 rounded font-bold border',
                  getUiStateBadgeClass(detailQuest)
                ]"
              >
                {{ getUiStateLabel(detailQuest) }}
              </span>
            </div>
          </div>
          <div class="text-base font-black text-amber-300">
            {{ detailQuest.name }}
          </div>
        </div>

        <!-- 任务内容说明 -->
        <div class="space-y-1.5">
          <div class="text-xs font-bold text-gray-400 flex items-center gap-1.5">
            <span>🎯</span>
            <span>任务目标描述:</span>
          </div>
          <div class="p-3 rounded-xl bg-[#0c0e14] border border-gray-800 text-xs text-gray-200 leading-relaxed font-sans select-text">
            {{ formatDesc(detailQuest.desc) }}
          </div>
        </div>

        <!-- 材料需求与背包联动检测 -->
        <div class="space-y-2">
          <div class="text-xs font-bold text-gray-400 flex items-center justify-between">
            <span class="flex items-center gap-1.5">
              <span>📦</span>
              <span>任务所需上交材料 (联动背包检测):</span>
            </span>
            <span v-if="heroSave" class="text-[11px] text-gray-500 font-mono">
              背包剩余空槽: <span :class="emptyBagSlotsCount > 0 ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'">{{ emptyBagSlotsCount }}</span> 格
            </span>
          </div>

          <!-- 无材料要求情况 -->
          <div
            v-if="!detailQuest.requires || detailQuest.requires.length === 0"
            class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-center gap-2.5"
          >
            <span class="text-base">✅</span>
            <div class="space-y-0.5">
              <div class="font-bold">无需上交背包材料</div>
              <div class="text-[11px] text-emerald-400/70">该任务为击杀目标怪物、通关指定地下城或与 NPC 对话交付类任务。</div>
            </div>
          </div>

          <!-- 有材料要求清单 -->
          <div v-else class="space-y-2">
            <div
              v-for="req in detailQuest.requires"
              :key="req.typeId + '_' + req.itemId"
              class="p-3 rounded-xl bg-[#11141f] border border-gray-800 flex items-center justify-between gap-3 shadow-inner"
            >
              <div class="space-y-1 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span :class="['text-xs font-bold truncate', getItemQualityColor(req.quality)]">
                    {{ req.name }}
                  </span>
                </div>
                <div class="text-[11px] text-gray-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>任务需求: <b class="text-amber-300 font-mono">{{ req.count }}</b> 件</span>
                  <span>
                    当前可用: 
                    <b :class="getItemStockInfo(req.typeId, req.itemId, detailQuest.id).available >= req.count ? 'text-emerald-400 font-mono' : 'text-orange-400 font-mono'">
                      {{ getItemStockInfo(req.typeId, req.itemId, detailQuest.id).available }}
                    </b> 件
                    <span v-if="getItemStockInfo(req.typeId, req.itemId, detailQuest.id).reserved > 0" class="text-gray-400 text-[10px]">
                      (持有: {{ getItemStockInfo(req.typeId, req.itemId, detailQuest.id).total }}，其他待领奖占用: {{ getItemStockInfo(req.typeId, req.itemId, detailQuest.id).reserved }})
                    </span>
                  </span>
                </div>
              </div>

              <!-- 满足度徽章 -->
              <div class="flex-shrink-0">
                <span
                  v-if="getItemStockInfo(req.typeId, req.itemId, detailQuest.id).available >= req.count"
                  class="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60"
                >
                  ✓ 数量充足
                </span>
                <span
                  v-else
                  class="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-950/80 text-amber-300 border border-amber-700/60"
                >
                  尚缺 {{ req.count - getItemStockInfo(req.typeId, req.itemId, detailQuest.id).available }} 件
                </span>
              </div>
            </div>

            <!-- 自动生成物品说明 -->
            <div class="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/25 text-[11px] text-yellow-300/90 flex items-center gap-2">
              <span>💡</span>
              <span>将此任务切换为【待领奖】时，若背包持有数量不足，系统将自动检测空槽位并在背包空槽中生成所需材料！</span>
            </div>
          </div>
        </div>

        <!-- 任务达成奖励预览 -->
        <div v-if="detailQuest.rewards && detailQuest.rewards.length > 0" class="space-y-2">
          <div class="text-xs font-bold text-gray-400 flex items-center gap-1.5">
            <span>🎁</span>
            <span>任务交付奖励:</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              v-for="rew in detailQuest.rewards"
              :key="rew.typeId + '_' + rew.itemId"
              class="p-2.5 rounded-xl bg-amber-950/20 border border-amber-900/30 flex items-center justify-between gap-2"
            >
              <div class="text-xs font-bold truncate" :class="getItemQualityColor(rew.quality)">
                {{ rew.name }}
              </div>
              <span class="text-xs font-mono text-amber-300 font-bold bg-black/40 px-2 py-0.5 rounded border border-amber-900/40 shrink-0">
                x{{ rew.count }}
              </span>
            </div>
          </div>
        </div>

        <!-- 弹窗底部操作按钮 -->
        <div class="pt-3 border-t border-gray-800/80 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            @click="forceCloseDetailModal"
            class="text-xs px-3.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition"
          >
            关闭
          </button>
          <button
            v-if="getQuestUiState(detailQuest) !== 3"
            @click="handleDetailSetReady"
            class="text-xs px-3.5 py-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-400 hover:from-yellow-400 hover:to-orange-300 text-black font-black rounded-lg transition shadow-md shadow-yellow-500/25 flex items-center gap-1.5 active:scale-95"
          >
            <span>🎁 设为待领奖 (自动补齐材料)</span>
          </button>
          <button
            v-if="getQuestUiState(detailQuest) !== 2"
            @click="setQuestUiStateDirect(detailQuest, 2)"
            class="text-xs px-3 py-1.5 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 font-bold rounded-lg border border-emerald-700/50 transition active:scale-95"
          >
            ✅ 设为彻底完成
          </button>
          <button
            v-if="getQuestUiState(detailQuest) !== 0"
            @click="setQuestUiStateDirect(detailQuest, 0)"
            class="text-xs px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700 text-gray-400 rounded-lg border border-gray-700 transition active:scale-95"
          >
            ⚪ 重置为未接取
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DnfQuestSave, QuestItem, DnfHeroSave, InventorySlot } from '../core/types'
import { parseQuestSave, createDefaultQuestSave } from '../core/questParser'
import { findItemInfo } from '../core/itemDict'

const props = defineProps<{
  charIndex: number
  questSave?: DnfQuestSave | null
  heroSave?: DnfHeroSave | null
}>()

const emit = defineEmits<{
  (e: 'update:questSave', value: DnfQuestSave): void
}>()

// 核心筛选选项：进行中(第1)、待领奖(第2)、未接取(第3)、彻底完成(第4)、重复任务(第5)
const filterOptions = [
  { key: 'active', label: '进行中', icon: '⚡' },
  { key: 'ready', label: '待领奖', icon: '🎁' },
  { key: 'unaccepted', label: '未接取', icon: '⏳' },
  { key: 'completed', label: '彻底完成', icon: '✅' },
  { key: 'repeat', label: '重复任务', icon: '🔁' },
] as const

type FilterKey = typeof filterOptions[number]['key']
const currentFilter = ref<FilterKey>('active')
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = 48
const actionNotice = ref('')

// 详情弹窗与背包联动状态
const detailQuest = ref<QuestItem | null>(null)
let modalOpenTime = 0

function openDetailModal(q: QuestItem) {
  modalOpenTime = Date.now()
  detailQuest.value = q
}

function onBackdropClick() {
  // 移动端点透防护：打开后 350ms 内忽略背景点击，防止手机合成的 click 事件穿透误关弹窗
  if (Date.now() - modalOpenTime < 350) return
  forceCloseDetailModal()
}

function closeDetailModal() {
  if (Date.now() - modalOpenTime < 350) return
  detailQuest.value = null
}

function forceCloseDetailModal() {
  detailQuest.value = null
}

function formatDesc(desc?: string): string {
  if (!desc) return '暂无官方详细描述'
  return desc.replace(/\bA4\b/g, '').replace(/[$]/g, '').trim()
}

const emptyBagSlotsCount = computed(() => {
  if (!props.heroSave?.inventory) return 0
  return props.heroSave.inventory.filter(s => s.isEmpty).length
})

function getHeroItemCount(typeId: number, itemId: number): number {
  if (!props.heroSave?.inventory) return 0
  let total = 0
  for (const slot of props.heroSave.inventory) {
    if (!slot.isEmpty && slot.typeId === typeId && slot.itemId === itemId) {
      total += slot.count
    }
  }
  return total
}

function getItemQualityColor(quality?: string): string {
  switch (quality) {
    case 'orange': return 'text-amber-400 font-bold'
    case 'pink': return 'text-fuchsia-400 font-bold'
    case 'purple': return 'text-purple-400 font-bold'
    case 'blue': return 'text-blue-400 font-bold'
    default: return 'text-gray-200'
  }
}

function getUiStateLabel(q: QuestItem): string {
  const s = getQuestUiState(q)
  switch (s) {
    case 3: return '🎁 待领奖'
    case 2: return '✅ 彻底完成'
    case 1: return '⚡ 进行中'
    default: return '⚪ 未接取'
  }
}

function getUiStateBadgeClass(q: QuestItem): string {
  const s = getQuestUiState(q)
  switch (s) {
    case 3: return 'bg-yellow-950/80 border-yellow-500 text-yellow-300'
    case 2: return 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
    case 1: return 'bg-amber-950/80 border-amber-500 text-amber-300'
    default: return 'bg-gray-800 border-gray-600 text-gray-400'
  }
}

const activeFilterInfo = computed(() => {
  return filterOptions.find(f => f.key === currentFilter.value) || filterOptions[0]
})

// 重置分页
watch([currentFilter, searchQuery], () => {
  currentPage.value = 1
})

const questList = computed<QuestItem[]>(() => {
  return props.questSave?.quests || []
})

// 统计数据 (对应进行中、待领奖、未接取、彻底完成互斥分类)
const ongoingCount = computed(() => questList.value.filter(q => q.state === 1 && !q.isReadyToReward).length)
const readyCount = computed(() => questList.value.filter(q => q.state === 1 && q.isReadyToReward).length)
const unacceptedCount = computed(() => questList.value.filter(q => q.state === 0).length)
const completedCount = computed(() => questList.value.filter(q => q.state === 2).length)
const repeatCount = computed(() => questList.value.filter(q => q.type === 2).length)

/**
 * 计算已被其他处于【待领奖】状态的任务锁定的指定材料总数量
 */
function getReservedItemCount(typeId: number, itemId: number, excludeQuestId?: number): number {
  let reserved = 0
  for (const q of questList.value) {
    if (q.id === excludeQuestId) continue
    if (q.state === 1 && q.isReadyToReward && q.requires) {
      for (const req of q.requires) {
        if (req.typeId === typeId && req.itemId === itemId) {
          reserved += req.count
        }
      }
    }
  }
  return reserved
}

/**
 * 获取指定材料在背包中的综合库存信息：背包物理总数、其它待领奖任务已占用数、当前任务真正可用数
 */
function getItemStockInfo(typeId: number, itemId: number, excludeQuestId?: number) {
  const total = getHeroItemCount(typeId, itemId)
  const reserved = getReservedItemCount(typeId, itemId, excludeQuestId)
  const available = Math.max(0, total - reserved)
  return { total, reserved, available }
}

/**
 * 根据当前背包实际材料库存，对账并自动纠偏所有“待领奖”任务：
 * 若背包中材料不足以支持所有被标记为“待领奖”的任务，自动将缺少材料的任务拉回“进行中”状态，防止游戏内领奖失败
 */
function reconcileReadyQuests(isSilent: boolean = true): string[] {
  if (!props.questSave?.quests || !props.heroSave?.inventory) {
    return []
  }

  // 1. 统计当前背包所有有效材料的物理库存账本
  const stock = new Map<string, number>()
  for (const slot of props.heroSave.inventory) {
    if (!slot.isEmpty) {
      const key = `${slot.typeId}_${slot.itemId}`
      stock.set(key, (stock.get(key) || 0) + slot.count)
    }
  }

  // 2. 筛选出所有标记为待领奖的任务，并按活跃槽位顺序（0~19）稳定排序
  const readyQuests = props.questSave.quests.filter(q => q.state === 1 && q.isReadyToReward)
  readyQuests.sort((a, b) => {
    const slotA = a.activeSlotIndex !== undefined && a.activeSlotIndex >= 0 ? a.activeSlotIndex : 999
    const slotB = b.activeSlotIndex !== undefined && b.activeSlotIndex >= 0 ? b.activeSlotIndex : 999
    if (slotA !== slotB) return slotA - slotB
    return a.id - b.id
  })

  const revertedNames: string[] = []

  for (const q of readyQuests) {
    // 非材料任务（通关、击杀、对话等），无需背包材料，保持待领奖
    if (!q.requires || q.requires.length === 0) {
      continue
    }

    // 检查该任务所需的所有材料是否在账本中充足
    let canFulfill = true
    for (const req of q.requires) {
      const key = `${req.typeId}_${req.itemId}`
      const available = stock.get(key) || 0
      if (available < req.count) {
        canFulfill = false
        break
      }
    }

    if (canFulfill) {
      // 材料充足，扣除账本中的虚拟库存（模拟分配）
      for (const req of q.requires) {
        const key = `${req.typeId}_${req.itemId}`
        stock.set(key, (stock.get(key) || 0) - req.count)
      }
    } else {
      // 背包实际材料不足，自动拉回进行中！
      q.isReadyToReward = false
      revertedNames.push(q.name)
    }
  }

  if (revertedNames.length > 0) {
    actionNotice.value = `⚠️ 检测到背包材料变动，已将材料不足的 ${revertedNames.length} 个任务【${revertedNames.join('、')}】自动拉回进行中状态，防止游戏内领奖失败！`
  } else if (!isSilent) {
    actionNotice.value = `✅ 经核对，当前所有待领奖任务所需的背包材料均真实充足，可放心在游戏内领奖！`
  }

  return revertedNames
}

function syncAndReconcileQuests() {
  reconcileReadyQuests(false)
}

// 当加载/切换角色存档或任务存档更新时，自动核对一次待领奖任务的背包材料充足性
watch(
  [() => props.questSave, () => props.heroSave],
  ([newQuest, newHero]) => {
    if (newQuest && newHero) {
      reconcileReadyQuests(true)
    }
  },
  { immediate: true }
)

// 筛选后的列表
const filteredQuests = computed(() => {
  let list = questList.value

  // 1. 关键词搜索：如果有输入搜索词，则全局匹配所有任务
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    return list.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.id.toString() === q ||
      item.typeName.toLowerCase().includes(q) ||
      (q === '待领奖' && item.state === 1 && item.isReadyToReward)
    )
  }

  // 2. 分类筛选
  if (currentFilter.value === 'active') {
    return list.filter(q => q.state === 1 && !q.isReadyToReward)
  } else if (currentFilter.value === 'ready') {
    return list.filter(q => q.state === 1 && q.isReadyToReward)
  } else if (currentFilter.value === 'unaccepted') {
    return list.filter(q => q.state === 0)
  } else if (currentFilter.value === 'completed') {
    return list.filter(q => q.state === 2)
  } else if (currentFilter.value === 'repeat') {
    return list.filter(q => q.type === 2)
  }

  return list
})

const totalPages = computed(() => Math.ceil(filteredQuests.value.length / pageSize) || 1)

const paginatedQuests = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredQuests.value.slice(start, start + pageSize)
})

// UI 状态与底层状态映射
// 0: 未接取 (00)
// 1: 进行中 (01, 未达成)
// 3: 待领奖 (01, 达成目标可找NPC领奖)
// 2: 已完成 (02, 彻底领奖并移出活跃槽位)
function getQuestUiState(q: QuestItem): number {
  if (q.state === 2) return 2
  if (q.state === 1) {
    return q.isReadyToReward ? 3 : 1
  }
  return 0
}

function onStateSelectChange(q: QuestItem, event: Event) {
  const target = event.target as HTMLSelectElement
  const val = Number(target.value)
  if (val === 3) {
    const success = applyQuestReadyWithItems(q)
    if (!success) {
      target.value = String(getQuestUiState(q))
    }
  } else {
    setQuestUiStateDirect(q, val)
  }
}

function setQuestUiStateDirect(q: QuestItem, uiState: number) {
  if (uiState === 2) {
    q.state = 2
    q.isReadyToReward = false
    actionNotice.value = `已将任务【${q.name}】设为彻底完成！`
  } else if (uiState === 1) {
    q.state = 1
    q.isReadyToReward = false
    actionNotice.value = `已将任务【${q.name}】设为进行中。`
  } else if (uiState === 3) {
    applyQuestReadyWithItems(q)
  } else {
    q.state = 0
    q.isReadyToReward = false
    actionNotice.value = `已将任务【${q.name}】重置为未接取。`
  }
  if (detailQuest.value && detailQuest.value.id === q.id) {
    closeDetailModal()
  }
}

function handleDetailSetReady() {
  if (!detailQuest.value) return
  const success = applyQuestReadyWithItems(detailQuest.value)
  if (success) {
    closeDetailModal()
  }
}

/**
 * 切换为待领奖并检测背包空间、自动生成对应数量的任务所需材料
 */
function applyQuestReadyWithItems(q: QuestItem): boolean {
  // 1. 若无材料需求，直接设为待领奖
  if (!q.requires || q.requires.length === 0) {
    q.state = 1
    q.isReadyToReward = true
    actionNotice.value = `🎁 已将任务【${q.name}】设为待领奖！进游戏可直接找 NPC 交付领奖。`
    return true
  }

  // 2. 若未关联角色背包
  if (!props.heroSave?.inventory) {
    q.state = 1
    q.isReadyToReward = true
    actionNotice.value = `🎁 已将任务【${q.name}】设为待领奖（当前未关联角色背包，请自行在游戏内准备材料）。`
    return true
  }

  const inventory = props.heroSave.inventory
  interface FillAction {
    req: { typeId: number; itemId: number; count: number; name: string }
    count: number
    targetSlot?: InventorySlot
  }
  const fillActions: FillAction[] = []
  let neededEmptySlots = 0
  const reqDetails: string[] = []

  for (const req of q.requires) {
    const { reserved, available } = getItemStockInfo(req.typeId, req.itemId, q.id)
    const partialSlots: InventorySlot[] = []

    for (const slot of inventory) {
      if (!slot.isEmpty && slot.typeId === req.typeId && slot.itemId === req.itemId) {
        if (slot.count < 99) {
          partialSlots.push(slot)
        }
      }
    }

    // 核心判定：扣除其它“待领奖”任务已锁定的材料后，当前任务可支配的有效材料充足则跳过
    if (available >= req.count) {
      continue
    }

    let remainingMissing = req.count - available
    let addedCount = 0

    // 1. 优先填满已有但未满 99 的同类槽位
    for (const slot of partialSlots) {
      const canAdd = 99 - slot.count
      const toAdd = Math.min(remainingMissing, canAdd)
      if (toAdd > 0) {
        fillActions.push({ req, count: toAdd, targetSlot: slot })
        remainingMissing -= toAdd
        addedCount += toAdd
        if (remainingMissing === 0) break
      }
    }

    // 2. 若仍有缺少材料（支持超过 99 数量的大额材料），按每格上限 99 分配到新的空格子中
    let newSlotsForThisReq = 0
    while (remainingMissing > 0) {
      const fillThis = Math.min(99, remainingMissing)
      fillActions.push({ req, count: fillThis })
      neededEmptySlots++
      newSlotsForThisReq++
      remainingMissing -= fillThis
      addedCount += fillThis
    }

    let note = `${req.name} +${addedCount}`
    if (newSlotsForThisReq > 1) {
      note += ` (按单格上限99分占 ${newSlotsForThisReq} 格)`
    }
    if (reserved > 0) {
      note += ` [预留其它待领奖 ${reserved} 件]`
    }
    reqDetails.push(note)
  }

  // 3. 检查背包空槽位是否足够
  const emptySlots = inventory.filter(s => s.isEmpty)
  if (emptySlots.length < neededEmptySlots) {
    actionNotice.value = `⚠️ 背包空间不足！完成任务【${q.name}】还需要 ${neededEmptySlots} 个空槽位来分格存放材料（单格上限99，且已预留其它待领奖任务所需材料），当前背包仅剩 ${emptySlots.length} 个空槽位。请先前往【角色背包】清理空格后再设为待领奖！`
    return false
  }

  // 4. 空槽位充足，执行生成与发物
  let emptyIdx = 0
  for (const action of fillActions) {
    if (action.targetSlot) {
      action.targetSlot.count += action.count
    } else {
      const slot = emptySlots[emptyIdx++]
      const info = findItemInfo(action.req.typeId, action.req.itemId)
      slot.isEmpty = false
      slot.typeId = action.req.typeId
      slot.itemId = action.req.itemId
      slot.count = action.count
      slot.flag = 0
      slot.refineLevel = 0
      slot.itemName = info.name
      slot.categoryName = info.categoryName
    }
  }

  q.state = 1
  q.isReadyToReward = true

  if (reqDetails.length > 0) {
    actionNotice.value = `🎁 已将任务【${q.name}】设为待领奖，并自动向背包补齐所需材料：${reqDetails.join('、')}！已按单格上限99分格存放，进游戏可直接找 NPC 交付领奖。`
  } else {
    actionNotice.value = `🎁 背包中已有充足任务材料，已将任务【${q.name}】设为待领奖！进游戏可直接找 NPC 交付领奖。`
  }
  return true
}


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

function getUiSelectClass(q: QuestItem): string {
  const uiState = getQuestUiState(q)
  switch (uiState) {
    case 3:
      return 'bg-yellow-950/90 border-yellow-500 text-yellow-300 ring-1 ring-yellow-500/50'
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
function setAllActiveQuestsReady() {
  let count = 0
  let itemQuestsCount = 0
  let failedItemQuestsCount = 0
  for (const q of questList.value) {
    if (q.state === 1 && !q.isReadyToReward) {
      if (q.requires && q.requires.length > 0) {
        const success = applyQuestReadyWithItems(q)
        if (success) {
          itemQuestsCount++
          count++
        } else {
          failedItemQuestsCount++
        }
      } else {
        q.isReadyToReward = true
        count++
      }
    }
  }
  if (count > 0 || failedItemQuestsCount > 0) {
    let msg = `已将 ${count} 个进行中任务一键设为待领奖！`
    if (itemQuestsCount > 0) {
      msg += ` 已自动为材料任务分格补齐材料（单格上限99）。`
    }
    if (failedItemQuestsCount > 0) {
      msg += ` ⚠️ 另有 ${failedItemQuestsCount} 个材料任务因背包空格不足未设为待领奖，请前往【角色背包】清理空格后再重试！`
    }
    actionNotice.value = msg
  } else {
    actionNotice.value = `当前没有未达成的进行中任务。`
  }
}


// 一键将所有待领奖任务转换回普通进行中状态
function setAllReadyQuestsToOngoing() {
  let count = 0
  for (const q of questList.value) {
    if (q.state === 1 && q.isReadyToReward) {
      q.isReadyToReward = false
      count++
    }
  }
  if (count > 0) {
    actionNotice.value = `已将当前 ${count} 个待领奖任务一键转回普通进行中状态！`
  } else {
    actionNotice.value = `当前没有处于待领奖状态的任务。`
  }
}

// 一键完成普通任务（不含重复任务）

function setNormalQuestsCompleted() {
  let count = 0
  for (const q of questList.value) {
    // 0: 普通, 1: 主线, 2: 重复, 3: 转职, 4: 觉醒
    // 严格满足：普通任务 (q.type === 0)，不含重复任务 (q.type === 2)
    if (q.type === 0) {
      q.state = 2
      q.isReadyToReward = false
      count++
    }
  }
  actionNotice.value = `已将全量 ${count} 个普通任务（不含重复任务）设置为彻底完成！`
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
