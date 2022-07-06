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
                            desc: '中央气象台的官方网站'
                        },
                        {
                            name: '降水实况',
                            site: 'http://www.nmc.cn/publish/observations/hourly-precipitation.html',
                            desc: '降水实况'
                        },
                        {
                            name: '气温预报',
                            site: 'http://www.nmc.cn/publish/temperature/hight/24hour.html',
                            desc: '气温预报'
                        },
                        {
                            name: '雷达图',
                            site: 'http://www.nmc.cn/publish/radar/chinaall.html',
                            desc: '雷达图'
                        },
                        {
                            name: '空气质量',
                            site: 'http://www.nmc.cn/publish/environment/air_pollution-24.html',
                            desc: '空气质量'
                        },
                        {
                            name: '台风',
                            site: 'http://www.nmc.cn/publish/typhoon/probability-img2.html',
                            desc: '台风'
                        },
                    ]
                },
                {
                    groupname: '中国天气网',
                    groupsite: [
                        {
                            name: '可视化地图',
                            site: 'http://www.weather.com.cn/radar/',
                            desc: '中国天气网的多功能可视化地图'
                        }
                    ]
                }
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