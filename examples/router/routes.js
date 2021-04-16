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
  {
    path: "/docs",
    name: "docs",
    component: Main,
    children: [
      {
        path: "_",
        name: "_docs",
        component: () => import("@/views/docs/Index"),
        children: [
          {
            path: "/started",
            name: "started",
            component: () => import("@/views/docs/Started"),
          },
          {
            path: "/changelog",
            name: "changelog",
            component: () => import("@/views/docs/ChangeLog"),
          },
        ],
      },
    ],
  },
  {
    path: "/components",
    name: "components",
    component: Main,
    children: [
      {
        path: "common",
        name: "common",
        title: "通用",
        component: () => import("@/views/components/Index"),
        children: [
          {
            path: "button",
            name: "button",
            title: "Button 按钮",
            component: () => import("@/views/components/Button"),
          },
          {
            path: "icons",
            name: "icons",
            title: "Icon 图标",
            component: () => import("@/views/components/Icons"),
          },
        ],
      },
      {
        path: "layouts",
        name: "layouts",
        title: "布局",
        component: () => import("@/views/components/Index"),
        children: [
          {
            path: "grid",
            name: "grid",
            title: "Grid 栅格",
            component: () => import("@/views/components/Grid"),
          },
          {
            path: "layout",
            name: "layout",
            title: "Layout 布局",
            component: () => import("@/views/components/Layout"),
          },
        ],
      },
      {
        path: "display",
        name: "display",
        title: "展示",
        component: () => import("@/views/components/Index"),
        children: [
          {
            path: "card",
            name: "card",
            title: "Card 卡片",
            component: () => import("@/views/components/Card"),
          },
          {
            path: "carousel",
            name: "carousel",
            title: "Carousel 走马灯",
            component: () => import("@/views/components/Carousel"),
          },
          {
            path: "focus",
            name: "focus",
            title: "Focus 焦点图",
            component: () => import("@/views/components/Focus"),
          },
        ],
      },
    ],
  },
];
