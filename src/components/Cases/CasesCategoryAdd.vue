<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="添加应用案例类别" width="500" @close=" emit('closeBox')">
        <el-form :model="formData" ref="formRed" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                确认添加
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useCasesCategoryHooks } from '@/hooks/CasesCategoryHooks';
import { ref, reactive } from 'vue';

const emit = defineEmits(['addCasesCategory', 'closeBox'])
const { isShowDialog } = defineProps(['isShowDialog'])

const formRed = ref()
const formData = reactive({
    title: "",
})

const fromRules = reactive({//表单校验
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
})

const submitForm = () => {
    formRed.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useCasesCategoryHooks().addCasesCategory(formData).then(res => {
                emit('addCasesCategory', { _id: res._id, title: res.title })
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