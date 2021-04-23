import Alert from "./Alert";
import Button from "./Button";
import Card from "./Card";
import Container from "./Container";
import Focus, { FocusItem } from "./Focus";
import { Col, Row } from "./Grid";
import Icon from "./Icon";
import Input from "./Input";
import Layout, { Content, Footer, Header, Sider } from "./Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./Menu";
import Space from "./Space";
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
