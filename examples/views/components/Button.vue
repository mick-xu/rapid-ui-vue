<template>
  <Article title="Button 按钮">
    <p></p>
    <section>
      <h2>代码演示</h2>
      <Button>按钮</Button>
      <Button type="info">按钮</Button>
      <Button type="success">按钮</Button>
      <Button type="warning">按钮</Button>
      <Button type="danger">按钮</Button>
      <Code>
        {{ '<Button>按钮</Button>\r\n\<Button type="info">按钮</Button>\r\n\<Button type="success">按钮</Button>\r\n\<Button type="warning">按钮</Button>\r\n\<Button type="danger">按钮</Button>' }}
      </Code>
      <Button type="info" size="large">按钮</Button>
      <Button type="info" size="middle">按钮</Button>
      <Button type="info" size="small">按钮</Button>
      <Code>
        {{`<Button type="info" size="large">按钮</Button>\r\n<Button type="info" size="middle">按钮</Button>\r\n<Button type="info" size="small">按钮</Button>`}}
      </Code>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
export default {
  components: { Article, Code },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
