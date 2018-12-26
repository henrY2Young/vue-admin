<template>
    <div id="icon" class="main-container">
        <template v-for="item in initData">
            <el-card shadow="hover" class="card" v-clipboard="'fa-'+item.name" @success="handleSuccess">
                <div class="icon"><i class="fa" v-bind:class="'fa-'+item.name"></i></div>
                <div class="name" v-text="item.name">
                </div>
            </el-card>

        </template>
    </div>
</template>

<script>
    export default {
        name: "icon",
        data() {
            return {
                onCopyAction: '123123321',
                initData: [
                    {
                        name: 'users',

                    }, {
                        name: 'weixin',

                    }, {
                        name: 'bars',

                    }, {
                        name: 'bar-chart',

                    }, {
                        name: 'battery',

                    }, {
                        name: 'bug',

                    }, {
                        name: 'bus',

                    }, {
                        name: 'check',

                    }, {
                        name: 'clone',

                    }, {
                        name: 'commenting',

                    }, {
                        name: 'database',

                    }
                    , {
                        name: 'diamond',

                    }, {
                        name: 'edit',

                    }, {
                        name: 'eye',

                    }, {
                        name: 'eye-slash',

                    }, {
                        name: 'feed',

                    }, {
                        name: 'film',

                    }, {
                        name: 'folder',

                    }, {
                        name: 'gift',

                    }, {
                        name: 'handshake-o',

                    }
                    , {
                        name: 'hashtag',

                    }
                    , {
                        name: 'heartbeat',

                    }
                    , {
                        name: 'history',

                    }
                    , {
                        name: 'home',

                    }
                    , {
                        name: 'heart',

                    }
                    , {
                        name: 'id-card-o',

                    }
                    , {
                        name: 'line-chart',

                    }
                    , {
                        name: 'minus-square',

                    }
                    , {
                        name: 'money',

                    }
                    , {
                        name: 'paper-plane',

                    }
                    , {
                        name: 'plus-square',

                    }
                    , {
                        name: 'pie-chart',

                    }
                    , {
                        name: 'power-off',

                    }
                    , {
                        name: 'recycle',

                    }
                    , {
                        name: 'refresh',

                    }, {
                        name: 'print',

                    }, {
                        name: 'reply-all',

                    }, {
                        name: 'send',

                    }, {
                        name: 'sort-down',

                    }, {
                        name: 'sort-up',

                    }, {
                        name: 'tag',

                    }, {
                        name: 'tags',

                    }, {
                        name: 'tasks',

                    }, {
                        name: ' thumbs-up',

                    }, {
                        name: 'tint',

                    }, {
                        name: 'toggle-on',

                    }, {
                        name: 'trash',

                    }, {
                        name: 'tree',

                    }, {
                        name: 'wifi',

                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            handleSuccess() {
                this.$message({
                    type: 'success',
                    message: 'copy 成功'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .fa {
        font-size: 25px;
        color: aqua;
    }

    .card {
        display: inline-block;
        width: 12.5%;
        float: left;
        margin-left: 16px;
        margin-top: 15px;
    }

    #icon {
        overflow: hidden;
    }

    .name {
        text-align: center;
        font-size: 18px;
    }
</style>