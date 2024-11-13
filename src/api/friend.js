import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getFriendListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/friend/friendList/${_id}`) : axios.get(`${apiPrefix}/friend/friendList`)
}
export const addFriendApi = ({ title, image }) => axios.post(`${apiPrefix}/friend/friendList`, { title, image })
export const putFriendApi = ({ title, image, _id }) => axios.put(`${apiPrefix}/friend/friendList`, { title, image, _id })
export const deleteFriendApi = (_id) => axios.delete(`${apiPrefix}/friend/friendList/${_id}`)