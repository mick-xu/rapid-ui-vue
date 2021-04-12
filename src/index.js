import Container from "./components/Container";
import { Col, Row } from "./components/Grid";
import Icon from "./components/Icon";
import Layout, { Content, Footer, Header, Sider } from "./components/Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./components/Menu";
import "./styles/index.less";

const components = {
  Col,
  Container,
  Content,
  Footer,
  Header,
  Icon,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Row,
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
