<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Welcome to Crypto Dashboard</div>
        <div class="text-subtitle1">
          Real-time cryptocurrency prices and market data
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="View Prices" @click="goToPrices" />
        <q-btn flat label="View Market Data" @click="goToMarketData" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToPrices = () => {
  router.push("/prices");
};

const goToMarketData = () => {
  router.push("/market-data");
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
