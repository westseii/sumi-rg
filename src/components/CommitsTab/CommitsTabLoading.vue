<script setup>
  import { ref } from "vue";

  const loadingText = ref("Commits loading ");

  const dirtyWords = ["sh*t", "p^ss", "f*ck", "c_nt", "c*cks^ck*r", "m_th*rf^ck*r", "t_ts"];

  const getRandomDirt = () => dirtyWords[Math.floor(Math.random() * dirtyWords.length)];
  const getRandomChance = () => Math.floor(Math.random() * 101);

  const ticker = setInterval(() => {
    // 7 percent chance to curse
    if (getRandomChance() < 7) loadingText.value = loadingText.value.concat(getRandomDirt(), " ");
    else loadingText.value = loadingText.value.concat(". ");
  }, 100);

  setTimeout(() => {
    clearInterval(ticker);
    loadingText.value = loadingText.value.concat("WELP...");
  }, 25_100);
</script>

<template>
  <div class="commits-tab">
    <h1>{{ loadingText }}</h1>
  </div>
</template>
