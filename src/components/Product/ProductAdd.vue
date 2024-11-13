<template>
    <el-dialog :model-value="isShowDialog" title="添加产品" width="500" @close=" emit('closeBox')">
        <el-form :model="formData" ref="formRed" label-width="auto" :rules="fromRules" style="max-width: 600px">
            <el-form-item label="图片" prop="image">
                <UploadImage :image="formData.image" @uploadImage="handleUploadImage"></UploadImage>
            </el-form-item>
            <el-form-item label="标题" prop="title">
                <el-input style="width:280px;" v-model="formData.title" />
            </el-form-item>
            <el-form-item label="类别" prop="category">
                <el-select v-model="formData.category">
                    <el-option v-for="item in categoryOptions" :key="item._id" :label="item.title"
                        :value="item.title" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述" prop="content">
                <el-input autosize type="textarea" style="width:280px;" v-model="formData.content" />
            </el-form-item>
            <el-form-item label="参数" prop="parameters">
                <div class="flex gap-2">
                    <el-tag v-for="(tag, idx) in formData.parameters" :key="idx" closable :disable-transitions="false"
                        style="margin-right:5px" @close="handleClose(tag)">
                        {{ tag.key + ':' + tag.value }}
                    </el-tag>
                    <el-input v-if="inputKeyVisible" ref="InputKeyRef" v-model="inputKeyValue" placeholder="请输入键"
                        class="w-20" size="small" @keyup.enter="handleInputKeyConfirm" @blur="handleInputKeyConfirm" />
                    <el-input v-else-if="inputValueVisible" ref="InputValueRef" v-model="inputValueValue"
                        placeholder="请输入值" class="w-20" size="small" @keyup.enter="handleInputValueConfirm"
                        @blur="handleInputValueConfirm" />
                    <el-button v-else class="button-new-tag" size="small" @click="showInputKey">
                        + New Tag
                    </el-button>
                </div>
            </el-form-item>
            <el-form-item label="是否Hot" prop="isHot">
                <el-select v-model="formData.isHot">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="是否New" prop="isXin">
                <el-select v-model="formData.isXin">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="应用场景" prop="scene">
                <el-select v-model="formData.scene" value-key="_id" placeholder="Select" style="width: 240px" clearable
                    multiple>
                    <template #label="{ label, value }">
                        <span>{{ label }} </span>
                    </template>
                    <el-option v-for="item in sceneOptions" :key="item" :label="item.title" :value="item" />
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">
                确认添加
            </el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
import UploadImage from '../UploadImage/UploadImage.vue';
import { useProductHooks } from '@/hooks/ProductHooks';
import { useProductCategoryHooks } from '@/hooks/ProductCategoryHooks';
import { ref, reactive, nextTick, onMounted } from 'vue';
const emit = defineEmits(['add', 'closeBox'])
const { isShowDialog } = defineProps(['isShowDialog'])

const sceneOptions = ref([])
const categoryOptions = ref([])
onMounted(() => {
    useProductCategoryHooks().getProductCategoryList().then(res => {// 初始化产品类别
        categoryOptions.value = res
    })
    useProductHooks().getProductSolutionList().then(res => {
        sceneOptions.value = res
    })
})
const inputValue = reactive({ key: "", value: '' })
const inputKeyValue = ref('')
const inputValueValue = ref('')

const inputKeyVisible = ref(false)
const inputValueVisible = ref(false)

const InputKeyRef = ref()
const InputValueRef = ref()

const handleClose = (tag) => { // 删除标签
    formData.parameters.splice(formData.parameters.indexOf(tag), 1)
}

const showInputKey = () => {// 打开第一个输入框
    inputKeyVisible.value = true
    // 清空一次
    inputValue.key = '';
    inputValue.value = ''
    nextTick(() => {// dom更新后执行
        InputKeyRef.value.input.focus()
    })
}
const showInputValue = () => {// 显示input Value
    inputValueVisible.value = true;
    nextTick(() => {// dom更新后执行
        InputValueRef.value.input.focus()
    })
}

const handleInputKeyConfirm = () => {
    if (inputKeyValue.value) {
        inputValue.key += inputKeyValue.value // 添加值
        inputKeyVisible.value = false
        inputKeyValue.value = ''// 清空input值
        showInputValue();// 添加完才显示下一个
    }

}
const handleInputValueConfirm = () => {
    if (inputValueValue.value) {
        inputValue.value += inputValueValue.value // 设置value
        formData.parameters.push({ key: inputValue.key, value: inputValue.value })// 添加标签
        //清空数值
        inputValue.key = '';
        inputValue.value = '';

        inputValueVisible.value = false
        inputValueValue.value = ''// 清空input值
    }

}

const formRed = ref()
const formData = reactive({
    category: reactive({}),
    title: "",
    image: "",
    content: "",
    isXin: false,
    isHot: false,
    parameters: [],
    scene: []
})

const fromRules = reactive({//表单校验
    category: [{
        required: true, message: "请选择类别",
        trigger: "blur"// 出发校验的条件
    }],
    title: [{
        required: true, message: "请输入标题",
        trigger: "blur"// 出发校验的条件
    }],
    image: [{
        required: true, message: "请上传图片",
        trigger: 'blur'
    }],
    content: [{
        required: true, message: "请添加内容",
        trigger: 'blur'
    }],
    isXin: [{
        required: false, message: "请上传图片",
        trigger: 'blur'
    }],
    isHot: [{
        required: false, message: "请上传图片",
        trigger: 'blur'
    }]
    ,
    parameters: [{
        required: true, message: "请填写参数",
        trigger: 'blur'
    }]
    ,
    scene: [{
        required: true, message: "请增加场景",
        trigger: 'blur'
    }]
})
const options = [
    {
        label: "是",
        value: true,
    }, {
        label: "否",
        value: false
    }
]


const handleUploadImage = (image) => {
    formData.image = image
}
const submitForm = () => {
    formRed.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            useProductHooks().addProduct(formData).then(res => {
                emit('add', { _id: res._id, title: res.title, image: res.image, content: res.content, isXin: res.isXin, isHot: res.isHot, parameters: res.parameters, scene: res.scene, category: res.category })
                emit('closeBox')
                if (!formRed.value) return
                formRed.value.resetFields()
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style lang="scss" scoped></style>