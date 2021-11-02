import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'jquery'

Vue.config.productionTip = false;

Vue.use(LottieVuePlayer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
