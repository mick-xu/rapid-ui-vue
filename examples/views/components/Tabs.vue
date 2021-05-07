<template>
  <Article title="Tabs 标签页">
    <section>
      <Tabs>
        <TabPane title="标签一">内容一</TabPane>
        <TabPane title="标签名称二">内容二</TabPane>
        <TabPane title="标签三">内容三</TabPane>
      </Tabs>
    </section>
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

<style lang="less" scoped></style>
