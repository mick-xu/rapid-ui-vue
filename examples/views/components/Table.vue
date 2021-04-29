<template>
  <Article title="Table 表格">
    <section>
      <Table bordered stripe :cloumns="cloumns" :data="data"></Table>
      <h2>示例代码</h2>
      <Code :code="code"></Code>
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
          <td>是否显示外边框和列边框</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>cloumns</td>
          <td>列定义</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>data</td>
          <td>表格数据</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>size</td>
          <td>表格单元格规格</td>
          <td>String</td>
          <td>default, small</td>
          <td>default</td>
        </tr>
        <tr>
          <td>stripe</td>
          <td>表格行是否显示斑马线效果</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
      </Table>
      <h2>Columns API</h2>
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
          <td>key</td>
          <td>对应 data 中的属性名</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>列头标题</td>
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
import Code from "@c/Code";
export default {
  name: "TablePage",
  components: { Article, Code },
  setup() {
    const cloumns = [
      { title: "id", key: "id" },
      { title: "姓名", key: "name" },
      { title: "性别", key: "gender" },
      { title: "手机号", key: "mobile" },
      { title: "地址", key: "address" },
    ];
    const data = [
      {
        id: 1,
        name: "李晓明",
        gender: "男",
        mobile: "15067236988",
        address: "济南市历下区新泺大街1766号",
      },
      {
        id: 2,
        name: "白晶晶",
        gender: "女",
        mobile: "17667236933",
        address: "济南市历下区新泺大街1766号",
      },
    ];
    const code =
      '<template>\n\
    <Table bordered stripe :cloumns="cloumns" :data="data">\n\
    </Table>\n\
<template>\n\r\
';

    return { code, cloumns, data };
  },
};
</script>

<style lang="less" scoped></style>
