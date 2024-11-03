<template>
    <div>
        <el-aside style="transition: all .5s" :width="IsFoldSideMenuStore.IsFoldSideMenu ? '64px' : '200px'">
            <el-menu :router="true" :default-active="route.fullPath" style="transition: all .5s"
                :collapse="IsFoldSideMenuStore.IsFoldSideMenu" :collapse-transition="false">
                <el-menu-item style="transition: all .5s" index="/index">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>首页</span>
                </el-menu-item>
                <el-menu-item index="/center">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                    <span>个人中心</span>
                </el-menu-item>
                <el-sub-menu index="/user-manage">
                    <template #title>
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/user-manage/userAdd">添加用户</el-menu-item>
                    <el-menu-item index="/user-manage/userList">用户管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/home-manage">
                    <template #title>
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>首页管理</span>
                    </template>
                    <el-menu-item index="/home-manage/homeAdd">添加首页</el-menu-item>
                    <el-menu-item index="/home-manage/homeList">管理列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/about-manage">
                    <template #title>
                        <el-icon>
                            <Phone />
                        </el-icon>
                        <span>关于管理</span>
                    </template>
                    <el-menu-item index="/about-manage/aboutAdd">添加关于</el-menu-item>
                    <el-menu-item index="/about-manage/aboutList">关于列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/production-manage">
                    <template #title>
                        <el-icon>
                            <Van />
                        </el-icon>
                        <span>产品管理</span>
                    </template>
                    <el-menu-item index="/production-manage/productionAdd">添加产品</el-menu-item>
                    <el-menu-item index="/production-manage/productionList">产品列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/solution-manage">
                    <template #title>
                        <el-icon>
                            <FolderChecked />
                        </el-icon>
                        <span>解决方案管理</span>
                    </template>
                    <el-menu-item index="/solution-manage/solutionAdd">添加解决方案</el-menu-item>
                    <el-menu-item index="/solution-manage/solutionList">解决方案列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/cases-manage">
                    <template #title>
                        <el-icon>
                            <Coin />
                        </el-icon>
                        <span>应用案例管理</span>
                    </template>
                    <el-menu-item index="/cases-manage/casesAdd">添加应用案例</el-menu-item>
                    <el-menu-item index="/cases-manage/casesList">应用案例列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/news-manage">
                    <template #title>
                        <el-icon>
                            <Reading />
                        </el-icon>
                        <span>新闻管理</span>
                    </template>
                    <el-menu-item index="/news-manage/newsAdd">添加新闻</el-menu-item>
                    <el-menu-item index="/news-manage/newsList">新闻列表</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script setup lang="js">
import { Avatar, House, Coin, FolderChecked, Phone, HomeFilled, UserFilled, Reading, Van } from '@element-plus/icons-vue';
import { useIsFoldSideMenuStore } from '@/stores/isFoldSideMenu';
import { useRoute } from 'vue-router';
const route = useRoute();
const IsFoldSideMenuStore = useIsFoldSideMenuStore();

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