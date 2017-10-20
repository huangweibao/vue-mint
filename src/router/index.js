import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Index from '@/components/index/index'
import MyMine from '@/components/my-mine/my-mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {path: '/index',component: Index},
        {path: '/index/MyMine',component: MyMine}
      ]
    },
    {
      path: '/MyMine',
      name: 'MyMine',
      component: MyMine
    },
  ]
})
