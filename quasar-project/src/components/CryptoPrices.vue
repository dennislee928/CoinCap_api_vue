<template>
  <div>
    <h2>Crypto real time price:</h2>
    <ul>
      <li v-for="(price, asset) in prices" :key="asset">
        {{ asset }}: {{ price }}
      </li>
    </ul>
  </div>
  <q-btn round color="secondary" icon="navigation" @click="goHome" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const router = useRouter();
const cryptoStore = useCryptoStore();

const goHome = () => {
  router.push("/");
};

onMounted(() => {
  cryptoStore.fetchPrices();
});

const prices = computed(() => cryptoStore.prices);
</script>

<style scoped>
/* Add your styles here */
</style>
