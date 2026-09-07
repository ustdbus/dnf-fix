<template>
  <div class="space-y-4">
    <!-- 角色基本身份展示：DNF 史诗品质铭牌，集成官方专属职业立绘 -->
    <div class="bg-gradient-to-r from-[#1b1e2c] via-[#141724] to-[#1b1e2c] p-4 rounded-2xl border-2 border-amber-600/50 shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-amber-900/40 gap-3">
        <div class="flex items-center gap-4">
          <!-- 官方专属职业高清立绘头像 -->
          <div
            class="w-24 h-20 rounded-xl overflow-hidden border-2 bg-black/80 shrink-0 relative group shadow-lg transition-all"
            :class="profInfo.isAwakened ? 'border-amber-400 shadow-amber-500/30 ring-2 ring-red-600/40' : 'border-amber-700/70 shadow-amber-950/50'"
          >
            <img
              :src="profInfo.avatar"
              :alt="profInfo.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <!-- 觉醒徽标 -->
            <div
              v-if="profInfo.isAwakened"
              class="absolute bottom-0 right-0 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[9px] px-1.5 py-0.2 font-black rounded-tl border-t border-l border-yellow-300/60 shadow"
            >
              🔥 觉醒
            </div>
            <!-- 转职徽标 -->
            <div
              v-else-if="profInfo.id > 0"
              class="absolute bottom-0 right-0 bg-blue-900/90 text-blue-200 text-[9px] px-1.5 py-0.2 font-bold rounded-tl border-t border-l border-blue-400/40"
            >
              转职
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-lg font-black text-amber-100 tracking-wide">
                {{ profInfo.name }}
              </span>
              <span
                v-if="profInfo.isAwakened"
                class="text-[10px] px-2 py-0.5 rounded bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold shadow-sm border border-yellow-300/40"
              >
                🔥 觉醒形态
              </span>
              <span
                v-else-if="profInfo.id > 0"
                class="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-bold border border-amber-600/50"
              >
                一次转职
              </span>
              <span
                v-else
                class="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-bold border border-gray-600"
              >
                初始职业
              </span>

              <span class="text-[10px] px-2 py-0.5 rounded bg-black/60 text-amber-300/80 border border-amber-900/50 font-medium">
                {{ profInfo.tagText }}
              </span>
            </div>

            <div class="flex items-center gap-2.5 mt-1.5 flex-wrap">
              <span class="text-xs font-bold text-amber-400 font-mono">
                等级: Lv.{{ save.level }}
              </span>
              <span v-if="save.level >= 60" class="text-[9px] px-1.5 py-0.2 rounded bg-red-950 text-red-300 border border-red-700/60 font-bold">
                MAX
              </span>
              <span class="text-gray-600">|</span>
              <span class="text-[11px] text-gray-400">
                源标识: 0x0{{ save.profession.toString(16) }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center sm:flex-col sm:items-end justify-between">
          <span class="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/60 font-bold shadow-sm">
            ✨ 存档状态正常
          </span>
          <div class="text-[11px] text-gray-400 font-mono mt-1">
            存档槽: DnfHero{{ save.characterIndex }}
          </div>
        </div>
      </div>

      <!-- 职业转职与觉醒选择器 -->
      <div class="bg-black/40 p-3 rounded-xl border border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-amber-300 flex items-center gap-1">
            <span>⚡</span>
            <span>修改转职/觉醒:</span>
          </span>
          <span class="text-[11px]" :class="isProfessionLocked ? 'text-gray-500' : 'text-amber-300/80'">
            {{ isProfessionLocked ? '🔒 已锁定保护（点击右侧解锁切换职业）' : '🔓 已解锁，可自由切换四职业转职与觉醒形态' }}
          </span>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          <select
            v-model.number="save.profession"
            :disabled="isProfessionLocked"
            :class="[
              'text-xs px-3 py-1.5 rounded-lg border font-bold transition-all',
              isProfessionLocked
                ? 'bg-gray-900/80 text-gray-500 border-gray-800 cursor-not-allowed opacity-60'
                : 'bg-[#121522] text-amber-200 border-amber-500/80 shadow-md shadow-amber-500/20 focus:border-amber-400 focus:outline-none cursor-pointer'
            ]"
          >
            <optgroup label="【觉醒职业】">
              <option :value="7">🔥 狱血魔神 (狂战士觉醒)</option>
              <option :value="5">⚡ 剑圣 (剑魂觉醒)</option>
              <option :value="6">🔮 弑魂 (鬼泣觉醒)</option>
              <option :value="8">👁️ 大暗黑天 (阿修罗觉醒)</option>
            </optgroup>
            <optgroup label="【一次转职】">
              <option :value="3">🩸 狂战士 (Berserker)</option>
              <option :value="1">⚔️ 剑魂 (Blade Master)</option>
              <option :value="2">👻 鬼泣 (Soul Bender)</option>
              <option :value="4">🗡️ 阿修罗 (Asura)</option>
            </optgroup>
            <optgroup label="【初始职业】">
              <option :value="0">🔰 鬼剑士 (未转职)</option>
            </optgroup>
          </select>

          <!-- 锁定/解锁切换按钮 -->
          <button
            @click="isProfessionLocked = !isProfessionLocked"
            type="button"
            :class="[
              'text-xs px-2.5 py-1.5 rounded-lg border font-bold flex items-center gap-1 transition-all active:scale-95',
              isProfessionLocked
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700'
                : 'bg-amber-600 hover:bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-600/30'
            ]"
          >
            <span>{{ isProfessionLocked ? '🔒 点击解锁' : '🔓 已解锁(锁定)' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 4 项可修改数值卡片：DNF 经典暗金与宝石质感 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <!-- 1. 金币 (融入官方正版 Gold.png 切图) -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-amber-700/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-amber-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <img :src="goldIcon" alt="金币" class="w-5 h-5 object-contain" />
              <span class="font-black text-sm text-amber-200">金币 (Gold)</span>
            </div>
            <button
              @click="save.gold = 999999999"
              class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-black font-extrabold transition shadow-sm active:scale-95"
            >
              一键 9.9 亿
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1 font-mono">当前拥有: {{ formatNumber(save.gold) }} Gold</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.gold"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#090b10] text-amber-300 font-mono text-base px-3 py-2 rounded-lg border border-amber-800/60 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition shadow-inner"
          />
        </div>
      </div>

      <!-- 2. 复活币 -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-yellow-700/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-yellow-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">🪙</span>
              <span class="font-black text-sm text-yellow-200">复活币 (Life Coins)</span>
            </div>
            <button
              @click="save.reviveCoins = 9999999"
              class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black font-extrabold transition shadow-sm active:scale-95"
            >
              一键 999 万
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1 font-mono">当前复活币: {{ formatNumber(save.reviveCoins) }} 枚</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.reviveCoins"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#090b10] text-yellow-300 font-mono text-base px-3 py-2 rounded-lg border border-yellow-800/60 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40 focus:outline-none transition shadow-inner"
          />
        </div>
      </div>

      <!-- 3. 决斗胜点 -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-blue-800/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-blue-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">⚔️</span>
              <span class="font-black text-sm text-blue-200">决斗胜点 (Victory Points)</span>
            </div>
            <button
              @click="save.victoryPoints = 9999999"
              class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-extrabold transition shadow-sm active:scale-95"
            >
              一键 999 万
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1 font-mono">当前胜点: {{ formatNumber(save.victoryPoints) }} 点</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.victoryPoints"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#090b10] text-blue-300 font-mono text-base px-3 py-2 rounded-lg border border-blue-800/60 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40 focus:outline-none transition shadow-inner"
          />
        </div>
      </div>

      <!-- 4. SP 技能点 -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-purple-800/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-purple-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">✨</span>
              <span class="font-black text-sm text-purple-200">SP 技能点 (Skill Points)</span>
            </div>
            <div class="flex gap-1.5">
              <button
                @click="save.sp = 9999"
                class="text-[11px] px-2 py-0.8 rounded-lg bg-purple-900/80 hover:bg-purple-800 text-purple-200 font-bold transition shadow-sm active:scale-95 border border-purple-700/50"
              >
                9999
              </button>
              <button
                @click="save.sp = 50000"
                class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-extrabold transition shadow-sm active:scale-95"
              >
                满点 50000
              </button>
            </div>
          </div>
          <div class="text-xs text-gray-400 mb-1 font-mono">当前拥有: {{ formatNumber(save.sp) }} SP (点满全技能)</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.sp"
            type="number"
            min="0"
            max="65535"
            class="w-full bg-[#090b10] text-purple-300 font-mono text-base px-3 py-2 rounded-lg border border-purple-800/60 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 focus:outline-none transition shadow-inner"
          />
        </div>
      </div>

      <!-- 5. 角色勋章 (对应存档 0x31~0x34) -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-amber-800/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-amber-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎖️</span>
              <span class="font-black text-sm text-amber-200">角色勋章 (Medal)</span>
            </div>
            <div class="flex gap-1.5">
              <button
                @click="save.medal = 9999999"
                class="text-[11px] px-2 py-0.8 rounded-lg bg-amber-900/80 hover:bg-amber-800 text-amber-200 font-bold transition shadow-sm active:scale-95 border border-amber-700/50"
              >
                999 万
              </button>
              <button
                @click="save.medal = 88888888"
                class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-black font-extrabold transition shadow-sm active:scale-95"
              >
                8888 万
              </button>
            </div>
          </div>
          <div class="text-xs text-gray-400 mb-1 font-mono">当前拥有: {{ formatNumber(save.medal) }} 枚勋章</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.medal"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#090b10] text-amber-300 font-mono text-base px-3 py-2 rounded-lg border border-amber-800/60 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition shadow-inner"
          />
        </div>
      </div>

      <!-- 6. 背包格数 (放在最末尾) -->
      <div class="bg-gradient-to-b from-[#181a26] to-[#11131c] p-4 rounded-xl border border-emerald-800/50 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-emerald-500 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎒</span>
              <span class="font-black text-sm text-emerald-200">背包格数 (Max 90格)</span>
            </div>
            <button
              @click="save.bagSlotCount = 90"
              class="text-[11px] px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-black font-extrabold transition shadow-sm active:scale-95"
            >
              拉满 90 格
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1">有效范围: 24 ~ 90 格 (推荐90格开启全部槽位)</div>
        </div>
        <div class="mt-2 flex items-center gap-3">
          <input
            v-model.number="save.bagSlotCount"
            type="range"
            min="24"
            max="90"
            step="1"
            class="flex-1 accent-emerald-500 cursor-pointer h-2 bg-gray-800 rounded-lg"
          />
          <span class="font-mono text-emerald-300 font-black text-base w-14 text-right bg-black/40 px-2 py-0.5 rounded border border-emerald-900/60">
            {{ save.bagSlotCount }} 格
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { DnfHeroSave } from '../core/types'
import goldIcon from '../assets/official/Gold.png'
import { getProfessionInfo } from '../utils/professionAssets'

const props = defineProps<{
  save: DnfHeroSave
}>()

const isProfessionLocked = ref(true)

const profInfo = computed(() => {
  return getProfessionInfo(props.save.profession)
})

function formatNumber(num: number): string {
  if (num === undefined || num === null) return '0'
  return num.toLocaleString()
}
</script>
