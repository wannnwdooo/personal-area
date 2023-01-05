import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/NewsPage.vue"),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/pages/CreatePage.vue"),
    meta: {
      layout: MainLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
