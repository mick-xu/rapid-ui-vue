<template>
  <Article title="Alert 警告">
    <Space direction="vertical">
      <Alert type="default" message="提示信息" />
      <Alert type="dark" message="提示信息" />
      <Alert type="info" message="提示信息" />
      <Alert type="success" message="提示信息" />
      <Alert type="warning" message="提示信息" />
      <Alert type="error" message="提示信息" />
    </Space>
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
