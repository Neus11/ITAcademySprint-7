import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/servicio',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue')
    
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
