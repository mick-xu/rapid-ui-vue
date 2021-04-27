<template>
  <Article title="Carousel 跑马灯">
    <section>
      <Carousel>
        <CarouselItem title="1">
          <div class="slider slider-1">幻灯片一</div>
        </CarouselItem>
        <CarouselItem title="2">
          <div class="slider slider-2">幻灯片二</div>
        </CarouselItem>
        <CarouselItem title="3">
          <div class="slider slider-3">幻灯片三</div>
        </CarouselItem>
        <CarouselItem title="4">
          <div class="slider slider-4">幻灯片四</div>
        </CarouselItem>
        <CarouselItem title="5">
          <div class="slider slider-5">幻灯片五</div>
        </CarouselItem>
        <CarouselItem title="6">
          <div class="slider slider-6">幻灯片六</div>
        </CarouselItem>
        <CarouselItem title="7">
          <div class="slider slider-3">幻灯片七</div>
        </CarouselItem>
      </Carousel>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
export default {
  components: { Article },
  setup() {
    const ossPath = "https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images";
    return { ossPath };
  },
};
</script>

<style lang="less" scoped>
.slider {
  height: 100px;
  text-align: center;
  line-height: 100px;

  &-1 {
    background: #f0f0f0;
  }
  &-2 {
    background: #e0e0e0;
  }
  &-3 {
    background: #f6f6f6;
  }
  &-4 {
    background: #e6e6e6;
  }
  &-5 {
    background: #d0d0d0;
  }
  &-6 {
    background: #eee;
  }
}
img {
  min-height: 100px;
}
</style>
