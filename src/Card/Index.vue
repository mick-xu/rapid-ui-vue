<template>
  <div :class="classes">
    <div class="card-header">
      <slot name="title">
        <div class="card-header-title">{{ title }}</div>
      </slot>
    </div>
    <div class="card-body">
      <div class="card-body-cover"></div>
      <slot />
    </div>
    <div class="card-footer">
      <slot name="footer">
        
      </slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Card",
  props: {
    actions: { type: Array, default: () => [] },
    bordered: { type: Boolean, default: true },
    borderRadius: {
      type: [Number, String],
      default: 0,
    },
    cover: { type: String, default: undefined },
    title: { type: String, default: "" },
  },
  setup(props) {
    const classes = computed(() => {
      return ["card", { ["card-bordered"]: props.bordered }];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
