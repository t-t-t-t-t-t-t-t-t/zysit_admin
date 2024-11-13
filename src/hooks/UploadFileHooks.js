import { ElMessage } from "element-plus";
import { uploadImageApi } from "@/api/uploadFile";
export function useUploadFileHooks() {
    /**
     * 
     * @param {*} fileRaw uploadFile得到的文件原型
     * @returns 返回image地址
     */
    const uploadImage = (fileRaw) => {
        const param = new FormData()// 以formData格式来传输文件
        param.append('image', fileRaw)
        return uploadImageApi(param).then(res => {
            ElMessage({
                message: res.msg,
                type: "success"
            });
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
    return {
        uploadImage
    }
}