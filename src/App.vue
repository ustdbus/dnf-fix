<template>
  <div class="min-h-screen bg-[#0b0d13] text-gray-100 flex flex-col justify-between pb-24">
    <div>
      <!-- 顶部状态栏与角色选择 -->
      <HeaderBar
        :save-path="savePath"
        :current-character="currentCharacter"
        :character-status="characterStatus"
        :is-default-saved="isDefaultSaved"
        @update:save-path="savePath = $event"
        @detect-path="detectSaves"
        @select-character="onSelectCharacter"
        @reload-current="reloadCurrentSave"
        @file-selected="onFileSelected"
        @folder-selected="onFolderSelected"
        @clear-path="onClearPath"
        @save-default-path="onSaveDefaultPath"
      />

      <!-- 主工作区 -->
      <main class="max-w-4xl mx-auto p-3 sm:p-4 space-y-4">
        <!-- 未加载存档时的提示 -->
        <div v-if="!currentSave" class="bg-[#141724] border border-amber-800/40 rounded-2xl p-8 text-center space-y-4 my-6 shadow-xl">
          <div class="text-4xl">⚔️</div>
          <h2 class="text-lg font-bold text-amber-300">尚未加载角色存档</h2>
          <p class="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
            请在上方输入本地或手机中存档目录路径并点击【检测存档】，或者点击下方【选择存档文件夹】/【打开存档文件】进行修改。
          </p>
          <div class="flex justify-center gap-3 pt-2 flex-wrap">
            <label class="cursor-pointer px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-xs rounded-lg shadow-lg shadow-amber-600/30 transition flex items-center gap-1.5">
              <span>📂 选择存档文件夹</span>
              <input type="file" webkitdirectory directory multiple class="hidden" @change="onFolderSelected" />
            </label>
            <label class="cursor-pointer px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
              <span>📄 选取存档文件</span>
              <input type="file" multiple class="hidden" @change="onFileSelected" />
            </label>
            <button
              @click="detectSaves"
              class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-amber-400 border border-amber-600/40 font-bold text-xs rounded-lg transition flex items-center gap-1.5"
            >
              <span>🔍 检测路径存档</span>
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
            <button
              @click="activeTab = 'quest'"
              :class="[
                'flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5',
                activeTab === 'quest'
                  ? 'bg-amber-600 text-black shadow-md shadow-amber-600/30'
                  : 'text-gray-400 hover:text-gray-200'
              ]"
            >
              <span>📜</span> 任务
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

          <!-- Tab 4: 任务 -->
          <QuestTab
            v-if="activeTab === 'quest'"
            :char-index="currentCharacter"
            :quest-save="currentSave.questSave"
            @update:quest-save="currentSave.questSave = $event"
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
import QuestTab from './components/QuestTab.vue'
import SaveActions from './components/SaveActions.vue'
import { DnfHeroSave } from './core/types'
import { parseHeroSave, serializeHeroSave } from './core/saveParser'
import { parseQuestSave, serializeQuestSave } from './core/questParser'
import { scanDirectory, readSaveFile, writeSaveFile } from './core/fsBridge'

const STORAGE_KEY_PATH = 'dnf_save_path'
const savePath = ref<string>('/sdcard/Android/data/com.tencent.dnf/files')
const isDefaultSaved = ref<boolean>(false)
const currentCharacter = ref<number>(0)
const activeTab = ref<'character' | 'inventory' | 'dungeon' | 'quest'>('character')

function initDefaultPath() {
  let saved = ''
  if (window.AndroidBridge && window.AndroidBridge.getSavedPath) {
    try {
      saved = window.AndroidBridge.getSavedPath() || ''
    } catch (e) {
      console.warn('获取原生持久化路径失败:', e)
    }
  }
  if (!saved) {
    saved = localStorage.getItem(STORAGE_KEY_PATH) || ''
  }
  if (saved && saved.trim()) {
    savePath.value = saved.trim()
    isDefaultSaved.value = true
    detectSaves()
  } else {
    savePath.value = '/sdcard/Android/data/com.tencent.dnf/files'
    isDefaultSaved.value = false
  }
}

onMounted(() => {
  initDefaultPath()

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // 用户从游戏切换回修改器时，自动从存储重新检查当前角色是否有更新
      loadCharacterSaveFromDisk(currentCharacter.value, true)
    }
  })
})

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

