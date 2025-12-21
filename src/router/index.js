import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import AboutVueView from '@/views/AboutVueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "start",
        component: HomeView

    },
    {
        path: "/movies",
        name: "filmer",
        component: MoviesView
    },
    {
      path: "/aboutvue",
      name: "om vue",
      component: AboutVueView,
    },
  ],
})

export default router
