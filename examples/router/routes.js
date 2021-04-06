import Main from "../views/Main.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Main,
    children: [
      {
        path: "",
        name: "index",
        component: () => import("@/views/home/Index"),
      },
    ],
  },
];
