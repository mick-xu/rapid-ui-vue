<template>
  <div :class="classes">
    <ul :style="ulStyles">
      <slot />
    </ul>
    <div class="carousel-control carousel-prev" @click="prevHandler">‹</div>
    <div class="carousel-control carousel-next" @click="nextHandler">›</div>
  </div>
</template>

<script>
import {
  computed,
  ref,
  provide,
  reactive,
  onMounted,
  getCurrentInstance,
  nextTick,
} from "vue";
export default {
  name: "Carousel",
  props: {
    autoplay: { type: Boolean, default: true },
    displayCount: { type: Number, default: 6 },
    interval: { type: Number, default: 3000 },
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const classes = computed(() => {
      return ["carousel"];
    });
    const items = ref([]);
    const validSlots = slots.default().filter((el) => el.type.name === "CarouselItem");
    const nextIndex = validSlots.length - 1;
    const data = reactive({
      prevIndex: 0,
      nextIndex,
      timer: undefined,
      itemSize: { width: 0, height: 0 },
      translate: 0,
    });
    const ulStyles = computed(() => {
      return {
        width: `${Number(data.itemSize.width) * items.value.length}px`,
        height: `${data.itemSize.height}px`,
      };
    });
    const addItem = (item) => {
      items.value.push(item);
    };
    const prevHandler = () => {
      if (data.prevIndex === items.value.length) {
        data.prevIndex = 0;
      }
      data.translate -= data.itemSize.width;
      data.nextIndex = data.prevIndex;
      const item = items.value[data.prevIndex++];
      setTimeout(() => {
        item.left += data.itemSize.width * items.value.length;
      }, 600);
    };
    const nextHandler = () => {
      if (data.nextIndex < 0) {
        data.nextIndex = validSlots.length - 1;
      }
      data.translate += data.itemSize.width;
      data.prevIndex = data.nextIndex;
      const item = items.value[data.nextIndex--];
      item.left -= data.itemSize.width * items.value.length;
    };
    onMounted(() => {
      nextTick(() => {
        const width = instance.vnode.el.clientWidth;
        data.itemSize.width = Number(((width * 1.0) / props.displayCount).toFixed(3));

        items.value.forEach((el, index) => {
          el.left += data.itemSize.width * index;
        });
      });
    });
    provide("CarouselScope", {
      data,
      items,
      addItem,
    });
    return { classes, ulStyles, prevHandler, nextHandler, items };
  },
};
</script>

<style lang="less" scoped></style>
