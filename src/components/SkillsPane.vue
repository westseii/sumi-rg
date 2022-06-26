<script setup>
  import { computed, ref, watchEffect } from "vue";

  import SkillTab from "@/components/SkillTab.vue";

  import { skillsInfo } from "@/skillsInfo.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  // computed values
  const prodigal = computed(() =>
    skillsInfo[0]
      .filter((skill) => player.skills[0][skill.id].rank === 4)
      .sort((a, b) => a.name > b.name),
  );

  const specialized = computed(() =>
    skillsInfo[0]
      .filter((skill) => player.skills[0][skill.id].rank === 3)
      .sort((a, b) => a.name > b.name),
  );

  const trained = computed(() =>
    skillsInfo[0]
      .filter((skill) => player.skills[0][skill.id].rank === 2)
      .sort((a, b) => a.name > b.name),
  );

  const untrained = computed(() =>
    skillsInfo[0]
      .filter((skill) => player.skills[0][skill.id].rank === 1)
      .sort((a, b) => a.name > b.name),
  );

  const unusable = computed(() =>
    skillsInfo[0]
      .filter((skill) => player.skills[0][skill.id].rank === 0)
      .sort((a, b) => a.name > b.name),
  );

  const special = computed(() => skillsInfo[1].sort((a, b) => a.name > b.name));

  // events
  const pool = ref(null);
  const skillId = ref(null);
  const skillSelected = (payload) => {
    pool.value = payload.pool;
    skillId.value = payload.id;
  };
</script>

<template>
  <div style="display: flex">
    <div>
      <h1>
        <span v-show="player.name">{{ player.name }}'s </span>Skills
      </h1>
      <hr class="rule" />
      <div style="height: 504px; overflow: scroll; scrollbar-width: none; width: 320px">
        <div class="rank" v-show="special.length">
          <span class="bullet" />
          <h2>
            Innate / Racial<span v-show="player.race"> ({{ player.race }})</span>
          </h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in special"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
        <div class="rank" v-show="prodigal.length">
          <span class="bullet" />
          <h2>Prodigy</h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in prodigal"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
        <div class="rank" v-show="specialized.length">
          <span class="bullet" />
          <h2>Specialized</h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in specialized"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
        <div class="rank" v-show="trained.length">
          <span class="bullet" />
          <h2>Trained</h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in trained"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
        <div class="rank" v-show="untrained.length">
          <span class="bullet" />
          <h2>Untrained</h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in untrained"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
        <div class="rank" v-show="unusable.length">
          <span class="bullet" />
          <h2>Unusable</h2>
        </div>
        <div>
          <SkillTab
            @skill-selected="skillSelected"
            v-for="s in unusable"
            :key="s.id"
            :skill="{ pool: s.pool, id: s.id }"
            :group="'skill-selected'"
          />
        </div>
      </div>
      <!-- Todo: put into its own component; eliminate inline styles -->
      <div class="sumi-pane" style="border-radius: 8px; margin-top: 6px; width: 320px">
        <div v-if="skillId != null">
          <div style="align-items: center; display: flex; height: 28px">
            <h2>{{ skillsInfo[pool][skillId].name }}</h2>
            <!-- has fx -->
            <h2 v-if="skillsInfo[pool][skillId].fx" style="font-size: 1.2rem; margin-left: auto">
              {{ skillsInfo[pool][skillId].fx }}
            </h2>
            <!-- racial only -->
            <h2 v-if="!skillsInfo[pool][skillId].fx" style="font-size: 1.2rem; margin-left: auto">
              Racial
            </h2>
          </div>
          <div style="max-height: 84px; overflow: scroll; scrollbar-width: none">
            <p style="font-size: 1.2rem; line-height: 1.2">{{ skillsInfo[pool][skillId].desc }}</p>
          </div>
          <hr class="rule-sm" />
        </div>
        <div style="display: flex">
          <span>Skill points:</span>
          <span style="margin-left: auto">{{ 1 }}</span>
        </div>
        <hr class="rule-sm" />
        <div style="display: flex">
          <span>Unassigned EXP:</span>
          <span style="margin-left: auto">{{ player.availableExpLocale }}</span>
        </div>
        <div style="display: flex">
          <span>Cost:</span>
          <span style="color: brown; margin-left: auto">{{ Infinity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .rank {
    align-items: center;
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
    height: 28px;
    padding: 0;
    user-select: none;
  }
</style>
