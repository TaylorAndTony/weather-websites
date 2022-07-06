const App = {
    data() {
        return {
            title: 'Weather AIO',
            groups: [
                {
                    groupname: '中央气象台',
                    groupsite: [
                        {
                            name: '中央气象台',
                            site: 'http://www.nmc.cn/',
                            desc: '中央气象台的官方网站',
                            icon: 'img/i1.png'
                        },
                        {
                            name: '降水实况',
                            site: 'http://www.nmc.cn/publish/observations/hourly-precipitation.html',
                            desc: '降水实况',
                            icon: 'img/water.png'
                        },
                        {
                            name: '气温预报',
                            site: 'http://www.nmc.cn/publish/temperature/hight/24hour.html',
                            desc: '气温预报',
                            icon: 'img/temp.png'
                        },
                        {
                            name: '雷达图',
                            site: 'http://www.nmc.cn/publish/radar/chinaall.html',
                            desc: '可调类型的雷达图',
                            icon: 'img/radar.png'
                        },
                        {
                            name: '空气质量',
                            site: 'http://www.nmc.cn/publish/environment/air_pollution-24.html',
                            desc: '空气质量',
                            icon: 'img/air.png'
                        },
                        {
                            name: '台风',
                            site: 'http://www.nmc.cn/publish/typhoon/probability-img2.html',
                            desc: '预告台风路径图',
                            icon: 'img/ty.png'
                        },
                    ]
                },
                {
                    groupname: '中国天气网',
                    groupsite: [
                        {
                            name: '可视化地图',
                            site: 'http://www.weather.com.cn/radar/',
                            desc: '多功能可视化地图',
                            icon: 'img/map.png'
                        },
                        {
                            name: '雷达拼图',
                            site: 'http://www.weather.com.cn/radar/index2021.shtml',
                            desc: '常见的各类卫星拼图图片',
                            icon: 'img/radar.png'
                        },
                        {
                            name: '中长期天气预报',
                            site: 'http://products.weather.com.cn/yb.html?page=YB&type=YB_TQQS_10D',
                            desc: '更长时期持续预报',
                            icon: 'img/long.png'
                        },
                        {
                            name: '全国降水预报',
                            site: 'http://products.weather.com.cn/sk.html?page=YB&type=YB_JSL_024',
                            desc: '降水预报片',
                            icon: 'img/rain.png'
                        },
                    ]
                },
                {
                    groupname: '灾害天气',
                    groupsite: [
                        {
                            name: '实时台风卫星图',
                            site: 'http://typhoon.nmc.cn/web.html',
                            desc: '追踪台风的实景地图',
                            icon: 'img/satelite.png'
                        },
                        {
                            name: '实时台风地图',
                            site: 'http://typhoon.weather.com.cn/gis/typhoon_full.shtml',
                            desc: '追踪台风的政区图',
                            icon: 'img/map2.png'
                        },
                    ]
                },
                {
                    groupname: '其它',
                    groupsite: [
                        {
                            name: 'IBM 天气',
                            site: 'https://weather.com/zh-CN/weather/today/',
                            desc: 'IBM 天气数据源',
                            icon: 'img/ibm.png'
                        }
                    ]
                },
            ]
        }
    },
    mounted() {
    },
    methods: {
        handleClick(url) {
            console.log('handleClick', url);
            window.open(url);
        }
    }
};

const app = Vue.createApp(App);
const vm = app.mount('#app');