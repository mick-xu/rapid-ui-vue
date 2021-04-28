<template>
  <div :class="classes" :style="styles"><slot /></div>
</template>

<script>
import { computed, provide } from "vue";
const prefixCls = "grid";
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
        [`${prefixCls}-row`]: true,
        [`${prefixCls}-row-no-wrap`]: props.wrap === false,
        [`${prefixCls}-row-${props.justify}`]: props.justify,
        [`${prefixCls}-row-${props.align}`]: props.align,
      };
    });
    const gutter = computed(() => props.gutter);
    provide("gutter", { gutter });
    let wrapMargin;
    const styles = computed(() => {
      if (typeof props.gutter === "number") {
        if (props.gutter <= 0) {
          wrapMargin = {};
        } else {
          wrapMargin = {
            margin: `-${props.gutter / 2}px`,
          };
        }
      } else if (Array.isArray(props.gutter) && props.gutter.length === 2) {
        wrapMargin = {
          margin: `${props.gutter[0] / 2}px ${props.gutter[1] / 2}px`,
        };
      }
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
