import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CryptoPrices from "../components/CryptoPrices.vue";
import MarketData from "../components/MarketData.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/prices",
    component: CryptoPrices,
  },
  {
    path: "/market-data",
    component: MarketData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
