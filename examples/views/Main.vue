<template>
  <Layout>
    <Header></Header>
    <Layout>
      <Sider></Sider>
      <Content><router-view /></Content>
    </Layout>
    <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
