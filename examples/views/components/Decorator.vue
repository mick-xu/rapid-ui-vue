<template>
  <Article title="Decorator 小装饰">
    <p></p>
    <section>
      <Row>
        <Col span="6">
          <Decorator type="label" title="测试" placement="leftTop">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="label" title="测试" placement="rightTop">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="label" title="测试" placement="leftBottom">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="label" title="测试" placement="rightBottom">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
      </Row>
      <Row style="margin-top: 16px">
        <Col span="6">
          <Decorator type="marker" title="测试" placement="leftTop">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="marker" title="测试" placement="rightTop">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="marker" title="测试" placement="leftBottom">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
        <Col span="6">
          <Decorator type="marker" title="测试" placement="rightBottom">
            <img
              src="https://devaid.oss-cn-qingdao.aliyuncs.com/assets/images/bg-highway.jpg"
            />
          </Decorator>
        </Col>
      </Row>
      <h2>代码</h2>
      <Code>
        {{'<Decorator type="marker" title="测试" placement="leftTop"></Decorator>'}}
      </Code>
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
          <td>placement</td>
          <td>小挂架显示的位置</td>
          <td>String</td>
          <td>leftTop, rightTop, leftBottom, rightBottom</td>
          <td>leftTop</td>
        </tr>
        <tr>
          <td>title</td>
          <td>挂件上显示的文字</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>类型，挂件样式</td>
          <td>String</td>
          <td>label, marker</td>
          <td>marker</td>
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
    return {};
  },
};
</script>

<style lang="less" scoped>
img {
  width: 200px;
}
</style>
