import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

// 引入全局utils/global
import global from '@/utils/global';
Vue.use(ElementUI)
Vue.use(global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
