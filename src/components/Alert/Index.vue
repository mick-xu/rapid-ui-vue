<template>
  <div class="alert" :class="classes">{{ message }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "info",
      validator: (val) => {
        return ["default", "dark", "info", "success", "warning", "error"].includes(val);
      },
    },
    message: String,
    description: String,
    closeable: {
      type: Boolean,
      default: false,
    },
    showIcon: Boolean,
    icon: String,
  },
  emits: ["onClose"],
  setup(props, { emit }) {
    const classes = computed(() => `alert-${props.type}`);
    const onClose = (event) => {
      emit("onClose", event);
    };
    return {
      classes,
      onClose,
    };
  },
};
</script>

<style lang="less" scoped></style>
