<template>
  <Article title="Focus 焦点图">
    <p>焦点图组件，也称为幻灯片，常用于网站中展示新闻图片或者产品图片。</p>
    <section>
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
          <Focus @onChange="changeHandler">
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
      <h2>示例代码</h2>
      <Row>
        <Col span="24">
          <Code :code="code"> </Code>
        </Col>
      </Row>
      <h2>API</h2>
      <Table>
        <template #header>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </template>
        <tr>
          <td>autoplay</td>
          <td>是否自动播放</td>
          <td>Boolen</td>
          <td>true, false</td>
          <td>true</td>
        </tr>
        <tr>
          <td>interval</td>
          <td>播放时间间隔</td>
          <td>Number</td>
          <td>整数，单位为毫秒</td>
          <td>3000</td>
        </tr>
      </Table>
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
    const changeHandler = (current, prev) => {
      console.log(current, prev);
    };
    return { ossPath, code, changeHandler };
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
