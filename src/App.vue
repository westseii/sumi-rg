<script setup>
  import { RouterLink, RouterView } from "vue-router";

  // temp
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  // temp, dis not good
  const cantripAdd = 5;
  function getRandIntInc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  player.skills[0].forEach((skill) => {
    if (skill.rank === 4) skill.val += getRandIntInc(60, 74);
    else if (skill.rank === 3) skill.val += getRandIntInc(45, 59);
    else if (skill.rank === 2) skill.val += getRandIntInc(0, 44);
  });
  player.skills[0].forEach((skill) => (skill.cantrip += cantripAdd));
  // // if a skill is unusable, then it is truly unusable
  player.skills[0].forEach((skill) => {
    if (skill.rank === 0) {
      skill.val = 0;
      skill.cantrip = 0;
    }
  });
</script>

<template>
  <div class="btn-container">
    <RouterLink class="sumi-btn-1 btn-margins" to="/">...</RouterLink>
    <RouterLink class="sumi-btn-1 btn-margins" to="/skills-pane">Character</RouterLink>
    <RouterLink class="sumi-btn-1 btn-margins" to="" disabled>Placeholder</RouterLink>

    <RouterLink class="sumi-btn-1" to="/commits">Commit Log</RouterLink>
    <!-- <RouterLink class="sumi-btn-1" to="/doll/attributes">Doll</RouterLink> -->
  </div>
  <hr class="rule" />
  <RouterView />
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";
  @import "@/assets/panes.css";

  body {
    padding: 0px 6px 6px 6px;
  }
</style>

<style scoped>
  .btn-container {
    display: flex;
  }

  .btn-margins {
    margin: 6px 6px 0 0;
  }

  .btn-container > .sumi-btn-1:last-child {
    margin: 6px 0 0 auto;
  }
</style>
