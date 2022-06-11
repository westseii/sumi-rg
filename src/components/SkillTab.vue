<script setup>
  const props = defineProps({
    skill: String,
    rank: Number,
    value: Number,
    cantrip: Number,
  });
</script>

<template>
  <div class="pane-row">
    <div class="ico1" />
    <p class="clr-special">{{ skill }}</p>
    <span class="can-val-align">
      <span class="cantrip" v-show="cantrip">(+{{ cantrip }})&nbsp;</span>
      <p class="value">{{ value + cantrip }}</p>
    </span>
  </div>
</template>

<style scoped></style>
