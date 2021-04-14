import Menu from "./Menu.vue";
import MenuGroup from "./MenuGroup.vue";
import MenuItem from "./MenuItem.vue";
import SubMenu from "./SubMenu.vue";
import "./menu.less";

const components = {
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
};

Object.values(components).forEach((value) => {
  value.install = (Vue) => Vue.component(value.name, value);
});

export { MenuGroup, MenuItem, SubMenu };
export default Menu;
