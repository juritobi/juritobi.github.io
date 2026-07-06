import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/MainView.vue";
import Copperfield from "@/views/CopperfieldView.vue";
import Katto from "@/views/KattoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AboutView,
  },
  {
    path: "/katto",
    name: "katto",
    component: Katto,
  },
  {
    path: "/copperfield",
    name: "copperfield",
    component: Copperfield,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 30 };
    } else {
      return savedPosition || { top: 0 };
    }
  },
});
export default router;
