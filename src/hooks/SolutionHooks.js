import { addSolutionApi, putSolutionApi, deleteSolutionApi, getSolutionListApi, getProductTitleApi, getCasesTitleApi } from "@/api/solution"
import { ElMessage } from "element-plus";
export function useSolutionHooks() {
    const getSolutionList = async (_id = "") => {
        try {
            const res = await getSolutionListApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const addSolution = async ({ title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => {
        try {

            const res = await addSolutionApi({ title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const putSolution = async ({ _id, title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => {
        try {
            const res = await putSolutionApi({ _id, title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category });
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const deleteSolution = async (_id) => {
        try {
            const res = await deleteSolutionApi(_id);
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getProductTitle = async () => {
        try {
            const res = await getProductTitleApi();
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getCasesTitle = async () => {
        try {
            const res = await getCasesTitleApi();
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    return {
        getSolutionList,
        addSolution,
        putSolution,
        deleteSolution,
        getProductTitle,
        getCasesTitle
    }
}