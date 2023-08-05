<template>
  <div
    class="absolute"
    :style="{
      left: randomX + 'px',
      top: randomY + 'px',
    }"
  >
    <span class="text-white"> 31 </span>
  </div>
</template>

<script setup lang="ts">
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Generate random coordinates
const randomX = Math.random() * screenWidth;
const randomY = Math.random() * screenHeight;

console.log(randomX, randomY);
</script>
