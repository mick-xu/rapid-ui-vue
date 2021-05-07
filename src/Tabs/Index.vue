<template>
  <div :class="classes">
    <div class="tabs-nav">
      <div
        class="tabs-nav-tab"
        :class="{ 'tabs-nav-active': item.title === data.currentTab }"
        v-for="(item, index) in tabsProps"
        :key="index"
        @click="handleTabClick(item)"
      >
        {{ item.title }}
      </div>
      <div class="tabs-nav-bar" :style="barStyles"></div>
    </div>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { computed, provide, reactive, onMounted, getCurrentInstance, ref } from "vue";
const prefixCls = "tabs";
export default {
  name: "Tabs",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "top",
      validator: (val) => {
        return ["top", "right", "bottom", "left"].includes(val);
      },
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const tabsProps = slots.default().map((item) => item.props);
    const data = reactive({ currentTab: props.modelValue || tabsProps[0].title });
    const barWidthArray = ref([]);
    const barStyles = reactive({ width: "0px", left: "0px" });
    const classes = computed(() => {
      return [`${prefixCls}`, `${prefixCls}-${props.position}`];
    });
    const handleTabClick = (item) => {
      data.currentTab = item.title;
      const index = tabsProps.indexOf(item);
      barStyles.width = `${barWidthArray.value[index]}px`;
      let leftValue = 0;
      for (let i = 0; i < index; i++) {
        leftValue += barWidthArray.value[i] + 32;
      }
      barStyles.left = `${leftValue}px`;
      console.log(barWidthArray[index]);
      emit("update:modelValue", data.currentTab);
    };
    const instance = getCurrentInstance();
    const getCurrentTabsWidth = () => {
      barWidthArray.value = [].slice
        .call(instance.vnode.el.children[0].children)
        .filter((item) => item.className.startsWith("tabs-nav-tab"))
        .map((item) => item.clientWidth);
      barStyles.width = `${barWidthArray.value[0]}px`;
    };

    onMounted(() => {
      getCurrentTabsWidth();
    });
    provide("Tabs", data);
    return { classes, tabsProps, data, barStyles, handleTabClick };
  },
};
</script>

<style lang="less" scoped></style>
