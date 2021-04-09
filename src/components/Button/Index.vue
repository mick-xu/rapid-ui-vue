<template>
  <button :type="htmlType" class="btn" :class="typeClass"><slot /></button>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    htmlType: {
      type: String,
      default: "button",
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "middle",
    },
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["default", "info", "success", "warning", "danger", "text"].includes(val);
      },
    },
  },
  setup(props) {
    const typeClass = `btn-${props.type}`;
    return {
      typeClass,
    };
  },
};
</script>
