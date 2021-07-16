$(document).ready(function () {
    $.ajax({
        url: "/bigscreen/bitable/list",
        success: function (result) {
            var bar_chart_data = result.data[0].jsonValue;
            var pie_chart_data = result.data[1].jsonValue;
            var line_chart_data = result.data[2].jsonValue;
            var map_chart_data = result.data[3].jsonValue;

            makeBarChart(bar_chart_data);
            makeLineChart(line_chart_data);
            makePieChart(pie_chart_data);
            makeMapChart(map_chart_data);
        }
    });
});

// @See https://www.makeapie.com/explore.html

// 柱状图模块1
// @See https://www.makeapie.com/editor.html?c=xOG__JYYH-
// @See https://www.makeapie.com/editor.html?c=x_yc-XqP1L
var makeBarChart = function (bar_chart_data) {
    /*{
        "xAxis": [
            "地中海贫血",
            "遗传性甲减",
            "遗传性耳聋",
            "脊肌萎缩症"
        ],
        "series": [
            {
                "data": [
                    5516,
                    4612,
                    4756,
                    5385
                ],
                "name": "未携带突变样本"
            },
            {
                "data": [
                    155,
                    1059,
                    915,
                    286
                ],
                "name": "携带突变样本"
            },
            {
                "data": [
                    "2.73",
                    "18.67",
                    "16.13",
                    "5.04"
                ],
                "name": "携带率"
            }
        ]
    }*/
    var xData = jQuery.parseJSON(bar_chart_data);
    var data3 = [];
    xData.series[2].data.forEach(item => {
        item = item.slice(0, -1);
        data3.push(item);
    });

    // 1.指定配置项和数据
    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                textStyle: {
                    color: "#fff"
                }
            }
        },
        // 修改图表位置大小
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        /*
        legend: {
            data: [xData.series[0].name, xData.series[1].name, xData.series[2].name],
            top: "2%",
            textStyle: {
                color: "#1FC3CE",
                fontSize: 14
            }
        },
        */
        calculable: true,
        // x轴相关配置
        xAxis: [{
            type: "category",
            // x轴样式显示
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    // color: 'rgba(255,255,255,.5)'
                    color: "#3d5269",
                    width: 1
                }
            },
            // 修改刻度标签，相关样式
            axisLabel: {
                show: true,
                textStyle: {
                    // color: "rgba(255,255,255,0.8)",
                    color: "#4c9bfb", //X轴文字颜色
                    fontSize: 14
                },
                interval: 0,
                // rotate: 30
            },
            axisTick: {
                show: true, //隐藏X轴刻度
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            data: xData.xAxis
        }],
        // y轴相关配置
        yAxis: [{
            type: "value",
            name: "样本例数",
            nameTextStyle: {
                color: "#396A87",
                fontSize: 14
            },
            // y轴分割线的颜色
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    // color: "rgba(255,255,255,0.1)"
                    color: "#3d5269"
                }
            },
            axisTick: {
                show: false
            },
            // y轴样式修改
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.6)",
                    width: 2
                }
            },
            // 修改刻度标签，相关样式
            axisLabel: {
                show: true,
                textStyle: {
                    // color: "rgba(255,255,255,0.6)",
                    color: "#4c9bfb",
                    fontSize: 14
                }
            }
        },
        {
            type: "value",
            name: "携带率",
            nameTextStyle: {
                color: "#396A87",
                fontSize: 14
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#396A87",
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#4c9bfb",
                    fontSize: 14
                }
            }
        }],
        series: [
            {
                name: xData.series[0].name,
                type: "bar",
                barWidth: 48,
                stack: "总量",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFFF"
                        },
                        {
                            offset: 1,
                            color: "#0080FF"
                        }
                        ])
                    }
                },
                data: xData.series[0].data,
            },
            {
                name: xData.series[1].name,
                type: "bar",
                barWidth: 48,
                stack: "总量",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#E29052"
                        },
                        {
                            offset: 1,
                            color: "#FA5A53"
                        }
                        ])
                    }
                },
                data: xData.series[1].data
            },
            {
                name: xData.series[2].name,
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 6, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#6c50f3",
                    borderColor: "#6c50f3",
                    width: 2,
                    shadowColor: "#6c50f3",
                    shadowBlur: 2
                },
                lineStyle: {
                    color: "#6c50f3",
                    width: 2,
                    shadowBlur: 2
                },
                data: data3
            },
        ]
    };

    // 2.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 3.把配置项给实例对象
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
};

// 折线图模块1
// @See https://www.makeapie.com/editor.html?c=xGooulPiFp
var makeLineChart = function (line_chart_data) {
    var xData = jQuery.parseJSON(line_chart_data);
    /*{
        "xAxis": [
            "2019",
            "2020",
            "2021"
        ],
        "series": [
            {
                "data": [
                    499,
                    4874,
                    298
                ],
                "name": "DNA"
            },
            {
                "data": [
                    0,
                    698,
                    251
                ],
                "name": "血浆"
            },
            {
                "data": [
                    0,
                    687,
                    205
                ],
                "name": "尿液"
            }
        ]
    }*/

    var option = {
        // 修改两条线的颜色
        color: ["#123dac", "#73e2e2", "#ff7e85", "#9b52ff", "#fac524", "#46caff", "#a1e867", "#10b2b2", "#ec87f7", "#f4905a", "#00baba", "#facf24", "#e89d67", "#23c6c6", "#fa8699", "#40b7fc", "#006d75", "#595959", "#f4764f", "#a640fc", "#fda23f", "#2d7ae4", "#5092ff", "#9351ed", "#8a89fe", "#df89e8", "#2797ff", "#6ad089", "#7c92e8 "],
        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            // 当serise 有name值时， legend 不需要写data
            // 修改图例组件文字颜色
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%',
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true, // 显示边框
            borderColor: '#012f4a' // 边框颜色
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, // 去除轴间距
            data: xData.xAxis,
            // 去除刻度线
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfb" // x轴文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: 'value',
            // 去除刻度线
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfb" // x轴文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true, // 圆滑的线
            name: xData.series[0].name,
            data: xData.series[0].data
        },
        {
            type: 'line',
            smooth: true, // 圆滑的线
            name: xData.series[1].name,
            data: xData.series[1].data
        },
        {
            type: 'line',
            smooth: true, // 圆滑的线
            name: xData.series[2].name,
            data: xData.series[2].data
        }
        ]
    };

    var myChart = echarts.init(document.querySelector(".line .chart"));
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })

    // 5.点击切换2020 和 2021 的数据
    $('.line h2 a').on('click', function () {
        // console.log($(this).index());
        // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 选中年份高亮
        $('.line h2 a').removeClass('a-active');
        $(this).addClass('a-active');

        // 需要重新渲染
        myChart.setOption(option);
    })
};

