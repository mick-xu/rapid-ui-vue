<template>
  <Article title="Menu 菜单">
    <p></p>
    <section>
      <Menu>
        <MenuItem>首页</MenuItem>
        <MenuItem>新闻</MenuItem>
        <MenuItem>关于我们</MenuItem>
      </Menu>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
export default {
  name: "MenuPage",
  components: { Article },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
