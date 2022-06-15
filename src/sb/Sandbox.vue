<script setup>
  import { computed, ref } from "vue";

  import SkillTab from "@/components/SkillTab.vue";

  import { skillsPool, playerSkillsPool } from "@/sb/skillsStore.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  // computed vars
  const special = computed(() => skillsPool.value[1].sort((a, b) => a.name > b.name));
  const prodigal = computed(() =>
    skillsPool.value[0]
      .filter((skill) => playerSkillsPool.value[0][skill.id].rank === 4)
      .sort((a, b) => a.name > b.name),
  );
  const specialized = computed(() =>
    skillsPool.value[0]
      .filter((skill) => playerSkillsPool.value[0][skill.id].rank === 3)
      .sort((a, b) => a.name > b.name),
  );
  const trained = computed(() =>
    skillsPool.value[0]
      .filter((skill) => playerSkillsPool.value[0][skill.id].rank === 2)
      .sort((a, b) => a.name > b.name),
  );
  const untrained = computed(() =>
    skillsPool.value[0]
      .filter((skill) => playerSkillsPool.value[0][skill.id].rank === 1)
      .sort((a, b) => a.name > b.name),
  );
  const unusable = computed(() =>
    skillsPool.value[0]
      .filter((skill) => playerSkillsPool.value[0][skill.id].rank === 0)
      .sort((a, b) => a.name > b.name),
  );

  const skillSelectedPool = ref(null);
  const skillSelectedId = ref(null);
  const skillSelected = (payload) => {
    skillSelectedPool.value = payload.pool;
    skillSelectedId.value = payload.id;
  };
</script>

<template>
  <h1>
    <span v-show="player.name">{{ player.name }}'s&nbsp;</span>Skills
  </h1>
  <div class="example">
    <hr class="rule" />
    <div style="height: 504px; overflow: scroll; scrollbar-width: none; width: 340px">
      <div class="pane rank" v-show="special.length">
        <div class="v-rule-sm" />
        <h2>
          Innate / Racial<span v-show="player.race">&nbsp;({{ player.race }})</span>
        </h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in special"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="5"
        :value="playerSkillsPool[1][s.id].val"
        :cantrip="playerSkillsPool[1][s.id].cantrip"
        :group="'allskills'"
      />

      <div class="pane rank" v-show="prodigal.length">
        <div class="v-rule-sm" />
        <h2>Prodigy</h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in prodigal"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="4"
        :value="playerSkillsPool[0][s.id].val"
        :cantrip="playerSkillsPool[0][s.id].cantrip"
        :group="'allskills'"
      />

      <div class="pane rank" v-show="specialized.length">
        <div class="v-rule-sm" />
        <h2>Specialized</h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in specialized"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="3"
        :value="playerSkillsPool[0][s.id].val"
        :cantrip="playerSkillsPool[0][s.id].cantrip"
        :group="'allskills'"
      />

      <div class="pane rank" v-show="trained.length">
        <div class="v-rule-sm" />
        <h2>Trained</h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in trained"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="2"
        :value="playerSkillsPool[0][s.id].val"
        :cantrip="playerSkillsPool[0][s.id].cantrip"
        :group="'allskills'"
      />

      <div class="pane rank" v-show="untrained.length">
        <div class="v-rule-sm" />
        <h2>Untrained</h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in untrained"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="1"
        :value="playerSkillsPool[0][s.id].val"
        :cantrip="playerSkillsPool[0][s.id].cantrip"
        :group="'allskills'"
      />

      <div class="pane rank" v-show="unusable.length">
        <div class="v-rule-sm" />
        <h2>Unusable</h2>
      </div>
      <skill-tab
        @skill-selected="skillSelected"
        v-for="s in unusable"
        :key="s.id"
        :skill="{ id: s.id, pool: s.pool, name: s.name }"
        :rank="0"
        :value="playerSkillsPool[0][s.id].val"
        :cantrip="playerSkillsPool[0][s.id].cantrip"
        :group="'allskills'"
      />
    </div>
  </div>

  <!-- Todo: put into its own component; eliminate inline styles -->
  <div class="pane" style="width: 340px">
    <div v-if="skillSelectedId != null">
      <div style="align-items: center; display: flex; height: 28px">
        <h2>{{ skillsPool[skillSelectedPool][skillSelectedId].name }}</h2>
        <h2 style="margin-left: auto">{{ skillsPool[skillSelectedPool][skillSelectedId].fx }}</h2>
      </div>
      <div style="max-height: 84px; overflow: scroll; scrollbar-width: none">
        <p style="font-size: 1.2rem; line-height: 1.2">
          {{ skillsPool[skillSelectedPool][skillSelectedId].desc }}
        </p>
      </div>
      <hr class="rule-sm" />
    </div>
    <div style="display: flex">
      <p>Unassigned EXP:</p>
      <p style="margin-left: auto">{{ player.availableExpLocale }}</p>
    </div>
    <div style="display: flex">
      <p>Cost:</p>
      <p style="color: brown; margin-left: auto">{{ Infinity }}</p>
    </div>
  </div>
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  body {
    padding: 12px;
  }
</style>

<style>
  /* local */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(96, 128, 159, 0.85);
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.4rem;
  }

  .example {
    background: linear-gradient(185deg, transparent, rgb(12, 18, 24), rgb(36, 18, 12));
    max-width: fit-content;
  }

  .frame-style1 {
    background: linear-gradient(
      -22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    box-shadow: inset 6px 6px 24px 0 rgba(96, 128, 159, 0.165);
  }

  .pane {
    background: linear-gradient(
      22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    border-bottom: solid 0.5px rgba(24, 32, 40, 0.33);
    border-top: solid 0.5px rgba(48, 64, 80, 0.5);
    box-shadow: inset 4px 4px 8px 0 rgba(96, 128, 159, 0.1);
    padding: 5.5px 6px;
  }

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

  .rank-cnt {
    border-radius: 12px;
    box-shadow: inset 3px 3px 12px 0 rgba(96, 128, 159, 0.165);
    color: rgba(96, 128, 159, 0.85);
    display: inline-block;
    font-size: 1.2rem;
    line-height: 0;
    padding: 12px 0;
    text-align: center;
    width: 24px;
  }

  .ico-def {
    background-image: url("../assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: inset -6px -6px 12px 0 rgba(96, 128, 159, 0.33);
    height: 24px;
    margin-left: -4px;
    margin-right: 6px;
    width: 24px;
  }
</style>
