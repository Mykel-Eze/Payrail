import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'jquery'

import 'fullpage.js/dist/fullpage.min.css'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false;

Vue.use(LottieVuePlayer);
Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
