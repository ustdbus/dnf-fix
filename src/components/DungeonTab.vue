<template>
  <div class="space-y-6">
    <!-- 1. 王图难度修改区：DNF 地下城征服 -->
    <div class="bg-gradient-to-b from-[#181b26] to-[#10121a] p-4 sm:p-5 rounded-2xl border border-amber-900/40 shadow-xl space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/30 pb-3.5">
        <div>
          <h2 class="text-sm sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 flex items-center gap-2">
            <span>🗺️</span> 地下城王图难度解锁
          </h2>
          <p class="text-[11px] text-gray-400 mt-0.5">
            格兰之森 · 天空之城 · 天维巨兽 · 万年雪山 · 诺斯玛尔 · 机械牛王者全开
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="setAllKings"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black transition shadow-lg shadow-amber-500/30 flex items-center gap-1.5 active:scale-95"
          >
            <img :src="kingIcon" alt="王者" class="h-3.5 object-contain" />
            <span>一键全开王者 (All King)</span>
          </button>
        </div>
      </div>

      <!-- 分区域展示 -->
      <div class="space-y-4">
        <div
          v-for="region in save.dungeonRegions"
          :key="region.name"
          class="bg-[#0b0e15]/90 p-3.5 rounded-xl border border-gray-800/90 shadow-inner"
        >
          <div class="flex items-center justify-between mb-2.5 pb-1 border-b border-gray-800/50">
            <span class="text-xs font-black text-amber-300 tracking-wide flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {{ region.name }}
            </span>
            <button
              @click="setRegionKing(region)"
              class="text-[10px] px-2.5 py-0.5 rounded bg-amber-950/70 hover:bg-amber-900 text-amber-300 border border-amber-600/50 font-bold transition active:scale-95"
            >
              本区域设为王者
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            <div
              v-for="map in region.maps"
              :key="map.id"
              class="bg-[#141724] p-2.5 rounded-lg border border-gray-800 hover:border-gray-700 flex flex-col justify-between gap-2 shadow-sm transition"
            >
              <div class="text-[11px] font-bold text-gray-200 truncate" :title="map.name">
                {{ map.name }}
              </div>
              <div class="flex items-center gap-1.5">
                <select
                  v-model.number="map.level"
                  :class="[
                    'w-full text-[11px] py-1 px-1.5 rounded border focus:outline-none font-bold transition shadow-inner font-mono',
                    getDifficultyClass(map.level)
                  ]"
                >
                  <option :value="0">普通 (00)</option>
                  <option :value="1">冒险 (01)</option>
                  <option :value="2">勇士 (02)</option>
                  <option :value="3">👑 王者 (03)</option>
                  <option v-if="map.level === 255" :value="255">未开放 (FF)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 冒险日志解锁区：DNF 古典羊皮纸日志 -->
    <div class="bg-gradient-to-b from-[#181b26] to-[#10121a] p-4 sm:p-5 rounded-2xl border border-amber-900/40 shadow-xl space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/30 pb-3.5">
        <div>
          <h2 class="text-sm sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 flex items-center gap-2">
            <span>📜</span> 冒险家官方日志解锁 (全量 30 篇)
          </h2>
          <p class="text-[11px] text-gray-400 mt-0.5">
            点亮冒险日记，探寻格兰之森大火与使徒降临的真相。
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="setAllLogs(true)"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black font-black transition shadow-lg shadow-emerald-600/30 active:scale-95"
          >
            ✨ 一键全解锁
          </button>
          <button
            @click="setAllLogs(false)"
            class="text-xs px-2.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 text-[11px] font-medium transition active:scale-95"
          >
            重置锁定
          </button>
        </div>
      </div>

      <!-- 30 个日志列表网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
        <div
          v-for="(_, index) in save.logs"
          :key="index"
          @click="toggleLog(index)"
          :class="[
            'p-3 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between gap-2 shadow-sm',
            save.logs[index]
              ? 'bg-amber-950/25 border-amber-500/70 text-amber-200 shadow-amber-500/10 scale-[1.01]'
              : 'bg-[#0f121a] border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-400'
          ]"
        >
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-bold truncate" :title="`日志 #${index + 1} ${OFFICIAL_DIARIES[index] || ''}`">
              #{{ index + 1 }} {{ OFFICIAL_DIARIES[index] || '冒险日志' }}
            </span>
            <span class="text-[10px] font-mono mt-0.5" :class="save.logs[index] ? 'text-amber-400/90 font-bold' : 'text-gray-600'">
              {{ save.logs[index] ? '📖 已解锁' : '🔒 未点亮' }}
            </span>
          </div>
          <span class="text-lg shrink-0">
            {{ save.logs[index] ? '📜' : '🔒' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DnfHeroSave, MapRegion } from '../core/types'
import { OFFICIAL_DIARIES } from '../core/officialDiaries'
import kingIcon from '../assets/official/KING.png'

const props = defineProps<{
  save: DnfHeroSave
}>()

function getDifficultyClass(level: number): string {
  switch (level) {
    case 3:
      return 'bg-amber-950/90 border-amber-500 text-amber-200 shadow-sm'
    case 2:
      return 'bg-red-950/80 border-red-500 text-red-300'
    case 1:
      return 'bg-blue-950/80 border-blue-500 text-blue-300'
    case 0:
      return 'bg-gray-800 border-gray-600 text-gray-300'
    default:
      return 'bg-gray-900 border-gray-700 text-gray-500'
  }
}

function setAllKings() {
  for (const reg of props.save.dungeonRegions) {
    for (const m of reg.maps) {
      m.level = 3 // 王者
    }
  }
}

function setRegionKing(region: MapRegion) {
  for (const m of region.maps) {
    m.level = 3
  }
}

function setAllLogs(status: boolean) {
  for (let i = 0; i < props.save.logs.length; i++) {
    props.save.logs[i] = status
  }
}

function toggleLog(index: number) {
  props.save.logs[index] = !props.save.logs[index]
}
</script>
