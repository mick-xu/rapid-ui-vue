<template>
  <div :class="classes" :style="styles" ref="focus">
    <slot />
    <div class="focus-control focus-prev" @click="prev">‹</div>
    <div class="focus-control focus-next" @click="next">›</div>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  reactive,
  ref,
  provide,
  onUnmounted,
  nextTick,
  onUpdated,
} from "vue";
export default {
  name: "Focus",
  props: {
    autoPlay: { type: Boolean, default: true },
    interval: { type: Number, default: 3000 },
  },
  setup(props) {
    const classes = computed(() => {
      return ["focus"];
    });

    const styles = reactive({ height: "0" });

    const focus = ref();

    const data = reactive({
      activeUid: 0,
      timer: undefined,
    });

    const items = ref([]);

    const initFocus = () => {
      data.activeUid = items.value[0];
    };

    const addItem = (item) => {
      items.value.push(item);
    };

    const startTimer = () => {
      if (props.autoPlay && props.interval > 0) {
        data.timer = setInterval(() => next(), props.interval);
      }
    };

    const stopTimer = () => {
      if (data.timer) {
        clearInterval(data.timer);
        data.timer = undefined;
      }
    };

    const prev = () => {
      let index = items.value.indexOf(data.activeUid);
      index = index > 0 ? index : items.value.length;
      data.activeUid = items.value[--index];
    };
    const next = () => {
      let index = items.value.indexOf(data.activeUid);
      index = index < items.value.length - 1 ? index : -1;
      data.activeUid = items.value[++index];
    };

    onMounted(() => {
      initFocus();
      startTimer();
      nextTick(() => {
        styles.height = `${focus.value.children[0].clientHeight}px`;
      });
    });

    onUpdated(() => {});

    onUnmounted(() => {
      stopTimer();
    });

    provide("FocusScope", {
      data,
      addItem,
    });

    return { classes, items, focus, styles, prev, next };
  },
};
</script>

<style lang="less" scoped></style>
