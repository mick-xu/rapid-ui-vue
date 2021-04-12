<template>
  <Layout>
    <Header>
      <Container>
        <Row align="middle" justify="space-between">
          <Col><div class="logo">Rapid UI</div></Col>
          <Col>
            <Menu>
              <MenuItem>文档</MenuItem>
              <MenuItem>组件</MenuItem>
            </Menu>
          </Col>
        </Row>
      </Container>
    </Header>
    <Layout>
      <Container>
        <Sider style="background: #f7f7f7">
          <Menu mode="vertical">
            <MenuGroup title="通用">
              <MenuItem>按钮</MenuItem>
              <MenuItem>Icon 图标</MenuItem>
            </MenuGroup>
            <MenuGroup title="布局">
              <MenuItem>Grid 栅格</MenuItem>
              <MenuItem>Layout 布局</MenuItem>
            </MenuGroup>
            <MenuGroup title="展示">
              <MenuItem>Card 卡片</MenuItem>
              <MenuItem>Carousel 走马灯</MenuItem>
              <MenuItem>Focus 焦点图</MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Content><router-view /></Content>
      </Container>
    </Layout>
    <Footer></Footer>
  </Layout>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {});
    return {};
  },
};
</script>

<style lang="less" scoped>
.logo {
  font-size: 16px;
}
</style>
