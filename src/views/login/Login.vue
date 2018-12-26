<template>
    <div id="login-container">
        <div class="login-form">
            <el-card class="box-card">
                <div class=" login-header">
                    用户登录
                </div>
                <form inline class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <el-input v-model="userForm.username" id="username" placeholder="请输入用户名"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <el-input v-model="userForm.password" id="password" type="password"
                                      placeholder="请输入密码"></el-input>
                        </div>
                    </div>
                </form>
                <div class="login-footer">
                    <el-button type="primary" @click="login()" plain>登录</el-button>
                </div>
            </el-card>

        </div>
    </div>
</template>
<script>
    import userApi from '../../api/user' ;
    import {getToken} from "../../utils/auth";
    import  PermissionAPI from '../../api/perssion';
    import  {menutree} from '../../utils/functions';

    export default {
        name: "login",
        data() {
            return {
                userForm: {
                    username: '',
                    password: ''
                },
                menuList:[],
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                if (getToken()) {
                    this.$router.push({name: 'index'});
                }
            },
            login() {
                userApi.login(this.userForm).then(res => {
                    let response = res.data;
                    if (response && response.code === 1000) {
                        let data = response.data;
                        let UserInfo = {
                            token: data.token,
                            refresh_token: data.refresh_token,
                            username: data.userinfo.username
                        };
                        this.$store.dispatch('LOGIN', UserInfo);
                        PermissionAPI.getMenuList().then(res => {
                            let response = res.data;
                            if (response.code == 1000) {
                                let data1 = response.data.menuList;
                                self.menuList = menutree(data1);
                                this.$store.dispatch('INIT_MENU',self.menuList);
                            }
                            this.$router.push({name:'index'});
                        })

                    } else {
                        this.$message({
                            type: 'error',
                            message: response.data.msg
                        });
                        return;
                    }
                })
            }
        }
    };
</script>
<style scoped lang="less">
    #login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        .login-form {
            width: 540px;
            max-width: 100%;
            padding: 35px 35px 15px;
            margin: 120px auto;
        }
        .login-header {
            height: 50px;
            text-align: center;
            font-size: 20px;
            line-height: 30px;
        }
        .login-footer {
            width: 70px;
            margin: 0 auto;
        }
    }
</style>