import Icon from "./Icon";
import Layout, { Content, Footer, Header, Sider } from "./Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./Menu";

const components = {
  Content,
  Footer,
  Header,
  Icon,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Sider,
  SubMenu,
};

const install = (Vue) => {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
  install.installed = true;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

export default { install, ...components };
