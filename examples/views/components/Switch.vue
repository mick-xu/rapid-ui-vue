<template>
  <Article title="Switch 开关">
    <section>
      <Space>
        <Switch v-model="switchValue" shape="square"></Switch>
        <Switch v-model="switchValue" @onChange="change"></Switch>
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
          <td>modelValue</td>
          <td>绑定值</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>开关形状</td>
          <td>String</td>
          <td>circle, square</td>
          <td>circle</td>
        </tr>
      </Table>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import { ref } from "vue";
export default {
  components: { Article },
  setup() {
    const switchValue = ref(true);
    const change = (val) => {
      console.log(val);
    };
    return { switchValue, change };
  },
};
</script>

<style lang="less" scoped></style>
