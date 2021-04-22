<template>
  <div :class="classes" :style="styles">
    <!-- <component :is="item" :key="index" v-for="(item, index) in items" /> -->
    <slot />
    <div class="focus-control focus-prev" @click="prev">‹</div>
    <div class="focus-control focus-next" @click="next">›</div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, provide, onUnmounted } from "vue";
export default {
  name: "Focus",
  props: {
    autoPlay: { type: Boolean, default: true },
  },
  setup(props) {
    const classes = computed(() => {
      return ["focus"];
    });

    const data = reactive({
      activeUid: 0,
      timer: undefined,
    });

    const items = ref([]);
    const addItem = (item) => {
      items.value.push(item);
    };

    const play = () => {
      data.timer = setInterval(() => {
        next();
      }, 3000);
    };

    const styles = reactive({ height: "100px" });
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
      data.activeUid = items.value[0];
      props.autoPlay && play();
    });

    onUnmounted(() => {
      clearInterval(data.timer);
    });

    provide("FocusScope", {
      data,
      addItem,
    });

    return { classes, items, styles, prev, next };
  },
};
</script>

<style lang="less" scoped></style>
