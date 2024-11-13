<template>
    <el-form :model="formData" ref="formRef" label-width="auto" :rules="fromRules">
        <el-form-item label="标题" prop="title">
            <el-input style="width:280px;" v-model="formData.title" />
        </el-form-item>
        <el-form-item label="类别" prop="category">
            <el-select v-model="formData.category">
                <el-option v-for="item in casesCategoryoptions" :key="item._id" :label="item.title"
                    :value="item.title" />
            </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="detail">
            <el-input style="width:280px;" v-model="formData.detail" />
        </el-form-item>
        <el-form-item label="封面图片" prop="image">
            <UploadImage :image="formData.image" @uploadImage="(image) => { formData.image = image }"></UploadImage>
        </el-form-item>
        <el-form-item label="上传图片">
            <UploadImage :image="tempImageUrl" @uploadImage="(image) => { tempImageUrl = image }"></UploadImage>
            <el-text>{{ tempImageUrl }}</el-text>
        </el-form-item>
        <el-form-item label="正文" prop="content">
            <Editor @changeContent="(newContent) => { formData.content = newContent }" :content="formData.content">
            </Editor>
        </el-form-item>
        <el-button type="primary" @click="submitForm()">
            确认添加
        </el-button>
    </el-form>
</template>

<script setup>
import { useCasesHooks } from '@/hooks/CasesHooks';
import { useCasesCategoryHooks } from '@/hooks/CasesCategoryHooks';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import UploadImage from '@/components/UploadImage/UploadImage.vue';
import Editor from '@/components/Editor/Editor.vue';
const router = useRouter()
const tempImageUrl = ref("")
const formRef = ref()
const formData = reactive({
    title: "",
    detail: "",
    image: "",
    category: null,
    content: "",
})
const casesCategoryoptions = ref([]);
onMounted(() => [
    useCasesCategoryHooks().getCasesCategoryList().then(res => [
        casesCategoryoptions.value = res
    ])
])
const fromRules = reactive({//表单校验
    detail: [{
        required: true, message: "请输入描述",
        trigger: "blur"// 出发校验的条件
    }],
    image: [{
        required: true, message: "请选择图片",
        trigger: "blur"// 出发校验的条件
    }],
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    content: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    category: [{
        required: true, message: "请选择类别",
        trigger: "blur"// 出发校验的条件
    }],
})


const submitForm = () => {
    formRef.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useCasesHooks().addCases(formData).then(res => {
                router.push('/cases-manage/casesList')
                if (!formRef.value) return
                formRef.value.resetFields()
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style lang="scss" scoped></style>