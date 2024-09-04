<template>
  <div>
    <h2>{{ $t("cryptoPrices.title") }}</h2>
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
  cryptoStore.fetchMarkets();
});

const prices = computed(() => cryptoStore.prices);
</script>

<style scoped>
/* Add your styles here */
</style>
