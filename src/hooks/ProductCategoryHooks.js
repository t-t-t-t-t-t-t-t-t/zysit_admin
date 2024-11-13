import { addProductCategoryApi, putProductCategoryApi, deleteProductCategoryApi, getProductCategoryListApi } from "@/api/productCategory"
import { ElMessage } from "element-plus";
export function useProductCategoryHooks() {
    const getProductCategoryList = async (_id = "") => {
        try {
            const res = await getProductCategoryListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addProductCategory = async ({ title }) => {
        try {
            const res = await addProductCategoryApi({ title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putProductCategory = async ({ _id, title }) => {
        try {
            const res = await putProductCategoryApi({ _id, title });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteProductCategory = async (_id) => {
        try {
            const res = await deleteProductCategoryApi(_id);
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
        getProductCategoryList,
        addProductCategory,
        putProductCategory,
        deleteProductCategory
    }
}