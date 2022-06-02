<script setup>
  import { computed, ref } from "vue";

  const roundTo = 3;

  // range (0, 1]; lower values offer more forgiveness
  const forgiveness = 0.9;

  // default values
  const numPlayers = ref(3);
  const synRamp = ref(0.333);
  const dpsPerPlayer = ref(126.7);
  const totalCombatTime = ref(45);
  const numPlayersRemovable = ref(0.5);
  const totalCombatTimeShift = ref(5);

  // computed values
  const totalCombatTimeInMinutes = computed(() => (totalCombatTime.value / 60).toFixed(roundTo));
  const synRampFinal = computed(
    () =>
      Number(numPlayers.value) +
      Number(numPlayers.value) * Number(synRamp.value) -
      Number(synRamp.value),
  );
  const synRampFinalNotNeg = computed(() =>
    synRampFinal.value >= 0 ? synRampFinal.value.toFixed(roundTo) : 0,
  );
  const removableFinal = computed(() => synRampFinalNotNeg.value - numPlayersRemovable.value);
  const removableFinalNotNeg = computed(() =>
    removableFinal.value >= 0 ? removableFinal.value.toFixed(roundTo) : 0,
  );
  const timeShiftFinal = computed(() => totalCombatTime.value - totalCombatTimeShift.value);
  const timeShiftFinalNotNeg = computed(() =>
    timeShiftFinal.value >= 0 ? timeShiftFinal.value : 0,
  );
  // formatted with commas
  const totalHp = computed(() =>
    Number(
      (
        synRampFinalNotNeg.value *
        (Number(dpsPerPlayer.value) * forgiveness) *
        (Number(totalCombatTime.value) - 1)
      ).toFixed(0),
    ).toLocaleString("en-US"),
  );
  // formatted with commas
  const totalHpAdjusted = computed(() =>
    Number(
      (
        removableFinalNotNeg.value *
        (Number(dpsPerPlayer.value) * forgiveness) *
        (Number(timeShiftFinalNotNeg.value) - 1)
      ).toFixed(0),
    ).toLocaleString("en-US"),
  );
</script>

<template>
  <div class="sub-container">
    <h2>Hit Pt</h2>
    <p>Mob tuning and degeneracy.</p>
    <hr class="rule" />
    <div class="flex-1">
      <div class="panel">
        <p>numPlayers</p>
        <p class="panel-info">Number of players in the group.</p>
      </div>
      <input type="text" v-model="numPlayers" />
    </div>
    <br />
    <div class="flex-1">
      <div class="panel">
        <p>synRamp</p>
        <p class="panel-info">
          Amount to scale group size by to account for synergetic power gains.
        </p>
        <p class="panel-info formula">numPlayers + (numPlayers × synRamp) - synRamp</p>
      </div>
      <input type="text" v-model="synRamp" />
      <p class="final">{{ synRampFinalNotNeg }}</p>
    </div>
    <br />
    <div class="flex-1">
      <div class="panel">
        <p>dpsPerPlayer</p>
        <p class="panel-info">Expected (sustained) dps output per damage dealing class.</p>
      </div>
      <input type="text" v-model="dpsPerPlayer" />
    </div>
    <br />
    <div class="flex-1">
      <div class="panel">
        <p>totalCombatTime</p>
        <p class="panel-info">Expected combat time (in seconds).</p>
      </div>
      <input type="text" v-model="totalCombatTime" />
      <p class="final">{{ totalCombatTimeInMinutes }} (minutes)</p>
    </div>
    <br />
    <div class="flex-1">
      <div class="panel">
        <p>numPlayersRemovable</p>
        <p class="panel-info">
          Number of non-specifically dps players in the group (tanks/healers/etc.).
        </p>
      </div>
      <input type="text" v-model="numPlayersRemovable" />
      <p class="final">{{ removableFinalNotNeg }}</p>
    </div>
    <br />
    <div class="flex-1">
      <div class="panel">
        <p>totalCombatTimeShift</p>
        <p class="panel-info">
          Amount of downtime (in seconds) to account for (e.g. phase changes).
        </p>
      </div>
      <input type="text" v-model="totalCombatTimeShift" />
      <p class="final">{{ timeShiftFinalNotNeg }}</p>
    </div>
    <hr class="rule" />
    <p>
      totalHp: <span class="hp">{{ totalHp }}</span>
    </p>
    <br />
    <p>Final hit point value with adjustments + forgiveness applied.</p>
    <p>
      totalHpAdjusted: <span class="hp">{{ totalHpAdjusted }}</span>
    </p>
  </div>
</template>

<style scoped>
  .sub-container {
  }

  .panel {
    width: 200px;
  }

  .panel-info {
    font-size: 1.2rem;
    opacity: 0.5;
  }

  .final {
    color: aquamarine;
    margin-left: 20px;
  }

  .formula {
    color: aquamarine;
    font-size: 1rem;
  }

  .flex-1 {
    align-items: center;
  }

  .hp {
    color: brown;
  }
</style>
