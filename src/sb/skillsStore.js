import { ref } from "vue";

const skills = ref([
  {
    id: 0,
    name: "Heavy Weapons",
  },
  {
    id: 1,
    name: "Life Chanting",
  },
  {
    id: 2,
    name: "Light Weapons",
  },
  {
    id: 3,
    name: "Missile Weapons",
  },
  {
    id: 4,
    name: "War Chanting",
  },
  {
    id: 5,
    name: "Evasive Tactics",
    fx: "[END + STR] / 4",
  },
  {
    id: 6,
    name: "Resilient Tactics",
    fx: "[STR + END] / 4",
  },
  {
    id: 7,
    name: "Warding",
    fx: "[INT + TUI] / 4",
  },
  {
    id: 8,
    name: "Alchemy",
  },
  {
    id: 9,
    name: "Armorsmithing",
  },
  {
    id: 10,
    name: "Bowyer",
  },
  {
    id: 11,
    name: "Jeweler",
  },
  {
    id: 12,
    name: "Leatherworking",
  },
  {
    id: 13,
    name: "Tailoring",
  },
  {
    id: 14,
    name: "Thaumaturgy",
  },
  {
    id: 15,
    name: "Weaponsmithing",
  },
  {
    id: 16,
    name: "Angling",
  },
  {
    id: 17,
    name: "Botany",
  },
  {
    id: 18,
    name: "Butchery",
  },
  {
    id: 19,
    name: "Cooking",
  },
  {
    id: 20,
    name: "Mining",
  },
  {
    id: 21,
    name: "Resourcefulness",
  },
  {
    id: 22,
    name: "Runereading",
  },
  {
    id: 23,
    name: "Runic Inscription",
  },
  {
    id: 24,
    name: "Summoning",
  },
  {
    id: 25,
    name: "Triage",
  },
]);

// id
// 0 = unusable
// 1 = untrained
// 2 = trained
// 3 = specialized
// 4 = prodigal
const playerSkills = ref([
  {
    id: 0,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 1,
    rank: 3,
    val: 110,
    cantrip: 9,
  },
  {
    id: 2,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 3,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 4,
    rank: 4,
    val: 110,
    cantrip: 12,
  },
  {
    id: 5,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 6,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 7,
    rank: 3,
    val: 110,
    cantrip: 9,
  },
  {
    id: 8,
    rank: 2,
    val: 110,
    cantrip: 0,
  },
  {
    id: 9,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 10,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 11,
    rank: 2,
    val: 110,
    cantrip: 0,
  },
  {
    id: 12,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 13,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 14,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 15,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 16,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 17,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 18,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 19,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 20,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 21,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 22,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 23,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 24,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
  {
    id: 25,
    rank: 0,
    val: 10,
    cantrip: 0,
  },
]);

export { skills, playerSkills };
