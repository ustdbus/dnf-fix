<template>
  <div class="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#0d0f17] via-[#121520] to-transparent pt-6 pb-4 px-3 border-t border-amber-600/30 backdrop-blur-md">
    <div class="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <div class="text-xs text-gray-300">
          当前编辑: <span class="font-bold text-amber-300">角色 {{ currentCharacter + 1 }}</span>
          <span class="text-gray-500 font-mono ml-1">(DnfHero{{ currentCharacter }})</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <!-- 导出/下载存档 -->
        <button
          @click="$emit('export')"
          class="text-xs px-3.5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 font-medium transition flex items-center gap-1 shadow"
        >
          <span>📥 导出/下载文件</span>
        </button>

        <!-- 保存回存档 (写回路径) -->
        <button
          @click="$emit('save')"
          class="text-xs px-5 py-2 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-300 text-black font-extrabold transition shadow-lg shadow-amber-600/30 flex items-center gap-1"
        >
          <span>💾 保存并应用存档</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentCharacter: number
}>()

defineEmits<{
  (e: 'save'): void
  (e: 'export'): void
}>()
</script>
