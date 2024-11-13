<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header" style="display:flex;justify-content: space-between;">
                    <span>合作伙伴</span>
                    <el-button @click="changeAddBox">添加合作伙伴</el-button>
                </div>
            </template>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                    <template #default="scope">
                        <el-image style=" height: 100px" :src="scope.row.image" fit="contain" />
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题" width="180" />

                <el-table-column fixed="right" width="180" label="选项">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-popover trigger="click" placement="top" :width="160">
                            <p style="margin-bottom: 20px;">你确定要删除吗?</p>
                            <div style="text-align: center; margin: 0">
                                <el-button size="small" @click="popoverVisible = false">取消</el-button>
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
        <FriendAdd @addFriend="onHandleAddFriend" @closeBox='isShowAddBox = false' :isShowDialog="isShowAddBox">
        </FriendAdd>
        <FriendEdit @editFriend="onHandleEditFriend" @closeBox="isShowEditBox = false" :isShowDialog="isShowEditBox"
            :formData="tableData[currentIdx]"></FriendEdit>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFriendHooks } from '@/hooks/FriendHooks';
import FriendAdd from '@/components/About/FriendAdd.vue';
import FriendEdit from '@/components/About/FriendEdit.vue';
const tableData = ref([])
const onHandleAddFriend = (friend) => {
    tableData.value.push(friend)
}
const isShowAddBox = ref(false)
const changeAddBox = () => {
    isShowAddBox.value = !isShowAddBox.value
}
const handleDelete = (index, data) => {
    useFriendHooks().deleteFriend(data._id).then(res => {
        tableData.value.splice(index, 1);
    })
}

const currentIdx = ref(0)
const handleEdit = (index, data) => {
    currentIdx.value = index
    isShowEditBox.value = true;
}
const isShowEditBox = ref(false)
const onHandleEditFriend = (friend) => {
    tableData.value.splice(currentIdx.value, 1, friend)
}
onMounted(() => {
    useFriendHooks().getFriendList().then(res => {
        tableData.value = res
    })
})
</script>

<style lang="scss" scoped></style>