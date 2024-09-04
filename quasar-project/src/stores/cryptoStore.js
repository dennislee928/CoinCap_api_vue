import { defineStore } from "pinia";
import { getMarkets, getCandles } from "../services/api";

export const useCryptoStore = defineStore("crypto", {
  state: () => ({
    markets: [],
    prices: {},
    candles: [],
    trades: [],
  }),
  actions: {
    async fetchMarkets() {
      try {
        this.markets = await getMarkets();
      } catch (error) {
        console.error("Failed to fetch markets:", error);
      }
    },
    setPrices(prices) {
      this.prices = prices;
    },
    async fetchCandles() {
      try {
        const response = await fetch(
          "https://api.coincap.io/v2/candles?exchange=binance&interval=d1&baseId=bitcoin&quoteId=usd"
        );
        const data = await response.json();
        this.candles = data.data;
      } catch (error) {
        console.error("Failed to fetch candles:", error);
      }
    },
    fetchTrades() {
      const tradeWs = new WebSocket("wss://ws.coincap.io/trades/binance");
      tradeWs.onopen = () => {
        console.log("WebSocket connection opened");
      };
      tradeWs.onmessage = (msg) => {
        console.log("WebSocket message received:", msg.data);
        const data = JSON.parse(msg.data);
        this.trades.push(data);
      };
      tradeWs.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
      tradeWs.onclose = () => {
        console.log("WebSocket connection closed");
      };
    },

    // New function to fetch real-time prices using WebSocket
    fetchPrices() {
      const pricesWs = new WebSocket(
        "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin"
      );
      pricesWs.onopen = () => {
        console.log("WebSocket connection for prices opened");
      };
      pricesWs.onmessage = (msg) => {
        console.log("WebSocket message for prices received:", msg.data);
        const data = JSON.parse(msg.data);
        this.setPrices(data);
      };
      pricesWs.onerror = (error) => {
        console.error("WebSocket error for prices:", error);
      };
      pricesWs.onclose = () => {
        console.log("WebSocket connection for prices closed");
      };
    },
  },
});
