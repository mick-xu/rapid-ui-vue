<template>
  <Article title="Pagination 分页">
    <p></p>
    <section>
      <Pagination :total="50" />
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
export default {
  name: "PaginationPage",
  components: { Article },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
