<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";
  import { creatureAttributes } from "@/gameVars.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <hr class="rule" />
    <h3>Vitals</h3>
    <div>
      <div class="flex-1 hp">
        Health
        <div class="type">{{ player.vitality.health }}</div>
      </div>
      <div class="flex-1 sp">
        Stamina
        <div class="type">{{ player.vitality.stamina }}</div>
      </div>
      <div class="flex-1 mp">
        Mana
        <div class="type">{{ player.vitality.mana }}</div>
      </div>
      <div class="flex-1 up">
        Ultimate
        <div class="type">{{ player.vitality.ultimate }}</div>
      </div>
    </div>
    <br />
    <h3>Attributes</h3>
    <h4>Primary</h4>
    <div>
      <div class="flex-1" v-tooltip="creatureAttributes[0].primaryDesc">
        Strength
        <div class="type">{{ player["primary attributes"].strength }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[1].primaryDesc">
        Endurance
        <div class="type">{{ player["primary attributes"].endurance }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[2].primaryDesc">
        Intellect
        <div class="type">{{ player["primary attributes"].intellect }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[3].primaryDesc">
        Intuition
        <div class="type">{{ player["primary attributes"].intuition }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[4].primaryDesc">
        Aptitude
        <div class="type">{{ player["primary attributes"].aptitude }}</div>
      </div>
    </div>
    <br />
    <h4>Secondary</h4>
    <div>
      <div class="flex-1" v-tooltip="creatureAttributes[0].secondaryDesc">
        Might
        <div class="type">{{ player["secondary attributes"].might }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[1].secondaryDesc">
        Finesse
        <div class="type">{{ player["secondary attributes"].finesse }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[2].secondaryDesc">
        Cunning
        <div class="type">{{ player["secondary attributes"].cunning }}</div>
      </div>
      <div class="flex-1" v-tooltip="creatureAttributes[3].secondaryDesc">
        Instinct
        <div class="type">{{ player["secondary attributes"].instinct }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-container {
    max-width: 350px;
  }

  .flex-1 {
    background: rgba(40, 47, 51, 0.67);
    border-radius: 12px;
    box-shadow: inset -2px -2px 6px -2px rgb(128, 128, 128, 0.33);
    height: 24px;
    margin-top: 2px;
    padding: 0 12px;
  }

  .flex-1:first-child {
    margin-top: 6px;
  }

  .flex-1:nth-child(2n + 1) {
    filter: brightness(1.33);
  }

  .flex-1:hover {
    filter: brightness(1.67) hue-rotate(-60deg);
  }

  .type {
    align-self: center;
    color: aquamarine;
    font-size: 1rem;
    margin-left: auto;
  }

  .hp {
    border: solid 0.5px brown;
  }

  .sp {
    border: solid 0.5px sandybrown;
  }

  .mp {
    border: solid 0.5px royalblue;
  }

  .up {
    border: solid 0.5px darkmagenta;
  }
</style>
