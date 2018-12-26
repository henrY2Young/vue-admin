<template>
    <div id="home">
        <div class="content">
            <div class="panel-group">
                <el-row :gutter="12">
                    <el-col :span="6">
                        <el-card shadow="hover" class="card">
                            <div class="icon">
                                <i class="fa fa-users users"></i>
                            </div>
                            <div class="count-down">

                                <span class="num">
                                    <ICountUp
                                            :startVal="0"
                                            :endVal="12345"
                                            :decimals="2"
                                    />
                                </span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="card">
                            <div class="icon">
                                <i class="fa fa-commenting message"></i>
                            </div>
                            <div class="count-down">
                                <span class="num">
                                    <ICountUp
                                            :startVal="0"
                                            :endVal="12345"
                                            :decimals="2"
                                    />
                                </span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="card">
                            <div class="icon">
                                <i class="fa fa-cny cny"></i>
                            </div>
                            <div class="count-down">
                                <span class="num">
                                    <ICountUp
                                            :startVal="0"
                                            :endVal="12345"
                                            :decimals="2"
                                    />
                                </span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" class="card">
                            <div class="icon">
                                <i class="fa fa-shopping-cart shopping"></i>
                            </div>
                            <div class="count-down">
                                <span class="num">
                                    <ICountUp
                                            :startVal="0"
                                            :endVal="12345"
                                            :decimals="2"
                                    />
                                </span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div class="charts">
                <el-row :gutter="12">
                    <echarts :option="option" :events="events" style="width: 100%; height: 500px;"></echarts>
                </el-row>
            </div>
            <div class="panel-group">
                <el-row :gutter="12">
                    <el-col :span="8">
                        <el-card shadow="hover" class="card">
                            <echarts :option="option1" :events="events" style="width: 100%; height: 500px;"></echarts>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" class="card">
                            <echarts :option="option2" :events="events" style="width: 100%; height: 500px;"></echarts>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" class="card">
                            <echarts :option="option3" :events="events" style="width: 100%; height: 500px;"></echarts>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2'
    import echarts from 'echarts-vue'

    export default {
        name: "home",
        components: {
            ICountUp,
            echarts
        },
        data() {
            return {
                events: {
                    click: this.click
                },
                option1: {},
                option2: {},
                option3: {},
                option: {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.charts_polar();
            this.charts_bar();
            this.charts_pie();
        },
        methods: {
            click() {
            },
            charts_polar() {
                var data = [];

                for (var i = 0; i <= 100; i++) {
                    var theta = i / 100 * 360;
                    var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                    data.push([r, theta]);
                }
                this.option1 = {
                    legend: {
                        data: ['line']
                    },
                    polar: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {},
                    series: [{
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        data: data
                    }]
                };
            },
            charts_bar() {
                var data = [
                    [5000, 10000, 6785.71],
                    [4000, 10000, 6825],
                    [3000, 6500, 4463.33],
                    [2500, 5600, 3793.83],
                    [2000, 4000, 3060],
                    [2000, 4000, 3222.33],
                    [2500, 4000, 3133.33],
                    [1800, 4000, 3100],
                    [2000, 3500, 2750],
                    [2000, 3000, 2500],
                    [1800, 3000, 2433.33],
                    [2000, 2700, 2375],
                    [1500, 2800, 2150],
                    [1500, 2300, 2100],
                    [1600, 3500, 2057.14],
                    [1500, 2600, 2037.5],
                    [1500, 2417.54, 1905.85],
                    [1500, 2000, 1775],
                    [1500, 1800, 1650]
                ];
                var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
                var barHeight = 50;

                let option = {
                    legend: {
                        show: true,
                        data: ['价格范围', '均值']
                    },
                    grid: {
                        top: 100
                    },
                    angleAxis: {
                        type: 'category',
                        data: cities
                    },
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            var id = params.dataIndex;
                            return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                        }
                    },
                    radiusAxis: {},
                    polar: {},
                    series: [{
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        data: data.map(function (d) {
                            return d[0];
                        }),
                        coordinateSystem: 'polar',
                        stack: '最大最小值',
                        silent: true
                    }, {
                        type: 'bar',
                        data: data.map(function (d) {
                            return d[1] - d[0];
                        }),
                        coordinateSystem: 'polar',
                        name: '价格范围',
                        stack: '最大最小值'
                    }, {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        data: data.map(function (d) {
                            return d[2] - barHeight;
                        }),
                        coordinateSystem: 'polar',
                        stack: '均值',
                        silent: true,
                        z: 10
                    }, {
                        type: 'bar',
                        data: data.map(function () {
                            return barHeight * 2
                        }),
                        coordinateSystem: 'polar',
                        name: '均值',
                        stack: '均值',
                        barGap: '-100%',
                        z: 10
                    }],

                };
                this.option2 = option;
            },
            charts_pie() {
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 274, name: '联盟广告'},
                                {value: 235, name: '视频广告'},
                                {value: 400, name: '搜索引擎'}
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function () {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
                this.option3 = option;
            }
        }
    }
    ;
</script>
<style scoped lang="less">
    #home {
        background-color: #f0f2f5;
        > .content {
            padding: 32px;

            .panel-group {
                margin-top: 18px;
                /*background-color: white;*/
            }
            .card {
                .icon {
                    width: 40px;
                    height: 40px;
                }
                .users {
                    color: #40c9c6;
                }
                .message {
                    color: #36a3f7;
                }
                .cny {
                    color: #f4516c
                }
                .shopping {
                    color: rgb(255, 109, 64);
                }
                .fa {
                    font-size: 40px;
                }
                .icon {
                    float: left;
                }
                .count-down {
                    line-height: 40px;
                }
                .count-down, .icon {
                    display: inline-block;
                }
                .num {
                    font-size: 18px;
                    font-weight: bolder;
                    color: #666;
                }
            }
            > .charts {
                margin-top: 20px;
                width: 100%;
                background-color: white;
            }
        }

    }
</style>
