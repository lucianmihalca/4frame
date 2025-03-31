import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/show/:id",
      name: "show-detail",
      component: () => import("../views/ShowDetailView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie-detail",
      component: () => import("../views/MovieDetailView.vue"),
    },
    {
      path: "/movies/now-playing",
      name: "now-playing",
      component: () => import("../views/NowPlayingView.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/MoviesView.vue"),
    },
    {
      path: "/tv-shows",
      name: "tv-shows",
      component: () => import("../views/TvShowsView.vue"),
    },
    {
      path: "/movies/popular",
      name: "popular",
      component: () => import("../views/PopularView.vue"),
    },
    {
      path: "/movies/top-rated",
      name: "top-rated",
      component: () => import("../views/TopRatedView.vue"),
    },

    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
