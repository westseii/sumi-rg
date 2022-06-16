import { ref } from "vue";

// ! do NOT change pool or id values

// skill info pool
// pool index
// 0 = general skills
// 1 = racial skills
const skillsPool = ref([
  [
    {
      pool: 0,
      id: 0,
      name: "Heavy Weapons",
      fx: "[STR] / 2",
      desc: "Todo. Heavy Weapons",
    },
    {
      pool: 0,
      id: 1,
      name: "Life Chanting",
      fx: "[TUI] / 2",
      desc: "The commanding of life through magical chants. Heal, harm, and infuse yourself and other targets through powerful vitality chants.",
    },
    {
      pool: 0,
      id: 2,
      name: "Light Weapons",
      fx: "[END] / 2",
      desc: "Todo. Light Weapons",
    },
    {
      pool: 0,
      id: 3,
      name: "Missile Weapons",
      fx: "[END] / 2",
      desc: "Todo. Missile Weapons",
    },
    {
      pool: 0,
      id: 4,
      name: "War Chanting",
      fx: "[INT] / 2",
      desc: "Todo. War Chanting",
    },
    {
      pool: 0,
      id: 5,
      name: "Evasive Tactics",
      fx: "[END + STR] / 4",
      desc: "Todo. Evasive Tactics",
    },
    {
      pool: 0,
      id: 6,
      name: "Resilient Tactics",
      fx: "[STR + END] / 4",
      desc: "Todo. Resilient Tactics",
    },
    {
      pool: 0,
      id: 7,
      name: "Warding",
      fx: "[INT + TUI] / 4",
      desc: "Todo. Warding",
    },
    {
      pool: 0,
      id: 8,
      name: "Alchemy",
      fx: "[INT + APT] / 4",
      desc: "Todo. Alchemy",
    },
    {
      pool: 0,
      id: 9,
      name: "Armorsmithing",
      fx: "[STR + APT] / 4",
      desc: "Todo. Armorsmithing",
    },
    {
      pool: 0,
      id: 10,
      name: "Bowyer",
      fx: "[END + APT] / 4",
      desc: "Todo. Bowyer",
    },
    {
      pool: 0,
      id: 11,
      name: "Jeweler",
      fx: "[TUI + APT] / 4",
      desc: "Todo. Jeweler",
    },
    {
      pool: 0,
      id: 12,
      name: "Leatherworking",
      fx: "[END + APT] / 4",
      desc: "Todo. Leatherworking",
    },
    {
      pool: 0,
      id: 13,
      name: "Tailoring",
      fx: "[INT or TUI + APT] / 4",
      desc: "Todo. Tailoring",
    },
    {
      pool: 0,
      id: 14,
      name: "Thaumaturgy",
      fx: "[INT or TUI + APT] / 4",
      desc: "Todo. Thaumaturgy",
    },
    {
      pool: 0,
      id: 15,
      name: "Weaponsmithing",
      fx: "[STR or END + APT] / 4",
      desc: "Todo. Weaponsmithing",
    },
    {
      pool: 0,
      id: 16,
      name: "Angling",
      fx: "[APT] / 2",
      desc: "Todo. Angling",
    },
    {
      pool: 0,
      id: 17,
      name: "Botany",
      fx: "[APT] / 2",
      desc: "Todo. Botany",
    },
    {
      pool: 0,
      id: 18,
      name: "Butchery",
      fx: "[APT] / 2",
      desc: "Todo. Butchery",
    },
    {
      pool: 0,
      id: 19,
      name: "Cooking",
      fx: "[APT] / 2",
      desc: "Todo. Cooking",
    },
    {
      pool: 0,
      id: 20,
      name: "Mining",
      fx: "[APT] / 2",
      desc: "Todo. Mining",
    },
    {
      pool: 0,
      id: 21,
      name: "Resourcefulness",
      fx: "[APT] / 2",
      desc: "Todo. Resourcefulness",
    },
    {
      pool: 0,
      id: 22,
      name: "Runereading",
      fx: "[APT] / 2",
      desc: "Todo. Runereading",
    },
    {
      pool: 0,
      id: 23,
      name: "Runic Inscription",
      fx: "[APT] / 2",
      desc: "Todo. Runic Inscription",
    },
    {
      pool: 0,
      id: 24,
      name: "Summoning",
      fx: "[APT] / 2",
      desc: "Todo. Summoning",
    },
    {
      pool: 0,
      id: 25,
      name: "Triage",
      fx: "[APT] / 2",
      desc: "Todo. Triage",
    },
  ], // racial skills
  [
    {
      pool: 1,
      id: 0,
      name: "Shadow Tactics",
      desc: "Todo. Shadow Tactics",
    },
  ],
]);

// player skill value pool
// pool index
// 0 = general skills
// 1 = racial skills
const playerSkillsPool = ref([
  // rank
  // 0 = unusable
  // 1 = untrained
  // 2 = trained
  // 3 = specialized
  // 4 = prodigal
  [
    {
      id: 0,
      rank: 0,
      val: 10,
      cantrip: 0,
    },
    {
      id: 1,
      rank: 0,
      val: 10,
      cantrip: 0,
    },
    {
      id: 2,
      rank: 2,
      val: 10,
      cantrip: 0,
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
      cantrip: 0,
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
      cantrip: 0,
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
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 23,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 24,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 25,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
  ], // racial values
  [
    {
      id: 0,
      val: 10,
      cantrip: 0,
    },
  ],
]);

//
// sim
const cantripAdd = 25;

function getRandIntInc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

playerSkillsPool.value[0].forEach((skill) => {
  if (skill.rank === 4) skill.val = getRandIntInc(50, 74);
  else if (skill.rank === 3) skill.val = getRandIntInc(25, 49);
  else if (skill.rank === 2) skill.val = getRandIntInc(0, 24);
});

playerSkillsPool.value[0].forEach((skill) => (skill.cantrip += cantripAdd));

// quick hack
// if a skill is unusable, then it is truly unusable
playerSkillsPool.value[0].forEach((skill) => {
  if (skill.rank === 0) {
    skill.val = 0;
    skill.cantrip = 0;
  }
});

export { skillsPool, playerSkillsPool };
