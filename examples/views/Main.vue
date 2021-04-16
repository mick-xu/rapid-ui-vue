<template>
  <Layout>
    <Header>
      <Container>
        <Row align="middle" justify="space-between">
          <Col><div class="logo">Rapid UI</div></Col>
          <Col>
            <Menu @onClick="handleClick">
              <MenuItem name="started">文档</MenuItem>
              <MenuItem name="common">组件</MenuItem>
            </Menu>
          </Col>
        </Row>
      </Container>
    </Header>
    <Container>
      <Layout>
        <router-view />
      </Layout>
    </Container>
    <Footer></Footer>
  </Layout>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const handleClick = (name) => {
      router.push({ name: name });
    };
    return { handleClick };
  },
};
</script>

<style lang="less" scoped>
.logo {
  font-size: 16px;
}
</style>
