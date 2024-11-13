const Index = () => import("@/views/Index/Index.vue")
const HonerList = () => import("@/views/About-manage/HonerList.vue")
const FriendList = () => import("@/views/About-manage/FriendList.vue")
const CasesCategoryList = () => import("@/views/Cases-manage/CasesCategoryList.vue")
const CasesList = () => import("@/views/Cases-manage/CasesList.vue")
const CasesAdd = () => import("@/views/Cases-manage/CasesAdd.vue")
const CasesEdit = () => import("@/views/Cases-manage/CasesEdit.vue")
const BannerList = () => import("@/views/Banner-manage/BannerList.vue")
const NewsList = () => import("@/views/News-manage/NewsList.vue")
const ProductionList = () => import("@/views/Production-manage/ProductionList.vue")
const ProductCategoryList = () => import("@/views/Production-manage/ProductCategory.vue")

const SolutionCategoryList = () => import("@/views/Solution-manage/SolutionCategory.vue")
const SolutionList = () => import("@/views/Solution-manage/SolutionList.vue")
const UserAdd = () => import("@/views/User-manage/UserAdd.vue")
const UserList = () => import("@/views/User-manage/UserList.vue")
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
        path: "/user-manage/userAdd",
        component: UserAdd,
        meta: {
            title: '编辑用户'
        },
        requireAdmin: true,
    },
    {
        path: "/user-manage/userList",
        component: UserList,
        meta: {
            title: '用户列表'
        },
        requireAdmin: true,
    },
    {
        path: "/banner-manage/bannerList",
        component: BannerList,
        meta: {
            title: 'Banner列表'
        }
    },
    {
        path: "/about-manage/friendList",
        component: FriendList,
        meta: {
            title: '合作伙伴'
        }
    },
    {
        path: "/about-manage/honerList",
        component: HonerList,
        meta: {
            title: '荣誉资质'
        }
    },
    {
        path: "/production-manage/productionList",
        component: ProductionList,
        meta: {
            title: '产品列表'
        }
    },
    {
        path: "/production-manage/productCategoryList",
        component: ProductCategoryList,
        meta: {
            title: '产品类别列表'
        }
    },

    {
        path: "/solution-manage/solutionCategory",
        component: SolutionCategoryList,
        meta: {
            title: '解决方案类别'
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
        path: "/cases-manage/casesCategoryList",
        component: CasesCategoryList,
        meta: {
            title: '应用案例类别'
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
        path: "/cases-manage/casesAdd",
        component: CasesAdd,
        meta: {
            title: '添加应用案例'
        }
    },
    {
        path: "/cases-manage/casesEdit",
        component: CasesEdit,
        meta: {
            title: '编辑应用案例'
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