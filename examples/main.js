import { createApp } from "vue";
import App from "./App.vue";
import RapidUI from "@@/components";
import '@@/styles/index.less'

const app = createApp(App);

app.use(RapidUI);

app.mount("#app");
