<script setup>
  import { computed, ref } from "vue";

  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  // reactive
  const buffedStrength = ref(0);
  const buffedEndurance = ref(0);
  const buffedIntellect = ref(0);
  const buffedIntuition = ref(0);
  const buffedAptitude = ref(0);

  const raisedHealth = ref(0);
  const raisedStamina = ref(0);
  const raisedMana = ref(0);

  // computed
  const totalStrength = computed(
    () => Number(buffedStrength.value) + Number(player.attributes[0].val),
  );
  const totalEndurance = computed(
    () => Number(buffedEndurance.value) + Number(player.attributes[1].val),
  );
  const totalIntellect = computed(
    () => Number(buffedIntellect.value) + Number(player.attributes[2].val),
  );
  const totalIntuition = computed(
    () => Number(buffedIntuition.value) + Number(player.attributes[3].val),
  );
  const totalAptitude = computed(
    () => Number(buffedAptitude.value) + Number(player.attributes[4].val),
  );

  // vitals
  const health = computed(
    () => (totalStrength.value + totalEndurance.value) * 2 + Number(raisedHealth.value),
  );
  const stamina = computed(() => totalEndurance.value * 4 + Number(raisedStamina.value));
  const mana = computed(
    () => (totalIntellect.value + totalIntellect.value) * 3 + Number(raisedMana.value),
  );
</script>

