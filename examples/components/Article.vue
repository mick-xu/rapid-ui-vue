<template>
  <article class="article-contianer">
    <h1>{{ title }}</h1>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.article-contianer {
  padding-left: 46px;
}
</style>
