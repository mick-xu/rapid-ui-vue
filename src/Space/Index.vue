<template>
  <div :class="classes">
    <div
      v-for="(item, index) in items"
      :class="itemClasses"
      :style="index !== 0 && itemStyles"
      :key="index"
    >
      <component :is="item" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Space",
  props: {
    direction: { type: String, default: "horizontal" },
    size: { type: [String, Number], default: "middle" },
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return ["space", `space-${props.direction}`];
    });
    const itemClasses = computed(() => {
      return {
        "space-item": props.size === "middle",
        "space-item-sm": props.size === "small",
      };
    });
    const itemStyles = computed(() => {
      const styles = {};
      if (props.size === "small" || props.size === "middle") {
        return styles;
      }
      const margin = props.direction === "horizontal" ? "marginLeft" : "marginTop";
      const marginValue = props.size.endsWith("px") ? props.size : `${props.size}px`;
      styles[margin] = marginValue;
      return styles;
    });
    const items = slots.default();
    return { classes, itemClasses, itemStyles, items };
  },
};
</script>
