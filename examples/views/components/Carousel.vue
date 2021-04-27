<template>
  <Article title="Carousel 走马灯">
    <p>走马灯图片轮播组件，支持鼠标悬停时停止轮播，方便操控左右按钮</p>
    <section>
      <Carousel>
        <CarouselItem>
          <img :src="`${ossPath}/bg-autumn.jpg`" title="一" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/bg-highway.jpg`" title="二" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/bg-technology.jpg`" title="三" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/bg-building.jpg`" title="四" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/bg-forest.jpg`" title="五" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/bg-photography.jpg`" title="六" />
        </CarouselItem>
        <CarouselItem>
          <img :src="`${ossPath}/banner.png`" title="七" />
        </CarouselItem>
      </Carousel>
      <Code :code="code"></Code>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
export default {
  components: { Article, Code },
  setup() {
    const ossPath = "https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images";
    const code =
      '\
<Carousel :autoplay="true" :interval="3000" :displayCount="6">\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-autumn.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-highway.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-technology.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-building.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-forest.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/bg-photography.jpg`" />\n\
    </CarouselItem>\n\
    <CarouselItem>\n\
      <img :src="`${ossPath}/banner.png`" />\n\
    </CarouselItem>\n\
</Carousel>';
    return { ossPath, code };
  },
};
</script>

<style lang="less" scoped>
img {
  min-height: 100px;
}
</style>
