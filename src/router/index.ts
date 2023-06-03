import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'
import Layout from '../views/layout/index.vue'
import Home from '../views/home/home.vue'
import Talker from '../views/aitalker/talker.vue'
import My from '../views/my/my.vue'

//定义转跳的各个页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: "",
        name: 'home',
        component: Home

      },
      {
        path: '/talker',
        name: 'talker',
        component: Talker
      },
      {
        path: '/my',
        name: 'my',
        component: My
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
