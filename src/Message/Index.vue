<template>
  <div :class="classes">
    <Icon name="info-circle" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
import Icon from "../Icon";
const prefixCls = "rapid-message";
export default {
  name: "Message",
  components: { Icon },
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
      validator: (val) => {
        return ["success", "warning", "info", "error"].includes(val);
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      return [
        prefixCls,
        "rapid-message-notice",
        "move-up-leave",
        `rapid-message-${props.type}`,
      ];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
