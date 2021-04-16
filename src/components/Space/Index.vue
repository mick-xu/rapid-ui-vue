<script>
import { h, onMounted, computed } from "vue";
export default {
  name: "Space",
  props: {
    direction: { type: String, default: "horizontal" },
    size: { type: [String, Number], default: "middle" },
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return ["space", `space-${props.direction}`];
    });
    const items = slots.default().map((element) => {
      return h("div", { class: "space-item", style: "margin-top:10px" }, element);
    });
    onMounted(() => {});
    return () => h("div", { class: classes.value }, items);
  },
};
</script>

<style lang="less">
@space-prefix: space;
.space {
  display: inline-flex;
  flex-wrap: wrap;
}
.space-horizontal {
  flex-direction: row;
  .@{space-prefix}-item + .@{space-prefix}-item {
    margin-left: 8px;
  }
}
.space-vertical {
  flex-direction: column;
  .@{space-prefix}-item + .@{space-prefix}-item {
    margin-top: 8px;
  }
}
</style>
