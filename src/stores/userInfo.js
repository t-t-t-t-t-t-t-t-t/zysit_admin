import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * 用于存储用户信息
 */
export const useUserInfoStore = defineStore("UserInfo", () => {
    // 用户token
    const token = ref('');
    // 用户id
    const _id = ref(0);
    // 用户名
    const userName = ref('');
    // 0管理员 1编辑者
    const role = ref(null);

    // 检查是否有之前登录的UserInfo存储
    const localStorageUserInfoStr = localStorage.getItem("UserInfo");
    if (localStorageUserInfoStr) {
        const localStorageUserInfo = JSON.parse(localStorageUserInfoStr);
        token.value = localStorageUserInfo.token;
        _id.value = localStorageUserInfo._id;
        userName.value = localStorageUserInfo.userName;
        role.value = localStorageUserInfo.role
    }

    // 设置用户信息(常用于登录)
    const setUserInfo = (userInfo) => {
        token.value = userInfo.token;
        _id.value = userInfo._id;
        userName.value = userInfo.userName;
        role.value = userInfo.role
        localStorage.setItem("UserInfo", JSON.stringify(userInfo));
    }

    // 清掉用户信息
    const clearUserInfo = () => {
        token.value = null;
        _id.value = null;
        userName.value = null;
        role.value = null
        localStorage.removeItem("UserInfo");
    }
    return {
        token,
        _id,
        userName,
        role,
        setUserInfo,
        clearUserInfo
    }
})