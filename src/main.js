import Vue from 'vue'
import App from './App.vue'
import { index } from './store'

Vue.config.productionTip = false

new Vue({
  store: index,
  render: h => h(App)
}).$mount('#app')
