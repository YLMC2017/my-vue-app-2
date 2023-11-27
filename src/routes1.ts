export default [
  {
    name: "Test1",
    path: "/test1",
    component: () => import("@/components/HelloWorld.vue"),
    redirect: "/test1/test2",
    children: [
      {
        name: "Test2",
        path: "/test1/test2",
        component: () => import("@/components/HelloWorld2.vue"),
      },
    ],
  },
];
