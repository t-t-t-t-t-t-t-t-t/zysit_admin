<template>
    <el-dialog :model-value="isShowDialog" @submit.prevent title="编辑解决方案类别" width="500" @close="emit('closeBox')">
        <el-form :model="formData" ref="formRef" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-form-item label="类别" prop="category">
                <el-select v-model="formData.category">
                    <el-option v-for="item in categoryOptions" :key="item._id" :label="item.title"
                        :value="item.title" />
                </el-select>
            </el-form-item>
            <el-form-item label="Banner" prop="bannerImage">
                <UploadImage :image="formData.bannerImage" @uploadImage="(image) => { formData.bannerImage = image }">
                </UploadImage>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <el-input type="textarea" style="width:280px;" v-model="formData.content" />
            </el-form-item>
            <el-form-item label="内容图片" prop="contentImage">
                <UploadImage :image="formData.contentImage" @uploadImage="(image) => { formData.contentImage = image }">
                </UploadImage>
            </el-form-item>
            <el-form-item label="需求分析" prop="demandAnalysis">
                <div class="flex gap-2">
                    <el-tag v-for="(tag, idx) in formData.demandAnalysis" :key="idx" closable
                        :disable-transitions="false" style="margin-right:5px" @close="handleClose(tag)">
                        {{ tag.title + ':' + tag.content }}
                    </el-tag>
                    <el-input v-if="demandAnalysisTitleVisible" ref="demandAnalysisTitleRef"
                        v-model="demandAnalysisTag.title" placeholder="请输入键" class="w-20" size="small"
                        @keyup.enter="demandAnalysisTitleConfirm" @blur="demandAnalysisTitleConfirm" />
                    <el-input v-else-if="demandAnalysisContentVisible" ref="demandAnalysisContentRef"
                        v-model="demandAnalysisTag.content" placeholder="请输入值" class="w-20" size="small"
                        @keyup.enter="demandAnalysisContentConfirm" @blur="demandAnalysisContentConfirm" />
                    <el-button v-else class="button-new-tag" size="small" @click="showDemandAnalysisTitle">
                        + New Tag
                    </el-button>
                </div>
            </el-form-item>
            <el-form-item label="方案亮点" prop="heighLight">
                <div class="flex gap-2">
                    <el-tag v-for="(tag, idx) in formData.heighLight" :key="idx" closable :disable-transitions="false"
                        style="margin-right:5px" @close="handleClose(tag)">
                        {{ tag.title + ':' + tag.content }}
                    </el-tag>
                    <el-input v-if="heighLightTitleVisible" ref="heighLightTitleRef" v-model="heighLightTag.title"
                        placeholder="请输入键" class="w-20" size="small" @keyup.enter="heighLightTitleConfirm"
                        @blur="heighLightTitleConfirm" />
                    <el-input v-else-if="heighLightContentVisible" ref="heighLightContentRef"
                        v-model="heighLightTag.content" placeholder="请输入值" class="w-20" size="small"
                        @keyup.enter="heighLightContentConfirm" @blur="heighLightContentConfirm" />
                    <el-button v-else class="button-new-tag" size="small" @click="showHeighLightTitle">
                        + New Tag
                    </el-button>
                </div>
            </el-form-item>
            <el-form-item label="主要产品" prop="mainProduct">
                <el-select v-model="formData.mainProduct" value-key="_id" placeholder="Select" style="width: 240px"
                    clearable multiple>
                    <template #label="{ label, value }">
                        <span>{{ label }} </span>
                    </template>
                    <el-option v-for="item in productOptions" :key="item._id" :label="item.title" :value="item" />
                </el-select>
            </el-form-item>
            <el-form-item label="案例图片" prop="mainCaseImage">
                <UploadImage :image="formData.mainCaseImage"
                    @uploadImage="(image) => { formData.mainCaseImage = image }">
                </UploadImage>
            </el-form-item>
            <el-form-item label="案例" prop="mainCase">
                <el-select v-model="formData.mainCase" value-key="_id" placeholder="Select" style="width: 240px"
                    clearable multiple>
                    <template #label="{ label, value }">
                        <span>{{ label }} </span>
                    </template>
                    <el-option v-for="item in casesOptions" :key="item._id" :label="item.title" :value="item" />
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                确认编辑
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { useSolutionHooks } from '@/hooks/SolutionHooks';
import { useSolutionCategoryHooks } from '@/hooks/SolutionCategoryHooks';
import { ref, reactive, nextTick, onMounted } from 'vue';
import UploadImage from '../UploadImage/UploadImage.vue';
const emit = defineEmits(['editSolution', 'closeBox'])
const { isShowDialog, formData } = defineProps(['isShowDialog', 'formData'])
const formRef = ref()
const fromRules = reactive({//表单校验
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    bannerImage: [{
        required: true, message: "请选择Banner",
        trigger: "blur"// 出发校验的条件
    }],
    content: [{
        required: true, message: "请输入内容",
        trigger: "blur"// 出发校验的条件
    }],
    contentImage: [{
        required: true, message: "请输入内容图片",
        trigger: "blur"// 出发校验的条件
    }],
    demandAnalysis: [{
        required: true, message: "请输入需求分析",
        trigger: "blur"// 出发校验的条件
    }],
    heighLight: [{
        required: true, message: "请输入方案亮点",
        trigger: "blur"// 出发校验的条件
    }],
    mainProduct: [{
        required: false, message: "请选择主要产品",
        trigger: "blur"// 出发校验的条件
    }],
    mainCaseImage: [{
        required: true, message: "请输入案例图片",
        trigger: "blur"// 出发校验的条件
    }],
    mainCase: [{
        required: false, message: "请选择案例",
        trigger: "blur"// 出发校验的条件
    }],
})

