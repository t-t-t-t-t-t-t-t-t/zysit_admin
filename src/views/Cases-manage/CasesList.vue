<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header" style="display:flex;justify-content: space-between;">
                    <span>应用案例类别</span>
                    <el-button @click="onHandleAdd">添加应用案例</el-button>
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
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCasesHooks } from '@/hooks/CasesHooks';
import { useRouter } from 'vue-router';
const router = useRouter()
const tableData = ref([])

const onHandleAdd = () => {
    router.push('/cases-manage/casesAdd')
}
const handleDelete = (index, data) => {
    useCasesHooks().deleteCases(data._id).then(res => {
        tableData.value.splice(index, 1);
    })
}

const handleEdit = (index, data) => {
    router.push({
        path: '/cases-manage/casesEdit',
        query: {
            _id: data._id
        }
    })
}
onMounted(() => {
    useCasesHooks().getCasesList().then(res => {
        tableData.value = res
    })
})
</script>

<style lang="scss" scoped></style>