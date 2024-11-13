import axios from "axios";
import { apiPrefix } from "./axios.config";
export const loginApi = ({ userName, password }) => {
    return axios.post(`${apiPrefix}/user/login`, { userName, password });
}
export const addUserApi = ({ userName, password, role }) => {
    return axios.post(`${apiPrefix}/user/addUser`, { userName, password, role })
}
export const getUserListApi = (_id = "") => {
    return _id ? axios.get(`${apiPrefix}/user/userList/${_id}`) : axios.get(`${apiPrefix}/user/userList`)
}
export const deleteUserApi = (_id) => {
    return axios.delete(`${apiPrefix}/user/userList/${_id}`)
}
export const editUserApi = ({ userName, password, role, _id }) => {
    return axios.put(`${apiPrefix}/user/userList`, { _id, userName, password, role })
}