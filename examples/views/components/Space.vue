<template>
  <Article title="Space 间距">
    <p>Space 可以使其内部组件自动产生间距，避免组件贴在一起</p>
    <section>
      <h3>横向排列</h3>
      <Space :size="10">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </Space>
      <h3>竖向排列</h3>
      <Space direction="vertical">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </Space>
      <h2>示例代码</h2>
      <Code>{{`<Space direction="vertical"> …… </Space>`}}</Code>
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
          <td>direction</td>
          <td>内部组件排列方向，间距方向</td>
          <td>String</td>
          <td>horizontal, vertical</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>size</td>
          <td>间距大小</td>
          <td>String, Number</td>
          <td>middle, small, 8, 16, 10px</td>
          <td>middle</td>
        </tr>
      </Table>
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

<style lang="less" scoped>
.block {
  width: 80px;
  height: 30px;
  background: #f0f0f0;
}
</style>
