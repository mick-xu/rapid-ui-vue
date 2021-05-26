<template>
  <Article title="Menu 菜单">
    <p></p>
    <section>
      <Row>
        <Col span="24">
          <Menu style="font-size:16px">
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
      <h2>API</h2>
      <Table>
        <template #header>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </template>
        <tr>
          <td>mode</td>
          <td>菜单排列模式</td>
          <td>String</td>
          <td>horizontal, vertical</td>
          <td>horizontal</td>
        </tr>
      </Table>
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
