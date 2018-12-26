<template>
    <div id="layout_main">
        <Github></Github>
        <el-container>
            <el-aside width="200px">
                <SideBar></SideBar>
            </el-aside>
            <el-container>
                <el-header>
                    <HeaderConpents></HeaderConpents>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import SideBar from '../components/Layout/Sidebar';
    import HeaderConpents from '../components/Layout/Header';
    import Github from '../components/widget/github/github';

    export default {
        components: {
            SideBar,
            HeaderConpents,
            Github,
        },
        name: "layout_main"
    };
</script>
