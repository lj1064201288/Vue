import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: ()=> import("@/components/login")
    },
    {
      path: "/admin",
      name: "admin",
      component: ()=> import("@/components/admin"),
      meta: {
        login_state: true
      },
      children: [
        {
          path: "/manage",
          name: "manage",
          meta: {
            login_state: true
          },
          component: ()=> import("@/components/manage"),
        },
        {
          path: "/role",
          name: "role",
          meta: {
            login_state: true
          },
          component: () => import("@/components/role"),
        }
      ]
    },

  ]
})
