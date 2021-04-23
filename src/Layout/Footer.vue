<template>
  <div :class="classes" :style="styles">
    <slot> </slot>
  </div>
</template>

<script>
const prefixCls = "layout-footer";
import { computed } from "vue";
export default {
  name: "Footer",
  props: {
    className: {
      type: String,
      default: "",
    },
    style: { type: [Object, String], default: () => {} },
  },
  setup(props) {
    const classes = computed(() => {
      return [`${prefixCls}`, `${props.className}`];
    });
    const styles = computed(() => props.style);
    return {
      classes,
      styles,
    };
  },
};
</script>

<style lang="less" scoped></style>
