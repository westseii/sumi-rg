<script setup>
  import { computed, ref } from "vue";
  import { RouterLink, RouterView } from "vue-router";

  import { skillExperienceCosts as expCosts, skillCap } from "@/gameVars.js";

  // +Dev
  const showExpPanel = ref(true);
  const toggleExpPanel = () => {
    if (showExpPanel.value) showExpPanel.value = false;
    else showExpPanel.value = true;
  };

  // set initial experience pool
  const availableExp = ref(25_000);
  const availableExpDisplay = computed(() => availableExp.value.toLocaleString("en-US"));

  // total experience ever earned
  const totalExp = ref(availableExp.value);
  const totalExpDisplay = computed(() => totalExp.value.toLocaleString("en-US"));

  // randomize experience gain
  const minGain = 1250;
  const maxGain = 1_250_000;
  const randomGain = () => Math.floor(Math.random() * (maxGain - minGain + 1)) + minGain;
  const nextExpGain = ref(randomGain());
  const nextExpGainDisplay = computed(() => nextExpGain.value.toLocaleString("en-US"));

  // current skill level
  const skillLevel = ref(1);
  const nextSkillCost = computed(() => expCosts[skillLevel.value - 1]);
  const isNotSkillCapped = computed(() => skillLevel.value < skillCap);
  const canRaiseSkill = computed(() => availableExp.value - nextSkillCost.value >= 0);
  const nextSkillCostDisplay = computed(() => {
    if (!isNotSkillCapped.value) return "INFINITY!";
    else return expCosts[skillLevel.value - 1].toLocaleString("en-US");
  });

  // tooltip info
  const minGainDisplay = computed(() => minGain.toLocaleString("en-US"));
  const maxGainDisplay = computed(() => maxGain.toLocaleString("en-US"));
  const expGainTooltip = `
  Grants between ${minGainDisplay.value} and ${maxGainDisplay.value} kill experience (so that science can still be done).
  `;

  // other functions
  const raiseSkillLevel = () => {
    if (isNotSkillCapped.value && canRaiseSkill.value) {
      availableExp.value -= nextSkillCost.value;
      skillLevel.value++;
    }
  };

  const expGain = () => {
    availableExp.value += nextExpGain.value;
    totalExp.value += nextExpGain.value;
    nextExpGain.value = randomGain();
  };

  const expClass = computed(() => {
    if (!isNotSkillCapped.value) return "capped";
    else {
      if (canRaiseSkill.value) return "available";
      else return "unavailable";
    }
  });
</script>

<template>
  <button class="sumi-btn-1 btn-hay" @click="toggleExpPanel" v-show="showExpPanel">
    (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
  </button>
  <div class="sub-container" v-show="!showExpPanel">
    <button class="sumi-btn-1 exp-toggle btn-hay" @click="toggleExpPanel">(っ´ω`c)</button>
    <h2>Exp</h2>
    <br />
    <p>
      Next cost: <span :class="expClass">{{ nextSkillCostDisplay }}</span>
    </p>
    <p>
      <span>{{ skillLevel }} / {{ skillCap }}</span>
    </p>
    <p>
      Available: <span>{{ availableExpDisplay }}</span>
    </p>
    <p>
      Earned: <span>{{ totalExpDisplay }}</span>
    </p>
    <br />
    <button class="sumi-btn-1" @click="expGain" v-tooltip="expGainTooltip">
      +{{ nextExpGainDisplay }} Exp
    </button>
    <button class="sumi-btn-1" @click="raiseSkillLevel" v-show="isNotSkillCapped && canRaiseSkill">
      +1 pt
    </button>
  </div>
  <hr class="rule" v-show="!showExpPanel" />
  <div class="flex-1">
    <RouterLink class="sumi-btn-1" to="/">Overview</RouterLink>
    <RouterLink class="sumi-btn-1" to="/doll/attributes">Doll</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" to="/hit-calc">Hit Pt</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" :disabled="!false" to="">Atlas</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" :disabled="!false" to="">Crafting</RouterLink>
    <RouterLink class="sumi-btn-1 btn-green" :disabled="!false" to="">Inventory</RouterLink>
  </div>
  <RouterView />
</template>

<style>
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";
  @import "@/assets/custom.css";
  @import "@/assets/tooltip.css";

  #app {
    min-height: inherit;
    padding: 20px;
    width: 600px;
  }

  .exp-toggle {
    float: right;
  }

  .available {
    color: green;
  }

  .unavailable {
    color: brown;
  }

  .capped {
    color: royalblue;
  }

  .btn-red {
    background: #7f443f;
  }

  .btn-green {
    background: #3f7f4f;
  }

  .btn-hay {
    background: linear-gradient(-30deg, #fdeff9, #ec38bc, #7303c0, #03001e);
  }
</style>
