import { getBannerListApi, putBannerApi } from "@/api/banner"
import { ElMessage } from "element-plus";
export function useBannerHooks() {
    const getBannerList = (_id = "") => {
        return getBannerListApi(_id).then(res => {
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
    const putBanner = async ({ title, content, _id, type, image }) => {
        try {
            const res = await putBannerApi({ title, content, _id, type, image });
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
        getBannerList,
        putBanner
    }
}