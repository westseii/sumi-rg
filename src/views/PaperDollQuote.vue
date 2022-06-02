<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <hr class="rule" />
    <h3>Character Quote</h3>
    <p class="quote">&ldquo;{{ player.quote }}&rdquo;</p>
  </div>
</template>

<style scoped>
  .sub-container {
    width: 350px;
  }

  .quote {
    color: aquamarine;
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 6px;
    text-indent: 1.2rem;
  }
</style>
