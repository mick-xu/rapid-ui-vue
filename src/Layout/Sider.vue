<template>
  <div :class="classes" :style="styles"><slot /></div>
</template>

<script>
import { computed } from "vue";
const prefixCls = "layout-sider";
export default {
  name: "Sider",
  props: {
    breakpoint: {
      type: String,
      validator(val) {
        return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(val);
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
    const styles = computed(() => {
      return {
        width: `${siderWidth.value}px`,
        ...props.style,
      };
    });
    const classes = computed(() => [`${prefixCls}`, `${props.className}`]);
    return {
      classes,
      styles,
    };
  },
};
</script>
