import { defineAsyncComponent } from "vue";

export const Comp1 = defineAsyncComponent({
  loader: () => import("./HelloWorld2.vue"),
});
