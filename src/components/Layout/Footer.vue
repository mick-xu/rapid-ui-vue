<template>
  <div class="layout-footer"><slot /></div>
</template>

<script>
export default {
  name: "Footer",
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
