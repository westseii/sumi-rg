<script setup>
  import { computed } from "vue";

  import { skillsInfo } from "@/skillsInfo.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  const props = defineProps({
    skill: Object, // { pool: s.pool, id: s.id }
    icon: { type: String, default: "ico-def" },
    group: String,
  });

  // computed values
  const val = computed(() => player.skills[props.skill.pool][props.skill.id].val);

  const cantrip = computed(() => player.skills[props.skill.pool][props.skill.id].cantrip);

  const label = computed(() => `${props.skill.pool}${props.skill.id}`);

  const textColor = computed(() => {
    if (props.skill.pool === 0) {
      switch (player.skills[props.skill.pool][props.skill.id].rank) {
        case 0:
          return "clr-unusable";
        case 1:
          return "clr-untrained";
        case 2:
          return "clr-trained";
        case 3:
          return "clr-specialized";
        case 4:
          return "clr-prodigy";
      }
    } else return "clr-special"; // for racial skills
  });

  const clrUnusable = computed(() => player.skills[props.skill.pool][props.skill.id].rank === 0);
</script>

<template>
  <div class="skill-tab">
    <input
      class="radio"
      type="radio"
      :name="group"
      :id="label"
      @click="$emit('skillSelected', props.skill)"
    />
    <label class="stat-row radio-label" :for="label">
      <span :class="icon" />
      <span :class="textColor">{{ skillsInfo[skill.pool][skill.id].name }}</span>
      <div style="margin-left: auto">
        <span class="clr-cantrip" v-show="cantrip">(+{{ cantrip }}) </span>
        <span :class="clrUnusable && 'clr-unusable'">{{ val + cantrip }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped>
  .skill-tab:first-child > .stat-row {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .skill-tab:last-child > .stat-row {
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
