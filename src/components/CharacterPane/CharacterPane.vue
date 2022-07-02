<script setup>
  import AttributesPane from "@/components/CharacterPane/AttributesPane.vue";
  import SkillsPane from "@/components/CharacterPane/SkillsPane.vue";

  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div style="width: fit-content">
    <div style="text-align: center">
      <h1>{{ player.name }} the Unpleasant</h1>
      <p>Level {{ player.level }} {{ player.gender }} {{ player.race }}</p>
      <p style="color: slategray">Non-Player Killer</p>
    </div>
    <hr class="rule" />
    <div style="display: flex">
      <AttributesPane class="attributes-pane" />
      <SkillsPane class="skills-pane" />
    </div>
  </div>
</template>

<style scoped>
  .attributes-pane {
    margin-right: 6px;
    width: 320px;
  }

  .skills-pane {
    width: 320px;
  }
</style>
