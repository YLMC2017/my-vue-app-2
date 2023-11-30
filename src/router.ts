import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "./components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory("/test/"),
  routes: [
    {
      path: "/",
      component: HelloWorldVue,
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
