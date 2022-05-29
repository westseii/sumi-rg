<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <h3>Attributes</h3>
    <hr class="rule" />
    <h4>Primary</h4>
    <div>
      <div class="flex-1">
        Strength:
        <div class="value">{{ player["primary attributes"].strength }}</div>
      </div>
      <div class="flex-1">
        Endurance:
        <div class="value">{{ player["primary attributes"].endurance }}</div>
      </div>
      <div class="flex-1">
        Intellect:
        <div class="value">{{ player["primary attributes"].intellect }}</div>
      </div>
      <div class="flex-1">
        Intuition:
        <div class="value">{{ player["primary attributes"].intuition }}</div>
      </div>
      <div class="flex-1">
        Aptitude:
        <div class="value">{{ player["primary attributes"].aptitude }}</div>
      </div>
    </div>
    <br />
    <h4>Secondary</h4>
    <div>
      <div class="flex-1">
        Might:
        <div class="value">{{ player["secondary attributes"].might }}</div>
      </div>
      <div class="flex-1">
        Finesse:
        <div class="value">{{ player["secondary attributes"].finesse }}</div>
      </div>
      <div class="flex-1">
        Cunning:
        <div class="value">{{ player["secondary attributes"].cunning }}</div>
      </div>
      <div class="flex-1">
        Instinct:
        <div class="value">{{ player["secondary attributes"].instinct }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-container {
    max-width: 300px;
  }

  .flex-1 {
    height: 24px;
    padding: 0 12px;
  }

  .flex-1:nth-child(2n + 0) {
    background: #1a1a1a;
  }

  .flex-1:nth-child(2n + 1) {
    background: #262626;
  }

  .flex-1:hover {
    filter: brightness(1.33);
  }

  .value {
    color: aquamarine;
    margin-left: auto;
  }
</style>
