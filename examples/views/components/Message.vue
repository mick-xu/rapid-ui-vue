<template>
  <Article title="Message 消息">
    <p></p>
    <section>
      <Row>
        <Col>
          <Button @click="clickHandler">默认</Button>
          <Button @click="clickHandler">信息</Button>
          <Button @click="clickHandler">成功</Button>
          <Button @click="clickHandler">警告</Button>
          <Button @click="clickHandler">失败</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button @click="clickHandler">信息(背景)</Button>
          <Button @click="clickHandler">成功(背景)</Button>
          <Button @click="clickHandler">警告(背景)</Button>
          <Button @click="clickHandler">失败(背景)</Button>
        </Col>
      </Row>
      <Code></Code>
    </section>
  </Article>
</template>

<script>
import Article from "@c/Article";
import Code from "@c/Code";
import { getCurrentInstance } from "vue";
export default {
  components: { Article, Code },
  setup() {
    const { ctx } = getCurrentInstance();
    const clickHandler = (e) => {
      switch (e.target.innerText) {
        case "信息":
          ctx.Message.info("系统发来的信息！");
          break;
        case "成功":
          ctx.Message.success("处理成功的消息！");
          break;
        case "警告":
          ctx.Message.warning("系统发来的警告信息！");
          break;
        case "失败":
          ctx.Message.error("处理失败的消息！");
          break;
        case "信息(背景)":
          ctx.Message.info({ message: "系统发来的信息！", fill: true });
          break;
        case "成功(背景)":
          ctx.Message.success({ message: "处理成功的消息！", fill: true });
          break;
        case "警告(背景)":
          ctx.Message.warning({ message: "系统发来的警告信息！", fill: true });
          break;
        case "失败(背景)":
          ctx.Message.error({ message: "处理失败的消息！", fill: true });
          break;
        default:
          ctx.Message("默认消息！");
          break;
      }
    };
    return { clickHandler };
  },
};
</script>

<style lang="less" scoped></style>
