<template>
  <div :class="classes"><slot /></div>
</template>

<script>
import { computed, onMounted, getCurrentInstance, inject } from "vue";

export default {
  name: "FocusItem",
  props: {
    title: { type: String, default: "" },
  },
  setup() {
    const focusScope = inject("FocusScope");
    const instance = getCurrentInstance();
    const classes = computed(() => {
      return ["focus-item", { ["active"]: focusScope.data.activeUid === instance.uid }];
    });
    onMounted(() => {
      focusScope.addItem(instance.uid);
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
