<template>
  <Article title="Layout 布局">
    <Layout>
      <Header class="block-grey p-16">Header</Header>
      <Content class="block-gray p-16" style="height: 100px">Content</Content>
      <Footer class="block-grey">Footer</Footer>
    </Layout>
  </Article>
</template>

<script>
import Article from "@c/Article";
export default {
  components: { Article },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.block-gray {
  background: #f7f7f7;
}
.block-grey {
  background: #f0f0f0;
}
</style>
