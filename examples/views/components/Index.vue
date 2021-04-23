<template>
  <Sider style="background: #f9f9f9;border-right: solid 1px #f0f0f0">
    <keep-alive>
      <Menu mode="vertical" @onClick="handleClick">
        <MenuGroup :title="group.title" v-for="group in menus" :key="group.name">
          <MenuItem :name="menu.name" v-for="menu in group.children" :key="menu.name">
            {{ menu.title }}
          </MenuItem>
        </MenuGroup>
      </Menu>
    </keep-alive>
  </Sider>
  <Content><router-view /></Content>
</template>

<script>
import { useRouter } from "vue-router";
import routes from "@/router/routes";
export default {
  setup() {
    const router = useRouter();

    const [components] = routes.filter((el) => el.name === "components");
    const menus = components.children;

    const handleClick = (name) => {
      router.push({ name: name });
    };
    return { menus, handleClick };
  },
};
</script>

<style lang="less" scoped></style>
