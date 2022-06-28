<script setup>
  import { computed } from "vue";

  import { attrsInfo } from "@/attrsInfo.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  const props = defineProps({
    attributeId: Number,
    icon: { type: String, default: "ico-def" },
    group: String,
  });

  // computed values
  const val = computed(() => player.attributes[props.attributeId].val);

  const cantrip = computed(() => player.attributes[props.attributeId].cantrip);

  const label = computed(() => `${props.attributeId}`);
</script>

<template>
  <div class="attribute-tab">
    <input
      class="radio"
      type="radio"
      :name="group"
      :id="label"
      @click="$emit('attributeSelected', props.attributeId)"
    />
    <label class="stat-row radio-label" :for="label">
      <span :class="icon" />
      <span>{{ attrsInfo[attributeId].primary }}</span>
      <div style="margin-left: auto">
        <span class="clr-cantrip" v-show="cantrip">(+{{ cantrip }}) </span>
        <span>{{ val + cantrip }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped>
  .attribute-tab:first-child > .stat-row {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .attribute-tab:last-child > .stat-row {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .stat-row {
    align-items: center;
    background: linear-gradient(
      22.5deg,
      rgba(96, 128, 159, 0.08),
      rgba(48, 64, 80, 0.133),
      rgba(128, 159, 191, 0.133)
    );
    border-bottom: solid 1px rgba(24, 32, 40, 0.33);
    border-top: solid 1px rgba(48, 64, 80, 0.5);
    display: flex;
    height: 28px;
    padding: 0 6px;
    transition: 0.1s ease;
    user-select: none;
  }

  .stat-row:hover {
    filter: brightness(1.5);
  }

  .radio {
    display: none;
  }

  .radio:checked ~ .radio-label {
    box-shadow: inset 0 2px 8px 2px rgba(96, 128, 159, 0.133);
    filter: brightness(1.75);
  }

  .radio:checked ~ .radio-label span {
    color: #fff;
    transition: 0.1s ease;
  }
</style>
