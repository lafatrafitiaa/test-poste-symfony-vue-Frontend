// Composables
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/Message.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/Inscription.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
