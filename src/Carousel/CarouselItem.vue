<template>
  <li class="carousel-item" :style="styles" @mouseenter="handleEnter" @mouseleave="handleLeave"><slot /></li>
</template>

<script>
import { inject, onMounted, getCurrentInstance, computed } from "vue";
export default {
  name: "CarouselItem",
  setup() {
    const carouselScope = inject("CarouselScope");
    const instance = getCurrentInstance();
    const styles = computed(() => {
      const item = carouselScope.items.value.filter((el) => el.uid === instance.uid)[0];
      return {
        width: `${carouselScope.data.itemSize.width}px`,
        left: `${item?.left}px`,
        transform: `translateX(${carouselScope.data.translate}px)`,
      };
    });
    const handleEnter = () => {
      carouselScope.stopTimer();
    };
    const handleLeave = () => {
      carouselScope.startTimer();
    };
    onMounted(() => {
      if (!carouselScope.data.itemSize.height) {
        carouselScope.data.itemSize.height = instance.vnode.el.clientHeight;
      }
      carouselScope.addItem({ uid: instance.uid, left: 0 });
    });
    return { styles, handleEnter, handleLeave };
  },
};
</script>

<style lang="less" scoped></style>
