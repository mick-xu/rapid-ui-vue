<template>
  <Article title="Breadcrumb 面包屑">
    <p>网站面包屑组件</p>
    <section>
      <Breadcrumb>
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>新闻</BreadcrumbItem>
        <BreadcrumbItem>详情</BreadcrumbItem>
      </Breadcrumb>
      <Code></Code>
    </section>
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
