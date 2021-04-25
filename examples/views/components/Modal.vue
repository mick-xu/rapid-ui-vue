<template>
  <Article title="Modal 对话框">
    <section>
      <Button @onClick="clickHandler">弹出对话框</Button>
      <Modal title="标题" v-model="visible"></Modal>
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
