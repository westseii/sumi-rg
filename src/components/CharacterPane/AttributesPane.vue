<script setup>
  import { ref } from "vue";

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
  <div>
    <div class="rank">
      <span class="bullet" />
      <h2>Vitae</h2>
    </div>
    <!-- Todo: put into its own component; eliminate inline styles -->
    <div style="padding: 0 6px">
      <div style="color: brown; display: flex; line-height: 28px">
        <span>Health:</span>
        <span style="margin-left: auto">{{ player.vitality.health }}</span>
      </div>
      <div style="color: goldenrod; display: flex; line-height: 28px">
        <span>Stamina:</span>
        <span style="margin-left: auto">{{ player.vitality.stamina }}</span>
      </div>
      <div style="color: royalblue; display: flex; line-height: 28px">
        <span>Mana:</span>
        <span style="margin-left: auto">{{ player.vitality.mana }}</span>
      </div>
    </div>
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
  </div>
</template>
