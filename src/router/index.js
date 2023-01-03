import { createRouter, createWebHistory } from "vue-router";
import AllNews from "@/views/AllNews.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AllNews,
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/CreateView.vue"),
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
