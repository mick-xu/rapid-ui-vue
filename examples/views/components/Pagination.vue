<template>
  <Article title="Pagination 分页">
    <p></p>
    <section>
      <Pagination :total="50" />
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
          <td>current</td>
          <td>当前页</td>
          <td>Number</td>
          <td>正整数</td>
          <td>1</td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>每页数据条数</td>
          <td>Number</td>
          <td>正整数</td>
          <td>10</td>
        </tr>
        <tr>
          <td>total</td>
          <td>总数据条数</td>
          <td>Number</td>
          <td>正整数</td>
          <td>-</td>
        </tr>
      </Table>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
export default {
  name: "PaginationPage",
  components: { Article },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
