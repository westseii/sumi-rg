<script setup>
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";
  import { computed } from "@vue/reactivity";

  import AttributeRow from "@/components/CharacterSheet/AttributeRow.vue";
  import InnateField from "@/components/CharacterSheet/InnateField.vue";

  const player = usePlayerCharacterStore();

  const pkStatus = computed(() => {
    switch (player.flags.pk) {
      case 0:
        return "Non-Player Killer";
      case 1:
        return "Player Killer";
      case 2:
        return "Player Killer Lite";
      default:
        return "Non-Player Killer";
    }
  });
  const pkColor = computed(() => {
    switch (player.flags.pk) {
      case 0:
        return "clr-npk";
      case 1:
        return "clr-pk";
      case 2:
        return "clr-pkl";
      default:
        return "clr-npk";
    }
  });
</script>

<template>
  <div class="sumi-pane">
    <section class="char-identity">
      <h1 :class="player.flags.isAdmin && 'item-mythical'">
        <span v-show="player.flags.isAdmin">+Admin</span>
        {{ player.name }}
      </h1>
      <div>Level {{ player.level }} {{ player.gender }} {{ player.race }}</div>
      <div :class="pkColor">{{ pkStatus }}</div>
      <div></div>
    </section>

    <hr class="sumi-rule" />

    <header>
      <h2 style="margin-left: 6px">Innates</h2>
    </header>
    <section class="char-innate sumi-pane__inner">
      <div class="char-innate__flex">
        <InnateField attribute-name="Str" v-model.number="player.innate.str" />
        <InnateField attribute-name="End" v-model.number="player.innate.end" />
        <InnateField attribute-name="Int" v-model.number="player.innate.int" />
        <InnateField attribute-name="Tui" v-model.number="player.innate.tui" />
        <InnateField attribute-name="Apt" v-model.number="player.innate.apt" />
      </div>
    </section>

    <header>
      <h2 style="margin-left: 6px">Attributes</h2>
    </header>
    <section class="char-attributes sumi-pane__inner">
      <AttributeRow
        :attribute="player.attributes[0]"
        attribute-name="Strength"
        :total="player.totalStr"
      />
      <AttributeRow
        :attribute="player.attributes[1]"
        attribute-name="Endurance"
        :total="player.totalEnd"
      />
      <AttributeRow
        :attribute="player.attributes[2]"
        attribute-name="Intellect"
        :total="player.totalInt"
      />
      <AttributeRow
        :attribute="player.attributes[3]"
        attribute-name="Intuition"
        :total="player.totalTui"
      />
      <AttributeRow
        :attribute="player.attributes[4]"
        attribute-name="Aptitude"
        :total="player.totalApt"
      />

      <hr class="sumi-rule-sm" />

      <AttributeRow
        class="clr-hp"
        :attribute="{ cantrip: 0 }"
        attribute-name="Health"
        :total="player.totalHealthLocale"
      />
      <AttributeRow
        class="clr-sp"
        :attribute="{ cantrip: 0 }"
        attribute-name="Stamina"
        :total="player.totalStaminaLocale"
      />
      <AttributeRow
        class="clr-mp"
        :attribute="{ cantrip: 0 }"
        attribute-name="Mana"
        :total="player.totalManaLocale"
      />
    </section>

    <header>
      <h2 style="margin-left: 6px">Other</h2>
    </header>

    <section class="char-quote sumi-pane__inner">
      <div class="char-quote__body">When life gives you lemons, squirt someone in the eye.</div>
      <div class="char-quote__signature">~{{ player.name }}</div>
    </section>
  </div>
</template>

<style scoped>
  .char-identity {
    text-align: center;
  }

  .char-innate {
    margin: 6px 0;
  }
  .char-innate__flex {
    display: flex;
    justify-content: center;
  }

  .char-attributes {
    margin: 6px 0;
  }

  .char-quote {
    font-size: 1.1rem;
    margin-top: 6px;
  }
  .char-quote__body {
    text-align: center;
  }
  .char-quote__body::before {
    content: "“";
  }
  .char-quote__body::after {
    content: "”";
  }
  .char-quote__signature {
    text-align: right;
  }

  /* colors */
  .clr-npk {
    color: hsl(210, 13%, 50%);
  }
  .clr-pk {
    color: hsl(5, 58%, 43%);
  }
  .clr-pkl {
    color: hsl(345, 75%, 75%);
  }
</style>
