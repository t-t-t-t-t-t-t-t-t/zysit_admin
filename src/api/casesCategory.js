import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getCasesCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/casesCategory/casesCategoryList/${_id}`) : axios.get(`${apiPrefix}/casesCategory/casesCategoryList`)
}
export const addCasesCategoryApi = ({ title }) => axios.post(`${apiPrefix}/casesCategory/casesCategoryList`, { title })
export const putCasesCategoryApi = ({ title, _id }) => axios.put(`${apiPrefix}/casesCategory/casesCategoryList`, { title, _id })
export const deleteCasesCategoryApi = (_id) => axios.delete(`${apiPrefix}/casesCategory/casesCategoryList/${_id}`)