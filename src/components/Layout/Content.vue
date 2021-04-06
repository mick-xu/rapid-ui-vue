<template>
  <div class="layout-content"><slot /></div>
</template>

<script>
export default {
  name: "Content",
  props: {
    className: {
      type: String,
      default: "",
    },
    style: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
