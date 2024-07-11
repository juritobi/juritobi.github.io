import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/MainView.vue";
import Copperfield from "@/views/CopperfieldView.vue";
import Katto from "@/views/KattoView.vue";

const routes = [
  {
    path: "/",
    component: AboutView,
  },
  {
    path: "/katto",
    component: Katto,
  },
  {
    path: "/copperfield",
    component: Copperfield,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
