<template>
  <ul class="menu" :class="classes">
    <slot />
  </ul>
</template>

<script>
import { computed, reactive, provide } from "vue";
import mitt from "mitt";

const prefixCls = "menu";

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
  emits: ["onClick"],
  setup(props, { emit }) {
    const classes = computed(() => {
      return [{ [`${prefixCls}-${props.mode}`]: props.mode }];
    });
    const emitter = mitt();

    const rootMenu = reactive({ currentMenuItem: 0, emit: emitter.emit });
    provide("rootMenu", rootMenu);

    emitter.on("menuItem:click", (uid) => {
      rootMenu.currentMenuItem = uid;
      emit("onClick", uid);
    });

    return { classes };
  },
};
</script>
