import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome to CoinCap API App",
    markets: "Markets",
    realTimePrices: "Real-time Prices",
  },
  zh: {
    welcome: "歡迎來到 CoinCap API 應用",
    markets: "市場",
    realTimePrices: "實時價格",
  },
};

const i18n = createI18n({
  locale: "en", // 默認語言
  messages,
});

export default i18n;
