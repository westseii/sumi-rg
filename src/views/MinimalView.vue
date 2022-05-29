<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h2>{{ player.name }}</h2>
    <p>Level {{ player.level }} {{ player.race }} {{ player.gender }}</p>
    <div class="bubble hp">{{ player.vitality.health }}</div>
    <div class="bubble sp">{{ player.vitality.stamina }}</div>
    <div class="bubble mp">{{ player.vitality.mana }}</div>
    <div class="bubble up">{{ player.vitality.ultimate }}</div>
  </div>
</template>

<style scoped>
  .sub-container {
  }

  .bubble {
    border-radius: 12px;
    display: inline-block;
    line-height: 24px;
    margin: 6px;
    min-width: 50px;
    text-align: center;
  }

  .hp {
    background: brown;
  }

  .sp {
    background: sandybrown;
  }

  .mp {
    background: royalblue;
  }

  .up {
    background: darkmagenta;
  }
</style>
