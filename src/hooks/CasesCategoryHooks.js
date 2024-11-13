import { addCasesCategoryApi, putCasesCategoryApi, deleteCasesCategoryApi, getCasesCategoryListApi } from "@/api/casesCategory"
import { ElMessage } from "element-plus";
export function useCasesCategoryHooks() {
    const getCasesCategoryList = async (_id = "") => {
        try {
            const res = await getCasesCategoryListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addCasesCategory = async ({ title }) => {
        try {
            const res = await addCasesCategoryApi({ title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putCasesCategory = async ({ _id, title }) => {
        try {
            const res = await putCasesCategoryApi({ _id, title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteCasesCategory = async (_id) => {
        try {
            const res = await deleteCasesCategoryApi(_id);
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
        getCasesCategoryList,
        addCasesCategory,
        putCasesCategory,
        deleteCasesCategory
    }
}