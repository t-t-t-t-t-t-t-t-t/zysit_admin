import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getProductCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/productCategory/productCategoryList/${_id}`) : axios.get(`${apiPrefix}/productCategory/productCategoryList`)
}
export const addProductCategoryApi = ({ title }) => axios.post(`${apiPrefix}/productCategory/productCategoryList`, { title })
export const putProductCategoryApi = ({ title, _id }) => axios.put(`${apiPrefix}/productCategory/productCategoryList`, { title, _id })
export const deleteProductCategoryApi = (_id) => axios.delete(`${apiPrefix}/productCategory/productCategoryList/${_id}`)