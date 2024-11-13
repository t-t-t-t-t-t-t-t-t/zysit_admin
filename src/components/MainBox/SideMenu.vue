<template>
    <div>
        <el-aside style="transition: all .5s" :width="IsFoldSideMenuStore.IsFoldSideMenu ? '64px' : '200px'">
            <el-menu :router="true" :default-active="route.fullPath" style="transition: all .5s"
                :collapse="IsFoldSideMenuStore.IsFoldSideMenu" :collapse-transition="false">
                <el-menu-item index="/index">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>首页</span>
                </el-menu-item>
                <el-sub-menu index="/user-manage" v-admin>
                    <template #title>
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/user-manage/userAdd">添加用户</el-menu-item>
                    <el-menu-item index="/user-manage/userList">用户管理</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/banner-manage/bannerList">
                    <el-icon>
                        <Picture />
                    </el-icon>
                    <span>Banner管理</span>
                </el-menu-item>

                <el-sub-menu index="/about-manage">
                    <template #title>
                        <el-icon>
                            <Phone />
                        </el-icon>
                        <span>关于管理</span>
                    </template>
                    <el-menu-item index="/about-manage/friendList">合作伙伴</el-menu-item>
                    <el-menu-item index="/about-manage/honerList">荣誉资质</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/production-manage">
                    <template #title>
                        <el-icon>
                            <Van />
                        </el-icon>
                        <span>关于产品</span>
                    </template>
                    <el-menu-item index="/production-manage/productCategoryList">产品类别列表</el-menu-item>
                    <el-menu-item index="/production-manage/productionList">产品列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/solution-manage">
                    <template #title>
                        <el-icon>
                            <FolderChecked />
                        </el-icon>
                        <span>解决方案管理</span>
                    </template>
                    <el-menu-item index="/solution-manage/solutionCategory">解决方案类别</el-menu-item>
                    <el-menu-item index="/solution-manage/solutionList">解决方案列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/cases-manage">
                    <template #title>
                        <el-icon>
                            <Coin />
                        </el-icon>
                        <span>应用案例管理</span>
                    </template>
                    <el-menu-item index="/cases-manage/casesCategoryList">应用案例类别列表</el-menu-item>
                    <el-menu-item index="/cases-manage/casesList">应用案例列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/news-manage">
                    <template #title>
                        <el-icon>
                            <Reading />
                        </el-icon>
                        <span>新闻管理</span>
                    </template>
                    <el-menu-item index="/news-manage/newsList">新闻列表</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script setup lang="js">
import { Picture, Coin, FolderChecked, Phone, HomeFilled, UserFilled, Reading, Van } from '@element-plus/icons-vue';
import { useIsFoldSideMenuStore } from '@/stores/isFoldSideMenu';
import { useRoute } from 'vue-router';
import { useUserInfoStore } from '@/stores/userInfo';
const userInfoStore = useUserInfoStore();
const route = useRoute();
const IsFoldSideMenuStore = useIsFoldSideMenuStore();
const vAdmin = {// 自定义指令,admin权限才显示的组件//判断是否显示用户管理的部分,
    mounted(el) {
        if (userInfoStore.role !== 0) {// 不是管理员,删除这个组件
            el.parentNode.removeChild(el);// 移除自己
        }
    }
}
</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;

    .el-menu {
        height: 100vh;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #1275e5;
        border-radius: 5px;
    }
}
</style>