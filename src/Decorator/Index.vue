<template>
  <div class="decorator-wrap">
    <slot />
    <div :class="classes">
      <div :class="innerClasses">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Decorator",
  props: {
    color: { type: String, default: "" },
    placement: {
      type: String,
      default: "leftTop",
      validator: (val) => {
        return ["leftTop", "rightTop", "leftBottom", "rightBottom"].includes(val);
      },
    },
    title: { type: String, default: "" },
    type: {
      type: String,
      default: "marker",
      validator: (val) => {
        return ["label", "marker"].includes(val);
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      let placement = props.placement;
      placement = placement.replace(
        /[A-Z]/,
        `-${/[A-Z]/g.exec(placement)[0].toLowerCase()}`
      );
      return ["decorator", `decorator-${props.type}`, placement];
    });
    const innerClasses = computed(() => {
      return [`corner-${props.type}`];
    });
    return { classes, innerClasses };
  },
};
</script>

<style lang="less" scoped></style>
