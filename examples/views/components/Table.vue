<template>
  <Article title="Table 表格">
    <section>
      <Table></Table>
      <h2>示例代码</h2>
      <Code></Code>
      <h2>API</h2>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
export default {
  name: "TablePage",
  components: { Article, Code },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
