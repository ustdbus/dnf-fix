<template>
  <div class="space-y-6">
    <!-- 1. 王图难度修改区 -->
    <div class="bg-[#141722] p-4 rounded-xl border border-gray-800 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-3">
        <div>
          <h2 class="text-sm font-bold text-amber-300 flex items-center gap-1.5">
            <span>🗺️</span> 地下城王图难度解锁 (格兰之森/天空城/天维/雪山/机械牛)
          </h2>
          <p class="text-[11px] text-gray-400 mt-0.5">
            难度等级：00普通 · 01冒险 · 02勇士 · 03王者 (直接解锁最高通关评级)
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="setAllKings"
            class="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-extrabold transition shadow-md shadow-amber-600/20 flex items-center gap-1"
          >
            👑 一键全开王者 (All King)
          </button>
        </div>
      </div>

      <!-- 分区域展示 -->
      <div class="space-y-4">
        <div
          v-for="region in save.dungeonRegions"
          :key="region.name"
          class="bg-[#0f121a] p-3 rounded-lg border border-gray-800/80"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-amber-200/90">{{ region.name }}</span>
            <button
              @click="setRegionKing(region)"
              class="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-800/50"
            >
              本区域设为王者
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <div
              v-for="map in region.maps"
              :key="map.id"
              class="bg-[#171a26] p-2 rounded border border-gray-800 flex flex-col justify-between gap-1.5"
            >
              <div class="text-[11px] font-medium text-gray-300 truncate" :title="map.name">
                {{ map.name }}
              </div>
              <div class="flex items-center gap-1">
                <select
                  v-model.number="map.level"
                  :class="[
                    'w-full text-[11px] py-1 px-1.5 rounded border focus:outline-none font-bold transition',
                    getDifficultyClass(map.level)
                  ]"
                >
                  <option :value="0">普通 (00)</option>
                  <option :value="1">冒险 (01)</option>
                  <option :value="2">勇士 (02)</option>
                  <option :value="3">王者 (03)</option>
                  <option v-if="map.level === 255" :value="255">未开放 (FF)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 冒险日志解锁区 -->
    <div class="bg-[#141722] p-4 rounded-xl border border-gray-800 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-3">
        <div>
          <h2 class="text-sm font-bold text-amber-300 flex items-center gap-1.5">
            <span>📜</span> 冒险家日志解锁 (共30篇)
          </h2>
          <p class="text-[11px] text-gray-400 mt-0.5">
            解锁日志记载的全部地下城剧情与见闻，支持单独开启或一键全部点亮。
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="setAllLogs(true)"
            class="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold transition shadow-md shadow-emerald-600/20"
          >
            ✨ 一键解锁全部日志
          </button>
          <button
            @click="setAllLogs(false)"
            class="text-xs px-2.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 text-[11px] transition"
          >
            重置锁定
          </button>
        </div>
      </div>

      <!-- 30 个日志列表网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        <div
          v-for="(_, index) in save.logs"
          :key="index"
          @click="toggleLog(index)"
          :class="[
            'p-2.5 rounded-lg border cursor-pointer select-none transition flex items-center justify-between gap-2',
            save.logs[index]
              ? 'bg-amber-950/20 border-amber-600/50 text-amber-300 shadow-sm shadow-amber-500/10'
              : 'bg-[#121520] border-gray-800 text-gray-500 hover:border-gray-700'
          ]"
        >
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-bold truncate" :title="`日志 #${index + 1} ${OFFICIAL_DIARIES[index] || ''}`">
              #{{ index + 1 }} {{ OFFICIAL_DIARIES[index] || '冒险日志' }}
            </span>
            <span class="text-[10px]" :class="save.logs[index] ? 'text-amber-400/80' : 'text-gray-600'">
              {{ save.logs[index] ? '已解锁' : '未解锁' }}
            </span>
          </div>
          <span class="text-base shrink-0">
            {{ save.logs[index] ? '📖' : '🔒' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DnfHeroSave, MapRegion } from '../core/types'
import { OFFICIAL_DIARIES } from '../core/officialDiaries'

const props = defineProps<{
  save: DnfHeroSave
}>()

function getDifficultyClass(level: number): string {
  switch (level) {
    case 3:
      return 'bg-amber-950/80 border-amber-500 text-amber-300'
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
