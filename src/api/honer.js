import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getHonerListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/honer/honerList/${_id}`) : axios.get(`${apiPrefix}/honer/honerList`)
}
export const addHonerApi = ({ title, image }) => axios.post(`${apiPrefix}/honer/honerList`, { title, image })
export const putHonerApi = ({ title, image, _id }) => axios.put(`${apiPrefix}/honer/honerList`, { title, image, _id })
export const deleteHonerApi = (_id) => axios.delete(`${apiPrefix}/honer/honerList/${_id}`)