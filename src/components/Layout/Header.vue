<template>
  <div :class="wrapClass"><slot /></div>
</template>

<script>
const prefixCls = "layout-header";
import { computed } from "vue";
export default {
  name: "Header",
  props: {
    className: {
      type: String,
      default: "",
    },
    style: Object,
  },
  setup(props) {
    const wrapClass = computed(() => {
      return [`${prefixCls}`, `${props.className}`];
    });
    return { wrapClass };
  },
};
</script>

<style lang="less" scoped></style>
