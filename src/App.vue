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
  player.skills.pool[0].forEach((skill) => {
    if (skill.rank === 4) skill.val += getRandIntInc(60, 74);
    else if (skill.rank === 3) skill.val += getRandIntInc(45, 59);
    else if (skill.rank === 2) skill.val += getRandIntInc(30, 44);
  });
  player.skills.pool[0].forEach((skill) => (skill.cantrip += cantripAdd));
  // if a skill is unusable, then it is truly unusable
  player.skills.pool[0].forEach((skill) => {
    if (skill.rank === 0) {
      skill.val = 0;
      skill.cantrip = 0;
    }
  });
</script>

<template>
  <div class="flex-1">
    <RouterLink class="sumi-btn-1 rl" to="/">Sumi RG</RouterLink>
    <RouterLink class="sumi-btn-1 rl" to="/commits">Commit Log</RouterLink>
    <RouterLink class="sumi-btn-1 rl" to="/skills-pane">Skills</RouterLink>
    <!-- <RouterLink class="sumi-btn-1" to="/doll/attributes">Doll</RouterLink> -->
  </div>
  <hr class="rule" />
  <RouterView />
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";
  @import "@/assets/custom.css";
  @import "@/assets/panes.css";

  body {
    padding: 0 20px 20px 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(96, 128, 159, 0.85);
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.4rem;
  }

  span.ico-def {
    background-image: url("@/assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: inset -6px -6px 12px 0 rgba(96, 128, 159, 0.33);
    height: 22px;
    margin: 0 6px 0 -4px;
    width: 22px;
  }
</style>

<style scoped>
  .rl {
    margin: 6px 6px 0 0;
  }
</style>
