<template>
  <li
    class="menu-item"
    :class="classes"
    :title="title"
    @click="handleClick"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
  >
    <Icon :name="icon" v-if="icon" /><slot />
  </li>
</template>

<script>
import { inject, computed, getCurrentInstance } from "vue";
import Icon from "../Icon";
const prefixCls = "menu";
export default {
  name: "MenuItem",
  components: { Icon },
  props: {
    icon: { type: String, default: "" },
    title: { type: String, default: "" },
    name: { type: String, default: "" },
  },
  setup(props) {
    const rootMenu = inject("rootMenu");
    const instance = getCurrentInstance();
    const classes = computed(() => {
      return {
        [`${prefixCls}-item-selected`]: rootMenu.currentMenuItem === instance.uid,
      };
    });

    const handleClick = () => {
      classes.value["menu-item-selected"] = true;
      rootMenu.emit("menuItem:click", { uid: instance.uid, name: props.name });
    };
    const handleEnter = () => {};
    const handleLeave = () => {};

    return {
      classes,
      handleClick,
      handleEnter,
      handleLeave,
    };
  },
};
</script>
