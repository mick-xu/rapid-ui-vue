import Alert from "./Alert";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";
import Button from "./Button";
import Card from "./Card";
import Carousel, { CarouselItem } from "./Carousel";
import Container from "./Container";
import Decorator from "./Decorator";
import Focus, { FocusItem } from "./Focus";
import Form, { FormItem } from "./Form";
import { Col, Row } from "./Grid";
import Icon from "./Icon";
import Input from "./Input";
import Layout, { Content, Footer, Header, Sider } from "./Layout";
import Menu, { MenuGroup, MenuItem, SubMenu } from "./Menu";
import Message from "./Message";
import Modal from "./Modal";
import Pagination from "./Pagination";
import Space from "./Space";
import Switch from "./Switch";
import Table from "./Table";
import Tabs, { TabPane } from "./Tabs";
import "./styles/index.less";

const components = {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Content,
  Decorator,
  Focus,
  FocusItem,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Modal,
  Pagination,
  Row,
  Sider,
  Space,
  SubMenu,
  Switch,
  Table,
  TabPane,
  Tabs,
};

const ProtoTypes = {
  Message,
};

const install = (app) => {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });

  Object.keys(ProtoTypes).forEach((key) => {
    app.config.globalProperties[key] = ProtoTypes[key];
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install, ...components, ...ProtoTypes };
