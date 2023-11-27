import { createRouter, createWebHistory } from "vue-router";
import routes1 from "./routes1";

const routes = [
  {
    path: "/",
    redirect: "/test1",
  },
  ...routes1,
];

const router = createRouter({
  history: createWebHistory("/test/"),
  scrollBehavior: () => ({ top: 0 }),
  routes,
});

export default router;