const productOptions = ref([])
const casesOptions = ref([])
const categoryOptions = ref([])
onMounted(() => {
    useSolutionHooks().getProductTitle().then(res => {
        productOptions.value = res
    })
    useSolutionHooks().getCasesTitle().then(res => {
        casesOptions.value = res
    })
    useSolutionCategoryHooks().getSolutionCategoryList().then(res => {
        categoryOptions.value = res
    })

})
const submitForm = () => {
    formRef.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useSolutionHooks().putSolution(formData).then(res => {
                emit('editSolution', { _id: formData._id, title: formData.title, category: formData.category, bannerImage: formData.bannerImage, content: formData.content, contentImage: formData.contentImage, demandAnalysis: formData.demandAnalysis, heighLight: formData.heighLight, mainProduct: formData.mainProduct, mainCaseImage: formData.mainCaseImage, mainCase: formData.mainCase })
                emit('closeBox')
                if (!formRef.value) return
                formRef.value.resetFields()
            })
        }
    }).catch(err => {
        console.log(err)
    })
}

// 标签
const demandAnalysisTag = reactive({ title: "", content: "" })
const demandAnalysisTempTag = reactive({ title: "", content: "" })
// 是否显示
const demandAnalysisTitleVisible = ref(false)
const demandAnalysisContentVisible = ref(false)

// 输入框组件
const demandAnalysisTitleRef = ref()
const demandAnalysisContentRef = ref()

// 改变显示状态
const showDemandAnalysisTitle = () => {
    demandAnalysisTempTag.title = ''
    demandAnalysisTempTag.content = ''
    demandAnalysisTitleVisible.value = true
    nextTick(() => {// dom更新后执行
        demandAnalysisTitleRef.value.input.focus()
    })
}
const showDemandAnalysisContent = () => {
    demandAnalysisContentVisible.value = true
    nextTick(() => {// dom更新后执行
        demandAnalysisContentRef.value.input.focus()
    })
}
// 确定添加标题
const demandAnalysisTitleConfirm = () => {
    if (demandAnalysisTag.title) {
        demandAnalysisTempTag.title += demandAnalysisTag.title // 添加值
        demandAnalysisTitleVisible.value = false
        demandAnalysisTag.title = ''// 清空input值

        showDemandAnalysisContent();// 添加完才显示下一个
    }
}
// 确定添加内容
const demandAnalysisContentConfirm = () => {
    if (demandAnalysisTag.content) {
        demandAnalysisTempTag.content += demandAnalysisTag.content // 添加值

        formData.demandAnalysis.push({ title: demandAnalysisTempTag.title, content: demandAnalysisTempTag.content })
        demandAnalysisTag.content = ''
        demandAnalysisContentVisible.value = false
    }
}
// 标签
const heighLightTag = reactive({ title: "", content: "" })
const heighLightTempTag = reactive({ title: "", content: "" })
// 是否显示
const heighLightTitleVisible = ref(false)
const heighLightContentVisible = ref(false)

// 输入框组件
const heighLightTitleRef = ref()
const heighLightContentRef = ref()

// 改变显示状态
const showHeighLightTitle = () => {
    heighLightTempTag.title = ''
    heighLightTempTag.content = ''
    heighLightTitleVisible.value = true
    nextTick(() => {// dom更新后执行
        heighLightTitleRef.value.input.focus()
    })
}
const showHeighLightContent = () => {
    heighLightContentVisible.value = true
    nextTick(() => {// dom更新后执行
        heighLightContentRef.value.input.focus()
    })
}
// 确定添加标题
const heighLightTitleConfirm = () => {
    if (heighLightTag.title) {
        heighLightTempTag.title += heighLightTag.title // 添加值
        heighLightTitleVisible.value = false
        heighLightTag.title = ''// 清空input值

        showHeighLightContent();// 添加完才显示下一个
    }
}
// 确定添加内容
const heighLightContentConfirm = () => {
    if (heighLightTag.content) {
        heighLightTempTag.content += heighLightTag.content // 添加值

        formData.heighLight.push({ title: heighLightTempTag.title, content: heighLightTempTag.content })
        heighLightTag.content = ''
        heighLightContentVisible.value = false
    }
}
</script>

<style lang="scss" scoped></style>