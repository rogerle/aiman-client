import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/Home.vue'

//定义转跳的各个页面
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
