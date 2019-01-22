import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

// 引入资源发送ajax
// import VueResource from 'vue-resource'
// // 注册
// Vue.use(VueResource)

// 引入 axios                                                                   
import axios from 'axios'
// 挂载
Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://localhost:5000/';
// // 全局启用emulateJsON 选项
Vue.options.emulateJSON = true

Vue.config.productionTip = false

// 引入 过滤器
import moment from 'moment'
Vue.use(moment)

Vue.filter('tiem', (data, arg = 'YYYY-MM-DD HH:mm:ss') => {
  return moment().format(arg)

})

// 头部 vant 引入
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Tabs,
  Lazyload,
  Stepper
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Card)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Stepper)

new Vue({
  el: '#app',
  // 挂载vuex
  store,
  //  6.挂载
  router,
  render: c => c(App)
})
