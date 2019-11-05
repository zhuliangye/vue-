// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//// 引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "../../my-project/src/store/store";

// 使用element UI
Vue.use(ElementUI);
Vue.config.productionTip = false

//引入后台访问数据组件
import axios from 'axios'
Vue.prototype.$axios=axios

//使用bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//引入自定义组件
import {changeColor,changeFontStyle} from './directive/changeColor'
import Upper from './filter/toUpperCase'
import dateFormat from './filter/dateFormat'

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入百度地图
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'CH8dbDKYVMZPIjXnd2SB2DlTAWksWDyh'
});

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
