<template>
  <div :class="wrapClass" :style="wrapStyle"><slot /></div>
</template>

<script>
import { computed, ref, onMounted } from "vue";
const prefixCls = "layout-sider";
export default {
  name: "Sider",
  props: {
    breakpoint: {
      type: String,
      validator(val) {
        return oneOf(val, ["xs", "sm", "md", "lg", "xl", "xxl"]);
      },
    },
    className: { type: String, default: "" },
    collapsed: Boolean,
    collapsible: Boolean,
    defaultCollapsed: Boolean,
    style: Object,
    width: {
      type: [Number, String],
      default: 200,
    },
  },
  setup(props) {
    const siderWidth = computed(() => props.width);
    const wrapStyle = computed(() => {
      return {
        width: `${siderWidth.value}px`,
        ...props.style,
      };
    });
    const wrapClass = computed(() => [`${prefixCls}`, `${props.className}`]);
    return {
      wrapClass,
      wrapStyle,
    };
  },
};
</script>

<style lang="less" scoped></style>
