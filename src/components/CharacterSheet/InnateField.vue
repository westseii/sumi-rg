<script setup>
  import { computed } from "vue";

  const props = defineProps({
    attributeName: String,
    modelValue: {
      type: Number,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const updateValue = (e) => {
    if (e.target.value >= 1 && e.target.value <= 6) emit("update:modelValue", e.target.value);
    else if (e.target.value < 1) {
      e.target.value = 1;
      emit("update:modelValue", 1);
    } else if (e.target.value > 6) {
      e.target.value = 6;
      emit("update:modelValue", 6);
    }
  };

  const heatColor = computed(() => {
    switch (props.modelValue) {
      case 2:
        return "clr-heat-2";
      case 3:
        return "clr-heat-3";
      case 4:
        return "clr-heat-4";
      case 5:
        return "clr-heat-5";
      case 6:
        return "clr-heat-6";
      default:
        return "clr-cool";
    }
  });
</script>

<template>
  <div class="char-innate__flex--child">
    <h3 style="margin-bottom: 6px">{{ attributeName }}</h3>
    <input
      class="sumi-input char-innate__input"
      :class="heatColor"
      :value="modelValue"
      type="number"
      @input="updateValue"
    />
  </div>
</template>

<style scoped>
  .char-innate__flex--child > * {
    text-align: center;
  }
  .char-innate__flex--child {
    margin-right: 6px;
  }
  .char-innate__flex--child:last-child {
    margin-right: 0;
  }
  .char-innate__input {
    width: 50px;
  }

  /* heat colors */
  .clr-cool {
    color: hsl(0, 0%, 38%);
  }
  .clr-heat-2 {
    color: hsl(240, 48%, 53%);
  }
  .clr-heat-3 {
    color: hsl(180, 48%, 53%);
  }
  .clr-heat-4 {
    color: hsl(120, 48%, 53%);
  }
  .clr-heat-5 {
    color: hsl(60, 48%, 53%);
  }
  .clr-heat-6 {
    color: hsl(0, 48%, 53%);
  }
</style>
