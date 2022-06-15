<script setup>
  defineProps({
    skill: Object,
    name: String,
  });
</script>

<template>
  <div class="sb-tab">
    <input
      class="radio"
      type="radio"
      :name="name"
      :id="skill.id"
      :value="skill.id"
      @click="$emit('skillSelect', skill.skillName)"
    />
    <label class="pane-row radio-label" :for="skill.id">{{ skill.skillName }}</label>
  </div>
</template>

<style scoped>
  .sb-tab {
  }

  .radio {
    display: none;
  }

  .radio:checked ~ .radio-label {
    filter: sepia(1) brightness(1.67);
  }

  .radio-label {
    display: block;
  }

  .pane-row {
    align-items: center;
    background: linear-gradient(
      22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    border-bottom: solid 0.5px rgba(24, 32, 40, 0.33);
    border-top: solid 0.5px rgba(48, 64, 80, 0.5);
    box-shadow: inset 4px 4px 8px 0 rgba(96, 128, 159, 0.1);
    display: flex;
    height: 28px;
    padding: 0 6px;
    transition: 0.05s ease;
    user-select: none;
  }

  .pane-row:hover {
    filter: brightness(1.5);
  }
</style>
