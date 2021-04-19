<template>
  <div :class="classes" :style="styles"><slot /></div>
</template>

<script>
import { inject, computed } from "vue";
export default {
  name: "Col",
  props: {
    flex: {
      type: [String, Number],
      default: "",
    },
    offset: {
      type: [Number, String],
      default: 0,
    },
    span: [Number, String],
    xs: [Number, String],
    sm: [Number, String],
    md: [Number, String],
    lg: [Number, String],
    xl: [Number, String],
    xxl: [Number, String],
  },
  setup(props) {
    const { gutter } = inject("gutter", { gutter: { value: 0 } });
    const styles = computed(() => {
      const wrapPadding = gutter.value
        ? { paddingLeft: `${gutter.value / 2}px`, paddingRight: `${gutter.value / 2}px` }
        : {};
      return wrapPadding;
    });
    const classes = computed(() => {
      return ["rapid-col", { [`rapid-col-${props.span}`]: props.span }];
    });
    return { styles, classes };
  },
};
</script>

<style lang="less" scoped></style>
