<script setup>
  import { ref } from "vue";

  import SbTab from "@/components/SbTab.vue";

  const selected = ref();

  const skills = ref([
    {
      id: 0,
      skillName: "Axe",
    },
    {
      id: 1,
      skillName: "Bow",
    },
    {
      id: 2,
      skillName: "Sword",
    },
  ]);
  const skillsNotTrained = ref([
    {
      id: 3,
      skillName: "Healing",
    },
    {
      id: 4,
      skillName: "Magic",
    },
    {
      id: 5,
      skillName: "Xeno",
    },
  ]);
</script>

<template>
  <h2>Test</h2>

  <div>
    <h3>Trained</h3>
    <sb-tab
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
      :name="'skills'"
      @skill-select="(n) => (selected = n)"
    />
    <h3>Untrained</h3>
    <sb-tab
      v-for="skill in skillsNotTrained"
      :key="skill.id"
      :skill="skill"
      :name="'skills'"
      @skill-select="(n) => (selected = n)"
    />
  </div>

  <br />
  <div v-show="selected">Chosen: {{ selected }}</div>
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  body {
    padding: 24px;
  }
</style>

<style scoped></style>