async function loadCharacterSaveFromDisk(index: number, silent: boolean = false): Promise<boolean> {
  const heroBytes = await readSaveFile(savePath.value, `DnfHero${index}`)
  if (heroBytes) {
    try {
      const save = parseHeroSave(heroBytes.buffer, index)

      // 同时尝试读取对应的 DnfQuest 任务存档
      const questBytes = await readSaveFile(savePath.value, `DnfQuest${index}`)
      if (questBytes) {
        try {
          save.questSave = parseQuestSave(questBytes.buffer, index)
        } catch (e) {
          console.warn(`解析角色 ${index + 1} 任务存档失败:`, e)
        }
      }

      saves.value[index] = save
      characterStatus.value[index] = { exists: true, desc: `Lv.${save.level} ${save.professionName}` }
      if (currentCharacter.value === index) {
        currentSave.value = save
      }
      if (!silent) {
        showToast(`已读取角色 ${index + 1} 最新存档 (Lv.${save.level} ${save.professionName})`)
      }
      return true
    } catch (e: any) {
      console.warn(`解析角色 ${index} 存档失败:`, e)
    }
  }
  return false
}

async function reloadCurrentSave() {
  const success = await loadCharacterSaveFromDisk(currentCharacter.value)
  if (!success) {
    showToast(`重新读取失败：未找到 DnfHero${currentCharacter.value} 或路径不可达`, 'error')
  }
}

async function onSelectCharacter(index: number) {
  currentCharacter.value = index
  // 1. 优先尝试从存储路径重新读取最新数据
  const readSuccess = await loadCharacterSaveFromDisk(index)
  if (readSuccess) {
    return
  }

  // 2. 若路径未直接找到或当前为手动导入模式，检查是否有本地缓存
  if (saves.value[index]) {
    currentSave.value = saves.value[index]
    showToast(`已切换至角色 ${index + 1}`)
    return
  }

  currentSave.value = null
  showToast(`角色 ${index + 1} 暂无存档数据，请先检测或导入`, 'error')
}

function onSaveDefaultPath(newPath: string) {
  const trimmed = newPath ? newPath.trim() : ''
  if (!trimmed) return
  savePath.value = trimmed
  if (window.AndroidBridge && window.AndroidBridge.saveDefaultPath) {
    try {
      window.AndroidBridge.saveDefaultPath(trimmed)
    } catch (e) {
      console.warn('原生保存默认路径失败:', e)
    }
  }
  localStorage.setItem(STORAGE_KEY_PATH, trimmed)
  isDefaultSaved.value = true
  showToast('已保存为默认路径')
}

function onClearPath() {
  if (window.AndroidBridge && window.AndroidBridge.clearDefaultPath) {
    try {
      window.AndroidBridge.clearDefaultPath()
    } catch (e) {
      console.warn('原生清除默认路径失败:', e)
    }
  }
  localStorage.removeItem(STORAGE_KEY_PATH)
  savePath.value = ''
  isDefaultSaved.value = false
  saves.value = [null, null, null, null]
  currentSave.value = null
  characterStatus.value = [
    { exists: false, desc: '未载入' },
    { exists: false, desc: '未载入' },
    { exists: false, desc: '未载入' },
    { exists: false, desc: '未载入' }
  ]
  showToast('已删除默认路径并清空输入')
}

