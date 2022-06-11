<script setup>
  import { computed } from "vue";

  import SkillTab from "@/components/SkillTab.vue";

  import { skills, playerSkills, skillsSpecial, playerSkillsSpecial } from "@/sb/skillsStore.js";

  // computed vars
  const special = computed(() => skillsSpecial.value.sort((a, b) => a.name > b.name));
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

  const playerName = "Huli";
  const playerRace = "Shade";

  function success(payload) {
    console.log(payload);
  }
</script>

<template>
  <h1>
    <span v-show="playerName">{{ playerName }}'s&nbsp;</span>Skills
  </h1>
  <div class="example">
    <hr class="rule-sm" />
    <div style="height: 576px; overflow: scroll; scrollbar-width: none; width: 350px">
      <div class="pane rank" v-show="special.length">
        <div class="v-rule-sm" />
        <h2>Innate / Racial</h2>
      </div>
      <div class="pane-row" v-for="s in special" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-special">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkillsSpecial[s.id].cantrip"
            >(+{{ playerSkillsSpecial[s.id].cantrip }})&nbsp;</span
          >
          <p class="value">
            {{ playerSkillsSpecial[s.id].val + playerSkillsSpecial[s.id].cantrip }}
          </p>
        </span>
      </div>
      <div class="pane rank" v-show="prodigal.length">
        <div class="v-rule-sm" />
        <h2>Prodigy</h2>
      </div>
      <div class="pane-row" v-for="s in prodigal" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-prodigy">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkills[s.id].cantrip"
            >(+{{ playerSkills[s.id].cantrip }})&nbsp;</span
          >
          <p class="value">{{ playerSkills[s.id].val + playerSkills[s.id].cantrip }}</p>
        </span>
      </div>
      <div class="pane rank" v-show="specialized.length">
        <div class="v-rule-sm" />
        <h2>Specialized</h2>
      </div>
      <div class="pane-row" v-for="s in specialized" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-specialized">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkills[s.id].cantrip"
            >(+{{ playerSkills[s.id].cantrip }})&nbsp;</span
          >
          <p class="value">{{ playerSkills[s.id].val + playerSkills[s.id].cantrip }}</p>
        </span>
      </div>
      <div class="pane rank" v-show="trained.length">
        <div class="v-rule-sm" />
        <h2>Trained</h2>
      </div>
      <div class="pane-row" v-for="s in trained" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-trained">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkills[s.id].cantrip"
            >(+{{ playerSkills[s.id].cantrip }})&nbsp;</span
          >
          <p class="value">{{ playerSkills[s.id].val + playerSkills[s.id].cantrip }}</p>
        </span>
      </div>
      <div class="pane rank" v-show="untrained.length">
        <div class="v-rule-sm" />
        <h2>Untrained</h2>
      </div>
      <div class="pane-row" v-for="s in untrained" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-untrained">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkills[s.id].cantrip"
            >(+{{ playerSkills[s.id].cantrip }})&nbsp;</span
          >
          <p class="value">{{ playerSkills[s.id].val + playerSkills[s.id].cantrip }}</p>
        </span>
      </div>
      <div class="pane rank" v-show="unusable.length">
        <div class="v-rule-sm" />
        <h2>Unusable</h2>
      </div>
      <div class="pane-row" v-for="s in unusable" :key="s.id">
        <div class="ico1"></div>
        <p class="clr-unusable">{{ s.name }}</p>
        <span class="can-val-align">
          <span class="cantrip" v-show="playerSkills[s.id].cantrip"
            >(+{{ playerSkills[s.id].cantrip }})&nbsp;</span
          >
          <p class="value clr-unusable">
            {{ playerSkills[s.id].val + playerSkills[s.id].cantrip }}
          </p>
        </span>
      </div>
    </div>
    <div class="pane" style="width: 350px">
      <h2>Raise (NYI)</h2>
      <p>[placeholder]</p>
      <p></p>
    </div>
  </div>
  <br />
  <skill-tab
    style="width: 350px"
    :skill="'Skill Name'"
    :rank="4"
    :value="100"
    :cantrip="25"
  /><br />
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  body {
    padding: 24px 0 0 24px;
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
    margin: 6px 0;
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

  hr.rule {
    background: linear-gradient(90deg, rgba(48, 64, 80, 0.33) 67%, transparent);
    border-radius: 2px;
    border: none;
    height: 4px;
    margin: 4px 2px 16px 2px;
  }

  hr.rule-sm {
    background: linear-gradient(90deg, rgba(48, 64, 80, 0.33) 67%, transparent);
    border-radius: 1px;
    border: none;
    height: 2px;
    margin: 2px 2px 8px 2px;
  }

  .v-rule-sm {
    background: rgba(48, 64, 80, 0.33);
    border-radius: 3px;
    margin: 0 13px;
    padding: 3px;
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
      -22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    /* border-left: solid 0.5px rgb(64, 72, 80); */
    /* border-right: solid 0.5px rgb(32, 36, 40); */
    border-bottom: solid 0.5px rgb(32, 36, 40);
    border-top: solid 0.5px rgb(64, 72, 80);
    box-shadow: inset 6px 6px 24px 0 rgba(96, 128, 159, 0.165);
    padding: 5.5px 6px;
  }

  .pane-row {
    align-items: center;
    background: linear-gradient(
      -22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    border-bottom: solid 0.5px rgb(32, 36, 40);
    border-top: solid 0.5px rgb(64, 72, 80);
    box-shadow: inset 6px 6px 24px 0 rgba(96, 128, 159, 0.165);
    display: flex;
    height: 32px;
    padding: 0 6px;
    user-select: none;
  }

  .pane-row:hover {
    filter: brightness(1.5);
  }

  .rank {
    align-items: center;
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
    height: 32px;
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

  .ico1 {
    background-image: url("../assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: inset -6px -6px 12px 0 rgba(96, 128, 159, 0.33);
    height: 28px;
    margin-left: -4.5px;
    margin-right: 6px;
    width: 28px;
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

  .cantrip {
    color: rgb(80, 159, 191);
  }

  .value {
    display: inline;
  }

  .can-val-align {
    margin-left: auto;
  }
</style>
