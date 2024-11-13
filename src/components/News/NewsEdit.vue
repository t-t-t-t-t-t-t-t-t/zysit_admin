<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="编辑新闻" width="500" @close=" emit('closeBox')">
        <el-form :model="formData" ref="formRed" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-form-item label="路径" prop="url">
                <el-input style="width:280px;" v-model="formData.url" />
            </el-form-item>
            <el-form-item label="图片" prop="image">
                <UploadImage :image="formData.image" @upload-image="(image) => { formData.image = image }">
                </UploadImage>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                确认编辑
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useNewsHooks } from '@/hooks/NewsHooks';
import { ref, reactive } from 'vue';
import UploadImage from '../UploadImage/UploadImage.vue';
const emit = defineEmits(['editNews', 'closeBox'])
const { isShowDialog, formData } = defineProps(['isShowDialog', 'formData'])
console.log(formData)
const formRed = ref()

const fromRules = reactive({//表单校验
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    image: [{
        required: true, message: "请选择图片",
        trigger: "blur"// 出发校验的条件
    }],
    url: [{
        required: true, message: "请输入路径",
        trigger: "blur"// 出发校验的条件
    }],
})


const submitForm = () => {
    formRed.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useNewsHooks().putNews(formData).then(res => {
                emit('editNews', { _id: formData._id, title: formData.title, url: formData.url, image: formData.image })
                emit('closeBox')
                if (!formRed.value) return
                formRed.value.resetFields()
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style lang="scss" scoped></style>