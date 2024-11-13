<template>
    <el-upload class="avatar-uploader" :show-file-list="false" :auto-upload="false" :on-change="handleUploadFileChange">
        <el-image class="avatar" v-if="image" style=" height: 178px;" :src="image" fit="contain" />
        <el-icon v-else class="avatar-uploader-icon">
            <Plus />
        </el-icon>
    </el-upload>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { useUploadFileHooks } from '@/hooks/UploadFileHooks';
const { image } = defineProps(['image'])
const emit = defineEmits(['uploadImage'])
const handleUploadFileChange = (file) => {
    useUploadFileHooks().uploadImage(file.raw).then(res => {
        emit('uploadImage', res.image)
    })
}

</script>

<style lang="scss" scoped>
.avatar-uploader {
    width: 178px;
    height: 178px;
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    box-sizing: border-box;

    &:hover {
        border-color: var(--el-color-primary);
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    & .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
}
</style>
