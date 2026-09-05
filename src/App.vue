<template>
  <div class="min-h-screen bg-[#0b0d13] text-gray-100 flex flex-col justify-between pb-24">
    <div>
      <!-- 顶部状态栏与角色选择 -->
      <HeaderBar
        :save-path="savePath"
        :current-character="currentCharacter"
        :character-status="characterStatus"
        @update:save-path="savePath = $event"
        @detect-path="detectSaves"
        @select-character="onSelectCharacter"
        @load-sample="loadSampleSave"
        @file-selected="onFileSelected"
      />

      <!-- 主工作区 -->
      <main class="max-w-4xl mx-auto p-3 sm:p-4 space-y-4">
        <!-- 未加载存档时的提示 -->
        <div v-if="!currentSave" class="bg-[#141724] border border-amber-800/40 rounded-2xl p-8 text-center space-y-4 my-6 shadow-xl">
          <div class="text-4xl animate-bounce">⚔️</div>
          <h2 class="text-lg font-bold text-amber-300">尚未加载角色存档</h2>
          <p class="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
            请在上方输入手机中的存档目录路径并点击【检测存档】，或者直接点击右上角【载入参考存档】进入本地测试模式。
          </p>
          <div class="flex justify-center gap-3 pt-2">
            <button
              @click="loadSampleSave"
              class="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-xs rounded-lg shadow-lg shadow-amber-600/30 transition"
            >
              🚀 载入项目参考存档进行测试 (Lv.60 狂战士)
            </button>
          </div>
        </div>

        <!-- 已加载存档时：展示三大 Tab 导航 -->
        <div v-else class="space-y-4">
          <!-- 导航选项卡 -->
          <div class="flex border-b border-gray-800 bg-[#121520] rounded-xl p-1 shadow-sm">
            <button
              @click="activeTab = 'character'"
              :class="[
                'flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5',
                activeTab === 'character'
                  ? 'bg-amber-600 text-black shadow-md shadow-amber-600/30'
                  : 'text-gray-400 hover:text-gray-200'
              ]"
            >
              <span>👤</span> 角色属性
            </button>
            <button
              @click="activeTab = 'inventory'"
              :class="[
                'flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5',
                activeTab === 'inventory'
                  ? 'bg-amber-600 text-black shadow-md shadow-amber-600/30'
                  : 'text-gray-400 hover:text-gray-200'
              ]"
            >
              <span>🎒</span> 背包物品
            </button>
            <button
              @click="activeTab = 'dungeon'"
              :class="[
                'flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5',
                activeTab === 'dungeon'
                  ? 'bg-amber-600 text-black shadow-md shadow-amber-600/30'
                  : 'text-gray-400 hover:text-gray-200'
              ]"
            >
              <span>🗺️</span> 王图 & 日志
            </button>
          </div>

          <!-- Tab 1: 角色 -->
          <CharacterTab
            v-if="activeTab === 'character'"
            :save="currentSave"
          />

          <!-- Tab 2: 背包 -->
          <InventoryTab
            v-if="activeTab === 'inventory'"
            :save="currentSave"
          />

          <!-- Tab 3: 王图 & 日志 -->
          <DungeonTab
            v-if="activeTab === 'dungeon'"
            :save="currentSave"
          />
        </div>
      </main>
    </div>

    <!-- 底部保存与导出 -->
    <SaveActions
      v-if="currentSave"
      :current-character="currentCharacter"
      @save="onSave"
      @export="onExport"
    />

    <!-- Toast 消息通知 -->
    <div
      v-if="toastMessage"
      class="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl text-xs font-bold shadow-2xl flex items-center gap-2 border animate-fade-in"
      :class="toastType === 'success' ? 'bg-emerald-950/95 border-emerald-500 text-emerald-200' : 'bg-red-950/95 border-red-500 text-red-200'"
    >
      <span>{{ toastType === 'success' ? '✅' : '⚠️' }}</span>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import CharacterTab from './components/CharacterTab.vue'
import InventoryTab from './components/InventoryTab.vue'
import DungeonTab from './components/DungeonTab.vue'
import SaveActions from './components/SaveActions.vue'
import { DnfHeroSave } from './core/types'
import { parseHeroSave, serializeHeroSave } from './core/saveParser'
import { SAMPLE_HERO_BASE64 } from './assets/sampleSave'

const savePath = ref<string>('/sdcard/Android/data/com.tencent.dnf/files')
const currentCharacter = ref<number>(0)
const activeTab = ref<'character' | 'inventory' | 'dungeon'>('character')

// 4个角色的存档数据缓存 (0 ~ 3)
const saves = ref<(DnfHeroSave | null)[]>([null, null, null, null])
const currentSave = ref<DnfHeroSave | null>(null)

const characterStatus = ref<Array<{ exists: boolean; desc?: string }>>([
  { exists: false, desc: '未载入' },
  { exists: false, desc: '未载入' },
  { exists: false, desc: '未载入' },
  { exists: false, desc: '未载入' },
])

const toastMessage = ref<string>('')
const toastType = ref<'success' | 'error'>('success')

function showToast(msg: string, type: 'success' | 'error' = 'success') {
  toastMessage.value = msg
  toastType.value = type
  setTimeout(() => {
    toastMessage.value = ''
  }, 3000)
}

