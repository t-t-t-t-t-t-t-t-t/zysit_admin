<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="添加应用案例类别" width="500" @close=" emit('closeBox')">
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
                确认添加
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useNewsHooks } from '@/hooks/NewsHooks';
import { ref, reactive } from 'vue';
import UploadImage from '../UploadImage/UploadImage.vue';
const emit = defineEmits(['addNews', 'closeBox'])
const { isShowDialog } = defineProps(['isShowDialog'])

const formRed = ref()
const formData = reactive({
    title: "",
    image: "",
    url: ""
})

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
            useNewsHooks().addNews(formData).then(res => {
                emit('addNews', { _id: res._id, title: res.title })
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