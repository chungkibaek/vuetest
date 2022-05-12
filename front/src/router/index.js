import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import board from './board.js'
import user from './user.js'
import sample from './sample.js'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import("../views/AboutView.vue"),
  },
  ...board,
  ...user,
  ...sample
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