<template>
  <div class="formula" style="display: flex">
    <div class="sumi-pane" style="width: fit-content">
      <div style="text-align: center">
        <h1>{{ player.name }}</h1>
        <span>Level {{ player.level }} {{ player.race }}</span>
      </div>
      <hr class="sumi-rule" />
      <header class="sumi-bullet-heading" style="line-height: 30px">
        <span class="sumi-bullet" />
        <h2>Attributes</h2>
      </header>
      <div class="container">
        <div style="display: flex; font-size: 1.2rem; line-height: 10px">
          <span style="margin-left: 129px">Raised</span
          ><span class="text-buff" style="margin-left: 183px; position: absolute">Buffed</span>
        </div>
        <div class="att-tab" style="display: flex">
          <span>Strength</span>
          <div class="bar-divider" />
          <input class="input-raise" type="text" v-model="player.attributes[0].val" />
          <input class="input-buff" type="text" v-model="buffedStrength" />
          <span style="margin-left: auto">
            <span class="text-buff" v-show="buffedStrength > 0">+({{ buffedStrength }}) </span>
            <span> {{ totalStrength }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span>Endurance</span>
          <input class="input-raise" type="text" v-model="player.attributes[1].val" />
          <input class="input-buff" type="text" v-model="buffedEndurance" />
          <span style="margin-left: auto">
            <span class="text-buff" v-show="buffedEndurance > 0">+({{ buffedEndurance }}) </span>
            <span> {{ totalEndurance }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span>Intellect</span>
          <input class="input-raise" type="text" v-model="player.attributes[2].val" />
          <input class="input-buff" type="text" v-model="buffedIntellect" />
          <span style="margin-left: auto">
            <span class="text-buff" v-show="buffedIntellect > 0">+({{ buffedIntellect }}) </span>
            <span> {{ totalIntellect }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span>Intuition</span>
          <input class="input-raise" type="text" v-model="player.attributes[3].val" />
          <input class="input-buff" type="text" v-model="buffedIntuition" />
          <span style="margin-left: auto">
            <span class="text-buff" v-show="buffedIntuition > 0">+({{ buffedIntuition }}) </span>
            <span> {{ totalIntuition }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span>Aptitude</span>
          <input class="input-raise" type="text" v-model="player.attributes[4].val" />
          <input class="input-buff" type="text" v-model="buffedAptitude" />
          <span style="margin-left: auto">
            <span class="text-buff" v-show="buffedAptitude > 0">+({{ buffedAptitude }}) </span>
            <span> {{ totalAptitude }}</span></span
          >
        </div>
        <hr class="sumi-rule-gap" />
        <header class="sumi-bullet-heading" style="line-height: 30px">
          <span class="sumi-bullet" />
          <h2>Vitae</h2>
        </header>
        <div class="att-tab" style="display: flex">
          <span class="hp">Health</span>
          <span style="margin-left: auto"
            ><input
              class="input-raise"
              style="border-radius: 4px"
              type="text"
              v-model="raisedHealth"
            /><span class="hp">{{ health }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span class="sp">Stamina</span>
          <span style="margin-left: auto"
            ><input
              class="input-raise"
              style="border-radius: 4px"
              type="text"
              v-model="raisedStamina"
            /><span class="sp">{{ stamina }}</span></span
          >
        </div>
        <div class="att-tab" style="display: flex">
          <span class="mp">Mana</span>
          <span style="margin-left: auto"
            ><input
              class="input-raise"
              style="border-radius: 4px"
              type="text"
              v-model="raisedMana"
            /><span class="mp">{{ mana }}</span></span
          >
        </div>

        <section class="sumi-pane--inner" style="width: 75%">
          <h3>Secondary Stats</h3>
          <hr class="sumi-rule-gap" />
          <div class="att-tab-2" style="display: flex">
            <span>Might</span>
            <span style="margin-left: auto">{{ totalStrength * 2 }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Finesse</span>
            <span style="margin-left: auto">{{ totalEndurance * 2 }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Cunning</span>
            <span style="margin-left: auto">{{ totalIntellect * 2 }}</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Instinct</span>
            <span style="margin-left: auto">{{ totalIntuition * 2 }}</span>
          </div>
        </section>
        <section class="sumi-pane--inner" style="width: 75%">
          <h3>Ternary Stats</h3>
          <hr class="sumi-rule-gap" />
          <div class="att-tab-2" style="display: flex">
            <span>Crit (Additive)</span>
            <span style="margin-left: auto">NYI</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Crit (Multiplicative)</span>
            <span style="margin-left: auto">NYI</span>
          </div>
          <div class="att-tab-2" style="display: flex">
            <span>Burden</span>
            <span style="margin-left: auto">NYI</span>
          </div>
        </section>
      </div>
    </div>
    <div>
      <div class="sumi-pane" style="margin: 0 0 0 12px; max-width: 350px">
        <section style="padding-right: 24px">
          <h2 class="item-rare">Scintillating Gem of Blight</h2>
          <p style="font-size: 1.2rem">This gem gleams with magical power.</p>
        </section>

        <hr class="sumi-rule" />

        <section style="padding-right: 24px">
          <p style="color: rgb(0, 191, 64)"><strong>Use to cast</strong> - Blight VI</p>
          <p><strong>Cost</strong> - 10% Base Health</p>
          <p><strong>Potency</strong> - 285 (War Chanting)</p>
          <p><strong>Uses</strong> - 3</p>
        </section>

        <section class="sumi-pane--inner" style="padding-right: 24px">
          <p style="font-size: 1.2rem">
            <strong>Blight VI</strong> - Send a plague bolt screaming towards the target's current
            location, inflicting {{ 175 + Math.floor(totalIntellect * 2 * 0.175) }} -
            {{ 225 + Math.floor(totalIntellect * 2 * 0.225) }} points of Plague damage to the first
            hostile thing it hits.
          </p>
        </section>
      </div>

      <div class="sumi-pane" style="margin: 12px 0 0 12px">
        <h2>Item Legend</h2>

        <section class="sumi-pane--inner" style="padding-right: 24px">
          <h2 class="item-junk">Junk</h2>
          <hr class="sumi-rule-sm" />
          <h2 class="item-common">Common</h2>
          <h2 class="item-uncommon">Uncommon</h2>
          <h2 class="item-rare">Rare</h2>
          <hr class="sumi-rule-sm" />
          <h2 class="item-elusive">Elusive</h2>
          <h2 class="item-extraordinary">Extraordinary</h2>
          <h2 class="item-legendary">Legendary</h2>
          <hr class="sumi-rule-sm" />
          <h2 class="item-mythical">Mythical</h2>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";

  @import "@/assets/panes.css";
</style>

<style scoped>
  .formula {
    margin: 12px 12px 0 12px;
  }

  .container {
    width: 350px;
  }

  .att-tab {
    line-height: 28px;
    padding: 0 8px 0 8px;
    position: relative;
  }

  .att-tab-2 {
    font-size: 1.2rem;
    line-height: 24px;
    padding: 0 8px 0 8px;
    position: relative;
  }

  .att-tab-2:nth-child(2n) {
    background: rgba(0, 0, 0, 0.125);
    border-radius: 4px;
  }

  input:focus {
    filter: brightness(1.33);
    outline: 2px solid rgba(159, 159, 159, 0.33);
  }

  .bar-divider {
    background: rgba(96, 128, 159, 0.15);
    border-radius: 2px;
    height: 140px;
    position: absolute;
    right: 173px;
    width: 4px;
  }

  .hp {
    color: hsl(3, 67%, 55%);
  }

  .sp {
    color: hsl(45, 67%, 55%);
  }

  .mp {
    color: hsl(210, 67%, 55%);
  }

  .input-raise {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 4px 0 0 4px;
    border: none;
    color: inherit;
    height: 20px;
    padding: 0 0 0 6px;
    position: absolute;
    right: 177px;
    top: 4px;
    width: 50px;
  }

  .input-buff {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 0 4px 4px 0;
    border: none;
    color: rgb(0, 143, 191);
    height: 20px;
    padding: 0 0 0 6px;
    position: absolute;
    right: 123px;
    top: 4px;
    width: 50px;
  }
  .text-buff {
    color: rgb(0, 143, 191);
  }

  .chat {
    line-height: 24px;
  }

  .channel {
    color: thistle;
  }

  .channel::before {
    content: "[2. Marketplace] ";
  }

  .status-off {
    color: rgb(56, 64, 72);
    filter: brightness(1.5);
  }

  .status-on {
    color: rgb(56, 143, 56);
  }

  .tell-to {
    color: pink;
  }

  .tell-from {
    color: hotpink;
  }

  .ico-chat {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-right: 6px;
    min-height: 22px;
    min-width: 22px;
  }

  .ico-chat:last-child {
    margin: 0;
  }
</style>
