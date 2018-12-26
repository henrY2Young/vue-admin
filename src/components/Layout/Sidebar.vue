<template>
    <div id="sidebar">
        <div class="logo" :class="{'active':handleCollapse()}">
            vue-admin
        </div>
        <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse-transition=true
                :collapse="handleCollapse()"
                @select="handleSelect" :class="{'collapse1':handleCollapse()}" class="side-bar">
            <template v-for="(item) in menuList">
                <el-menu-item :index="item.url" :key="item.id" v-if="item.child.length == 0">
                    <i class="fa" :class="item.icon"></i>
                    <span slot="title">{{ item.name }}</span>
                </el-menu-item>
                <el-submenu v-else :index="item.url" :key="item.id">
                    <template slot="title">
                        <i class="fa" :class="item.icon"></i>
                        <span slot="title">{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(child) in item.child" :index="child.url" :key="child.id" class="sub-menu">
                        <i class="fa" :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {decodeMenuTree} from "../../utils/functions";

    export default {
        name: "sidebar",
        data() {
            return {
                isCollapse: true,
                menuList: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.menuList = this.$store.state.user.menuList;
            },
            handleCollapse() {
                return this.$store.state.app.sidebar.open;
            },
            handleSelect(key, keyPath) {
                let decodeUrlList = (decodeMenuTree(this.menuList));
                let result = []
                for (let i = 0; i < decodeUrlList.length; i++) {
                    for (let j = 0; j < keyPath.length; j++) {
                        if (keyPath[j] == decodeUrlList[i].url) {
                            let item = {
                                name: decodeUrlList[i].name,
                                url: decodeUrlList[i].url,
                            };
                            result.push(item);
                        } else {
                            continue;
                        }
                    }
                }
                this.$store.dispatch('set_breadcrumb', result);
                this.$router.push({path: key});
            },

        }
    }
</script>

<style scoped lang="less">
    .logo {
        height: 60px;
        width: 200px;
        line-height: 60px;
        color: white;
        font-size: 18px;
        /*background-color: red;*/
        &.active {
            width: 65px;
        }
    }

    .fa {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
    }

    .collapse1 {
        width: 65px;
    }
</style>