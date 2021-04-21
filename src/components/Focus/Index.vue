<template>
  <div :class="classes" :style="styles">
    <component :is="item" :key="index" v-for="(item, index) in items" />
    <div class="focus-control focus-prev">‹</div>
    <div class="focus-control focus-next">›</div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, nextTick } from "vue";
export default {
  name: "Focus",
  props: {},
  setup(props, { slots }) {
    const classes = computed(() => {
      return ["focus"];
    });
    const items = slots.default();
    const styles = reactive({ height: "0px" });
    let index = 0;

    items[index].props.visible = true;
    onMounted(() => {
      nextTick(() => {
        styles.height = `${items[index].children.default()[0].el.clientHeight}px`;
      });
    });
    return { classes, items, styles };
  },
};
</script>

<style lang="less" scoped></style>
