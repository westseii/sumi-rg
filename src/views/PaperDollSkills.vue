<script setup>
  import { computed } from "vue";
  // import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";
  import { creatureSkills } from "@/game.js";

  // const player = usePlayerCharacterStore();

  const skillsAreUnusable = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 0)
  );
  const skillsAreUntrained = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 1)
  );
  const skillsAreTrained = computed(() => creatureSkills.filter((skill) => skill.specStatus === 2));
  const skillsAreSpecialized = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 3)
  );
  const skillsAreProdigal = computed(() =>
    creatureSkills.filter((skill) => skill.specStatus === 4)
  );
</script>

<template>
  <div class="sub-container">
    <h3>Skills</h3>
    <hr class="rule" />
    <h4>Specialized ({{ skillsAreSpecialized.length }})</h4>
    <div>
      <div class="flex-1" v-for="skill in skillsAreSpecialized" :key="skill.id">
        {{ skill.name }}<span class="value">{{ skill.type }}</span>
      </div>
    </div>
    <br />
    <h4>Trained ({{ skillsAreTrained.length }})</h4>
    <div>
      <div class="flex-1" v-for="skill in skillsAreTrained" :key="skill.id">
        {{ skill.name }}<span class="value">{{ skill.type }}</span>
      </div>
    </div>
    <br />
    <h4>Untrained ({{ skillsAreUntrained.length }})</h4>
    <div>
      <div class="flex-1" v-for="skill in skillsAreUntrained" :key="skill.id">
        {{ skill.name }}<span class="value">{{ skill.type }}</span>
      </div>
    </div>
    <br />
    <h4>Unusable ({{ skillsAreUnusable.length }})</h4>
    <div>
      <div class="flex-1" v-for="skill in skillsAreUnusable" :key="skill.id">
        {{ skill.name }}<span class="value">{{ skill.type }}</span>
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
