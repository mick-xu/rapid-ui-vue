import Container from "./Index.vue";
import "./container.less";

Container.install = (Vue) => Vue.component(Container.name, Container);

export default Container;
