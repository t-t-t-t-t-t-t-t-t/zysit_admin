import router from '@/router'
import { useUserInfoStore } from "../stores/userInfo";
import { useIsGetRouterStore } from '@/stores/isGetRouter';
import { loginApi, addUserApi, getUserListApi, deleteUserApi, editUserApi } from '@/api/user';
import { ElMessage } from "element-plus";
import pina from '@/stores'
const userInfoStore = useUserInfoStore(pina);
const isGetRouterStore = useIsGetRouterStore(pina);
export function useUserHooks() {
    const logout = async () => {
        await userInfoStore.clearUserInfo();
        router.push('/login')
    }
    const login = async ({ userName, password }) => {
        try {
            const res = await loginApi({ userName, password });
            if (res.code === 0) {// 正确
                ElMessage({
                    message: res.msg,
                    type: "success"
                });
                // 重新获取路由
                isGetRouterStore.changeGetRouter(false)
                //设置token，设置信息
                await userInfoStore.setUserInfo(res.data);
                // 路由跳转
                router.push('/index');
            } else {
                ElMessage({
                    message: res.msg,
                    type: "error"
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    const addUser = async ({ userName, password, role }) => {
        try {
            const res = await addUserApi({ userName, password, role });
            ElMessage({
                message: res.msg,
                type: "success"
            });
        } catch (err) {
            console.log(err);
        }
    }
    const getUserList = async () => {
        try {
            const res = await getUserListApi();
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res
        } catch (err) {
            console.log(err)
        }
    }
    const deleteUser = async (_id) => {
        try {
            const res = await deleteUserApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res
        } catch (err) {
            console.log(err)
        }
    }
    const editUser = async ({ userName, password, role, _id }) => {
        try {
            const res = await editUserApi({ _id, userName, password, role });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res
        } catch (err) {
            console.log(err)
        }
    }
    return {
        logout,
        login,
        addUser,
        getUserList,
        deleteUser,
        editUser
    }
}