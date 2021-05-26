<template>
  <transition name="message" @before-leave="onClose">
    <div
      :class="classes"
      :style="styles"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <Icon :name="icon" />
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import Icon from "../Icon";
const prefixCls = "rapid-message";
export default {
  name: "Message",
  components: { Icon },
  props: {
    id: { type: String, default: "" },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["success", "warning", "info", "error", "default"].includes(val);
      },
    },
    fill: { type: Boolean, default: false },
    offset: { type: Number, default: 41 },
    duration: { type: Number, default: 3000 },
    onClose: { type: Function, default: () => {} },
  },
  setup(props) {
    const classes = computed(() => {
      return [
        prefixCls,
        "rapid-message-notice",
        { ["rapid-message-default"]: !props.fill },
        `rapid-message-${props.type}`,
        { [`rapid-message-${props.type}-fill`]: props.fill },
      ];
    });
    const styles = computed(() => {
      return { top: `${props.offset}px` };
    });
    const icons = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      warning: "warning-circle-fill",
      error: "close-circle-fill",
      default: "sound-fill",
    };
    const icon = computed(() => {
      return icons[props.type];
    });
    const visible = ref(false);
    let timer = null;
    const startTimer = () => {
      if (props.duration > 0) {
        timer = setTimeout(() => {
          if (visible.value) {
            close();
          }
        }, props.duration);
      }
    };
    const clearTimer = () => {
      clearTimeout(timer);
      timer = null;
    };
    const close = () => {
      visible.value = false;
    };

    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    return { classes, styles, icon, visible, startTimer, clearTimer };
  },
};
</script>

<style lang="less" scoped></style>
