import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getCasesListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/cases/casesList/${_id}`) : axios.get(`${apiPrefix}/cases/casesList`)
}
export const addCasesApi = ({ title, content, category, detail, image }) => axios.post(`${apiPrefix}/cases/casesList`, { title, content, category, detail, image })
export const putCasesApi = ({ title, content, category, detail, image, _id }) => axios.put(`${apiPrefix}/cases/casesList`, { title, content, category, detail, image, _id })
export const deleteCasesApi = (_id) => axios.delete(`${apiPrefix}/cases/casesList/${_id}`)