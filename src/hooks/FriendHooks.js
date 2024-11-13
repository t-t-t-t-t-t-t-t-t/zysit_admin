import { addFriendApi, putFriendApi, deleteFriendApi, getFriendListApi } from "@/api/friend"
import { ElMessage } from "element-plus";
export function useFriendHooks() {
    const getFriendList = async (_id = "") => {
        try {
            const res = await getFriendListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addFriend = async ({ title, image }) => {
        try {
            const res = await addFriendApi({ title, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putFriend = async ({ _id, title, image }) => {
        try {
            const res = await putFriendApi({ _id, title, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteFriend = async (_id) => {
        try {
            const res = await deleteFriendApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getFriendList,
        addFriend,
        putFriend,
        deleteFriend
    }
}