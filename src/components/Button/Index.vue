<template>
  <button :type="htmlType" class="btn" :class="classes" @click="hanldeClick">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
const prefixCls = "btn";
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
      validator: (val) => {
        return ["large", "middle", "small"].includes(val);
      },
    },
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["default", "info", "success", "warning", "danger", "text"].includes(val);
      },
    },
  },
  emits: ["onClick"],
  setup(props, { emit }) {
    const classes = computed(() => {
      return [
        `${prefixCls}-${props.type}`,
        { [`${prefixCls}-lg`]: props.size === "large" },
        { [`${prefixCls}-sm`]: props.size === "small" },
      ];
    });
    const hanldeClick = (event) => {
      emit("onClick", event);
    };
    return {
      classes,
      hanldeClick,
    };
  },
};
</script>
