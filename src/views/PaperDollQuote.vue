<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h3>Character Quote</h3>
    <hr class="rule" />
    <p class="quote">&ldquo;{{ player.quote }}&rdquo;</p>
  </div>
</template>

<style scoped>
  .sub-container {
    width: 300px;
  }

  .quote {
    color: aquamarine;
    font-size: 1.2rem;
    font-style: italic;
    text-indent: 1.2rem;
  }
</style>
