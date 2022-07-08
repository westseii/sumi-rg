import { ref } from "vue";

const playerAttrs = ref([
  {
    // strength/might
    id: 0,
    value: 0,
    altValue: 0,
    cantrip: 0,
  },
  {
    // endurance/finesse
    id: 1,
    value: 0,
    altValue: 0,
    cantrip: 0,
  },
  {
    // intellect/cunning
    id: 2,
    value: 0,
    altValue: 0,
    cantrip: 0,
  },
  {
    // intuition/instinct
    id: 3,
    value: 0,
    altValue: 0,
    cantrip: 0,
  },
  {
    // aptitude
    id: 4,
    value: 0,
    altValue: 0, // unused, does not matter
    cantrip: 0,
  },
]);

export default playerAttrs;
