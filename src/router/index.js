import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../pages/login/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/index/index.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../pages/shop/shop.vue')
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('../pages/training/training.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/profile/profile.vue')
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('../pages/album/album.vue')
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import('../pages/health/health.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router