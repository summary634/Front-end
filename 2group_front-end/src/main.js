// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import echarts from 'echarts'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/assets/css/public.css'
import '@/assets/font/iconfont.css'

Vue.prototype.$echarts = echarts
//axios.defaults.withCredentials=true
Vue.prototype.$axios=axios
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
