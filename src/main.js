import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Trend from "vuetrend"

import './plugins/element.js'
import './assets/styles.css'

Vue.use(Trend)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
