import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // 引入 i18n

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n); // 使用 i18n

app.mount("#app");
