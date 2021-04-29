<template>
  <div :class="classes" @click="handleClick">
    <div class="switch-handle"></div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from "vue";
const prefixCls = "switch";
export default {
  name: "Switch",
  props: {
    modelValue: { type: Boolean, default: false },
    shape: {
      type: String,
      default: "circle",
      validator: (val) => {
        return ["circle", "square"].includes(val);
      },
    },
  },
  emits: ["update:modelValue", "onChange"],
  setup(props, { emit }) {
    const checked = ref(false);
    const classes = computed(() => {
      return [
        prefixCls,
        { [`${prefixCls}-checked`]: checked.value },
        { [`${prefixCls}-circle`]: props.shape === "circle" },
      ];
    });
    const handleClick = () => {
      checked.value = !checked.value;
      emit("update:modelValue", checked.value);
      emit("onChange", checked.value);
    };
    onMounted(() => {
      checked.value = props.modelValue;
    });
    return { classes, handleClick };
  },
};
</script>

<style lang="less" scoped></style>
