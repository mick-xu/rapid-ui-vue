<template>
  <Article title="Message 消息">
    <p></p>
    <section>
      <Button @click="clickHandler">信息</Button>
      <Button @click="clickHandler">成功</Button>
      <Button @click="clickHandler">警告</Button>
      <Button @click="clickHandler">失败</Button>
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
        default:
          break;
      }
    };
    return { clickHandler };
  },
};
</script>

<style lang="less" scoped></style>
