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
          <td>size</td>
          <td>按钮大小</td>
          <td>String</td>
          <td>large, middle, small</td>
          <td>middle</td>
        </tr>
        <tr>
          <td>type</td>
          <td>按钮类型</td>
          <td>String</td>
          <td>default, info, success, warning, danger, text</td>
          <td>default</td>
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

<style lang="less" scoped></style>
