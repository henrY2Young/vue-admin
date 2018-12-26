<template>
    <div id="permission">
        <div class="content">

            <el-button type="primary" class="button" @click="(permissionModelShow = true); (isEdit = false) ">添加路由
            </el-button>

            <el-dialog
                    :title="title"
                    :visible.sync="permissionModelShow"
                    width="50%">
                <el-form label-position="right" label-width="80px" :model="permissionForm">
                    <el-form-item label="用户ID" v-if="!isEdit">
                        <el-input v-model="permissionForm.user_id"></el-input>
                    </el-form-item>
                    <el-form-item label="权限列表">
                        <el-select v-model="permissionForm.permission" @change="selectchange" style="width: 100%"
                                   multiple placeholder="请选择">
                            <el-option
                                    v-for="item in routerList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="permissionModelShow = false">取 消</el-button>
                   <el-button type="primary" @click="Edit()" v-if="isEdit">修改</el-button>
                <el-button type="primary" @click="handleAdd()" v-else>新增</el-button>
                </span>
            </el-dialog>

            <div class="table">
                <el-table
                        :data="permissionList"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            min-width="15%">
                    </el-table-column>
                    <el-table-column
                            prop="user_id"
                            label="用户ID"
                            min-width="20%">
                    </el-table-column>

                    <el-table-column
                            prop="permission"
                            label="权限列表"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            prop="create_time"
                            label="创建时间"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            prop="creator"
                            label="创建者"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            min-width="15%">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import permission from '../../api/perssion'

    export default {
        name: "permission",
        mounted() {
            this.init();
            this.getRouterList();
        },
        data() {
            return {
                permissionList: [],
                permissionModelShow: false,
                isEdit: false,
                title: '添加权限',
                labelPosition: 'left',
                routerList: [],
                permissionForm: {
                    id: '',
                    user_id: '',
                    permission: []
                }
            }
        },
        methods: {
            init() {
                let self = this;
                permission.getPermissionList().then(res => {
                    let response = res.data;
                    console.log(response)
                    if (response.code == 1000) {
                        self.permissionList = response.data;
                    }
                })
            },
            selectchange() {
                console.log(this.routerList)
            },
            getRouterList() {
                let self = this;
                permission.getRouter().then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        let data = response.data;
                        data.forEach((item, index) => {
                            let item1 = {
                                value: item.id,
                                label: item.name
                            }
                            self.routerList.push(item1)
                        });
                    }
                })
            },
            handleEdit(id) {
                let params = {id: id};
                let self = this;
                self.isEdit = true;
                self.permissionModelShow = true;
                permission.getPermissionById(params).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.permissionForm = response.data;
                        self.permissionForm.permission = response.data.permission.split(',').map(value => {
                            return parseInt(value)
                        });
                    }
                })

            },
            Edit() {
                let self = this;
                let params = self.permissionForm;
                params.permission = self.permissionForm.permission.toString()
                console.log(params)
                permission.updatePremission(params).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.permissionModelShow = false;
                        self.$message({
                            type: 'success',
                            message: '更新成功'
                        })

                        self.init()
                    }
                })
            },
            handleAdd() {
                console.log(this.permissionForm);
                let self = this;
                this.isEdit = false;
                let params = self.permissionForm
                params.permission = self.permissionForm.permission.toString()
                console.log(params)
                permission.addPermission(params).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        console.log(response.data);
                        self.$message(
                            {
                                type: 'success',
                                message: '添加成功'
                            }
                        );
                        self.permissionModelShow = false;
                    }
                    self.permissionForm = {
                        user_id: '',
                        permission: []
                    };
                    self.init()
                })
            }
        },
        watch: {
            isEdit(val) {
                if (val) {
                    this.title = '更新'
                } else {
                    this.title = '新增'
                }
            },
            permissionModelShow(val) {
                if (val) {
                    this.permissionForm = {
                        user_id: '',
                        permission: []
                    };
                }
            }
        },

    }
</script>

<style scoped lang="less">
    .content {
        overflow: hidden;
    }

    .table {

    }

    .button {
        float: left;
        margin-bottom: 20px;
    }
</style>