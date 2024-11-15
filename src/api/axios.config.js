import axios from "axios"
import { useUserInfoStore } from "../stores/userInfo";
import { useUserHooks } from "@/hooks/UserHooks";
import pinia from "@/stores";
import { ElMessage } from "element-plus";

export const baseUrl = import.meta.env.MODE === 'development' ? "http://localhost:3000/" : "http://112.74.15.57:3000/"; //用代理切换BaseUrl
export const apiPrefix = "/adminApi";//api 前缀

// 获取用户信息存储库，用于设置axios每次请求带上token请求头
const userInfoStore = useUserInfoStore(pinia);
const userHooks = useUserHooks()
axios.baseURL = baseUrl
axios.timeout = 10000
// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        config.headers.authorization = userInfoStore.token; // 添加 token 头部，
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器(拦截每次请求响应之后)
axios.interceptors.response.use(
    response => {
        // 在响应返回之后可以做一些操作
        // 设置新的token
        const authorization = response.headers.authorization
        if (authorization) {
            userInfoStore.setUserInfo({
                token: authorization,
                _id: userInfoStore._id,
                userName: userInfoStore.userName,
                role: userInfoStore.role,
            })
        }
        return response.data;// 只要data
    },
    error => {
        // 退出登录操作
        // 在请求失败时进行处理
        console.log(error)
        if (error.response && error.response.status === 401) { // 如果请求失败的状态码是401说明token失效了，需要打回登录界面重新登录
            ElMessage({
                message: error.response.data.msg,
                type: "error"
            });
            userHooks.logout();// 登出
        }
        else if (error.response && error.response.status === 500) { // 如果请求失败的状态码是500，访问错误
            ElMessage({
                message: error.message,
                type: "error"
            });
        }
        return Promise.reject(error);
    }
);

