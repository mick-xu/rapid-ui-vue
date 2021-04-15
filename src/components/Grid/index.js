import Col from "./Col.vue";
import Row from "./Row.vue";
import "./grid.less";

const Grid = {
  Col,
  Row,
};

Object.values(Grid).forEach((value) => {
    value.install = (Vue) => Vue.component(value.name, value);
});

export { Col, Row };
