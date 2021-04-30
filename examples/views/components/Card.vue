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
          <td>bordered</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </Table>
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
