<template>
  <teleport to="body">
    <transition>
      <div class="modal">
        <div class="overlay" v-show="mask && visible"></div>
        <div class="modal-content" :style="styles" v-show="visible">
          <div class="modal-header">
            <div class="modal-header-title">{{ title }}</div>
          </div>
          <div class="modal-close" @click="handleClose">
            <span class="modal-close-x">×</span>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div class="modal-footer">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed, ref, onMounted, watch } from "vue";
export default {
  name: "Modal",
  props: {
    mask: { type: Boolean, default: true },
    style: { type: [String, Object], default: () => {} },
    title: { type: String, default: "" },
    modelValue: { type: Boolean, default: false },
    width: { type: [String, Number], default: 520 },
    zIndex: { type: Number, default: 999 },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const styles = computed(() => {
      let width = props.width;
      if (!`${width}`.endsWith("%") && !`${width}`.endsWith("px")) {
        width = `${width}px`;
      }
      const style = { width: `${width}`, ...props.style };
      return style;
    });
    const visible = ref(false);
    const handleClose = () => {
      visible.value = false;
      emit("update:modelValue", visible.value);
    };
    onMounted(() => {
      visible.value = props.modelValue;
    });
    watch(
      () => props.modelValue,
      (val) => {
        visible.value = val;
      }
    );
    return { visible, styles, handleClose };
  },
};
</script>

<style lang="less" scoped></style>
