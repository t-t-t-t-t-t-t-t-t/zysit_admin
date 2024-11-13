<template>
    <div>
        <el-card>
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="userName" label="账户" width="180" />
                <el-table-column prop="password" label="密码">
                    <template #default="scope">
                        **********
                    </template>
                </el-table-column>
                <el-table-column prop="role" label="角色">
                    <template #default="scope">
                        <el-tag :type="scope.row.role ? 'primary' : 'danger'"> {{ scope.row.role ? '编辑者' :
                            '管理员' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="选项">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-popover trigger="click" placement="top" :width="160"
                            :disabled="scope.row._id == userInfoStore._id">
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
        <el-dialog v-model="isShowDialog" title="编辑用户" width="500">
            <el-form :model="formData" ref="formRef" label-width="auto" :rules="fromRules" style="max-width: 600px">
                <el-form-item label="用户名" prop="userName">
                    <el-input style="width:280px;" v-model="formData.userName" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input style="width:280px;" v-model="formData.password" />
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <el-select v-model="formData.role" placeholder="选择角色" default-first-option>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-button type="primary" @click="submitForm()">
                    编辑用户
                </el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useUserHooks } from '@/hooks/UserHooks';
import { useUserInfoStore } from '@/stores/userInfo';
import pinia from '@/stores';
const userInfoStore = useUserInfoStore(pinia);
const tableData = ref([])
const tableRowClassName = ({ row, rowindex }) => {
    if (row._id == userInfoStore._id) {
        return 'warning-row'
    }
    return ''
}
const userHooks = useUserHooks()
const formRef = ref()
const formData = reactive({
    userName: '',
    password: "",
    role: null,
    _id: null
})

const handleEdit = (index, data) => {
    Object.assign(formData, data, { index: index })
    onHandleCloseDialog();
}
const handleDelete = (index, data) => {
    useUserHooks().deleteUser(data._id).then(res => {
        tableData.value.splice(index, 1)
        popoverVisible.value = false;
    }).catch(err => {
        console.log(err)
    })
}
const isShowDialog = ref(false)
const onHandleCloseDialog = () => {
    isShowDialog.value = !isShowDialog.value
}
onMounted(() => {
    useUserHooks().getUserList().then(res => {
        tableData.value = res.data
    }).catch(err => {
        console.log(err)
    })
})


const fromRules = reactive({//表单校验
    userName: [{
        required: true, message: "请输入用户名",
        trigger: "blur"// 出发校验的条件
    }],
    password: [{
        required: true, message: "请输入密码",
        trigger: "blur"// 出发校验的条件
    }],
    role: [{
        required: true, message: "请选择角色",
        trigger: 'blur'
    }]
})

const options = [
    {
        value: 0,
        label: "管理员"
    },
    {
        value: 1,
        label: "编辑者"
    }
]
const submitForm = () => {
    formRef.value.validate().then(valid => {
        if (valid) {//通过校验
            // 提交到后台
            userHooks.editUser(formData).then(res => {
                Object.assign(tableData.value[formData.index], { _id: formData._id, userName: formData.userName, role: formData.role, password: formData.password })
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