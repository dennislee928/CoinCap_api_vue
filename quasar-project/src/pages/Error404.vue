<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <q-icon name="error" size="5rem" color="negative" />
      <div class="text-h4">404 - Page Not Found</div>
      <q-btn color="primary" @click="goHome" label="Go Home" />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";

// 將組件名稱更改為多字組合
const componentName = "ErrorPage404";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Add your styles here */
</style>
