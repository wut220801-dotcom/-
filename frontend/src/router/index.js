import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import AlgorithmPage from '../views/AlgorithmPage.vue'
import HomeView from '../views/HomeView.vue'
import { routes } from '../data/algorithmCatalog'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        ...routes.map((route) => ({
          path: route.path,
          name: route.name,
          component: AlgorithmPage,
        })),
      ],
    },
  ],
})

export default router
