<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="编辑产品类别" width="500" @close=" emit('closeBox')">
        <el-form :model="formData" ref="formRed" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                确认编辑
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useProductCategoryHooks } from '@/hooks/ProductCategoryHooks';
import { ref, reactive } from 'vue';

const emit = defineEmits(['editProductCategory', 'closeBox'])
const { isShowDialog, formData } = defineProps(['isShowDialog', 'formData'])
const formRed = ref()

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

const submitForm = () => {
    formRed.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useProductCategoryHooks().putProductCategory(formData).then(res => {
                emit('editProductCategory', { _id: formData._id, title: formData.title })
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