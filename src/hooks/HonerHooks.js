import { addHonerApi, putHonerApi, deleteHonerApi, getHonerListApi } from "@/api/honer"
import { ElMessage } from "element-plus";
export function useHonerHooks() {
    const getHonerList = async (_id = "") => {
        try {
            const res = await getHonerListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addHoner = async ({ title, image }) => {
        try {
            const res = await addHonerApi({ title, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putHoner = async ({ _id, title, image }) => {
        try {
            const res = await putHonerApi({ _id, title, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteHoner = async (_id) => {
        try {
            const res = await deleteHonerApi(_id);
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
        getHonerList,
        addHoner,
        putHoner,
        deleteHoner
    }
}