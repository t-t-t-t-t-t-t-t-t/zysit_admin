<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header" style="display:flex;justify-content: space-between;">
                    <span>新闻</span>
                    <el-button @click="isShowAddBox = true">添加新闻</el-button>
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
        <NewsAdd @addNews="onHandleAddNews" @closeBox='isShowAddBox = false' :isShowDialog="isShowAddBox"></NewsAdd>
        <NewsEdit @editNews="onHandleEditNews" @closeBox="isShowEditBox = false" :isShowDialog="isShowEditBox"
            :formData="tableData[currentIdx]"></NewsEdit>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNewsHooks } from '@/hooks/NewsHooks';
import NewsAdd from '@/components/News/NewsAdd.vue';
import NewsEdit from '@/components/News/NewsEdit.vue';
const tableData = ref([])
const onHandleAddNews = (news) => {
    tableData.value.push(news)
}
const isShowAddBox = ref(false)
const handleDelete = (index, data) => {
    useNewsHooks().deleteNews(data._id).then(res => {
        tableData.value.splice(index, 1);
    })
}

const currentIdx = ref(0)
const handleEdit = (index, data) => {
    currentIdx.value = index
    isShowEditBox.value = true
}
const isShowEditBox = ref(false)
const onHandleEditNews = (news) => {
    tableData.value.splice(currentIdx.value, 1, news)
}

onMounted(() => {
    useNewsHooks().getNewsList().then(res => {
        tableData.value = res
    })
})
</script>

<style lang="scss" scoped></style>