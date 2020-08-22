// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.meta.login_state === true){
    let user = localStorage.getItem('user');
    if (user){
      user = JSON.parse(user)
      if(user.rules.indexOf(to.path) > -1){
        next()
        localStorage.setItem('isVisit', '');
      }else {
        localStorage.setItem('isVisit', '你没有权限查看!!!')
        next()
      }
    }else{
      next('/login')
    }
  }else {
    next()
  }
})
