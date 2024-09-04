<template>
  <div>
    <h2>Binance data block2 (coming soon)</h2>
    <ul>
      <li v-for="trade in trades" :key="trade.timestamp">
        {{ trade.exchange }} - {{ trade.base }}/{{ trade.quote }}:
        {{ trade.price }} ({{ trade.direction }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const cryptoStore = useCryptoStore();

onMounted(() => {
  cryptoStore.fetchTrades();
});

const trades = computed(() => cryptoStore.trades);
</script>

<style scoped>
/* Add your styles here */
</style>
