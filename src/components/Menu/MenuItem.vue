<template>
  <li class="menu-item" :title="title"><Icon :name="icon" /><slot /></li>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "MenuItem",
  components: { Icon },
  props: {
    icon: { type: String, default: "" },
    title: { type: String, default: "" },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
