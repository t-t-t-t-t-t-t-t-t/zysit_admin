import axios from "axios";
import { apiPrefix } from "./axios.config";
// 得到Banner
export const getBannerListApi = (_id = "") => {
    return _id ? axios.get(`${apiPrefix}/banner/bannerList/${_id}`) : axios.get(`${apiPrefix}/banner/bannerList`)
}
// 更新Banner
export const putBannerApi = ({ title, content, _id, type, image }) => axios.put(`${apiPrefix}/banner/bannerList`, { title, content, _id, type, image })
