<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header" style="display:flex;justify-content: space-between;">
                    <span>产品类别</span>
                    <el-button @click="isShowAddBox = true">添加产品类别</el-button>
                </div>
            </template>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column fixed="right" width="180" label="选项">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-popover trigger="click" placement="top" :width="160">
                            <p style="margin-bottom: 20px;">你确定要删除吗?</p>
                            <div style="text-align: center; margin: 0">
                                <el-button size="small">取消</el-button>
                                <el-button size="small" type="primary" @click="handleDelete(scope.$index, scope.row)">
                                    确定
                                </el-button>
                            </div>
                            <template #reference>
                                <el-button size="small" type="danger">
                                    删除
                                </el-button>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <ProductCategoryAdd @addProductCategory="onHandleAddProductCategory" @closeBox='isShowAddBox = false'
            :isShowDialog="isShowAddBox"></ProductCategoryAdd>
        <ProductCategoryEdit @editProductCategory="onHandleEditProductCategory" @closeBox="isShowEditBox = false"
            :isShowDialog="isShowEditBox" :formData="tableData[currentIdx]"></ProductCategoryEdit>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductCategoryHooks } from '@/hooks/ProductCategoryHooks';
import ProductCategoryAdd from '@/components/Product/ProductCategoryAdd.vue';
import ProductCategoryEdit from '@/components/Product/ProductCategoryEdit.vue';
const tableData = ref([])
const onHandleAddProductCategory = (productCategory) => {
    tableData.value.push(productCategory)
}
const isShowAddBox = ref(false)

const handleDelete = (index, data) => {
    useProductCategoryHooks().deleteProductCategory(data._id).then(res => {
        tableData.value.splice(index, 1);
    })
}

const currentIdx = ref(0)
const handleEdit = (index, data) => {
    currentIdx.value = index
    isShowEditBox.value = true;
}
const isShowEditBox = ref(false)
const onHandleEditProductCategory = (productCategory) => {
    tableData.value.splice(currentIdx.value, 1, productCategory)
}
const changeEditBox = () => {
    isShowEditBox.value = !isShowEditBox.value;
}
onMounted(() => {
    useProductCategoryHooks().getProductCategoryList().then(res => {
        tableData.value = res
    })
})
</script>

<style lang="scss" scoped></style>