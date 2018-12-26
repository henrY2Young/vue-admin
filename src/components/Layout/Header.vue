<template>
    <div id="HeaderConpents">
        <el-menu class="el-menu-demo" mode="horizontal">
            <div class="icon-hamburger" @click="handleCollapsed()" :class="{'active':collapsedClass()}">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="icon-hamburger">
                <el-breadcrumb separator="/">
                    <template v-for="(item,index) in this.$store.state.app.breadcrumb">
                        <el-breadcrumb-item v-if="index == 0">{{item.name}}</el-breadcrumb-item>
                        <el-breadcrumb-item v-else>
                            <router-link :to='item.url' v-text="item.name"></router-link>
                        </el-breadcrumb-item>
                    </template>
                </el-breadcrumb>
            </div>
            <el-submenu index="2" style="float: right;padding-right: 60px">
                <template slot="title">
                    <img src="../../assets/img/avatar.png" alt="" class="avatar">
                    {{username}}</template>
                <el-menu-item index="2-1">个人中心</el-menu-item>
                <el-menu-item index="2-2" @click="logout()">退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import {cleanToken} from "../../utils/auth";


    export default {
        name: "HeaderConpents",
        data() {
            return {
                username: ''
            }
        },
        mounted() {
            this.handleCollapsed();
            this.init();
        },
        methods: {
            init() {
                this.username = this.$store.state.user.username;
                return this.username;
            },
            handleCollapsed() {
                let open = this.$store.state.app.sidebar.open;
                this.$store.dispatch('set_sidebar', !open);
            },
            collapsedClass() {
                return !this.$store.state.app.sidebar.open;
            },
            initBreadcrumb() {
            },
            logout() {
                cleanToken();
                this.$router.push({path: '/login'});
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    .fa-bars {
        font-size: 18px;
    }

    .icon-hamburger {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
        outline: 0;
        &.active > i {
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
            -webkit-transition: -webkit-transform .2s ease;
            transition: -webkit-transform .2s ease;
            transition: transform .2s ease;
            transition: transform .2s ease, -webkit-transform .2s ease;
        }
    }
</style>