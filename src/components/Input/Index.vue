<template>
  <div :class="classes">
    <input
      class="rapid-input"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      :placeholder="placeholder"
      @change="handlerChange"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: "Input",
  props: {
    bordered: { type: Boolean, default: true },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    maxLength: Number,
    placeholder: { type: String, default: "" },
    prifix: { type: String, default: "" },
    readonly: { type: Boolean, default: false },
    suffix: { type: String, default: "" },
    type: {
      type: String,
      default: "text",
      validator: (val) =>
        [
          "button",
          "checkbox",
          "color",
          "date",
          "datetime",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ].includes(val),
    },
    value: { type: String, default: "" },
  },
  emits: ["onChange"],
  setup(props, { emit }) {
    const classes = computed(() => {
      return ["input-wrapper"];
    });
    const handlerChange = () => {
      emit("onChange");
    };
    return { classes, handlerChange };
  },
};
</script>

<style lang="less" scoped></style>
