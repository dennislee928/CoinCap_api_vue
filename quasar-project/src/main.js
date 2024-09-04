import { createApp } from "vue";
import { Quasar } from "quasar";
import pinia from "./stores"; // 確保這裡引入的是 stores/index.js
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Quasar, {
  /* Quasar options */
});
app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");
