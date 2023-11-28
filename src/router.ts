import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/test/"),
  routes: [],
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
