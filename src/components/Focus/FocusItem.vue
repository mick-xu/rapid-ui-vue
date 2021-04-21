<template>
  <div class="focus-item" v-show="display"><slot /></div>
</template>

<script>
import { toRefs, watchEffect } from "vue";
export default {
  name: "FocusItem",
  props: {
    visible: { type: Boolean, default: false },
  },
  setup(props) {
    const { display } = toRefs(props);
    watchEffect(() => {});
    return { display };
  },
};
</script>

<style lang="less" scoped></style>
