<template>
  <Article title="Container 响应式容器">
    <p>
      Container
      组件会通过媒体查询根据不同的设备自动调整宽度，用来设置网页宽度，创建响应式界面
    </p>
    <section>
        <Code>{{"<Container> …… </Container>"}}</Code>
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
