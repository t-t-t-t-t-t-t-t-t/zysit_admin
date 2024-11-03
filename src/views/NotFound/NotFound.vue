<template>
    <div>
        <el-empty description="404 迷路了">
            <el-button :icon="Warning" size="large" @click="backToHome" plain type="warning">
                返回首页
            </el-button>
        </el-empty>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Warning } from '@element-plus/icons-vue'
const router = useRouter();
const backToHome = () => {
    router.push('/')
}
</script>

<style lang="scss" scoped></style>