<template>
    <el-card>
        <el-form :model="formData" ref="formRef" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="用户名" prop="userName">
                <el-input style="width:280px;" v-model="formData.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input style="width:280px;" v-model="formData.password" />
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-select v-model="formData.role" placeholder="选择角色">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                添加角色
            </el-button>
        </el-form>
    </el-card>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useUserHooks } from '@/hooks/UserHooks';
const userHooks = useUserHooks()
const formRef = ref()
const formData = reactive({
    userName: '',
    password: "",
    role: null,
})
const fromRules = reactive({//表单校验
    userName: [{
        required: true, message: "请输入用户名",
        trigger: "blur"// 出发校验的条件
    }],
    password: [{
        required: true, message: "请输入密码",
        trigger: "blur"// 出发校验的条件
    }],
    role: [{
        required: true, message: "请选择角色",
        trigger: 'blur'
    }]
})
const options = [
    {
        value: 0,
        label: "管理员"
    },
    {
        value: 1,
        label: "编辑者"
    }
]
const submitForm = () => {
    formRef.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            userHooks.addUser(formData).then(res => {
                if (!formRef.value) return
                formRef.value.resetFields()
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style lang="scss" scoped></style>