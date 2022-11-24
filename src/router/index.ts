import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/demo.vue'),
      // children: [
      //   {
      //     path: '/demo:id',
      //     name: 'demo',
      //     component: () => import('../views/demo.vue'),
      //   }
      // ]
    }
  ]
})

export default router
