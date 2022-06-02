<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sub-container">
    <hr class="rule" />
    <h3>Notoriety</h3>
    <h4>Capitals</h4>
    <div class="rep-bar">
      <p class="rep" v-for="rep in player.notoriety.cityRep" :key="rep.id">
        <span class="type">{{ rep.name }}: {{ rep.value }}</span>
      </p>
    </div>
    <br />
    <h4>People</h4>
    <div class="rep-bar">
      <p class="rep" v-for="rep in player.notoriety.peopleRep" :key="rep.id">
        <span class="type">{{ rep.name }}: {{ rep.value }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .sub-container {
    width: 350px;
  }

  .rep {
    background: #004d4d;
    border-radius: 9px;
    box-shadow: inset -2px -2px 6px -2px #1a1a1a;
    line-height: 18px;
    margin: 4px 0 0 0;
    text-align: center;
  }

  .rep:hover {
    filter: brightness(1.33);
  }

  .rep:first-child {
    margin-top: 6px;
  }

  .type {
    align-self: center;
    color: aquamarine;
    font-size: 1rem;
    margin-left: auto;
  }
</style>
