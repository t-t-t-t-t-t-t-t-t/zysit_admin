import { addCasesApi, putCasesApi, deleteCasesApi, getCasesListApi } from "@/api/cases"
import { ElMessage } from "element-plus";
export function useCasesHooks() {
    const getCasesList = async (_id = "") => {
        try {
            const res = await getCasesListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addCases = async ({ title, content, category, detail, image }) => {
        try {
            const res = await addCasesApi({ title, content, category, detail, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putCases = async ({ _id, title, content, category, detail, image }) => {
        try {
            const res = await putCasesApi({ _id, title, content, category, detail, image });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteCases = async (_id) => {
        try {
            const res = await deleteCasesApi(_id);
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
        getCasesList,
        addCases,
        putCases,
        deleteCases
    }
}