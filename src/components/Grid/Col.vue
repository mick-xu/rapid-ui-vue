<template>
  <div class="rapid-col" :style="styles"><slot /></div>
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
  setup() {
    const { gutter } = inject("gutter", { gutter: { value: 0 } });
    console.log(gutter.value);
    const styles = computed(() => {
      const wrapPadding = gutter.value
        ? { paddingLeft: `${gutter.value / 2}px`, paddingRight: `${gutter.value / 2}px` }
        : {};
      return wrapPadding;
    });
    return { styles };
  },
};
</script>

<style lang="less" scoped></style>
