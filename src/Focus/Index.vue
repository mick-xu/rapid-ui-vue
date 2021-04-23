<template>
  <div :class="classes" :style="styles" ref="focus">
    <slot />
    <div
      class="focus-control focus-prev"
      @click="prevHandler"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      ‹
    </div>
    <div
      class="focus-control focus-next"
      @click="nextHandler"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      ›
    </div>
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
        data.timer = setInterval(() => nextHandler(), props.interval);
      }
    };

    const stopTimer = () => {
      if (data.timer) {
        clearInterval(data.timer);
        data.timer = undefined;
      }
    };

    const prevHandler = () => {
      let index = items.value.indexOf(data.activeUid);
      index = index > 0 ? index : items.value.length;
      data.activeUid = items.value[--index];
    };
    const nextHandler = () => {
      let index = items.value.indexOf(data.activeUid);
      index = index < items.value.length - 1 ? index : -1;
      data.activeUid = items.value[++index];
    };

    const handleEnter = () => {
      stopTimer();
    };
    const handleLeave = () => {
      startTimer();
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
      startTimer,
      stopTimer,
    });

    return {
      classes,
      items,
      focus,
      styles,
      prevHandler,
      nextHandler,
      handleEnter,
      handleLeave,
    };
  },
};
</script>

<style lang="less" scoped></style>
