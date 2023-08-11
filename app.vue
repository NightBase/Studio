<template>
  <UtilsLoadingScreen v-if="isLoading" />
  <NuxtPage v-else />
</template>

<script setup lang="ts">
const isLoading = ref(true);
onNuxtReady(() => {
  isLoading.value = false;
});
</script>
