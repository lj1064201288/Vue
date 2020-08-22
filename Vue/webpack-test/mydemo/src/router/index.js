import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableData from '@/components/TableData'
import Subject from  "@/components/subject"
import home from "@/components/home"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,

    },
    {
      path:"/",
      name:"father",
      // redirect:"/home",
      component:()=>import("@/components/father"),
      children:[
        {
          path:"/home",
          name:"homes",
          meta:{
            isLogin:true,
          },
          component:home
        },
        {
          path:"/list",
          name:"lists",
          meta:{
            isLogin:true,
          },
          component:()=>import("@/components/list")
        },
        {
          path:"/son",
          name:"son",
          meta:{
            isLogin:true,
          },
          component:()=>import("@/components/son")
        },
      ]
    },

    {
      path:"/login",
      name:"login",
      component:()=>import("@/components/login")
    }
  ]
})
