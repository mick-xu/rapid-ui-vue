<template>
  <div class="breadcrumb">
    <slot />
  </div>
</template>

<script>
import { provide } from "vue";
export default {
  name: "Breadcrumb",
  props: {
    separator: { type: String, default: "/" },
  },
  setup(props) {
    provide("BreadcrumbScope", {
      separator: props.separator,
    });
    return {};
  },
};
</script>

<style lang="less" scoped></style>
