<script setup>
  import { computed } from "vue";

  const props = defineProps({
    skill: String,
    icon: { type: String, default: "ico-def" },
    rank: Number,
    value: Number,
    cantrip: Number,
  });

  const skillClr = computed(() => {
    switch (props.rank) {
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
      case 10:
        return "clr-special";
    }
  });
  const unusableClr = computed(() => (props.rank === 0 ? "clr-unusable" : ""));
</script>

<template>
  <div class="pane-row">
    <div :class="icon" />
    <p :class="skillClr">{{ skill }}</p>
    <span class="can-val-align"
      ><span class="cantrip" v-show="cantrip">(+{{ cantrip }})&nbsp;</span>
      <p class="value" :class="unusableClr">{{ value + cantrip }}</p></span
    >
  </div>
</template>

<style scoped>
  .pane-row {
    align-items: center;
    background: linear-gradient(
      22.5deg,
      rgba(96, 128, 159, 0.165) 5%,
      rgba(48, 64, 80, 0.1),
      rgba(128, 159, 191, 0.05) 95%
    );
    border-bottom: solid 0.5px rgba(24, 32, 40, 0.33);
    border-top: solid 0.5px rgba(48, 64, 80, 0.5);
    box-shadow: inset 4px 4px 8px 0 rgba(96, 128, 159, 0.1);
    display: flex;
    font-size: 1.4rem;
    height: 32px;
    padding: 0 6px;
    user-select: none;
  }

  .pane-row:hover {
    filter: brightness(1.5);
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
