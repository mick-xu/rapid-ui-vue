import Content from "./Content.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Layout from "./Layout.vue";
import Sider from "./Sider.vue";
import "./layout.less";

const components = {
  Content,
  Footer,
  Header,
  Layout,
  Sider,
};

Object.values(components).forEach((value) => {
  value.install = (Vue) => Vue.component(value.name, value);
});

export { Content, Footer, Header, Sider };
export default Layout;
