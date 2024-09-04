<template>
  <div>
    <h2>Market Data</h2>
    <q-table :rows="markets" :columns="columns" row-key="id" dense>
      <!-- Exchange ID Column -->
      <template v-slot:body-cell-exchangeId="props">
        <q-td :props="props">
          {{ props.row.exchangeId }}
        </q-td>
      </template>

      <!-- Base Asset Column -->
      <template v-slot:body-cell-baseId="props">
        <q-td :props="props">
          {{ props.row.baseId }}
        </q-td>
      </template>

      <!-- Quote Asset Column -->
      <template v-slot:body-cell-quoteId="props">
        <q-td :props="props">
          {{ props.row.quoteId }}
        </q-td>
      </template>

      <!-- Price (USD) Column -->
      <template v-slot:body-cell-priceUsd="props">
        <q-td :props="props">
          {{ parseFloat(props.row.priceUsd).toFixed(2) }}
        </q-td>
      </template>
    </q-table>
    <q-btn round color="secondary" icon="navigation" @click="goHome" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCryptoStore } from "../stores/cryptoStore";
import { onMounted, computed } from "vue";

const cryptoStore = useCryptoStore();

onMounted(() => {
  cryptoStore.fetchMarkets();
});

// Define the columns for the table
const columns = [
  {
    name: "exchangeId",
    required: true,
    label: "Exchange",
    align: "left",
    field: "exchangeId",
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 25%",
  },
  {
    name: "baseId",
    label: "Base Asset",
    align: "left",
    field: "baseId",
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 25%",
  },
  {
    name: "quoteId",
    label: "Quote Asset",
    align: "left",
    field: "quoteId",
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 25%",
  },
  {
    name: "priceUsd",
    label: "Price (USD)",
    align: "right",
    field: "priceUsd",
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 25%",
  },
];

const router = useRouter();
const markets = computed(() => cryptoStore.markets);

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.q-table .q-td {
  padding: 8px;
}

.q-table .q-th {
  padding: 8px;
}
</style>
