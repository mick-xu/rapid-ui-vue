<template>
  <li class="menu-submenu">
    <div class="menu-submenu-title"></div>
    <ul class="menu">
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  name: "SubMenu",
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
