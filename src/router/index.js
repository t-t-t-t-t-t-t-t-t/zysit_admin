import { createRouter, createWebHistory } from 'vue-router'
import pina from '@/stores'
import { useIsGetRouterStore } from '@/stores/isGetRouter'
import Login from '@/views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import NotFound from "@/views/NotFound/NotFound.vue"
import routesConfig from './config'
import { useUserInfoStore } from '@/stores/userInfo'
const isgetRouterStore = useIsGetRouterStore(pina);
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "登录"
    },
    component: Login
  },
  {
    path: '/mainBox',
    name: 'mainBox',
    meta: {
      title: "首页"
    },
    component: MainBox,
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '404 not found'
    },
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
// 判断权限
const checkAdmin = (item) => {
  if (item.requireAdmin) {// 需要admin
    return useUserInfoStore().role === 0;//0 admin ;1 editor
  }
  return true
}
// 添加子路由
const ConfigRoutes = () => {
  router.addRoute({
    path: '/mainBox',
    name: 'mainBox',
    meta: {
      title: "首页"
    },
    component: MainBox,
  })
  routesConfig.forEach(item => {
    checkAdmin(item) && router.addRoute('mainBox', item)
  })
  // 已经得到路由
  isgetRouterStore.changeGetRouter(true)
}
//路由跳转前执行回调
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.name === 'login') {
    next();
  } else {
    //有权限,已经登录 next()
    if (localStorage.getItem("UserInfo")) {
      if (!isgetRouterStore.isGetRouter) {// 没有获取路由,//每次重新登录都要重新获取路由
        // 获取路由前把旧的路由删除,以防bug
        router.removeRoute("mainBox")
        ConfigRoutes();//在这里又重新增添
        next({
          path: to.fullPath
        })
      } else {
        next()
      }
    } else {// 没有权限,重定向到 login()
      next({
        path: '/login'
      })
    }
  }
})


export default router
