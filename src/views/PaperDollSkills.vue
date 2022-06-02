<script setup>
  import { computed } from "vue";

  import { creatureSkills } from "@/gameVars.js";

  const skillsAreUnusable = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 0).sort((a, b) => a.name > b.name)
  );
  const skillsAreUntrained = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 1).sort((a, b) => a.name > b.name)
  );
  const skillsAreTrained = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 2).sort((a, b) => a.name > b.name)
  );
  const skillsAreSpecialized = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 3).sort((a, b) => a.name > b.name)
  );
  const skillsAreProdigal = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 4).sort((a, b) => a.name > b.name)
  );
</script>

<template>
  <div class="sub-container">
    <hr class="rule" />
    <h3>Skills</h3>
    <div class="max">
      <h4 style="color: royalblue">Specialized ({{ skillsAreSpecialized.length }})</h4>
      <div>
        <div
          class="flex-1"
          v-for="skill in skillsAreSpecialized"
          :key="skill.id"
          v-tooltip="skill.desc"
        >
          {{ skill.name }}
          <span class="formulaic">{{ skill.formulaic }}</span>
          <span class="type">{{ skill.type }}</span>
        </div>
      </div>
      <br />
      <h4 style="color: green">Trained ({{ skillsAreTrained.length }})</h4>
      <div>
        <div
          class="flex-1"
          v-for="skill in skillsAreTrained"
          :key="skill.id"
          v-tooltip="skill.desc"
        >
          {{ skill.name }}
          <span class="formulaic">{{ skill.formulaic }}</span>
          <span class="type">{{ skill.type }}</span>
        </div>
      </div>
      <br />
      <h4 style="color: rosybrown">Untrained ({{ skillsAreUntrained.length }})</h4>
      <div>
        <div
          class="flex-1"
          v-for="skill in skillsAreUntrained"
          :key="skill.id"
          v-tooltip="skill.desc"
        >
          {{ skill.name }}
          <span class="formulaic">{{ skill.formulaic }}</span>
          <span class="type">{{ skill.type }}</span>
        </div>
      </div>
      <br />
      <h4 style="color: orangered">Unusable ({{ skillsAreUnusable.length }})</h4>
      <div>
        <div
          class="flex-1"
          v-for="skill in skillsAreUnusable"
          :key="skill.id"
          v-tooltip="skill.desc"
        >
          {{ skill.name }}
          <span class="formulaic">{{ skill.formulaic }}</span>
          <span class="type">{{ skill.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-container {
    max-width: 450px;
  }

  .max {
    height: 500px;
    overflow: scroll;
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

  .formulaic {
    align-self: center;
    color: slateblue;
    font-size: 1rem;
    margin-left: auto;
  }

  .type {
    align-self: center;
    color: aquamarine;
    font-size: 1rem;
    margin-left: auto;
  }
</style>
