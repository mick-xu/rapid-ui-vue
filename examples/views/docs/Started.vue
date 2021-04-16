<template>
  <Article title="快速上手">
    <p>
      Rapid UI 是适用于 Vue 3 的 UI
      组件库，内置丰富的网站组件，适合快速搭建前台网站界面和网站原型。
    </p>
    <h2>安装</h2>
    <Code>$ npm install rapid-ui-vue --save</Code>
    <Code>$ yarn add rapid-ui-vue</Code>
    <h2>使用</h2>
    <p>打开 mian.js 文件</p>
    <Code>
      import { createApp } from "vue";<br />
      import App from "./App.vue";<br />
      import RapidUI from "rapid-ui-vue"; <br />
      <br />
      createApp(App) <br /> .use(RapidUI)<br /> .mount("#app");
    </Code>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
export default {
  components: { Article, Code },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
