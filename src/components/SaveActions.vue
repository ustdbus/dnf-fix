<template>
  <div class="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#090b10] via-[#10131c]/95 to-transparent pt-6 pb-4 px-4 border-t-2 border-amber-600/40 backdrop-blur-lg shadow-2xl">
    <div class="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 bg-black/50 px-3 py-1.5 rounded-xl border border-gray-800">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400"></span>
        <div class="text-xs text-gray-200">
          正在编辑: <span class="font-black text-amber-300">角色 {{ currentCharacter + 1 }}</span>
          <span class="text-gray-500 font-mono ml-1.5">(DnfHero{{ currentCharacter }})</span>
        </div>
      </div>

      <div class="flex items-center gap-2.5">
        <!-- 导出/下载存档 -->
        <button
          @click="$emit('export')"
          class="text-xs px-4 py-2 rounded-xl bg-gray-800/90 hover:bg-gray-700 text-gray-200 border border-gray-600 font-bold transition flex items-center gap-1.5 shadow-md active:scale-95"
        >
          <span>📥 导出文件</span>
        </button>

        <!-- 保存回存档 (写回路径) -->
        <button
          @click="$emit('save')"
          class="text-xs sm:text-sm px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black transition shadow-xl shadow-amber-500/40 flex items-center gap-1.5 active:scale-95"
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
