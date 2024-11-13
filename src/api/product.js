import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getProductListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/product/productList/${_id}`) : axios.get(`${apiPrefix}/product/productList`)
}
export const addProductApi = ({ title, image, content, isXin, isHot, parameters, scene, category }) => axios.post(`${apiPrefix}/product/productList`, { title, image, content, isXin, isHot, parameters, scene, category })
export const putProductApi = ({ _id, title, image, content, isXin, isHot, parameters, scene, category }) => axios.put(`${apiPrefix}/product/productList`, { _id, title, image, content, isXin, isHot, parameters, scene, category })
export const deleteProductApi = (_id) => axios.delete(`${apiPrefix}/product/productList/${_id}`)
export const getProductSolutionListApi = () => axios.get(`${apiPrefix}/product/productSolutionList`)