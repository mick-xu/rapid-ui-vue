<template>
  <Article title="Menu 菜单">
    <p></p>
    <section>
      <Row>
        <Col span="24">
          <Menu>
            <MenuItem>首页</MenuItem>
            <MenuItem>新闻</MenuItem>
            <MenuItem>关于我们</MenuItem>
          </Menu>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Menu mode="vertical">
            <MenuItem>首页</MenuItem>
            <MenuItem>新闻</MenuItem>
            <MenuItem>关于我们</MenuItem>
          </Menu>
        </Col>
      </Row>
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
