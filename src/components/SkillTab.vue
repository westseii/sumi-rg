<script setup>
  import { computed } from "vue";

  import { skillsPool } from "@/skillsGeneral.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  // does this need to be imported?
  const player = usePlayerCharacterStore();

  const props = defineProps({
    skill: Object,
    icon: { type: String, default: "ico-def" },
    group: String,
  });

  // computed values
  const val = computed(() => player.skills.pool[props.skill.pool][props.skill.id].val);
  const cantrip = computed(() => player.skills.pool[props.skill.pool][props.skill.id].cantrip);
  const label = computed(() => `${props.skill.pool}${props.skill.id}`);
  const textColor = computed(() => {
    if (props.skill.pool === 0) {
      // pool 0 is for all of the universal non-racial skills
      switch (player.skills.pool[props.skill.pool][props.skill.id].rank) {
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
  const textColorUnused = computed(
    () => player.skills.pool[props.skill.pool][props.skill.id].rank === 0,
  );
</script>

<template>
  <div class="skill-tab">
    <input
      class="radio"
      type="radio"
      :name="group"
      :id="label"
      @click="$emit('skillSelected', { pool: skill.pool, id: skill.id })"
    />
    <label class="skill-tab-row radio-label" :for="label">
      <span :class="icon" />
      <span :class="textColor">{{ skillsPool[skill.pool][skill.id].name }}</span>
      <div style="margin-left: auto">
        <span class="clr-cantrip" v-show="cantrip">(+{{ cantrip }}) </span>
        <span :class="textColorUnused && 'clr-unusable'">{{ val + cantrip }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped>
  .skill-tab-row {
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

  .skill-tab-row:hover {
    filter: brightness(1.5);
  }

  .skill-tab:first-child > .skill-tab-row {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .skill-tab:last-child > .skill-tab-row {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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

  .clr-special {
    color: rgb(191, 80, 159);
  }

  .clr-prodigy {
    color: rgb(80, 191, 159);
  }

  .clr-specialized {
    color: rgb(48, 191, 48);
  }

  .clr-trained {
    color: rgb(120, 191, 120);
  }

  .clr-untrained {
    color: rgb(191, 191, 191);
  }

  .clr-unusable {
    color: rgb(128, 80, 80);
  }

  .clr-cantrip {
    color: rgb(80, 159, 191);
  }
</style>
