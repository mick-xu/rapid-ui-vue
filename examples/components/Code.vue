<template>
  <pre><code ref="container"><slot />{{`${code}`}}</code></pre>
</template>

<script>
import hljs from "highlight.js";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import css from "highlight.js/lib/languages/css";
// import htmlbars from "highlight.js/lib/languages/htmlbars";
// import bash from "highlight.js/lib/languages/bash";
// import shell from "highlight.js/lib/languages/shell";
import "highlight.js/styles/github.css";

import { onMounted, ref } from "vue";

export default {
  props: {
    language: { type: String, default: "bash" },
    code: { type: String, default: "" },
  },
  setup() {
    const container = ref();
    onMounted(() => {
      hljs.configure({});
      hljs.highlightElement(container.value);
    });
    return { container };
  },
};
</script>

<style lang="less" scoped>
pre {
  code {
    padding: 12px 16px;
    border-radius: 3px;
    font-family: Lucida Console, Consolas;
    color: rgba(0, 0, 0, 0.75);
    line-height: 18px;
  }
}
</style>
