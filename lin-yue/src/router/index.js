import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index', // 首页路由
      name: 'index',// 首页名字
      component: () => import('../components/index/index.vue')
    },
    {
      path: '/member', // 首页路由
      name: 'member',// 首页名字
      component: () => import('../components/member/member.vue')
    },
    {
      path: '/order', // 首页路由
      name: 'order',// 首页名字
      component: () => import('../components/order/order.vue')
    },
    {
      path: '/my', // 首页路由
      name: 'my',// 首页名字
      component: () => import('../components/my/my.vue')
    }
  ]
})
