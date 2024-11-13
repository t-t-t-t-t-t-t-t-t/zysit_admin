import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getSolutionListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/solution/solutionList/${_id}`) : axios.get(`${apiPrefix}/solution/solutionList`)
}
export const addSolutionApi = ({ title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => axios.post(`${apiPrefix}/solution/solutionList`, { title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category })
export const putSolutionApi = ({ _id, title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => axios.put(`${apiPrefix}/solution/solutionList`, { _id, title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category })
export const deleteSolutionApi = (_id) => axios.delete(`${apiPrefix}/solution/solutionList/${_id}`)
export const getProductTitleApi = () => axios.get(`${apiPrefix}/solution/solutionProductList`)
export const getCasesTitleApi = () => axios.get(`${apiPrefix}/solution/solutionCasesList`)