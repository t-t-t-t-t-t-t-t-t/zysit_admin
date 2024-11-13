<template>
    <div>
        <el-card style="width: 75%;position: relative; left: 50%; transform: translateX(-50%)">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                    <template #default="scope">
                        <el-image style=" height: 100px" :src="scope.row.image" fit="contain" />
                    </template>
                </el-table-column>
                <el-table-column prop="type" label="类型" width="180" />
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="content" label="描述" width="180" />
                <el-table-column fixed="right" width="180" label="选项">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog v-model="isShowDialog" :title="'编辑 ' + formData.type" width="500">
            <el-form :model="formData" ref="formRef" label-width="auto" :rules="fromRules" style="max-width: 600px">
                <el-form-item label="标题" prop="title">
                    <el-input style="width:280px;" v-model="formData.title" />
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input style="width:280px;" v-model="formData.content" />
                </el-form-item>
                <el-form-item label="图片" prop="image">
                    <uploadImage :image="formData.image" @uploadImage="handleUploadImage"></uploadImage>
                </el-form-item>
                <el-button type="primary" @click="submitForm()">
                    编辑Banner
                </el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useBannerHooks } from '@/hooks/BannerHooks';
import uploadImage from '@/components/UploadImage/UploadImage.vue';
const formRef = ref()
const tableData = ref([])
const formData = reactive({
    title: "",
    content: "",
    image: "",
    type: "",
    _id: null
})
const handleUploadImage = (image) => {
    Object.assign(formData, { image: image })
}
const handleEdit = (index, data) => {
    Object.assign(formData, data, { index: index })
    onHandleCloseDialog();
}
const isShowDialog = ref(false)
const onHandleCloseDialog = () => {
    isShowDialog.value = !isShowDialog.value
}
onMounted(() => {
    useBannerHooks().getBannerList().then(res => {
        tableData.value = res
        if (tableData.value.length == 0) {
            tableData.value = [{ title: 'home', content: 'home', type: 'home', image: '' },
            { title: 'about', content: 'about', type: 'about', image: '' },
            { title: 'product', content: 'product', type: 'product', image: '' },
            { title: 'solution', content: 'solution', type: 'solution', image: '' },
            { title: 'cases', content: 'cases', type: 'cases', image: '' },
            { title: 'serve', content: 'serve', type: 'serve', image: '' },
            { title: 'news', content: 'news', type: 'news', image: '' }
            ]
        }
    })
})


const fromRules = reactive({//表单校验
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    content: [{
        required: false, message: "请输入内容",
        trigger: "blur"// 出发校验的条件
    }],
    image: [{
        required: true, message: "请上传图片",
        trigger: 'blur'
    }]
})

const submitForm = () => {
    formRef.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useBannerHooks().putBanner(formData).then(res => {
                Object.assign(tableData.value[formData.index], { _id: formData._id, title: formData.title, content: formData.content, type: formData.type, image: formData.image })
                if (!formRef.value) return
                formRef.value.resetFields()
                onHandleCloseDialog();
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style lang="scss" scoped>
:deep(.el-table) {
    .warning-row {
        --el-table-tr-bg-color: var(--el-color-warning-light-9);
    }
}
</style>