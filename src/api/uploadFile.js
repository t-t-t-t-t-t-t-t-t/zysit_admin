import axios from "axios";
export const uploadImageApi = (imageFile) => axios.post('/adminApi/uploadFile', imageFile, {//formData格式
    headers: { 'Content-Type': 'multipart/form-data' }
})