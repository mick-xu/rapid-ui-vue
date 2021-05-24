# Rapid UI

### 快速创建响应式网站的 UI 库，适用于企业站、商城、论坛、博客等互联网 Web 项目，支持移动端

## 安装
```bash
npm install rapid-ui-vue --save (0.0.8 之前版本)

npm install rapid-vui --save (0.0.8 之后版本)
```

```bash
yarn add rapid-ui-vue (0.0.8 之前版本)

yarn add rapid-vui (0.0.8 之后版本)
```

## 演示
[演示地址](http://nas.devaid.cn:8084/components/common/button)

## 示例

打开 main.js 文件

```jsx
import { createApp } from "vue";
import App from "./App.vue";
import RapidUI from "rapid-vui";
import 'rapid-ui-vue/lib/rapid-ui.css' // 引入样式

createApp(App)
  .use(RapidUI)
  .mount("#app");
```



