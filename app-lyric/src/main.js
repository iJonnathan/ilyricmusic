import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-lazy-youtube-video/dist/style.simplified.css";

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
