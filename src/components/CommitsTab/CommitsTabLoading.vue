<script setup>
  import { ref } from "vue";

  const loadingText = ref("Commits loading ");

  const dirt = ["s@#t!", "p#$s!", "f$%k!"];

  const getRandomDirt = () => dirt[Math.floor(Math.random() * dirt.length)];
  const randomChance = () => Math.floor(Math.random() * 101);

  const ticker = setInterval(() => {
    // 7 percent chance to curse
    if (randomChance() < 7) loadingText.value = loadingText.value.concat(getRandomDirt(), " ");
    else loadingText.value = loadingText.value.concat(". ");
  }, 250);

  setTimeout(() => {
    clearInterval(ticker);
    loadingText.value = loadingText.value.concat(":(");
  }, 100_250);
</script>

<template>
  <div>
    <h1>{{ loadingText }}</h1>
  </div>
</template>
