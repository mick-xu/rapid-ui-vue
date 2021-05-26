<template>
  <i class="icon iconfont" :class="icon" :style="iconStyle"></i>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Icon",
  props: {
    name: { type: String, default: "", required: true },
    fill: { type: String, default: "" },
    size: { type: [Number, String], default: 20 },
  },
  setup(props) {
    const icon = computed(() => {
      return `icon-${props.name}`;
    });
    const iconStyle = computed(() => {
      return { fontSize: `${props.size}px`, color: `${props.fill}` };
    });
    return {
      icon,
      iconStyle,
    };
  },
};
</script>

<style lang="css" scoped>
@import "./assets/iconfont.css";
.icon {
  color: #666;
  font-size: 20px;
}
</style>
