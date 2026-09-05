<template>
  <header class="bg-gradient-to-r from-[#12141d] via-[#1a1e2b] to-[#12141d] border-b border-amber-600/30 p-3 shadow-lg">
    <div class="max-w-4xl mx-auto flex flex-col gap-3">
      <!-- 标题栏与环境标识 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-black text-lg shadow-md shadow-amber-500/20 border border-amber-300">
            鬼
          </div>
          <div>
            <h1 class="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-wide">
              鬼剑士单机版存档修改器
            </h1>
            <p class="text-[11px] text-gray-400">Android 专用版 · 角色/背包/王图/日志全功能修改</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="$emit('load-sample')"
            class="text-xs px-2.5 py-1 rounded bg-amber-950/60 hover:bg-amber-900/80 border border-amber-700/50 text-amber-300 transition flex items-center gap-1 shadow-sm"
            title="加载随项目附带的参考存档进行测试"
          >
            <span>载入参考存档</span>
          </button>
        </div>
      </div>

      <!-- 存档路径输入与扫描 -->
      <div class="flex flex-col sm:flex-row gap-2 bg-[#0d0f15]/80 p-2.5 rounded-lg border border-gray-800">
        <div class="flex-1 flex items-center gap-2">
          <span class="text-xs text-amber-400/90 whitespace-nowrap font-medium">📁 存档路径:</span>
          <input
            :value="savePath"
            @input="$emit('update:savePath', ($event.target as HTMLInputElement).value)"
            type="text"
            placeholder="例如: /sdcard/Android/data/... 或 C:/.../参考存档"
            class="flex-1 bg-[#161a24] text-xs text-gray-200 px-3 py-1.5 rounded border border-gray-700 focus:border-amber-500 focus:outline-none placeholder-gray-600"
          />
        </div>
        <div class="flex items-center gap-2">
          <label class="cursor-pointer text-xs px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 transition flex items-center gap-1">
            <span>浏览文件</span>
            <input type="file" class="hidden" @change="$emit('file-selected', $event)" />
          </label>
          <button
            @click="$emit('detect-path')"
            class="text-xs px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-black font-bold transition flex items-center gap-1 shadow-md shadow-amber-600/30"
          >
            <span>检测存档</span>
          </button>
        </div>
      </div>

      <!-- 四个角色选择卡片 -->
      <div class="grid grid-cols-4 gap-2">
        <button
          v-for="i in 4"
          :key="i - 1"
          @click="$emit('select-character', i - 1)"
          :class="[
            'py-2 px-1 rounded-lg border text-center transition relative overflow-hidden flex flex-col items-center justify-center',
            currentCharacter === (i - 1)
              ? 'bg-amber-500/15 border-amber-400 text-amber-200 shadow-md shadow-amber-500/20 ring-1 ring-amber-400/40'
              : 'bg-[#151822] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300'
          ]"
        >
          <div class="text-xs font-bold flex items-center gap-1">
            <span>角色 {{ i }}</span>
            <span
              v-if="characterStatus[i - 1]?.exists"
              class="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              title="已检测到该存档文件"
            ></span>
          </div>
          <div class="text-[10px] text-gray-500 truncate mt-0.5">
            DnfHero{{ i - 1 }}
          </div>
          <div v-if="characterStatus[i - 1]?.exists" class="text-[10px] text-amber-400/80 mt-0.5">
            {{ characterStatus[i - 1]?.desc || '存在' }}
          </div>
          <div v-else class="text-[10px] text-gray-600 mt-0.5">
            未发现
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  savePath: string
  currentCharacter: number
  characterStatus: Array<{ exists: boolean; desc?: string }>
}>()

defineEmits<{
  (e: 'update:savePath', val: string): void
  (e: 'detect-path'): void
  (e: 'select-character', index: number): void
  (e: 'load-sample'): void
  (e: 'file-selected', event: Event): void
}>()
</script>
