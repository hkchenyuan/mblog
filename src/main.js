// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import router from './router'
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import flexible from 'amfe-flexible'

Vue.use(MintUI)
Vue.use(flexible)
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://test.youshikongjian.com';
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
