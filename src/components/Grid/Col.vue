<template>
  <div class="rapid-col"><slot /></div>
</template>

<script>
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
    return {};
  },
};
</script>

<style lang="less" scoped></style>
