<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h2>{{ player.name }}</h2>
    <p>Level {{ player.level }} {{ player.race }} {{ player.gender }}</p>
    <br />
    <div class="flex-1">
      <RouterLink class="sumi-btn-1" to="/doll/attributes">Attributes</RouterLink>
      <RouterLink class="sumi-btn-1" to="/doll/skills">Skills</RouterLink>
      <RouterLink class="sumi-btn-1" to="/doll/notoriety">Notoriety</RouterLink>
      <RouterLink class="sumi-btn-1" to="/doll/quote">Quote</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
  .sub-container {
  }
</style>
