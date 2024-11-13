import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getSolutionCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/solutionCategory/solutionCategoryList/${_id}`) : axios.get(`${apiPrefix}/solutionCategory/solutionCategoryList`)
}
export const addSolutionCategoryApi = ({ title }) => axios.post(`${apiPrefix}/solutionCategory/solutionCategoryList`, { title })
export const putSolutionCategoryApi = ({ title, _id }) => axios.put(`${apiPrefix}/solutionCategory/solutionCategoryList`, { title, _id })
export const deleteSolutionCategoryApi = (_id) => axios.delete(`${apiPrefix}/solutionCategory/solutionCategoryList/${_id}`)