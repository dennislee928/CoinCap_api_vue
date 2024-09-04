<template>
  <div>
    <h2>Real-Time Prices</h2>
    <ul>
      <li v-for="(price, asset) in realTimePrices" :key="asset">
        {{ asset }}: {{ price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const realTimePrices = ref({});

const fetchRealTimePrices = () => {
  const pricesWs = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");

  pricesWs.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    Object.assign(realTimePrices.value, data);
  };
};

onMounted(fetchRealTimePrices);
</script>

<style scoped>
/* Add your styles here */
</style>
