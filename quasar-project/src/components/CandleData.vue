<template>
  <div>
    <h2>{{ $t("candleData.title") }}</h2>
    <ul>
      <li v-for="candle in candles" :key="candle.period">
        {{ candle.period }}: {{ $t("candleData.open") }}: {{ candle.open }}
        {{ $t("candleData.high") }}: {{ candle.high }}
        {{ $t("candleData.low") }}: {{ candle.low }}
        {{ $t("candleData.close") }}: {{ candle.close }}
        {{ $t("candleData.volume") }}: {{ candle.volume }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const cryptoStore = useCryptoStore();

onMounted(() => {
  cryptoStore.fetchCandles();
});

const candles = computed(() => cryptoStore.candles);
</script>

<style scoped>
/* Add your styles here */
</style>
