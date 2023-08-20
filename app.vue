<template>
  <UtilsLoadingScreen v-if="isLoading" />
  <KeepAlive v-else>
    <div class="bg-primary-dark min-w-full min-h-screen">
      <NuxtPage />
    </div>
  </KeepAlive>
</template>

<script setup lang="ts">
const isLoading = ref(true);
onNuxtReady(() => {
  isLoading.value = false;
});
</script>
