<script setup>
  import { computed } from "vue";

  import { skills as pseudo, skillsStatus as rank } from "@/sb/skillsStore.js";

  // computed vars
  const prodigal = computed(() =>
    pseudo.value.filter((skill) => rank.value[skill.id] === 4).sort((a, b) => a.name > b.name),
  );
  const specialized = computed(() =>
    pseudo.value.filter((skill) => rank.value[skill.id] === 3).sort((a, b) => a.name > b.name),
  );
  const trained = computed(() =>
    pseudo.value.filter((skill) => rank.value[skill.id] === 2).sort((a, b) => a.name > b.name),
  );
  const untrained = computed(() =>
    pseudo.value.filter((skill) => rank.value[skill.id] === 1).sort((a, b) => a.name > b.name),
  );
  const unusable = computed(() =>
    pseudo.value.filter((skill) => rank.value[skill.id] === 0).sort((a, b) => a.name > b.name),
  );
</script>

<template>
  <h1>Sandbox</h1>
  <hr class="rule" />
  <div class="container">
    <h2 v-show="prodigal.length">Prodigal ({{ prodigal.length }})</h2>
    <div>
      <div class="skill-pane" v-for="p in prodigal" :key="p.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ p.name }}</p>
        <p class="value">
          {{ p.value + p.cantrip
          }}<span class="cantrip" v-show="p.cantrip"> (+{{ p.cantrip }})</span>
        </p>
      </div>
    </div>
    <h2 v-show="specialized.length">Specialized ({{ specialized.length }})</h2>
    <div>
      <div class="skill-pane" v-for="p in specialized" :key="p.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ p.name }}</p>
        <p class="value">
          {{ p.value + p.cantrip
          }}<span class="cantrip" v-show="p.cantrip"> (+{{ p.cantrip }})</span>
        </p>
      </div>
    </div>
    <h2 v-show="trained.length">Trained ({{ trained.length }})</h2>
    <div>
      <div class="skill-pane" v-for="p in trained" :key="p.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ p.name }}</p>
        <p class="value">
          {{ p.value + p.cantrip
          }}<span class="cantrip" v-show="p.cantrip"> (+{{ p.cantrip }})</span>
        </p>
      </div>
    </div>
    <h2 v-show="untrained.length">Untrained ({{ untrained.length }})</h2>
    <div>
      <div class="skill-pane" v-for="p in untrained" :key="p.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ p.name }}</p>
        <p class="value">
          {{ p.value + p.cantrip
          }}<span class="cantrip" v-show="p.cantrip"> (+{{ p.cantrip }})</span>
        </p>
      </div>
    </div>
    <h2 v-show="unusable.length">Unusable ({{ unusable.length }})</h2>
    <div>
      <div class="skill-pane" v-for="p in unusable" :key="p.id">
        <div class="pseudo-ico"></div>
        <p class="name">{{ p.name }}</p>
        <p class="value">
          {{ p.value + p.cantrip
          }}<span class="cantrip" v-show="p.cantrip"> (+{{ p.cantrip }})</span>
        </p>
      </div>
    </div>
  </div>
  <hr class="rule" />
</template>

<style>
  /* global */
  html {
    font-size: 10px;
    height: 100vh;
    line-height: 18px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(190deg, rgba(32, 40, 64, 1) 10%, rgba(16, 16, 24, 1) 90%);
    color: #bfbfbf;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>

<style scoped>
  /* local */
  h1,
  h2 {
    margin: 1rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    color: cornflowerblue;
    font-size: 1.6rem;
    font-weight: normal;
  }

  .container {
    font-size: 1.2rem;
    padding: 0 10px;
    width: 350px;
  }

  hr.rule {
    background: linear-gradient(100deg, rgba(64, 64, 64, 0.1) 10%, rgba(128, 159, 159, 0.15) 90%);
    border-radius: 2px;
    border: none;
    height: 4px;
    margin: 10px 0;
  }

  .skill-pane {
    align-items: center;
    background: linear-gradient(100deg, rgba(64, 64, 64, 0.1) 10%, rgba(128, 159, 159, 0.15) 90%);
    border-radius: 0 12px 12px 0;
    border-top: solid 0.5px rgba(128, 159, 159, 0.67);
    box-shadow: inset -2px -2px 8px 0 rgba(128, 159, 159, 0.33);
    display: flex;
    height: 32px;
    margin-top: 2px;
    padding: 0 12px;
    user-select: none;
  }

  .skill-pane:hover {
    filter: brightness(1.5) hue-rotate(-45deg);
  }

  .skill-pane:last-child {
    margin-bottom: 20px;
  }

  .name {
    font-weight: bold;
  }

  .value {
    font-weight: bold;
    margin-left: auto;
  }

  .cantrip {
    color: aqua;
    font-weight: normal;
  }

  .pseudo-ico {
    background: rgba(191, 191, 191, 0.1);
    border-left: solid 0.5px rgba(128, 159, 159, 0.67);
    border-radius: 12px;
    border-top: solid 0.5px rgba(128, 159, 159, 0.67);
    box-shadow: inset -2px -2px 8px 0 rgba(128, 159, 159, 0.33);
    height: 24px;
    margin-left: -6px;
    margin-right: 6px;
    width: 24px;
  }
</style>
