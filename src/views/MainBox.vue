<template>
    <div>
        <el-container>
            <SideMenu></SideMenu>
            <el-container direction="vertical">
                <TopHeader></TopHeader>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="js">
import { RouterView } from 'vue-router';
import SideMenu from '@/components/MainBox/SideMenu.vue';
import TopHeader from '@/components/MainBox/TopHeader.vue';
</script>

<style scoped></style>