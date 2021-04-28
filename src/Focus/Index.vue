<template>
  <div :class="classes" :style="styles">
    <slot />
    <div
      class="focus-control focus-prev"
      role="img"
      @click="prevHandler"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="left"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
        ></path>
      </svg>
    </div>
    <div
      class="focus-control focus-next"
      role="img"
      @click="nextHandler"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="right"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
        ></path>
      </svg>
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
    autoplay: { type: Boolean, default: true },
    interval: { type: Number, default: 3000 },
  },
  setup(props) {
    const classes = computed(() => {
      return ["focus"];
    });

    const styles = reactive({ height: "0" });

    const data = reactive({
      activeUid: 0,
      timer: undefined,
      itemHeight: 0,
    });

    const items = ref([]);

    const initFocus = () => {
      data.activeUid = items.value[0];
    };

    const addItem = (item) => {
      items.value.push(item);
    };

    const startTimer = () => {
      if (props.autoplay && props.interval > 0) {
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
        styles.height = `${data.itemHeight}px`;
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
