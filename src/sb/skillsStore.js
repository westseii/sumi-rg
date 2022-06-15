import { ref } from "vue";

// skill info pool
// pool index
// 0 = general skills
// 1 = racial skills
const skillsPool = ref([
  [
    {
      id: 0,
      pool: 0,
      name: "Heavy Weapons",
      fx: "[STR] / 2",
      desc: "Todo. Heavy Weapons",
    },
    {
      id: 1,
      pool: 0,
      name: "Life Chanting",
      fx: "[TUI] / 2",
      desc: "The commanding of life through magical chants. Heal, harm, and infuse yourself and other targets through powerful vitality chants.",
    },
    {
      id: 2,
      pool: 0,
      name: "Light Weapons",
      fx: "[END] / 2",
      desc: "Todo. Light Weapons",
    },
    {
      id: 3,
      pool: 0,
      name: "Missile Weapons",
      fx: "[END] / 2",
      desc: "Todo. Missile Weapons",
    },
    {
      id: 4,
      pool: 0,
      name: "War Chanting",
      fx: "[INT] / 2",
      desc: "Todo. War Chanting",
    },
    {
      id: 5,
      pool: 0,
      name: "Evasive Tactics",
      fx: "[END + STR] / 4",
      desc: "Todo. Evasive Tactics",
    },
    {
      id: 6,
      pool: 0,
      name: "Resilient Tactics",
      fx: "[STR + END] / 4",
      desc: "Todo. Resilient Tactics",
    },
    {
      id: 7,
      pool: 0,
      name: "Warding",
      fx: "[INT + TUI] / 4",
      desc: "Todo. Warding",
    },
    {
      id: 8,
      pool: 0,
      name: "Alchemy",
      fx: "[INT + APT] / 4",
      desc: "Todo. Alchemy",
    },
    {
      id: 9,
      pool: 0,
      name: "Armorsmithing",
      fx: "[STR + APT] / 4",
      desc: "Todo. Armorsmithing",
    },
    {
      id: 10,
      pool: 0,
      name: "Bowyer",
      fx: "[END + APT] / 4",
      desc: "Todo. Bowyer",
    },
    {
      id: 11,
      pool: 0,
      name: "Jeweler",
      fx: "[TUI + APT] / 4",
      desc: "Todo. Jeweler",
    },
    {
      id: 12,
      pool: 0,
      name: "Leatherworking",
      fx: "[END + APT] / 4",
      desc: "Todo. Leatherworking",
    },
    {
      id: 13,
      pool: 0,
      name: "Tailoring",
      fx: "[INT or TUI + APT] / 4",
      desc: "Todo. Tailoring",
    },
    {
      id: 14,
      pool: 0,
      name: "Thaumaturgy",
      fx: "[INT or TUI + APT] / 4",
      desc: "Todo. Thaumaturgy",
    },
    {
      id: 15,
      pool: 0,
      name: "Weaponsmithing",
      fx: "[STR or END + APT] / 4",
      desc: "Todo. Weaponsmithing",
    },
    {
      id: 16,
      pool: 0,
      name: "Angling",
      fx: "[APT] / 2",
      desc: "Todo. Angling",
    },
    {
      id: 17,
      pool: 0,
      name: "Botany",
      fx: "[APT] / 2",
      desc: "Todo. Botany",
    },
    {
      id: 18,
      pool: 0,
      name: "Butchery",
      fx: "[APT] / 2",
      desc: "Todo. Butchery",
    },
    {
      id: 19,
      pool: 0,
      name: "Cooking",
      fx: "[APT] / 2",
      desc: "Todo. Cooking",
    },
    {
      id: 20,
      pool: 0,
      name: "Mining",
      fx: "[APT] / 2",
      desc: "Todo. Mining",
    },
    {
      id: 21,
      pool: 0,
      name: "Resourcefulness",
      fx: "[APT] / 2",
      desc: "Todo. Resourcefulness",
    },
    {
      id: 22,
      pool: 0,
      name: "Runereading",
      fx: "[APT] / 2",
      desc: "Todo. Runereading",
    },
    {
      id: 23,
      pool: 0,
      name: "Runic Inscription",
      fx: "[APT] / 2",
      desc: "Todo. Runic Inscription",
    },
    {
      id: 24,
      pool: 0,
      name: "Summoning",
      fx: "[APT] / 2",
      desc: "Todo. Summoning",
    },
    {
      id: 25,
      pool: 0,
      name: "Triage",
      fx: "[APT] / 2",
      desc: "Todo. Triage",
    },
  ],
  [
    {
      id: 0,
      pool: 1,
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
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 1,
      rank: 4,
      val: 10,
      cantrip: 0,
    },
    {
      id: 2,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 3,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 4,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 5,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 6,
      rank: 1,
      val: 10,
      cantrip: 0,
    },
    {
      id: 7,
      rank: 3,
      val: 10,
      cantrip: 0,
    },
    {
      id: 8,
      rank: 2,
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
      rank: 2,
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
      rank: 2,
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
      rank: 2,
      val: 10,
      cantrip: 0,
    },
    {
      id: 22,
      rank: 2,
      val: 10,
      cantrip: 0,
    },
    {
      id: 23,
      rank: 2,
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
  ],
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
const cantripAdd = 9;

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
