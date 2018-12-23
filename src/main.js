import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
