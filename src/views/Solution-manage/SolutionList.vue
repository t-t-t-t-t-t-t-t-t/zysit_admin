<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header" style="display:flex;justify-content: space-between;">
                    <span>解决方案</span>
                    <el-button @click="isShowAddBox = true">添加解决方案</el-button>
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
        <SolutionAdd @addSolution="onHandleAddSolution" @closeBox='isShowAddBox = false' :isShowDialog="isShowAddBox">
        </SolutionAdd>
        <SolutionEdit @editSolution="onHandleEditSolution" @closeBox="isShowEditBox = false"
            :isShowDialog="isShowEditBox" :formData="tableData[currentIdx]"></SolutionEdit>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSolutionHooks } from '@/hooks/SolutionHooks';
import SolutionAdd from '@/components/Solution/SolutionAdd.vue';
import SolutionEdit from '@/components/Solution/SolutionEdit.vue';
const tableData = ref([])
const onHandleAddSolution = (solution) => {
    tableData.value.push(solution)
}
const isShowAddBox = ref(false)

const handleDelete = (index, data) => {
    useSolutionHooks().deleteSolution(data._id).then(res => {
        tableData.value.splice(index, 1);
    })
}

const currentIdx = ref(0)
const handleEdit = (index, data) => {
    currentIdx.value = index
    isShowEditBox.value = true
}
const isShowEditBox = ref(false)
const onHandleEditSolution = (solution) => {
    tableData.value.splice(currentIdx.value, 1, solution)
}

onMounted(() => {
    useSolutionHooks().getSolutionList().then(res => {
        tableData.value = res
        console.log(res)
    })
})
</script>

<style lang="scss" scoped></style>