async function detectSaves() {
  const trimmed = savePath.value ? savePath.value.trim() : ''
  if (trimmed) {
    if (window.AndroidBridge && window.AndroidBridge.saveDefaultPath) {
      try {
        window.AndroidBridge.saveDefaultPath(trimmed)
      } catch (e) {
        console.warn('原生保存默认路径失败:', e)
      }
    }
    localStorage.setItem(STORAGE_KEY_PATH, trimmed)
    isDefaultSaved.value = true
  }

  if (!trimmed) {
    showToast('请输入有效的存档目录路径', 'error')
    return
  }

  // 重新检测时清空旧缓存，先标记检测中
  saves.value = [null, null, null, null]
  for (let i = 0; i < 4; i++) {
    characterStatus.value[i] = { exists: false, desc: '检测中...' }
  }

  const scanRes = await scanDirectory(trimmed)
  if (!scanRes.success) {
    for (let i = 0; i < 4; i++) {
      characterStatus.value[i] = { exists: false, desc: '未发现' }
    }
    showToast(`检测存档失败: ${scanRes.error || '无法访问该目录'}`, 'error')
    return
  }

  let foundCount = 0
  for (const hero of scanRes.heroes) {
    if (hero.exists) {
      foundCount++
      const heroBytes = await readSaveFile(trimmed, `DnfHero${hero.index}`)
      if (heroBytes) {
        try {
          const save = parseHeroSave(heroBytes.buffer, hero.index)
          const qBytes = await readSaveFile(trimmed, `DnfQuest${hero.index}`)
          if (qBytes) {
            try {
              save.questSave = parseQuestSave(qBytes.buffer, hero.index)
            } catch (e) {
              console.warn(`解析角色 ${hero.index + 1} 任务存档失败:`, e)
            }
          }
          saves.value[hero.index] = save
          characterStatus.value[hero.index] = {
            exists: true,
            desc: `Lv.${save.level} ${save.professionName}`
          }
        } catch (e) {
          characterStatus.value[hero.index] = { exists: true, desc: `${hero.size} 字节` }
        }
      } else {
        characterStatus.value[hero.index] = { exists: true, desc: `${hero.size} 字节` }
      }
    } else {
      characterStatus.value[hero.index] = { exists: false, desc: '未发现' }
    }
  }

  showToast(`检测完成，共发现 ${foundCount} 个角色存档`)

  // 自动载入当前角色，若当前角色不存在则载入第一个存在的角色
  if (saves.value[currentCharacter.value]) {
    currentSave.value = saves.value[currentCharacter.value]
  } else {
    const firstExisting = scanRes.heroes.find(h => h.exists)
    if (firstExisting && saves.value[firstExisting.index]) {
      currentCharacter.value = firstExisting.index
      currentSave.value = saves.value[firstExisting.index]
    } else {
      currentSave.value = null
    }
  }
}

async function onFolderSelected(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return

  const fileList = Array.from(target.files)
  const relPath = fileList[0].webkitRelativePath
  if (relPath) {
    const folderName = relPath.split('/')[0]
    if (folderName && (!savePath.value || savePath.value.includes('Android'))) {
      savePath.value = folderName
    }
  }

  const heroFiles: { [index: number]: File } = {}
  const questFiles: { [index: number]: File } = {}

  for (const f of fileList) {
    const matchHero = f.name.match(/DnfHero(\d)/i)
    if (matchHero) {
      const idx = parseInt(matchHero[1], 10)
      if (idx >= 0 && idx < 4) heroFiles[idx] = f
    }
    const matchQuest = f.name.match(/DnfQuest(\d)/i)
    if (matchQuest) {
      const idx = parseInt(matchQuest[1], 10)
      if (idx >= 0 && idx < 4) questFiles[idx] = f
    }
  }

  let loadedCount = 0
  for (let i = 0; i < 4; i++) {
    if (heroFiles[i]) {
      try {
        const ab = await heroFiles[i].arrayBuffer()
        const save = parseHeroSave(ab, i)
        if (questFiles[i]) {
          try {
            const qab = await questFiles[i].arrayBuffer()
            save.questSave = parseQuestSave(qab, i)
          } catch (e) {
            console.warn(`读取任务文件失败:`, e)
          }
        }
        saves.value[i] = save
        characterStatus.value[i] = { exists: true, desc: `Lv.${save.level} ${save.professionName}` }
        loadedCount++
      } catch (e) {
        console.warn(`解析角色 ${i} 失败:`, e)
      }
    } else {
      saves.value[i] = null
      characterStatus.value[i] = { exists: false, desc: '未发现' }
    }
  }

  if (loadedCount > 0) {
    showToast(`成功从文件夹载入 ${loadedCount} 个角色存档`)
    if (saves.value[currentCharacter.value]) {
      currentSave.value = saves.value[currentCharacter.value]
    } else {
      const firstKey = Object.keys(heroFiles)[0]
      if (firstKey !== undefined) {
        const firstIdx = parseInt(firstKey, 10)
        currentCharacter.value = firstIdx
        currentSave.value = saves.value[firstIdx]
      }
    }
  } else {
    showToast('未在选中的文件夹中发现 DnfHero 存档文件', 'error')
  }
  target.value = ''
}

