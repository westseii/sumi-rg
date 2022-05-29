<script setup>
  import { computed, ref } from "vue";
  import { RouterLink, RouterView } from "vue-router";

  import { skillExperienceCosts as expCost, skillCap as cap } from "@/game.js";
  // import { creatureAttributes, creatureSkills } from "@/game.js";
  // import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  // const player = usePlayerCharacterStore();

  //
  // setup

  const showExpPanel = ref(true);
  const toggleExpPanel = () => {
    if (showExpPanel.value) showExpPanel.value = false;
    else showExpPanel.value = true;
  };

  // set initial experience
  let availableExp = 25_000;
  const availableExpFormatted = ref(availableExp.toLocaleString("en-US"));

  // total experience ever acquired
  let totalExp = availableExp;
  const totalExpFormatted = ref(availableExp.toLocaleString("en-US"));

  // randomize experience gain for testing
  let minExpGain = 125_000;
  let maxExpGain = 500_000;
  const randomExp = () => Math.floor(Math.random() * (maxExpGain - minExpGain + 1)) + minExpGain;
  let nextExpGain = randomExp();
  const nextExpGainFormatted = ref(nextExpGain.toLocaleString("en-US"));

  // current skill level achieved
  const currentSkillLevel = ref(1);
  const nextSkillLevelCostFormatted = ref(
    expCost[currentSkillLevel.value - 1].toLocaleString("en-US")
  );

  setInf(); // init "INFINITY!"; if needed

  //
  // end setup

  // check that maximum skill level has been reached
  function setInf() {
    if (currentSkillLevel.value === cap) {
      nextSkillLevelCostFormatted.value = "INFINITY!";
    }
  }

  // check that experience is available, and if so, add it
  const levelUpCharSkill = () => {
    if (currentSkillLevel.value < cap) {
      const nextSkillUp = expCost[currentSkillLevel.value - 1];

      if (availableExp - nextSkillUp >= 0) {
        // law of equivalent exchange, betch
        availableExp -= nextSkillUp;
        currentSkillLevel.value++;

        // add/update commas for display; update as needed
        availableExpFormatted.value = availableExp.toLocaleString("en-US");
        nextSkillLevelCostFormatted.value =
          expCost[currentSkillLevel.value - 1].toLocaleString("en-US");

        setInf();
      }
    }
  };

  const grantCharExp = () => {
    // add experience to available
    availableExp += nextExpGain;
    availableExpFormatted.value = availableExp.toLocaleString("en-US");

    // update total ever earned
    totalExp += nextExpGain;
    totalExpFormatted.value = totalExp.toLocaleString("en-US");

    // choose the next random amount of experience to gain
    nextExpGain = randomExp();
    nextExpGainFormatted.value = nextExpGain.toLocaleString("en-US");
  };
</script>

<template>
  <button class="sumi-btn-1 btn-red" @click="toggleExpPanel" v-show="showExpPanel">ᛖ ᚲ ᛊ ᛈ</button>
  <div class="sub-container exp" v-show="!showExpPanel">
    <p>
      Next:&ensp;<span>{{ nextSkillLevelCostFormatted }}</span>
    </p>
    <p>
      <span>{{ currentSkillLevel }}&ensp;/&ensp;{{ cap }}</span>
    </p>
    <p>
      Available:&ensp;<span>{{ availableExpFormatted }}</span>
    </p>
    <p>
      Earned:&ensp;<span>{{ totalExpFormatted }}</span>
    </p>
    <button
      class="sumi-btn-1"
      v-show="!(nextSkillLevelCostFormatted === 'INFINITY!')"
      @click="levelUpCharSkill"
    >
      +1 pt
    </button>
    <button class="sumi-btn-1" @click="grantCharExp">+{{ nextExpGainFormatted }} Exp</button>
    <button class="sumi-btn-1 exp-toggle btn-red" @click="toggleExpPanel">betch</button>
  </div>
  <hr class="rule-nomarg" />
  <div class="flex-1">
    <RouterLink class="sumi-btn-1" to="/">Minimal View</RouterLink>
    <RouterLink class="sumi-btn-1" to="/doll">Extended View</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" to="/hit-calc">Hit Pt Calculator</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" to="/">Trades</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" to="/">Tools</RouterLink>
    <button class="sumi-btn-1 btn-gay">(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</button>
  </div>
  <RouterView />
</template>

<style>
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";
  @import "@/assets/custom.css";

  #app {
    background: linear-gradient(-60deg, #16a085, #f4d03f);
    min-height: inherit;
    padding: 20px;
  }

  .exp {
    overflow: auto;
    position: relative;
    width: 300px;
  }

  .exp-toggle {
    border-radius: 0 0 0 16px;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  .btn-red {
    background: #7f443f;
  }

  .btn-green {
    background: #3f7f4f;
  }

  .btn-gay {
    background: linear-gradient(-30deg, #fdeff9, #ec38bc, #7303c0, #03001e);
  }
</style>
