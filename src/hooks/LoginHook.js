import { useRouter } from "vue-router"
import { useUserInfoStore } from "../stores/userInfo";
const router = useRouter();
const userInfoStore = useUserInfoStore();
export const useLoginHooks = () => {
    const logout = () => {
        userInfoStore.clearUserInfo();
        router.push('/login')
    }

    return {
        logout
    }
}