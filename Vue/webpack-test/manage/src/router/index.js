import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入jquery
import $ from "jquery"
import "bootstrap3/dist/css/bootstrap.min.css"
import "bootstrap3/dist/js/bootstrap.min"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta:{
        isLogin: true
      },
      component: () => import("@/components/index")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/login")
    },
    {
      path: "/navigation",
      name: "navigation",
      component: () => import("@/components/navigation"),
      children: [
        {
          path: "/show/:id",
          name: "show",
          component: () => import("@/components/show"),
        },
        {
          path: "/notpri",
          name: "not",
          component: () => import("@/components/notpri"),
        },
      ],
    },

  ]
})
