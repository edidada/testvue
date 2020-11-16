import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import global_ from './Global'

import  VueResource  from 'vue-resource'

Vue.use(VueResource)
Vue.prototype.GLOBAL=global_
axios.defaults.baseURL=global_.BASE_URL

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
