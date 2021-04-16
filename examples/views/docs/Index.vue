<template>
  <Sider style="background: #f9f9f9; border-right: solid 1px #f0f0f0">
    <Menu mode="vertical" @onClick="handleClick">
      <MenuItem name="started">快速上手</MenuItem>
      <MenuItem name="changelog">更新日志</MenuItem>
    </Menu>
  </Sider>
  <Content><router-view /></Content>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const handleClick = (name) => {
      router.push({ name: name });
    };
    return { handleClick };
  },
};
</script>

<style lang="less" scoped></style>
