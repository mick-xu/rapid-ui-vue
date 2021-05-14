<template>
  <Article title="Message 消息">
    <p></p>
    <section>
      <Button @click="clickHandler">消息</Button>
      <Message></Message>
      <Code></Code>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
export default {
  components: { Article, Code },
  setup() {
    const clickHandler = () => {};
    return { clickHandler };
  },
};
</script>

<style lang="less" scoped></style>
