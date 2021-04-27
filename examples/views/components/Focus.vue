<template>
  <Article title="Focus 焦点图">
    <Row>
      <Col span="12">
        <Focus>
          <FocusItem title="1" desc="">
            <div class="slider slider-1">幻灯片一</div>
          </FocusItem>
          <FocusItem title="2" desc="">
            <div class="slider slider-2">幻灯片二</div>
          </FocusItem>
          <FocusItem title="3" desc="">
            <div class="slider slider-3">幻灯片三</div>
          </FocusItem>
          <FocusItem title="4" desc="">
            <div class="slider slider-4">幻灯片四</div>
          </FocusItem>
          <FocusItem title="5" desc="">
            <div class="slider slider-5">幻灯片五</div>
          </FocusItem>
        </Focus>
      </Col>
      <Col span="12">
        <Focus>
          <FocusItem title="1" desc="">
            <img :src="`${ossPath}/bg-autumn.jpg`" alt="" />
          </FocusItem>
          <FocusItem title="2" desc="">
            <img :src="`${ossPath}/bg-highway.jpg`" alt="" />
          </FocusItem>
          <FocusItem title="3" desc="">
            <img :src="`${ossPath}/bg-technology.jpg`" alt="" />
          </FocusItem>
          <FocusItem title="4" desc="">
            <img :src="`${ossPath}/bg-building.jpg`" alt="" />
          </FocusItem>
          <FocusItem title="5" desc="">
            <img :src="`${ossPath}/bg-forest.jpg`" alt="" />
          </FocusItem>
        </Focus>
      </Col>
    </Row>
    <Row>
      <Col span="12">
        <Code :code="code"> </Code>
      </Col>
      <Col span="12"> </Col>
    </Row>
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
<Focus>\n\
  <FocusItem>\n\
    <div class="slider slider-1">幻灯片一</div>\n\
  </FocusItem>\n\
  <FocusItem>\n\
    <div class="slider slider-2">幻灯片二</div>\n\
  </FocusItem>\n\
  <FocusItem>\n\
    <div class="slider slider-3">幻灯片三</div>\n\
  </FocusItem>\n\
  <FocusItem>\n\
    <div class="slider slider-4">幻灯片四</div>\n\
  </FocusItem>\n\
  <FocusItem>\n\
    <div class="slider slider-5">幻灯片五</div>\n\
  </FocusItem>\n\
</Focus>';
    return { ossPath, code };
  },
};
</script>

<style lang="less" scoped>
.slider {
  height: 200px;
  text-align: center;
  line-height: 200px;

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
}
img {
  height: 200px;
}
</style>
