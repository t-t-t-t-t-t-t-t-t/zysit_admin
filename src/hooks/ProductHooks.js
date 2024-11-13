import { addProductApi, putProductApi, deleteProductApi, getProductListApi, getProductSolutionListApi } from "@/api/product"
import { ElMessage } from "element-plus";
export function useProductHooks() {
    const getProductList = async (_id = "") => {
        try {
            const res = await getProductListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addProduct = async ({ title, image, content, isXin, isHot, parameters, scene, category }) => {
        try {
            const res = await addProductApi({ title, image, content, isXin, isHot, parameters, scene, category });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putProduct = async ({ _id, title, image, content, isXin, isHot, parameters, scene, category }) => {
        try {
            const res = await putProductApi({ _id, title, image, content, isXin, isHot, parameters, scene, category });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteProduct = async (_id) => {
        try {
            const res = await deleteProductApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getProductSolutionList = async () => {
        try {
            const res = await getProductSolutionListApi();
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
        getProductList,
        addProduct,
        putProduct,
        deleteProduct,
        getProductSolutionList
    }
}