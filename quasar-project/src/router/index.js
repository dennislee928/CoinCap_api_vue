import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MarketData from "../components/MarketData.vue";
import CandleData from "../components/CandleData.vue";
import TradeData from "../components/TradeData.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/markets",
    name: "MarketData",
    component: MarketData,
  },
  {
    path: "/candles",
    name: "CandleData",
    component: CandleData,
  },
  {
    path: "/trades",
    name: "TradeData",
    component: TradeData,
  },
  // 可以在這裡添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
