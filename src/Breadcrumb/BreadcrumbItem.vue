<template>
  <span>
    <span><slot /></span>
    <em class="breadcrumb-separator">{{ separator }}</em>
  </span>
</template>

<script>
import { inject } from "vue";
export default {
  name: "BreadcrumbItem",
  setup() {
    const breadcrumbScope = inject("BreadcrumbScope");
    const separator = breadcrumbScope.separator;
    return { separator };
  },
};
</script>

<style lang="scss" scoped></style>
