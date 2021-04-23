<template>
  <div :class="classes" @mouseenter="handleEnter" @mouseleave="handleLeave"><slot /></div>
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
    const handleEnter = () => {
      focusScope.stopTimer();
    };
    const handleLeave = () => {
      focusScope.startTimer();
    };
    onMounted(() => {
      focusScope.addItem(instance.uid);
    });
    return { classes, handleEnter, handleLeave };
  },
};
</script>

<style lang="less" scoped></style>
