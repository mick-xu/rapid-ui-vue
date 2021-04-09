<template>
  <li class="menu-item-group">
    <div class="menu-item-group-title">{{ title }}</div>
    <ul>
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  name: "MenuGroup",
  props: {
    title: { type: String, default: "" },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
