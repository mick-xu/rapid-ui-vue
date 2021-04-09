<template>
  <ul class="menu" :class="menuClassName">
    <slot />
  </ul>
</template>

<script>
const prefixCls = "menu";
import { computed } from "vue";
export default {
  name: "Menu",
  props: {
    mode: {
      type: String,
      default: "horizontal",
      validator: (val) => {
        return ["vertical", "horizontal", "inline"].includes(val);
      },
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    style: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const menuClassName = computed(() => {
      return [{ [`${prefixCls}-${props.mode}`]: props.mode }];
    });
    return { menuClassName };
  },
};
</script>
