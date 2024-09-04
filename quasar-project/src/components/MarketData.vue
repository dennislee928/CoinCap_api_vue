<template>
  <div>
    <h2>{{ $t("marketData.title") }}</h2>
    <ul>
      <li v-for="market in markets" :key="market.id">
        {{ market.exchangeId }} - {{ market.baseId }}/{{ market.quoteId }}:
        {{ market.priceUsd }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const cryptoStore = useCryptoStore();

onMounted(() => {
  cryptoStore.fetchMarkets();
});

const markets = computed(() => cryptoStore.markets);
</script>

<style scoped>
/* Add your styles here */
</style>
