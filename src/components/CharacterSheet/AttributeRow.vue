<script setup>
  import { computed } from "@vue/reactivity";

  const props = defineProps({
    attribute: Object,
    attributeName: String,
    total: [Number, String],
  });

  const cantripColor = computed(() => (props.attribute.cantrip > 0 ? "clr-buff" : "clr-unusable"));
</script>

<template>
  <div class="char-attributes__flex">
    <div>{{ attributeName }}</div>
    <span class="cantrip" :class="cantripColor" v-show="attribute.cantrip !== 0">
      <span v-show="attribute.cantrip > 0">+</span>{{ attribute.cantrip }}
    </span>
    <span class="char-attributes__flex--total">{{ total }}</span>
  </div>
</template>

<style scoped>
  .char-attributes__flex {
    align-items: center;
    display: flex;
    position: relative;
  }
  .char-attributes__flex--total {
    margin-left: auto;
  }

  .cantrip {
    font-size: 1.1rem;
    position: absolute;
    right: 48px;
  }
</style>
