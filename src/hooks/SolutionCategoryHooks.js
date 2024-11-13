import { addSolutionCategoryApi, putSolutionCategoryApi, deleteSolutionCategoryApi, getSolutionCategoryListApi } from "@/api/solutionCategory"
import { ElMessage } from "element-plus";
export function useSolutionCategoryHooks() {
    const getSolutionCategoryList = async (_id = "") => {
        try {
            const res = await getSolutionCategoryListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addSolutionCategory = async ({ title }) => {
        try {
            const res = await addSolutionCategoryApi({ title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putSolutionCategory = async ({ _id, title }) => {
        try {
            const res = await putSolutionCategoryApi({ _id, title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteSolutionCategory = async (_id) => {
        try {
            const res = await deleteSolutionCategoryApi(_id);
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
        getSolutionCategoryList,
        addSolutionCategory,
        putSolutionCategory,
        deleteSolutionCategory
    }
}