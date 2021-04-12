<template>
  <div><slot /></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    borderRadius: {
      type: [Number, String],
      default: 0,
    },
    cover: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
