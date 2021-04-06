<template>
  <div :class="wrapClass" ref="layout"><slot /></div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
const prefixCls = "layout";
export default {
  name: "Layout",
  props: {
    className: { type: String, default: "" },
    style: Object,
  },
  setup(props) {
    let hasSider = ref(false);
    const layout = ref(null);
    const wrapClass = computed(() => {
      return [
        `${prefixCls}`,
        `${props.className}`,
        { [`${prefixCls}-has-sider`]: hasSider.value },
      ];
    });
    onMounted(() => {
      hasSider.value = [].slice
        .call(layout.value.children)
        .some((el) => el.className.startsWith(`${prefixCls}-sider`));
    });
    return {
      wrapClass,
      layout,
    };
  },
};
</script>

<style lang="less" scoped></style>
