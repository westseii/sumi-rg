<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();
</script>

<template>
  <div class="sumi-pane container">
    <div style="text-align: center">
      <h1>{{ player.name }}</h1>
      <div>Level {{ player.level }} {{ player.gender }} {{ player.race }}</div>
      <div style="color: slategray">Non-Player Killer</div>
    </div>

    <hr class="sumi-rule" />

    <header class="sumi-bullet-heading">
      <span class="sumi-bullet" />
      <h2>Innate</h2>
      <!-- <p class="help" style="margin-left: auto">1 - 6 (max +10)</p> -->
    </header>

    <div class="" style="display: flex; justify-content: space-between">
      <div>
        <p style="text-align: center">STR</p>
        <input class="input-2" type="number" v-model="player.innate.str" />
      </div>
      <div>
        <p style="text-align: center">END</p>
        <input class="input-2" type="number" v-model="player.innate.end" />
      </div>
      <div>
        <p style="text-align: center">INT</p>
        <input class="input-2" type="number" v-model="player.innate.int" />
      </div>
      <div>
        <p style="text-align: center">TUI</p>
        <input class="input-2" type="number" v-model="player.innate.tui" />
      </div>
      <div>
        <p style="text-align: center">APT</p>
        <input class="input-2" type="number" v-model="player.innate.apt" />
      </div>
    </div>

    <br />

    <div class="sumi-pane--inner" style="margin-top: 4px">
      <header class="sumi-bullet-heading">
        <span class="sumi-bullet" />
        <h2>Primary</h2>
        <p class="help" style="margin-left: auto">0 - {{ player.raiseCap }} (cap)</p>
      </header>

      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span>Strength</span>
        <input class="input input--raise" type="number" v-model="player.attributes[0].value" />
        <input class="input input--buff" type="number" v-model="player.attributes[0].cantrip" />
        <span style="margin-left: auto">
          <span class="clr-buff" v-show="player.attributes[0].cantrip > 0"
            >(+{{ player.attributes[0].cantrip }})
          </span>
          <span> {{ player.totalStr }}</span>
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span>Endurance</span>
        <input class="input input--raise" type="number" v-model="player.attributes[1].value" />
        <input class="input input--buff" type="number" v-model="player.attributes[1].cantrip" />
        <span style="margin-left: auto">
          <span class="clr-buff" v-show="player.attributes[1].cantrip > 0"
            >(+{{ player.attributes[1].cantrip }})
          </span>
          <span> {{ player.totalEnd }}</span>
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span>Intellect</span>
        <input class="input input--raise" type="number" v-model="player.attributes[2].value" />
        <input class="input input--buff" type="number" v-model="player.attributes[2].cantrip" />
        <span style="margin-left: auto">
          <span class="clr-buff" v-show="player.attributes[2].cantrip > 0"
            >(+{{ player.attributes[2].cantrip }})
          </span>
          <span> {{ player.totalInt }}</span>
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span>Intuition</span>
        <input class="input input--raise" type="number" v-model="player.attributes[3].value" />
        <input class="input input--buff" type="number" v-model="player.attributes[3].cantrip" />
        <span style="margin-left: auto">
          <span class="clr-buff" v-show="player.attributes[3].cantrip > 0"
            >(+{{ player.attributes[3].cantrip }})
          </span>
          <span> {{ player.totalTui }}</span>
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span>Aptitude</span>
        <input class="input input--raise" type="number" v-model="player.attributes[4].value" />
        <input class="input input--buff" type="number" v-model="player.attributes[4].cantrip" />
        <span style="margin-left: auto">
          <span class="clr-buff" v-show="player.attributes[4].cantrip > 0"
            >(+{{ player.attributes[4].cantrip }})
          </span>
          <span> {{ player.totalApt }}</span>
        </span>
      </div>

      <br />

      <header class="sumi-bullet-heading">
        <span class="sumi-bullet" />
        <h2>Vitae</h2>
        <!-- <p class="help" style="margin-left: auto">0 - {{ player.level * 2 }} (cap)</p> -->
      </header>

      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span class="clr-hp">Health</span>
        <span style="margin-left: auto"
          ><input class="input input--raise" type="number" v-model="player.vitality.hp" /><span
            class="clr-hp"
            >{{ player.totalHealthLocale }}</span
          >
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span class="clr-sp">Stamina</span>
        <span style="margin-left: auto"
          ><input class="input input--raise" type="number" v-model="player.vitality.sp" /><span
            class="clr-sp"
            >{{ player.totalStaminaLocale }}</span
          >
        </span>
      </div>
      <div class="att-tab" style="display: flex">
        <span class="ico-att-blank" />
        <span class="clr-mp">Mana</span>
        <span style="margin-left: auto"
          ><input class="input input--raise" type="number" v-model="player.vitality.mp" /><span
            class="clr-mp"
            >{{ player.totalManaLocale }}</span
          >
        </span>
      </div>
    </div>

    <div style="align-items: stretch; display: flex; margin-top: 4px">
      <div
        style="
          align-items: stretch;
          display: flex;
          flex-direction: column;
          margin-right: 2px;
          width: 50%;
        "
      >
        <section class="sumi-pane--inner">
          <h3>Secondary</h3>
          <div class="att-tab-2" style="display: flex">
            <span>Might</span>
            <span style="margin-left: auto">{{ player.totalMight }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Finesse</span>
            <span style="margin-left: auto">{{ player.totalFinesse }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Cunning</span>
            <span style="margin-left: auto">{{ player.totalCunning }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Instinct</span>
            <span style="margin-left: auto">{{ player.totalInstinct }}</span>
          </div>
        </section>

        <section class="sumi-pane--inner" style="height: 100%; margin-top: 4px">
          <h3>Resist</h3>
          <div class="att-tab-2 clr-buff" style="display: flex">
            <span>+Shadow</span>
            <span style="margin-left: auto">{{ "60%" }}</span>
          </div>
          <div class="att-tab-2 clr-unusable" style="display: flex">
            <span>-Fire</span>
            <span style="margin-left: auto">{{ "30%" }}</span>
          </div>
        </section>
      </div>

      <section class="sumi-pane--inner" style="margin-left: 2px; width: 50%">
        <h3>Bonuses</h3>
        <div class="att-tab-2 item-junk" style="display: flex">
          <span>+Carry</span>
          <span style="margin-left: auto">{{ "0 bu" }}</span>
        </div>
        <div class="att-tab-2 item-junk" style="display: flex">
          <span>+Jump</span>
          <span style="margin-left: auto">{{ "0 m" }}</span>
        </div>
        <div class="att-tab-2 item-junk" style="display: flex">
          <span>+Run</span>
          <span style="margin-left: auto">{{ "0 m/s" }}</span>
        </div>
        <hr class="sumi-rule-sm" />
        <div class="att-tab-2 clr-buff" style="display: flex">
          <span>+Crit</span>
          <span style="margin-left: auto">{{ "8%" }}</span>
        </div>
        <div class="att-tab-2 clr-buff" style="display: flex">
          <span>×Crit</span>
          <span style="margin-left: auto">{{ "5%" }}</span>
        </div>
        <div class="att-tab-2 clr-buff" style="display: flex">
          <span>Total Crit</span>
          <span style="margin-left: auto">{{ "8.4%" }}</span>
        </div>
        <hr class="sumi-rule-sm" />
        <div class="att-tab-2 clr-buff" style="display: flex">
          <span>+Regeneration</span>
          <span style="margin-left: auto">{{ "100%" }}</span>
        </div>
      </section>
    </div>

    <section class="sumi-pane--inner" style="margin-top: 4px">
      <h3>EXP</h3>
      <div class="att-tab-2" style="display: flex">
        <span>Unassigned EXP</span>
        <span style="margin-left: auto">{{ player.availableExpLocale }}</span>
      </div>
      <div class="att-tab-2" style="display: flex">
        <span>Total EXP</span>
        <span style="margin-left: auto">{{ player.totalExpLocale }}</span>
      </div>
      <div class="att-tab-2" style="display: flex">
        <span>Available Skill Credits</span>
        <span style="margin-left: auto">{{ 50 }}</span>
      </div>
    </section>
  </div>
</template>

<style>
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  @import "@/assets/panes.css";
</style>

<style>
  body {
    margin: 12px 12px 0 12px;
  }
</style>

<style scoped>
  .container {
    width: 400px;
  }
  .ico-att-blank {
    border-radius: 12px;
    box-shadow: inset -6px -6px 12px 0 rgba(96, 128, 159, 0.33);
    height: 24px;
    margin: 2px 6px 2px 0;
    width: 24px;
  }
  .att-tab {
    line-height: 28px;
    position: relative;
  }
  .att-tab-2 {
    font-size: 1.1rem;
  }
  .att-tab-2:nth-child(2n + 1) {
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.15) 10% 90%, transparent);
  }
  .help {
    background: linear-gradient(90deg, transparent, rgba(128, 175, 223, 0.15) 33% 67%, transparent);
    color: rgba(128, 175, 223, 0.85);
    display: inline;
    font-size: 1.1rem;
    line-height: 0;
    padding: 10px 6px;
  }
  .input {
    appearance: textfield;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    height: 24px;
    padding: 0 0 0 6px;
    position: absolute;
    top: 2px;
    width: 50px;
  }
  .input:focus,
  .input-2:focus {
    background: rgba(0, 0, 0, 0.375);
    filter: brightness(1.33);
    outline: none;
  }
  .input-2 {
    appearance: textfield;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    color: inherit;
    height: 24px;
    padding: 0 0 0 6px;
    width: 50px;
  }
  .input--raise {
    color: inherit;
    right: calc(50% + 2px);
  }
  .input--buff {
    color: rgb(0, 143, 191);
    right: calc(50% - 52px);
  }
</style>
