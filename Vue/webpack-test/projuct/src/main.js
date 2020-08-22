// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from "jquery"
import "bootstrap3/dist/css/bootstrap.min.css"
import "bootstrap3/dist/js/bootstrap.min"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
router.beforeEach((to, from, next) => {
  if (to.meta.loginState == true){
    let login_statue=localStorage.getItem("loginState");//登录状态
    if (login_statue == 'true'){
      next()
    }else{
      console.log("需要登录才能进入");
      next("/login")
    }
  }else{
    next()
  }
})
