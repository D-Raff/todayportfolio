import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/ResumeView')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('@/views/TestimonialsView')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/views/WorkView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
