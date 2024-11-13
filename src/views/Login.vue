<template>
    <div class="login">
        <div class="container">
            <el-form ref="loginFormRef" style="max-width: 600px" :model="loginForm" status-icon :rules="loginRules"
                label-width="auto" class="ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input style="width:280px;" v-model="loginForm.userName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input style="width:280px;" v-model="loginForm.password" type="password" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-button type="primary" @click="submitForm(loginFormRef)">
                    登录
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="js">

import { reactive, ref } from 'vue';
import { useUserHooks } from '@/hooks/UserHooks';
const userHooks = useUserHooks();

const loginForm = reactive({
    userName: "",
    password: ""
})
const loginFormRef = ref()  // 表单的引用对象
const loginRules = reactive({//表单校验
    userName: [{
        required: true, message: "请输入用户名",
        trigger: "blur"// 出发校验的条件
    }],
    password: [{
        required: true, message: "请输入密码",
        trigger: "blur"// 出发校验的条件
    }],
})
// 提交表单函数
const submitForm = () => {
    // 校验表单
    // 手动触发校验
    // 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
    loginFormRef.value.validate().then(valid => {
        if (valid) {
            // 提交到后台
            userHooks.login(loginForm)
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style scoped lang="scss">
.login {
    height: 100vh;
    width: 100vw;
    background-color: lightblue;

    .container {
        height: 300px;
        width: 700px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // background-color: #468bda;
        background-color: hsla(0, 0%, 0%, 0.296);

        background {
            filter: blur(8px);
        }

        border-radius: 10px;
        padding:80px 80px 0;
        box-sizing: border-box;
        display:flex;
        justify-content: center;
    }
}


:deep(.el-form-item__label) {
    color: #fff;
}
</style>