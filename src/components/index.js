import Layout, { Content, Footer, Header, Sider } from "./Layout";

const components = {
  Content,
  Footer,
  Header,
  Layout,
  Sider,
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
