<template>
  <Article title="Card 卡片">
    <p></p>
    <section>
      <h2>代码演示</h2>
      <Row>
        <Col span="12">
          <Card title="Card 卡片">
            <p style="margin: 0">Card content</p>
            <p style="margin: 0">Card content</p>
            <p style="margin: 0">Card content</p>
          </Card>
        </Col>
        <Col span="12"><Card title="Card 卡片"></Card></Col>
      </Row>
    </section>
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
