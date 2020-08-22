// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
});


router.beforeEach((to, from, next) =>{
  console.log(to,444);
  if (to.meta.isLogin == true){
    let state = JSON.parse(sessionStorage.getItem("user"));
    if (state){
      next()
    }else{
      next('/login')
    }
  }else {
    next()
  }
  if (to.name == "show"){
    if (JSON.parse(sessionStorage.getItem("user")).author == 0){
      if (to.query.id == 1 || to.query.id == 3){
        next()
      }else{
        next("/notpri")
      }
    }
    if (JSON.parse(sessionStorage.getItem("user")).author == 1){
      if (to.query.id == 2 || to.query.id == 4){
        next()
      }else{
        next("/notpri")
      }
    }
  }
})
