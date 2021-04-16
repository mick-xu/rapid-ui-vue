import Alert from "./components/Alert";
import Button from "./components/Button";
import Container from "./components/Container";
import { Col, Row } from "./components/Grid";
import Icon from "./components/Icon";
import Layout, { Content, Footer, Header, Sider } from "./components/Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./components/Menu";
import Space from "./components/Space";
import "./styles/index.less";

const components = {
  Alert,
  Button,
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
  Space,
  SubMenu,
};

const install = (Vue) => {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install, ...components };
