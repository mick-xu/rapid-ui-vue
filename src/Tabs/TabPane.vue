<template>
  <div :class="classes"><slot /></div>
</template>

<script>
import { inject, computed } from "vue";
export default {
  name: "TabPane",
  props: {
    title: { type: String, default: "" },
  },
  setup(props) {
    const tabs = inject("Tabs");
    const classes = computed(() => {
      return ["tabs-pane", { ["tabs-pane-active"]: tabs.currentTab === props.title }];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
