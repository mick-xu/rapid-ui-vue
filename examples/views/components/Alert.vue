<template>
  <Article title="Alert 警告">
    <section>
      <Space direction="vertical">
        <Alert type="default" message="提示信息" />
        <Alert type="dark" message="提示信息" />
        <Alert type="info" message="提示信息" />
        <Alert type="success" message="提示信息" />
        <Alert type="warning" message="提示信息" />
        <Alert type="error" message="提示信息" />
      </Space>
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
          <td>type</td>
          <td>主题样式，适用于不同的场景</td>
          <td>String</td>
          <td>default, dark, info, success, warning, error</td>
          <td>default</td>
        </tr>
        <tr>
          <td>message</td>
          <td>内容</td>
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
