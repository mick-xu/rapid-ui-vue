<template>
  <Article title="Input 输入框">
    <Row>
      <Col span="8"><Input v-model="inputValue" /><Code></Code></Col>
      <Col span="8"></Col>
      <Col span="8"></Col>
    </Row>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
import { ref } from "vue";
export default {
  name: "InputPage",
  components: { Article, Code },
  setup() {
    const inputValue = ref();
    return { inputValue };
  },
};
</script>

<style lang="less" scoped></style>
