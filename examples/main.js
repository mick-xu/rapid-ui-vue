import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import RapidUI from "@r/";

createApp(App)
  .use(store)
  .use(router)
  .use(RapidUI)
  .mount("#app");