function onFileSelected(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return
  
  const fileList = Array.from(target.files)
  
  // 查找是否有 DnfHero 角色文件和 DnfQuest 任务文件
  const heroFile = fileList.find(f => f.name.includes('Hero')) || fileList[0]
  const questFile = fileList.find(f => f.name.includes('Quest'))

  // 如果上传的是 DnfQuest 文件且当前已有主角存档，直接绑定任务存档
  if (heroFile.name.includes('Quest') && currentSave.value) {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const ab = reader.result as ArrayBuffer
        const qSave = parseQuestSave(ab, currentCharacter.value)
        currentSave.value!.questSave = qSave
        showToast(`成功载入任务存档 ${heroFile.name}`)
      } catch (e: any) {
        showToast(`解析任务文件失败: ${e.message}`, 'error')
      } finally {
        target.value = ''
      }
    }
    reader.readAsArrayBuffer(heroFile)
    return
  }

  // 正常解析角色存档
  const reader = new FileReader()
  reader.onload = () => {
    const arrayBuffer = reader.result as ArrayBuffer
    try {
      const save = parseHeroSave(arrayBuffer, currentCharacter.value)
      
      // 如果同时选了 DnfQuest 文件，一起解析绑定
      if (questFile) {
        const qReader = new FileReader()
        qReader.onload = () => {
          try {
            const qab = qReader.result as ArrayBuffer
            save.questSave = parseQuestSave(qab, currentCharacter.value)
          } catch (e) {
            console.warn('解析任务文件失败:', e)
          }
        }
        qReader.readAsArrayBuffer(questFile)
      }

      saves.value[currentCharacter.value] = save
      currentSave.value = save
      characterStatus.value[currentCharacter.value] = {
        exists: true,
        desc: `Lv.${save.level} ${save.professionName}`
      }
      showToast(`成功读取 ${heroFile.name} (Lv.${save.level} ${save.professionName})`)
    } catch (e: any) {
      showToast(`解析文件失败: ${e.message}`, 'error')
    } finally {
      target.value = ''
    }
  }
  reader.readAsArrayBuffer(heroFile)
}

async function onSave() {
  if (!currentSave.value) return
  try {
    const modifiedBytes = serializeHeroSave(currentSave.value)
    const fileName = `DnfHero${currentCharacter.value}`
    const qFileName = `DnfQuest${currentCharacter.value}`
    const qBytes = currentSave.value.questSave ? serializeQuestSave(currentSave.value.questSave) : null

    // 优先尝试写回到存储（Android 原生桥接或 Vite 本地开发文件系统）
    const writeHeroRes = await writeSaveFile(savePath.value, fileName, modifiedBytes)
    let writeQuestRes: { success: boolean; message?: string } = { success: true, message: '' }
    if (qBytes) {
      writeQuestRes = await writeSaveFile(savePath.value, qFileName, qBytes)
    }

    if (writeHeroRes.success && writeQuestRes.success) {
      showToast(`已成功保存至 ${savePath.value} (原文件已备份为 .bak)`)
      return
    }

    // 网页模式无后端时：降级为自动触发浏览器下载
    triggerDownload(modifiedBytes, fileName)
    if (qBytes) {
      triggerDownload(qBytes, qFileName)
      showToast(`存档修改已生效！已导出下载 ${fileName} 与 ${qFileName}`)
    } else {
      showToast(`存档修改已生效！已导出下载 ${fileName}`)
    }
  } catch (e: any) {
    showToast(`保存失败: ${e.message}`, 'error')
  }
}

function onExport() {
  if (!currentSave.value) return
  const modifiedBytes = serializeHeroSave(currentSave.value)
  triggerDownload(modifiedBytes, `DnfHero${currentCharacter.value}`)
  if (currentSave.value.questSave) {
    const qBytes = serializeQuestSave(currentSave.value.questSave)
    triggerDownload(qBytes, `DnfQuest${currentCharacter.value}`)
    showToast(`已导出角色 ${currentCharacter.value + 1} 的属性与任务存档`)
  } else {
    showToast(`已导出角色 ${currentCharacter.value + 1} 存档文件`)
  }
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
</script>
