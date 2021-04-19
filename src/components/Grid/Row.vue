<template>
  <div class="rapid-row" :class="classes" :style="styles"><slot /></div>
</template>

<script>
import { computed, provide } from "vue";
const prefixCls = "rapid";
export default {
  name: "Row",
  props: {
    align: {
      type: String,
      default: "top",
      validator: (val) => {
        return ["top", "middle", "bottom"].includes(val);
      },
    },
    gutter: {
      type: [Number, Object, Array],
      default: 16,
    },
    justify: {
      type: String,
      default: "start",
      validator: (val) => {
        return ["start", "end", "center", "space-around", "space-between"].includes(val);
      },
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [`${prefixCls}-row-no-wrap`]: props.wrap === false,
        [`${prefixCls}-row-${props.justify}`]: props.justify,
        [`${prefixCls}-row-${props.align}`]: props.align,
      };
    });
    const gutter = computed(() => props.gutter);
    provide("gutter", { gutter });
    const styles = computed(() => {
      const wrapMargin =
        props.gutter > 0
          ? {
              marginLeft: `-${props.gutter / 2}px`,
              marginRight: `-${props.gutter / 2}px`,
            }
          : {};
      return wrapMargin;
    });
    return {
      classes,
      styles,
    };
  },
};
</script>

<style lang="less" scoped></style>
