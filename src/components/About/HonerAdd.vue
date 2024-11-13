<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="添加荣誉" width="500" @close=" emit('closeBox')">
        <el-form :model="formData" ref="formRed" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-form-item label="图片" prop="image">
                <UploadImage :image="formData.image" @uploadImage="handleUploadImage"></UploadImage>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                添加荣誉
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useHonerHooks } from '@/hooks/HonerHooks';
import UploadImage from '../UploadImage/UploadImage.vue';
import { ref, reactive } from 'vue';

const emit = defineEmits(['addHoner', 'closeBox'])
const { isShowDialog } = defineProps(['isShowDialog'])

const formRed = ref()
const formData = reactive({
    title: "",
    image: "",
})

const fromRules = reactive({//表单校验
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    image: [{
        required: true, message: "请上传图片",
        trigger: 'blur'
    }]
})

const handleUploadImage = (image) => {
    formData.image = image
}
const submitForm = () => {
    formRed.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useHonerHooks().addHoner(formData).then(res => {
                emit('addHoner', { _id: res._id, title: res.title, image: res.image })
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