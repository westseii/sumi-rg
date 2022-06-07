import { ref } from "vue";

const skills = ref([
  {
    id: 0,
    name: "Heavy Weapons",
    fx: "[STR] / 2",
  },
  {
    id: 1,
    name: "Life Chanting",
    fx: "[TUI] / 2",
  },
  {
    id: 2,
    name: "Light Weapons",
    fx: "[END] / 2",
  },
  {
    id: 3,
    name: "Missile Weapons",
    fx: "[END] / 2",
  },
  {
    id: 4,
    name: "War Chanting",
    fx: "[INT] / 2",
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
    fx: "[INT + APT] / 4",
  },
  {
    id: 9,
    name: "Armorsmithing",
    fx: "[STR + APT] / 4",
  },
  {
    id: 10,
    name: "Bowyer",
    fx: "[END + APT] / 4",
  },
  {
    id: 11,
    name: "Jeweler",
    fx: "[TUI + APT] / 4",
  },
  {
    id: 12,
    name: "Leatherworking",
    fx: "[END + APT] / 4",
  },
  {
    id: 13,
    name: "Tailoring",
    fx: "[INT or TUI + APT] / 4",
  },
  {
    id: 14,
    name: "Thaumaturgy",
    fx: "[INT or TUI + APT] / 4",
  },
  {
    id: 15,
    name: "Weaponsmithing",
    fx: "[STR or END + APT] / 4",
  },
  {
    id: 16,
    name: "Angling",
    fx: "[APT] / 2",
  },
  {
    id: 17,
    name: "Botany",
    fx: "[APT] / 2",
  },
  {
    id: 18,
    name: "Butchery",
    fx: "[APT] / 2",
  },
  {
    id: 19,
    name: "Cooking",
    fx: "[APT] / 2",
  },
  {
    id: 20,
    name: "Mining",
    fx: "[APT] / 2",
  },
  {
    id: 21,
    name: "Resourcefulness",
    fx: "[APT] / 2",
  },
  {
    id: 22,
    name: "Runereading",
    fx: "[APT] / 2",
  },
  {
    id: 23,
    name: "Runic Inscription",
    fx: "[APT] / 2",
  },
  {
    id: 24,
    name: "Summoning",
    fx: "[APT] / 2",
  },
  {
    id: 25,
    name: "Triage",
    fx: "[APT] / 2",
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
    rank: 1,
    val: 10,
    cantrip: 10,
  },
  {
    id: 1,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 2,
    rank: 2,
    val: 10,
    cantrip: 10,
  },
  {
    id: 3,
    rank: 2,
    val: 10,
    cantrip: 0,
  },
  {
    id: 4,
    rank: 3,
    val: 10,
    cantrip: 10,
  },
  {
    id: 5,
    rank: 3,
    val: 10,
    cantrip: 0,
  },
  {
    id: 6,
    rank: 4,
    val: 10,
    cantrip: 10,
  },
  {
    id: 7,
    rank: 4,
    val: 10,
    cantrip: 0,
  },
  {
    id: 8,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 9,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 10,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 11,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 12,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 13,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 14,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 15,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 16,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 17,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 18,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 19,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 20,
    rank: 1,
    val: 10,
    cantrip: 0,
  },
  {
    id: 21,
    rank: 1,
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

// quick hack
// if a skill is unusable, then it is truly unusable
for (const skill in playerSkills.value) {
  if (playerSkills.value[skill].rank === 0) {
    playerSkills.value[skill].val = 0;
    playerSkills.value[skill].cantrip = 0;
  }
}

export { skills, playerSkills };
