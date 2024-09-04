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
      tradeWs.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        this.trades.push(data);
      };
    },
  },
});
