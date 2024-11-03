<template>
    <div>
        <vue-particles id="tsparticles" :options="options" />
        <div class="container">
            <el-form ref="loginFormRef" style="max-width: 600px" :model="loginForm" status-icon :rules="loginRules"
                label-width="auto" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input style="width:280px;" v-model="loginForm.userName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input style="width:280px;" v-model="loginForm.passWord" type="password" show-password
                        autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(loginFormRef)">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="js">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../../api/login.js'
const router = useRouter()
const loginForm = reactive({
    userName: "",
    passWord: ""
})
const loginFormRef = ref()  // 表单的引用对象
const loginRules = reactive({//表单校验
    userName: [{
        required: true, message: "请输入用户名",
        trigger: "blur"// 出发校验的条件
    }],
    passWord: [{
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
            console.log(loginForm)
            // 提交到后台
            login();
            //设置token
            localStorage.setItem("token", 'zysit')

            // 路由跳转
            router.push('/index')
        }
    })


}
const options = {

    background: {
        color: {
            value: '#468bda'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#468bda'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 },
        }
    },
    detectRetina: true
}
</script>

<style scoped lang="scss">
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

::v-deep .el-form-item__label {
    color: #fff;
}
</style>