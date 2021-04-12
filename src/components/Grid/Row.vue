<template>
  <div class="rapid-row" :class="classes"><slot /></div>
</template>

<script>
import { computed } from 'vue'
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
      default: 0,
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
    return {
      classes,
    };
  },
};
</script>

<style lang="less" scoped></style>
