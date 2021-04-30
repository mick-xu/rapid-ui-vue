<template>
  <Article title="Modal 对话框">
    <section>
      <Button @onClick="clickHandler">弹出对话框</Button>
      <Modal title="标题" v-model="visible"></Modal>
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
          <td>mask</td>
          <td>是否显示遮罩层</td>
          <td>Boolen</td>
          <td>true, false</td>
          <td>true</td>
        </tr>
        <tr>
          <td>modelValue</td>
          <td>是否显示弹窗</td>
          <td>Boolen</td>
          <td>true, false</td>
          <td>-</td>
        </tr>
        <tr>
          <td>style</td>
          <td>样式</td>
          <td>String, Object</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>弹窗标题</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>弹窗宽度</td>
          <td>String, Number</td>
          <td>100, 100px, 100% 等</td>
          <td>520</td>
        </tr>
      </Table>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import { ref } from "vue";
export default {
  name: "ModalPage",
  components: { Article },
  setup() {
    const visible = ref(false);
    const clickHandler = () => {
      visible.value = true;
    };

    return { visible, clickHandler };
  },
};
</script>

<style lang="less" scoped></style>
