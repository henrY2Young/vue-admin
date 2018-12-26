<template>
    <div id="router">
        <div class="content">

            <el-button type="primary" class="button" @click="routerModelShow = true">添加路由</el-button>

            <el-dialog
                    :title="title"
                    :visible.sync="routerModelShow"
                    width="50%">
                <el-form label-position="right" label-width="80px" :model="routerForm">
                    <el-form-item label="名称">
                        <el-input v-model="routerForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="url">
                        <el-input v-model="routerForm.url"></el-input>
                    </el-form-item>
                    <el-form-item label="icon">
                        <el-input v-model="routerForm.icon"></el-input>
                    </el-form-item>
                    <el-form-item label="父类ID">
                        <el-input v-model="routerForm.parent_id"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="routerModelShow = false">取 消</el-button>
                   <el-button type="primary" @click="Edit()" v-if="isEdit">确 定</el-button>
                <el-button type="primary" @click="handleAdd()" v-else>确 定</el-button>
                </span>
            </el-dialog>

            <div class="table">
                <el-table
                        :data="routerList"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            min-width="15%">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            min-width="20%">
                    </el-table-column>

                    <el-table-column
                            prop="parent_id"
                            label="parent_id"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            prop="url"
                            label="地址"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            prop="icon"
                            label="icon"
                            min-width="20%">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="日期"
                            min-width="20%">
                    </el-table-column>


                    <el-table-column
                            fixed="right"
                            label="操作"
                            min-width="15%">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
                            <el-button @click="handleRemove(scope.row.id)" type="text" size="small">刪除</el-button>
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
        name: "router",
        mounted() {
            this.init()
        },data() {
            return {
                routerList: [],
                routerModelShow: false,
                isEdit: false,
                title: '添加路由',
                labelPosition: 'left',
                routerForm: {
                    id: '',
                    name: '',
                    url: '',
                    icon: '',
                    parent_id: ''
                }
            }
        },
        methods: {
            init() {
                let self = this;
                permission.getRouter().then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.routerList = response.data;


                    }
                })
            },

            handleRemove(id) {
                this.$confirm('是否要删除这条账号规则?', '删除提醒', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    let self = this;
                    let params = {id: id}
                    permission.delRouter(params).then(res => {
                        let response = res.data;
                        if (response.code == 1000) {
                            self.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                            self.init()
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleEdit(id) {
                let params = {id: id};
                let self = this;
                self.isEdit = true;
                permission.getRouterById(params).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.routerForm = response.data;
                        self.routerModelShow = true;
                    }
                })

            },
            Edit() {
                let self = this;
                permission.updateRouter(self.routerForm).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.$message({
                            type:'success',
                            message:'更新成功'
                        })
                    }
                })
            },
            handleAdd() {
                let self = this;
                this.isEdit = false;
                permission.addRouter(self.routerForm).then(res => {
                    let response = res.data;
                    if (response.code == 1000) {
                        self.routerForm = {
                            id: '',
                            name: '',
                            url: '',
                            icon: '',
                            parent_id: ''
                        };
                        self.$message(
                            {
                                type: 'success',
                                message: '添加成功'
                            }
                        );
                        self.routerModelShow = false;
                        self.init()
                    }
                })
            }
        },
        watch:{
            isEdit(val){
                console.log(val)
                if(val){
                    this.title ='更新'
                }else {
                    this.title = '新增'
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