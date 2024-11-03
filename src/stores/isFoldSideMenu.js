import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useIsFoldSideMenuStore = defineStore('isFoldSideMenuStore', () => {
    /**
     * 侧边导航是否折叠
     */
    const IsFoldSideMenu = ref(false)
    const changeIsFoldSideMenu = (status) => {
        IsFoldSideMenu.value = status
    }
    return { IsFoldSideMenu, changeIsFoldSideMenu }
})
