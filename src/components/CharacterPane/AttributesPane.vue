<script setup>
  import { computed, ref } from "vue";

  import AttributeTab from "@/components/CharacterPane/AttributeTab.vue";

  import { attrsInfo } from "@/attrsInfo.js";
  import { usePlayerCharacterStore } from "@/stores/playerCharacter.js";

  const player = usePlayerCharacterStore();

  // events
  const attributeId = ref(null);
  const attributeSelected = (payload) => {
    attributeId.value = payload;
  };
</script>

<template>
  <div class="attributes-pane" style="width: 320px">
    <div style="height: 420px">
      <div class="rank">
        <span class="bullet" />
        <h2>Attributes</h2>
      </div>
      <div>
        <AttributeTab
          @attribute-selected="attributeSelected"
          v-for="a in attrsInfo"
          :key="a.id"
          :attribute-id="a.id"
          :group="'attribute-selected'"
        />
      </div>
      <div class="rank">
        <span class="bullet" />
        <h2>Vitality</h2>
      </div>
      <p>{{ player.vitality }}</p>
    </div>
  </div>
</template>

<style>
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
</style>
