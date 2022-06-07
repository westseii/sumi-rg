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
    <div class="rank-pane" v-show="prodigal.length">
      <h2 class="rank-heading">Prodigy</h2>
      <span class="rank-count">{{ prodigal.length }}</span>
    </div>

    <div class="skill-pane color-prodigy" v-for="s in prodigal" :key="s.id">
      <div class="pseudo-ico"></div>
      <p class="name">{{ s.name }}</p>
      <p class="value">
        {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
        }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
          (+{{ playerSkills[s.id].cantrip }})</span
        >
      </p>
    </div>

    <div class="rank-pane" v-show="specialized.length">
      <h2 class="rank-heading">Specialized</h2>
      <span class="rank-count">{{ specialized.length }}</span>
    </div>

    <div class="skill-pane color-specialized" v-for="s in specialized" :key="s.id">
      <div class="pseudo-ico"></div>
      <p class="name">{{ s.name }}</p>
      <p class="value">
        {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
        }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
          (+{{ playerSkills[s.id].cantrip }})</span
        >
      </p>
    </div>

    <div class="rank-pane" v-show="trained.length">
      <h2 class="rank-heading">Trained</h2>
      <span class="rank-count">{{ trained.length }}</span>
    </div>

    <div class="skill-pane color-trained" v-for="s in trained" :key="s.id">
      <div class="pseudo-ico"></div>
      <p class="name">{{ s.name }}</p>
      <p class="value">
        {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
        }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
          (+{{ playerSkills[s.id].cantrip }})</span
        >
      </p>
    </div>

    <div class="rank-pane" v-show="untrained.length">
      <h2 class="rank-heading">Untrained</h2>
      <span class="rank-count">{{ untrained.length }}</span>
    </div>

    <div class="skill-pane color-untrained" v-for="s in untrained" :key="s.id">
      <div class="pseudo-ico"></div>
      <p class="name">{{ s.name }}</p>
      <p class="value">
        {{ playerSkills[s.id].val + playerSkills[s.id].cantrip
        }}<span class="cantrip" v-show="playerSkills[s.id].cantrip">
          (+{{ playerSkills[s.id].cantrip }})</span
        >
      </p>
    </div>

    <div class="rank-pane" v-show="unusable.length">
      <h2 class="rank-heading">Unusable</h2>
      <span class="rank-count">{{ unusable.length }}</span>
    </div>

    <div class="skill-pane color-unusable" v-for="s in unusable" :key="s.id">
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
  <div class="skill-container">
    <p>Available: {{ 0 }}</p>
    <p>Cost: {{ 0 }}</p>
  </div>
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  body {
    padding: 24px;
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
    margin: 14px 2px;
  }

  .rank-pane {
    align-items: center;
    display: flex;
    line-height: 32px;
    margin-top: 16px;
    user-select: none;
  }

  .rank-pane:first-child {
    margin-top: 0;
  }

  .rank-heading {
    margin: 0;
  }

  .rank-count {
    border-radius: 14px;
    box-shadow: inset -4px -4px 12px 0 rgba(216, 191, 216, 0.165);
    display: inline-block;
    font-size: 1.4rem;
    line-height: 0;
    margin-left: 6px;
    padding: 12px 0;
    text-align: center;
    width: 24px;
  }

  .container {
    height: 496px;
    overflow: scroll;
    width: 350px;
  }

  .skill-container {
    background: linear-gradient(0deg, rgba(64, 64, 64, 0.05) 33%, rgba(128, 159, 191, 0.165) 90%);
    border-bottom: solid 0.5px rgba(64, 64, 64, 0.67);
    border-top: solid 0.5px rgba(191, 191, 191, 0.67);
    box-shadow: inset -2px -2px 4px 0 rgba(128, 159, 191, 0.15);
    height: 96px;
    padding: 6px;
    width: 350px;
  }

  .skill-pane {
    align-items: center;
    background: linear-gradient(0deg, rgba(64, 64, 64, 0.05) 33%, rgba(128, 159, 191, 0.165) 90%);
    border-bottom: solid 0.5px rgba(64, 64, 64, 0.67);
    border-top: solid 0.5px rgba(191, 191, 191, 0.67);
    box-shadow: inset -2px -2px 4px 0 rgba(128, 159, 191, 0.15);
    display: flex;
    height: 32px;
    padding: 0 22px 0 6px;
    user-select: none;
  }

  .color-prodigy {
    color: rgb(191, 255, 255);
  }

  .color-specialized {
    color: rgb(159, 223, 223);
  }

  .color-trained {
    color: rgb(159, 223, 159);
  }

  .color-untrained {
    color: rgb(128, 191, 128);
  }

  .color-unusable {
    color: rgb(128, 80, 80);
  }

  .skill-pane:hover {
    filter: brightness(1.67);
  }

  .name {
    /* font-weight: bold; */
  }

  .fx {
    color: rgba(128, 128, 128, 0.5);
    font-size: 1rem;
    margin-left: auto;
  }

  .value {
    margin-left: auto;
  }

  .cantrip {
    color: rgb(223, 96, 191);
  }

  .pseudo-ico {
    background-image: url("../assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: solid 0.5px rgba(64, 64, 64, 0.67);
    border-radius: 4px;
    border-top: solid 0.5px rgba(191, 191, 191, 0.67);
    box-shadow: inset -4px -4px 12px 0 rgba(128, 159, 191, 0.33);
    height: 28px;
    margin-left: -4px;
    margin-right: 6px;
    width: 28px;
  }
</style>
