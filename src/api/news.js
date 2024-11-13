import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getNewsListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/news/newsList/${_id}`) : axios.get(`${apiPrefix}/news/newsList`)
}
export const addNewsApi = ({ title, image, url }) => axios.post(`${apiPrefix}/news/newsList`, { title, image, url })
export const putNewsApi = ({ title, image, url, _id }) => axios.put(`${apiPrefix}/news/newsList`, { title, image, url, _id })
export const deleteNewsApi = (_id) => axios.delete(`${apiPrefix}/news/newsList/${_id}`)