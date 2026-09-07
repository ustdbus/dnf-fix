<template>
  <header class="bg-gradient-to-b from-[#181b26] via-[#12141d] to-[#0c0e14] border-b-2 border-amber-600/50 p-3.5 shadow-2xl relative overflow-hidden">
    <!-- DNF 顶部金属光晕暗纹背景装饰 -->
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>
    <div class="max-w-4xl mx-auto flex flex-col gap-3.5 relative z-10">
      
      <!-- 标题栏与专属 Q 版鬼剑士徽标 -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- 职业/鬼剑士程序图标 (未转职保持经典鬼剑士，转职与觉醒展示对应职业图片) -->
          <div class="relative group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-amber-400/90 shadow-lg shadow-amber-600/30 bg-[#161a25] transition-transform duration-300 group-hover:scale-105">
              <img :src="activeAvatar" :alt="activeTitle" class="w-full h-full object-cover transition-all duration-300" />
            </div>
            <!-- 激活微光角标 -->
            <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-600 border-2 border-[#12141d] shadow-sm flex items-center justify-center text-[8px] font-bold text-white">
              ⚔️
            </span>
          </div>

          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-base sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 tracking-wider filter drop-shadow">
                鬼剑士单机版存档修改器
              </h1>
              <span class="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/50 font-semibold shadow-inner">
                阿拉德秘宝
              </span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold tracking-tight shadow-sm">
                v1.5.0
              </span>
            </div>
            <p class="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
              <span class="text-amber-500/90 font-medium">DNF 单机专属</span>
              <span class="text-gray-600">|</span>
              <span>四职业全觉醒 · 背包90格 · 王者全图 · 冒险日志</span>
            </p>
          </div>
        </div>
      </div>

      <!-- 存档路径输入与快速操作栏 -->
      <div class="flex flex-col sm:flex-row gap-2 bg-[#0d0f17]/90 p-2.5 rounded-xl border border-amber-900/40 shadow-inner">
        <div class="flex-1 flex items-center gap-2 min-w-0">
          <span class="text-xs text-amber-400/90 whitespace-nowrap font-bold flex items-center gap-1">
            <span>📁</span>
            <span>存档路径:</span>
          </span>
          <div class="flex-1 relative flex items-center">
            <input
              :value="savePath"
              @input="$emit('update:savePath', ($event.target as HTMLInputElement).value)"
              @change="$emit('save-default-path', ($event.target as HTMLInputElement).value)"
              @keyup.enter="$emit('save-default-path', ($event.target as HTMLInputElement).value)"
              type="text"
              placeholder="默认: /storage/emulated/0/Documents/DNF_Save/files/Resource/"
              class="w-full bg-[#151924] text-xs text-gray-100 pl-3 pr-20 py-2 rounded-lg border border-gray-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 focus:outline-none placeholder-gray-500 font-mono transition"
            />
            <div class="absolute right-1.5 flex items-center gap-1.5">
              <span
                v-if="isDefaultSaved"
                class="text-[9px] bg-emerald-950/90 border border-emerald-500 text-emerald-300 px-1.5 py-0.5 rounded font-bold select-none shadow-sm"
                title="当前路径已持久化保存为默认路径"
              >
                默认
              </span>
              <button
                v-if="savePath"
                @click="$emit('clear-path')"
                type="button"
                class="text-gray-400 hover:text-red-400 text-xs px-1 py-0.5 rounded hover:bg-gray-800 transition select-none"
                title="主动删除/清除默认路径"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-wrap shrink-0">
          <label class="cursor-pointer text-xs px-3 py-1.5 rounded-lg bg-gray-800/90 hover:bg-gray-700 text-gray-200 border border-gray-600/90 transition flex items-center gap-1 font-medium shadow-sm active:scale-95" title="选择一个或多个存档文件">
            <span>浏览文件</span>
            <input type="file" multiple class="hidden" @change="$emit('file-selected', $event)" />
          </label>
          <label class="cursor-pointer text-xs px-3 py-1.5 rounded-lg bg-[#1a2130] hover:bg-[#232c40] text-amber-200 border border-amber-600/50 transition flex items-center gap-1 font-medium shadow-sm active:scale-95" title="直接选择包含存档的整个文件夹">
            <span>📂 选文件夹</span>
            <input type="file" webkitdirectory directory multiple class="hidden" @change="$emit('folder-selected', $event)" />
          </label>
          <button
            @click="$emit('reload-current')"
            class="text-xs px-2.5 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-600 text-blue-200 transition flex items-center gap-1 shadow-sm active:scale-95"
            title="强制从存储重新读取当前角色的最新存档"
          >
            <span>🔄 重新读取</span>
          </button>
          <button
            @click="$emit('detect-path')"
            class="text-xs px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black transition flex items-center gap-1 shadow-lg shadow-amber-500/30 active:scale-95"
            title="检测并载入该路径下的所有存档"
          >
            <span>🔍 检测存档</span>
          </button>
        </div>
      </div>

      <!-- 四个角色选择卡片：DNF 经典卡牌金属质感，融入职业专属头像 -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <button
          v-for="i in 4"
          :key="i - 1"
          @click="$emit('select-character', i - 1)"
          :class="[
            'py-2 px-2 rounded-xl border text-center transition-all relative overflow-hidden flex flex-col items-center justify-center gap-1 group',
            currentCharacter === (i - 1)
              ? 'bg-gradient-to-b from-amber-950/50 via-[#1e1c15] to-[#14151e] border-amber-400 text-amber-100 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/50 scale-[1.02]'
              : 'bg-[#121520]/90 border-gray-800/90 text-gray-400 hover:border-gray-700 hover:text-gray-300'
          ]"
        >
          <!-- 选中角色的金色角标装饰 -->
          <div
            v-if="currentCharacter === (i - 1)"
            class="absolute top-0 right-0 w-3.5 h-3.5 bg-gradient-to-bl from-amber-400 to-transparent"
          ></div>

          <!-- 角色与状态顶栏 -->
          <div class="w-full flex items-center justify-between px-1 text-[11px] font-bold">
            <span :class="currentCharacter === (i - 1) ? 'text-amber-200' : 'text-gray-300'">角色 {{ i }}</span>
            <span
              v-if="characterStatus[i - 1]?.exists"
              class="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-pulse"
              title="已检测到该角色存档"
            ></span>
            <span v-else class="text-[9px] text-gray-600">无存档</span>
          </div>

          <!-- 专属职业官方立绘头像 -->
          <div class="w-12 h-10 rounded-lg overflow-hidden border bg-black/80 shrink-0 relative my-0.5 shadow-inner"
            :class="[
              characterStatus[i - 1]?.exists
                ? (currentCharacter === (i - 1) ? 'border-amber-400 shadow-md shadow-amber-500/20' : 'border-amber-800/60')
                : 'border-gray-800 opacity-40'
            ]"
          >
            <img
              v-if="characterStatus[i - 1]?.exists"
              :src="getProfessionInfo(characterStatus[i - 1]?.profession).avatar"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform"
              :alt="getProfessionInfo(characterStatus[i - 1]?.profession).name"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-600 text-xs">
              ⚔️
            </div>
            <!-- 觉醒职业小角标 -->
            <span
              v-if="characterStatus[i - 1]?.exists && getProfessionInfo(characterStatus[i - 1]?.profession).isAwakened"
              class="absolute bottom-0 right-0 text-[8px] bg-red-600 text-white font-black px-1 rounded-tl shadow leading-tight"
            >
              觉
            </span>
          </div>

          <div
            v-if="characterStatus[i - 1]?.exists"
            class="text-[11px] font-semibold truncate max-w-[130px] leading-tight"
            :class="currentCharacter === (i - 1) ? 'text-amber-300' : 'text-amber-400/80'"
          >
            {{ characterStatus[i - 1]?.desc || '已载入' }}
          </div>
          <div v-else class="text-[10px] text-gray-600 leading-tight">
            DnfHero{{ i - 1 }}
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import chibiLogo from '../assets/ghost_blade_chibi.png'
import { getProfessionInfo } from '../utils/professionAssets'

const props = defineProps<{
  savePath: string
  currentCharacter: number
  characterStatus: Array<{ exists: boolean; desc?: string; profession?: number }>
  isDefaultSaved?: boolean
}>()

const activeAvatar = computed(() => {
  const current = props.characterStatus[props.currentCharacter]
  if (current && current.exists && current.profession !== undefined && current.profession > 0) {
    return getProfessionInfo(current.profession).avatar
  }
  return chibiLogo
})

const activeTitle = computed(() => {
  const current = props.characterStatus[props.currentCharacter]
  if (current && current.exists && current.profession !== undefined && current.profession > 0) {
    return getProfessionInfo(current.profession).name
  }
  return '鬼剑士'
})

defineEmits<{
  (e: 'update:savePath', val: string): void
  (e: 'detect-path'): void
  (e: 'select-character', index: number): void
  (e: 'reload-current'): void
  (e: 'file-selected', event: Event): void
  (e: 'folder-selected', event: Event): void
  (e: 'clear-path'): void
  (e: 'save-default-path', val: string): void
}>()
</script>
