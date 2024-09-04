import HomePage from "pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      { path: "", component: () => import("pages/HomePage.vue") }, // 更新這裡
      // 添加更多路由...
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
