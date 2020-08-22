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
      redirect: "/index",
      children: [
        {
          path: "/navigation",
          name: 'navigation',
          component: () => import ("@/components/navigation"),
        },
      ]
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/components/index"),
      children: [
        {
          path:"/login",
          name: "login",
          component: () => import("@/components/login")
        },
        {
          path: "/userinfo",
          name: "userinfo",
          component: () => import("@/components/userinfo")
        },
        {
          path: "/swiper",
          name: "swiper",
          component: () => import("@/components/swiper")
        },
        {
          path: "/bubbling",
          name: "bubbling",
          component: () => import("@/components/bubbling")
        },
        {
          path: "/intersection",
          name: "intersection",
          component: () => import("@/components/intersection")
        },
        {
          path: "/reduction",
          name: "reduction",
          component: () => import("@/components/reduction")
        },
        {
          path: "/tree",
          name: "tree",
          component: () => import("@/components/tree")
        }
      ]
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/components/test")
    }

  ]
})
