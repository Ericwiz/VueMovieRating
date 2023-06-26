import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/CatalogView.vue"),
      props: (route) => ({ page: parseInt(route.query.page) } || 1)
    },

    {
      path: "/catalog/:id",
      name: "movie.details",
      component: () => import("../views/MovieDetailsView.vue"),
      props: (routes) => ({ id: routes.params.id })
    }
  ]
});

export default router;
