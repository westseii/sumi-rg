<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h2>{{ player.name }}</h2>
    <p>Level {{ player.level }} {{ player.race }} {{ player.gender }}</p>
    <br />
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
    box-shadow: inset -2px -2px 6px -2px #1a1a1a;
    display: inline-block;
    line-height: 24px;
    margin: 6px;
    min-width: 50px;
    padding: 0 12px;
    text-align: center;
  }

  .rep {
    background: olivedrab;
    border-radius: 9px;
    box-shadow: inset -2px -2px 6px -2px #1a1a1a;
    line-height: 18px;
    margin: 4px 0 0 0;
    text-align: center;
    width: 50%;
  }

  .rep:hover {
    filter: brightness(1.33);
  }

  .rep:first-child {
    margin-top: 0;
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
