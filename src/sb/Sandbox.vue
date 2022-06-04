<script setup>
  import { computed } from "vue";

  import { skills, playerSkills } from "@/sb/skillsStore.js";

  // computed vars
  const prodigal = computed(() =>
    skills.value
      .filter((skill) => playerSkills.value[skill.id].rank === 4)
      .sort((a, b) => a.name > b.name),
  );
  const specialized = computed(() =>
    skills.value
      .filter((skill) => playerSkills.value[skill.id].rank === 3)
      .sort((a, b) => a.name > b.name),
  );
  const trained = computed(() =>
    skills.value
      .filter((skill) => playerSkills.value[skill.id].rank === 2)
      .sort((a, b) => a.name > b.name),
  );
  const untrained = computed(() =>
    skills.value
      .filter((skill) => playerSkills.value[skill.id].rank === 1)
      .sort((a, b) => a.name > b.name),
  );
  const unusable = computed(() =>
    skills.value
      .filter((skill) => playerSkills.value[skill.id].rank === 0)
      .sort((a, b) => a.name > b.name),
  );
</script>

<template>
  <h1>Skills</h1>
  <hr class="rule" />
  <div class="container">
    <h2 v-show="prodigal.length">Prodigy ({{ prodigal.length }})</h2>
    <p style="margin-bottom: 4px" v-show="prodigal.length">
      Your extraordinary talents and abilities. You are truly second to none!
    </p>
    <div>
      <div class="skill-pane" v-for="s in prodigal" :key="s.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ s.name }}</p>
        <p class="value">
          {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
          }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
            (+{{ playerSkills[s.id].cantrip }})</span
          >
        </p>
      </div>
    </div>
    <h2 v-show="specialized.length">Specialized ({{ specialized.length }})</h2>
    <p style="margin-bottom: 4px" v-show="specialized.length">
      Talents in which you are heavily invested.
    </p>
    <div>
      <div class="skill-pane" v-for="s in specialized" :key="s.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ s.name }}</p>
        <p class="value">
          {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
          }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
            (+{{ playerSkills[s.id].cantrip }})</span
          >
        </p>
      </div>
    </div>
    <h2 v-show="trained.length">Trained ({{ trained.length }})</h2>
    <p style="margin-bottom: 4px" v-show="trained.length">Todo: Desc.</p>
    <div>
      <div class="skill-pane" v-for="s in trained" :key="s.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ s.name }}</p>
        <p class="value">
          {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
          }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
            (+{{ playerSkills[s.id].cantrip }})</span
          >
        </p>
      </div>
    </div>
    <h2 v-show="untrained.length">Untrained ({{ untrained.length }})</h2>
    <p style="margin-bottom: 4px" v-show="untrained.length">Todo: Desc.</p>
    <div>
      <div class="skill-pane" v-for="s in untrained" :key="s.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ s.name }}</p>
        <p class="value">
          {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
          }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
            (+{{ playerSkills[s.id].cantrip }})</span
          >
        </p>
      </div>
    </div>
    <h2 v-show="unusable.length">Unusable ({{ unusable.length }})</h2>
    <p style="margin-bottom: 4px" v-show="unusable.length">Todo: Desc.</p>
    <div>
      <div class="skill-pane" v-for="s in unusable" :key="s.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ s.name }}</p>
        <p class="value">
          {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
          }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
            (+{{ playerSkills[s.id].cantrip }})</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  body {
    padding: 20px;
  }
</style>

<style scoped>
  /* local */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: thistle;
    font-weight: normal;
    margin: 8px 0;
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

  hr.rule {
    background: rgba(230, 230, 230, 0.075);
    border-radius: 2px;
    border: none;
    height: 4px;
    margin: 8px 2px;
  }

  .container {
    width: 300px;
  }

  .skill-pane {
    align-items: center;
    background: linear-gradient(33deg, rgba(64, 64, 64, 0.1), rgba(128, 159, 191, 0.15));
    border-bottom: solid 0.5px rgba(64, 64, 64, 0.67);
    border-top: solid 0.5px rgba(191, 191, 191, 0.67);
    box-shadow: inset -6px -6px 6px -6px rgba(128, 159, 191, 0.33);
    display: flex;
    height: 32px;
    padding: 0 6px;
    user-select: none;
  }

  .skill-pane:hover {
    background: linear-gradient(
      165deg,
      rgba(64, 64, 64, 0.05),
      rgba(128, 159, 191, 0.1),
      rgba(96, 96, 191, 0.38)
    );
    color: #0080ff;
    filter: brightness(1.5) hue-rotate(-15deg);
  }

  .skill-pane:last-child {
    margin-bottom: 20px;
  }

  .name {
    font-weight: bold;
  }

  .fx {
    color: cadetblue;
    font-size: 1rem;
    margin-left: auto;
  }

  .value {
    margin-left: auto;
  }

  .cantrip {
    color: #0080ff;
  }

  .pseudo-ico {
    background-image: url("../assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-left: solid 0.5px rgba(191, 191, 191, 0.67);
    border-radius: 4px;
    border-top: solid 0.5px rgba(191, 191, 191, 0.67);
    box-shadow: inset -3px -3px 12px 0 rgba(96, 96, 191, 0.5);
    height: 28px;
    margin-left: -4px;
    margin-right: 6px;
    width: 28px;
  }
</style>
