<template>
  <Article title="Switch 开关">
    <section>
      <Space>
        <Switch v-model="switchValue" shape="square"></Switch>
        <Switch v-model="switchValue" @onChange="change"></Switch>
      </Space>
      <h2>API</h2>
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
