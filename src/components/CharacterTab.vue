<template>
  <div class="space-y-4">
    <!-- 角色基本身份展示 (只读) -->
    <div class="bg-gradient-to-br from-[#181b26] to-[#12141d] p-4 rounded-xl border border-gray-800 shadow-md">
      <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-800/80">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/50 flex items-center justify-center text-red-400 font-black text-xl shadow-inner">
            剑
          </div>
          <div>
            <div class="text-sm font-bold text-gray-200">{{ save.professionName }}</div>
            <div class="text-xs text-amber-400">等级: Lv.{{ save.level }} (MAX)</div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
            存档正常
          </span>
          <div class="text-[10px] text-gray-500 mt-1">DnfHero{{ save.characterIndex }}</div>
        </div>
      </div>
      <div class="text-[11px] text-gray-400 bg-black/30 p-2 rounded border border-gray-800/50">
        ⚠️ 提示：按照单机版规则，为避免存档损坏，角色界面仅开放修改：<strong class="text-amber-300">复活币、胜点、金币、背包格数</strong>。
      </div>
    </div>

    <!-- 4 项可修改数值卡片 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <!-- 1. 金币 -->
      <div class="bg-[#151824] p-4 rounded-xl border border-amber-900/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">💰</span>
              <span class="font-bold text-sm text-amber-200">金币 (Gold)</span>
            </div>
            <button
              @click="save.gold = 999999999"
              class="text-[11px] px-2 py-0.5 rounded bg-amber-900/40 hover:bg-amber-800/60 text-amber-300 border border-amber-700/40 transition"
            >
              一键 9.9 亿
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1">当前金币: {{ formatNumber(save.gold) }}</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.gold"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#0d0f15] text-amber-300 font-mono text-base px-3 py-2 rounded-lg border border-amber-800/50 focus:border-amber-400 focus:outline-none"
          />
        </div>
      </div>

      <!-- 2. 复活币 -->
      <div class="bg-[#151824] p-4 rounded-xl border border-yellow-900/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">🪙</span>
              <span class="font-bold text-sm text-yellow-200">复活币 (Life Coins)</span>
            </div>
            <button
              @click="save.reviveCoins = 9999999"
              class="text-[11px] px-2 py-0.5 rounded bg-yellow-900/40 hover:bg-yellow-800/60 text-yellow-300 border border-yellow-700/40 transition"
            >
              一键 999 万
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1">当前复活币: {{ formatNumber(save.reviveCoins) }}</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.reviveCoins"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#0d0f15] text-yellow-300 font-mono text-base px-3 py-2 rounded-lg border border-yellow-800/50 focus:border-yellow-400 focus:outline-none"
          />
        </div>
      </div>

      <!-- 3. 胜点 -->
      <div class="bg-[#151824] p-4 rounded-xl border border-blue-900/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">⚔️</span>
              <span class="font-bold text-sm text-blue-200">决斗胜点 (Victory Points)</span>
            </div>
            <button
              @click="save.victoryPoints = 9999999"
              class="text-[11px] px-2 py-0.5 rounded bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 border border-blue-700/40 transition"
            >
              一键 999 万
            </button>
          </div>
          <div class="text-xs text-gray-400 mb-1">当前胜点: {{ formatNumber(save.victoryPoints) }}</div>
        </div>
        <div class="mt-2">
          <input
            v-model.number="save.victoryPoints"
            type="number"
            min="0"
            max="2147483647"
            class="w-full bg-[#0d0f15] text-blue-300 font-mono text-base px-3 py-2 rounded-lg border border-blue-800/50 focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      <!-- 4. 背包格数 -->
      <div class="bg-[#151824] p-4 rounded-xl border border-emerald-900/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎒</span>
              <span class="font-bold text-sm text-emerald-200">背包格数 (Max 90格)</span>
            </div>
            <button
              @click="save.bagSlotCount = 90"
              class="text-[11px] px-2 py-0.5 rounded bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 border border-emerald-700/40 transition"
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
            class="flex-1 accent-emerald-500 cursor-pointer"
          />
          <span class="font-mono text-emerald-300 font-bold text-base w-12 text-right">
            {{ save.bagSlotCount }} 格
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DnfHeroSave } from '../core/types'

defineProps<{
  save: DnfHeroSave
}>()

function formatNumber(num: number): string {
  if (num === undefined || num === null) return '0'
  return num.toLocaleString()
}
</script>
