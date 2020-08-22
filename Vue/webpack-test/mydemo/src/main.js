// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入jquery
import $ from "jquery"

// 导入bootstrap
import "bootstrap3/dist/css/bootstrap.min.css"
import "bootstrap3/dist/js/bootstrap.min.js"

Vue.config.productionTip = false
/* eslint-disable no-new */

$(function(){
    new Vue({
      el: '#app',
      data: {
        msg: 'Hello World'
      },
      router,
      components: { App },
      template: '<App/>'
    })
})
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin==true){
    console.log("需要登录才能进入")
    let user_info=localStorage.getItem("token");//登录状态
    console.log(user_info,5656)
    if(user_info){
      let user=JSON.parse(user_info)
      let roles=user.roles
      if(roles===true){
        next()
      }else{
        if(roles.indexOf(to.path)>-1){
          next()
        }else{
          next("/hello")
        }
      }


    }else{
      next("/login")
    }
  }else{
    console.log("不需要登录，欢迎查看")
    next()
  }

})
