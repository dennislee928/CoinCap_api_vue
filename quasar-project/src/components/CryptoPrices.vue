<template>
  <div>
    <h2>Crypto real time price:</h2>
    <ul>
      <li v-for="(price, asset) in prices" :key="asset">
        {{ asset }}: {{ price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const cryptoStore = useCryptoStore();

onMounted(() => {
  cryptoStore.fetchPrices();
});

const prices = computed(() => cryptoStore.prices);
</script>

<style scoped>
/* Add your styles here */
</style>
