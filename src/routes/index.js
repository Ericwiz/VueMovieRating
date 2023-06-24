import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
      props: (routes) => ({ page: routes.query.page })
    },

    {
      path: '/catalog/:id',
      name: 'movie.details',
      component: () => import('../views/MovieDetails.vue'),
      props: (routes) => ({ id: routes.params.id })
    },

    {
      path: '/my-movie-lists',
      name: 'myMovie.lists',
      component: () => import('../views/CustomMovieList.vue'),
    },
  ]
})

export default router
