import Main from "@/views/Main.vue";
import Components from "@/views/components/Index";

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
        component: Components,
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
        component: Components,
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
        path: "nav",
        name: "nav",
        title: "菜单导航",
        component: Components,
        children: [
          {
            path: "menu",
            name: "menu",
            title: "Menu 菜单",
            component: () => import("@/views/components/Menu"),
          },
          {
            path: "pagination",
            name: "pagination",
            title: "Pagination 分页",
            component: () => import("@/views/components/Pagination"),
          },
        ],
      },
      {
        path: "tips",
        name: "tips",
        title: "提示",
        component: Components,
        children: [
          {
            path: "alert",
            name: "alert",
            title: "Alert 警告",
            component: () => import("@/views/components/Alert"),
          },
          {
            path: "modal",
            name: "modal",
            title: "Modal 对话框",
            component: () => import("@/views/components/Modal"),
          },
        ],
      },
      {
        path: "display",
        name: "display",
        title: "展示",
        component: Components,
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
      {
        path: "form",
        name: "form",
        title: "表单输入",
        component: Components,
        children: [
          {
            path: "input",
            name: "input",
            title: "Input 输入框",
            component: () => import("@/views/components/Input"),
          },
        ],
      },
    ],
  },
];
