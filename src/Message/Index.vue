<template>
  <teleport to="body">
    <div :class="classes">
      <Icon name="info-circle" />
      <div></div>
    </div>
  </teleport>
</template>

<script>
import { computed } from "vue";
const prefixCls = "rapid-message";
export default {
  name: "Message",
  props: {},
  setup() {
    const classes = computed(() => {
      return [prefixCls, "rapid-message-notice", "move-up-leave"];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
