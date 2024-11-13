import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useIsMountedEditorStore = defineStore('isMountedEditor', () => {
    const isMountedEditor = ref(false)
    const changeIsMountedEditor = (status) => {
        isMountedEditor.value = status
    }
    return { isMountedEditor, changeIsMountedEditor }
})
