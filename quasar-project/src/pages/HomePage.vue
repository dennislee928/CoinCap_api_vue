<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
    <CryptoPrices />
    <MarketData />
    <CandleData />
    <TradeData />
  </div>
</template>

<script setup>
import CryptoPrices from "../components/CryptoPrices.vue";
import MarketData from "../components/MarketData.vue";
import CandleData from "../components/CandleData.vue";
import TradeData from "../components/TradeData.vue";
</script>

<style scoped>
/* Add your styles here */
</style>
