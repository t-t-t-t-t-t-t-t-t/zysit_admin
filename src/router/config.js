import Index from "@/views/Index/Index.vue"
import Center from "@/views/Center/Center.vue"
import AboutAdd from "@/views/About-manage/AboutAdd.vue"
import AboutList from "@/views/About-manage/AboutList.vue"
import CasesAdd from "@/views/Cases-manage/CasesAdd.vue"
import CasesList from "@/views/Cases-manage/CasesList.vue"
import HomeAdd from "@/views/Home-manage/HomeAdd.vue"
import HomeList from "@/views/Home-manage/HomeList.vue"
import NewsAdd from "@/views/News-manage/NewsAdd.vue"
import NewsList from "@/views/News-manage/NewsList.vue"
import ProductionAdd from "@/views/Production-manage/ProductionAdd.vue"
import ProductionList from "@/views/Production-manage/ProductionList.vue"
import SolutionAdd from "@/views/Solution-manage/SolutionAdd.vue"
import SolutionList from "@/views/Solution-manage/SolutionList.vue"
import UserAdd from "@/views/User-manage/UserAdd.vue"
import UserList from "@/views/User-manage/UserList.vue"
const routes = [
    {
        path: '/',
        redirect: '/index',
        meta: {
            title: "首页"
        },
    },
    {
        path: '/index',
        component: Index,
        meta: {
            title: "首页"
        },
    },
    {
        path: '/center',
        component: Center,
        meta: {
            title: "个人中心"
        },
    },
    {
        path: "/user-manage/userAdd",
        component: UserAdd,
        meta: {
            title: '编辑用户'
        }
    },
    {
        path: "/user-manage/userList",
        component: UserList,
        meta: {
            title: '用户'
        }
    },
    {
        path: "/home-manage/homeAdd",
        component: HomeAdd,
        meta: {
            title: '编辑首页'
        }
    },
    {
        path: "/home-manage/homeList",
        component: HomeList,
        meta: {
            title: '首页'
        }
    },
    {
        path: "/about-manage/aboutAdd",
        component: AboutAdd,
        meta: {
            title: '编辑关于'
        }
    },
    {
        path: "/about-manage/aboutList",
        component: AboutList,
        meta: {
            title: '关于'
        }
    },
    {
        path: "/production-manage/productionAdd",
        component: ProductionAdd,
        meta: {
            title: '编辑产品'
        }
    },
    {
        path: "/production-manage/productionList",
        component: ProductionList,
        meta: {
            title: '产品'
        }
    },

    {
        path: "/solution-manage/solutionAdd",
        component: SolutionAdd,
        meta: {
            title: '编辑解决方案'
        }
    },
    {
        path: "/solution-manage/solutionList",
        component: SolutionList,
        meta: {
            title: '解决方案'
        }
    },
    {
        path: "/cases-manage/casesAdd",
        component: CasesAdd,
        meta: {
            title: '编辑应用案例'
        }
    },
    {
        path: "/cases-manage/casesList",
        component: CasesList,
        meta: {
            title: '应用案例'
        }
    },

    {
        path: "/news-manage/newsAdd",
        component: NewsAdd,
        meta: {
            title: '编辑新闻'
        }
    },
    {
        path: "/news-manage/newsList",
        component: NewsList,
        meta: {
            title: '新闻'
        }
    }
]
export default routes 