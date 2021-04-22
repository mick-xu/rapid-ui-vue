import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Focus, { FocusItem } from "./components/Focus";
import { Col, Row } from "./components/Grid";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Layout, { Content, Footer, Header, Sider } from "./components/Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./components/Menu";
import Space from "./components/Space";
import "./styles/index.less";

const components = {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Content,
  Focus,
  FocusItem,
  Footer,
  Header,
  Icon,
  Input,
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
