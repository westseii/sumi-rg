<script setup>
  import AttributesPane from "@/components/CharacterPane/AttributesPane.vue";
  import SkillsPane from "@/components/CharacterPane/SkillsPane.vue";
</script>

<template>
  <div class="character-pane">
    <AttributesPane />
    <SkillsPane />
  </div>
</template>

<style scoped>
  .character-pane {
    display: flex;
  }

  .attributes-pane {
    margin-right: 28px;
  }
</style>
