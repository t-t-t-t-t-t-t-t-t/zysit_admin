import { addNewsApi, putNewsApi, deleteNewsApi, getNewsListApi } from "@/api/news"
import { ElMessage } from "element-plus";
export function useNewsHooks() {
    const getNewsList = async (_id = "") => {
        try {
            const res = await getNewsListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addNews = async ({ title, image, url }) => {
        try {
            const res = await addNewsApi({ title, image, url });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putNews = async ({ _id, title, image, url }) => {
        try {
            const res = await putNewsApi({ _id, title, image, url });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteNews = async (_id) => {
        try {
            const res = await deleteNewsApi(_id);
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
        getNewsList,
        addNews,
        putNews,
        deleteNews
    }
}