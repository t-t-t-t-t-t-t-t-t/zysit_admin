<template>
    <el-header>
        <div class="left">
            <el-icon @click="changeSideMenu" size="25">
                <Fold v-if="!IsFoldSideMenuStore.IsFoldSideMenu" />
                <Expand v-if="IsFoldSideMenuStore.IsFoldSideMenu" />
            </el-icon>
            <span>智源网络后台管理系统</span>
        </div>
        <div class="right">
            <span> {{ "欢迎回来 " + userInfoStore.userName }}</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon size="25">
                        <User />
                    </el-icon>
                    <el-icon class="el-icon--right">
                        <ArrowDown />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="() => { router.push('/center') }">个人中心</el-dropdown-item>
                        <el-dropdown-item @click=" userHooks.logout()">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup lang="js">
import { Fold, Expand, User, ArrowDown } from '@element-plus/icons-vue';
import { useIsFoldSideMenuStore } from '@/stores/isFoldSideMenu';
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/stores/userInfo';
import { useUserHooks } from '@/hooks/UserHooks';
const userHooks = useUserHooks()
const userInfoStore = useUserInfoStore();
const router = useRouter();
const IsFoldSideMenuStore = useIsFoldSideMenuStore();
const changeSideMenu = () => {
    IsFoldSideMenuStore.changeIsFoldSideMenu(!IsFoldSideMenuStore.IsFoldSideMenu)
}

</script>

<style lang="scss" scoped>
.el-header {
    $headerHeight: 60px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .left {
        line-height: $headerHeight;

        .el-icon {
            vertical-align: middle;
            margin-right: 10px;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                color: #1275e5;
            }
        }
    }

    .right {
        line-height: $headerHeight;
        display: flex;
        align-items: center;

        .el-dropdown {
            margin-left: 20px;

            .el-dropdown-link {
                .el-icon {
                    vertical-align: middle;

                    & .el-icon--right {
                        vertical-align: middle;
                    }

                    transition: all .2s;

                    &:hover {
                        color: #1275e5;
                    }
                }


            }
        }
    }
}
</style>