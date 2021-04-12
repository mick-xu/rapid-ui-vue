<template>
  <div></div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "info",
      validator: (val) => {
        return ["default", "info", "success", "warning", "error"].includes(val);
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

  setup(props, ctx) {
    const typeClass = `alert-${props.type}`;
    const onClose = (evt) => {
      ctx.emit("onClose", evt);
    };
    return {
      typeClass,
      onClose,
    };
  },
};
</script>

<style lang="less" scoped></style>
