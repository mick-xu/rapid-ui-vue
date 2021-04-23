<template>
  <div :class="classes"></div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Carousel",
  props: {},
  setup() {
    const classes = computed(() => {
      return ["carousel"];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
