<template>
  <Article title="Grid 栅格">
    <Row>
      <Col span="6"><div class="block-blue">col-6</div></Col>
      <Col span="6"><div class="block-blue">col-6</div></Col>
      <Col span="6"><div class="block-blue">col-6</div></Col>
      <Col span="6"><div class="block-blue">col-6</div></Col>
    </Row>
    <Code
      >{{`<Col span="6"><div class="block-blue">col-6</div></Col>\r\n<Col span="6"><div class="block-blue">col-6</div></Col>\r\n<Col span="6"><div class="block-blue">col-6</div></Col>\r\n<Col span="6"><div class="block-blue">col-6</div></Col>`}}</Code
    >
    <Row class="mt-16">
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="4"><div class="block-blue">col-4</div></Col>
      <Col span="12"><div class="block-blue">col-12</div></Col>
      <Col span="8"><div class="block-blue">col-8</div></Col>
    </Row>
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

<style lang="less" scoped>
.block-blue {
  background: #1890ff;
  height: 30px;
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
</style>
