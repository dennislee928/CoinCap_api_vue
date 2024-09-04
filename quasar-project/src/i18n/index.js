import { createI18n } from "vue-i18n";
import en from "./en.json";
import zh from "./zh.json";

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  locale: "en", // 默認語言
  fallbackLocale: "en", // 回退語言
  messages,
});

export default i18n;