// 饼形图1
// @See https://www.makeapie.com/editor.html?c=xBjZTmZvaA
var makePieChart = function (pie_chart_data) {
    var xData = jQuery.parseJSON(pie_chart_data);
    /*{
        "data": [
            {
                "name": "DNA",
                "value": 5478
            },
            {
                "name": "血浆",
                "value": 949
            },
            {
                "name": "尿液",
                "value": 892
            }
        ],
        "name": "不同样本类型的例数与比例"
    }*/

    var option = {
        color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show: true,

        },
        legend: {
            type: "scroll",
            orient: 'vertical',
            left: '10%',
            align: 'left',
            top: 'middle',
            textStyle: {
                color: '#8C8C8C'
            },
            height: 150
        },
        series: [
            {
                name: xData.name,
                type: 'pie',
                // 饼形半径
                radius: [0, 60],
                data: xData.data
            }
        ]
    };

    var myChart = echarts.init(document.querySelector(".pie .chart"));
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
};

// 地图
// @See https://www.makeapie.com/editor.html?c=x1-bQDu00
// @See https://www.makeapie.com/editor.html?c=x0dK5jItt
var makeMapChart = function (map_chart_data) {
    var xData = jQuery.parseJSON(map_chart_data);
    /*{
        "title": {
            "text": "病例数",
            "subtext": "区域分布"
        },
        "series": [
            {
                "name": "北京",
                "value": 507
            },
            {
                "name": "天津",
                "value": 6
            },
            {
                "name": "重庆",
                "value": 37
            },
            {
                "name": "上海",
                "value": 1630
            },
            {
                "name": "香港",
                "value": 0
            },
            {
                "name": "澳门",
                "value": 0
            },
            {
                "name": "河北",
                "value": 31
            },
            {
                "name": "山西",
                "value": 14
            },
            {
                "name": "吉林",
                "value": 23
            },
            {
                "name": "辽宁",
                "value": 42
            },
            {
                "name": "黑龙江",
                "value": 45
            },
            {
                "name": "陕西",
                "value": 50
            },
            {
                "name": "甘肃",
                "value": 45
            },
            {
                "name": "青海",
                "value": 2
            },
            {
                "name": "山东",
                "value": 127
            },
            {
                "name": "福建",
                "value": 168
            },
            {
                "name": "浙江",
                "value": 550
            },
            {
                "name": "台湾",
                "value": 0
            },
            {
                "name": "河南",
                "value": 223
            },
            {
                "name": "湖北",
                "value": 120
            },
            {
                "name": "湖南",
                "value": 56
            },
            {
                "name": "江西",
                "value": 220
            },
            {
                "name": "江苏",
                "value": 856
            },
            {
                "name": "安徽",
                "value": 599
            },
            {
                "name": "广东",
                "value": 29
            },
            {
                "name": "海南",
                "value": 8
            },
            {
                "name": "四川",
                "value": 83
            },
            {
                "name": "贵州",
                "value": 74
            },
            {
                "name": "云南",
                "value": 29
            },
            {
                "name": "内蒙",
                "value": 13
            },
            {
                "name": "新疆",
                "value": 42
            },
            {
                "name": "宁夏",
                "value": 7
            },
            {
                "name": "广西",
                "value": 34
            },
            {
                "name": "西藏",
                "value": 1
            }
        ],
        "dataRange": {
            "max": 2000,
            "min": 0,
            "text": [
                "高",
                "低"
            ]
        }
    }*/

    var option = {
        tooltip: {
            triggerOn: "click",
            formatter: function (e, t, n) {
                var tooltipText = "";
                if (e.value !== e.value) {
                    tooltipText = e.seriesName + "<br />" + "无";
                }
                else {
                    tooltipText = e.seriesName + "<br />" + e.name + "：" + e.value;
                }
                return tooltipText;
            }
        },
        visualMap: {
            show: true,
            type: 'continuous',
            min: 0,
            max: xData.dataRange.max,
            right: '90%',
            text: xData.dataRange.text, // 文本，默认为数值文本
            calculable: true,
            inRange: {
                color: ['#24CFF4', '#2E98CA', '#1E62AC']
            },
            textStyle: {
                color: '#24CFF4'
            }
        },
        geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
                normal: {
                    show: !0,
                    fontSize: "14",
                    color: "rgba(0,0,0,0.7)"
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0,255,236,0.1)',
                    borderColor: 'rgba(118,237,236,1)'
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: [{
            name: xData.title.text,
            type: "map",
            geoIndex: 0,
            data: xData.series
        }]
    };

    var myChart = echarts.init(document.querySelector(".map .chart"));
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
};