function loadSampleSave() {
  try {
    const binaryString = window.atob(SAMPLE_HERO_BASE64)
    const len = binaryString.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    const save = parseHeroSave(bytes.buffer, currentCharacter.value)
    saves.value[currentCharacter.value] = save
    currentSave.value = save
    characterStatus.value[currentCharacter.value] = {
      exists: true,
      desc: `Lv.${save.level} ${save.professionName}`
    }
    showToast(`成功载入角色 ${currentCharacter.value + 1} 参考存档 (Lv.${save.level})`)
  } catch (err: any) {
    showToast(`载入参考存档失败: ${err.message}`, 'error')
  }
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('sample') === 'true') {
    loadSampleSave()
    activeTab.value = 'inventory'
  }
})

function onSelectCharacter(index: number) {
  currentCharacter.value = index
  if (saves.value[index]) {
    currentSave.value = saves.value[index]
    showToast(`已切换至角色 ${index + 1}`)
  } else {
    // 检查 AndroidBridge 是否存在该角色文件
    if (window.AndroidBridge && window.AndroidBridge.checkFileExists) {
      const charPath = `${savePath.value}/DnfHero${index}`
      if (window.AndroidBridge.checkFileExists(charPath)) {
        const b64 = window.AndroidBridge.readSaveFile(charPath)
        const binaryString = window.atob(b64)
        const len = binaryString.length
        const bytes = new Uint8Array(len)
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i)
        }
        const save = parseHeroSave(bytes.buffer, index)
        saves.value[index] = save
        currentSave.value = save
        characterStatus.value[index] = { exists: true, desc: `Lv.${save.level} ${save.professionName}` }
        showToast(`已读取角色 ${index + 1} 存档`)
        return
      }
    }
    currentSave.value = null
    showToast(`角色 ${index + 1} 暂无存档数据，请先检测或导入`, 'error')
  }
}

function detectSaves() {
  if (window.AndroidBridge && window.AndroidBridge.scanSaves) {
    try {
      const resultJson = window.AndroidBridge.scanSaves(savePath.value)
      const res = JSON.parse(resultJson)
      // res: Array<{ index: number, exists: boolean, size: number }>
      let foundCount = 0
      for (let i = 0; i < 4; i++) {
        const item = res.find((r: any) => r.index === i)
        if (item && item.exists) {
          characterStatus.value[i] = { exists: true, desc: `${item.size} 字节` }
          foundCount++
        } else {
          characterStatus.value[i] = { exists: false }
        }
      }
      showToast(`检测完成，共发现 ${foundCount} 个角色存档`)
      onSelectCharacter(0)
      return
    } catch (e: any) {
      showToast(`检测存档路径出错: ${e.message}`, 'error')
    }
  }

  // 网页端检测模式 (模拟)
  showToast(`已检测路径: ${savePath.value} (网页模式下请使用浏览文件或参考存档)`)
}

function onFileSelected(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return
  const file = target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    const arrayBuffer = reader.result as ArrayBuffer
    try {
      const save = parseHeroSave(arrayBuffer, currentCharacter.value)
      saves.value[currentCharacter.value] = save
      currentSave.value = save
      characterStatus.value[currentCharacter.value] = {
        exists: true,
        desc: `Lv.${save.level} ${save.professionName}`
      }
      showToast(`成功读取 ${file.name} (Lv.${save.level} ${save.professionName})`)
    } catch (e: any) {
      showToast(`解析文件失败: ${e.message}`, 'error')
    }
  }
  reader.readAsArrayBuffer(file)
}

function onSave() {
  if (!currentSave.value) return
  try {
    const modifiedBytes = serializeHeroSave(currentSave.value)
    
    // 如果在 Android 原生环境
    if (window.AndroidBridge && window.AndroidBridge.writeSaveFile) {
      const fileName = `DnfHero${currentCharacter.value}`
      const targetPath = `${savePath.value}/${fileName}`
      
      // 转 Base64 传输给原生
      let binary = ''
      for (let i = 0; i < modifiedBytes.length; i++) {
        binary += String.fromCharCode(modifiedBytes[i])
      }
      const b64 = window.btoa(binary)
      
      const success = window.AndroidBridge.writeSaveFile(targetPath, b64)
      if (success) {
        showToast(`已成功保存至 ${targetPath} (原文件已备份为 .bak)`)
      } else {
        showToast('写入存档失败，请检查存储权限', 'error')
      }
      return
    }

    // 网页模式下：自动触发下载并提示
    triggerDownload(modifiedBytes, `DnfHero${currentCharacter.value}`)
    showToast(`存档修改已生效！已导出下载 DnfHero${currentCharacter.value}`)
  } catch (e: any) {
    showToast(`保存失败: ${e.message}`, 'error')
  }
}

function onExport() {
  if (!currentSave.value) return
  const modifiedBytes = serializeHeroSave(currentSave.value)
  triggerDownload(modifiedBytes, `DnfHero${currentCharacter.value}`)
  showToast(`已导出角色 ${currentCharacter.value + 1} 存档文件`)
}

function triggerDownload(bytes: Uint8Array, filename: string) {
  const blob = new Blob([bytes], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

onMounted(() => {
  // 默认自动尝试载入参考存档，方便初次打开即进入体验
  loadSampleSave()
})
</script>
