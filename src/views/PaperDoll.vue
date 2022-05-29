<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h2>{{ player.name }}</h2>
    <p>Level {{ player.level }} {{ player.race }} {{ player.gender }}</p>
    <hr class="rule" />
    <h3>Vitals</h3>
    <div>
      Health:&ensp;<span class="hp">{{ player.vitality.health }}</span>
    </div>
    <div>
      Stamina:&ensp;<span class="sp">{{ player.vitality.stamina }}</span>
    </div>
    <div>
      Mana:&ensp;<span class="mp">{{ player.vitality.mana }}</span>
    </div>
    <div>
      Ultimate Power:&ensp;<span class="up">{{ player.vitality.ultimate }}</span>
    </div>
    <hr class="rule" />
    <div class="flex-1">
      <RouterLink class="sumi-btn-1" to="/doll/attributes">Attributes</RouterLink>
      <RouterLink class="sumi-btn-1" to="/doll/skills">Skills</RouterLink>
      <RouterLink class="sumi-btn-1" to="/doll/quote">Quote</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
  .sub-container {
  }

  .hp {
    color: brown;
  }

  .sp {
    color: sandybrown;
  }

  .mp {
    color: royalblue;
  }

  .up {
    color: darkmagenta;
  }
</style>
