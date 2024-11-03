import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useIsGetRouterStore = defineStore('isGetRouter', () => {
  /**
   * 是否获取到路由
   */
  const isGetRouter = ref(false)
  const changeGetRouter = (status) => {
    isGetRouter.value = status
  }
  return { isGetRouter, changeGetRouter }
})
