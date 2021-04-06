<template>
  <div class="layout-header"><slot /></div>
</template>

<script>
export default {
  name: "Header",
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
