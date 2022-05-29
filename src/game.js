// experience costs for each skill level
let skillExperienceCosts = [
  160, 480, 960, 1600, 2400, 3360, 4480, 5760, 7200, 8800, 10576, 12544, 14720, 17120, 19760, 22656,
  25841, 29350, 33220, 37490, 42201, 47396, 53120, 59420, 66345, 73270, 80195, 87120, 94045, 101870,
  109695, 117520, 125345, 133170, 142220, 151270, 160320, 169370, 178420, 189070, 199720, 210370,
  221020, 231670, 244345, 257020, 269695, 282370, 295045, 310220, 325395, 340570, 355745, 370920,
  389120, 407320, 425520, 443720, 461920, 483720, 505520, 527320, 549120, 570920, 596945, 622970,
  648995, 675020, 701045, 731970, 762895, 793820, 824745, 855670, 892220, 928770, 965320, 1001870,
  1038420, 1081370, 1124320, 1167270, 1210220, 1253170, 1303345, 1353520, 1403695, 1453870, 1504045,
  1562320, 1620595, 1678870, 1737145, 1795420, 1862720, 1930020, 1997320, 2064620, 2131920, 2209220,
  2286520, 2363820, 2441120, 2518420, 2606745, 2695070, 2783395, 2871720, 2960045, 3060470, 3160895,
  3261320, 3361745, 3462170, 3575820, 3689470, 3803120, 3916770, 4030420, 4158470, 4286520, 4414570,
  4542620, 4670670, 4814345, 4958020, 5101695, 5245370, 5389045,
];

// skillExperienceCosts = skillExperienceCosts.map((cost) => Math.floor(cost / 10));

const skillCap = skillExperienceCosts.length;

const creatureAttributes = [
  {
    id: 0,
    primary: "Strength",
    primaryAlt: "Str",
    secondary: "Might",
    primaryDesc: "Governs all Strength skills.",
    secondaryDesc: "Physical power",
  },
  {
    id: 1,
    primary: "Endurance",
    primaryAlt: "End",
    secondary: "Finesse",
    primaryDesc: "Governs all Endurance skills.",
    secondaryDesc: "Physical plasticity",
  },
  {
    id: 2,
    primary: "Intellect",
    primaryAlt: "Int",
    secondary: "Cunning",
    primaryDesc: "Governs all Intellect skills.",
    secondaryDesc: "Mental power",
  },
  {
    id: 3,
    primary: "Intuition",
    primaryAlt: "Tui",
    secondary: "Instinct",
    primaryDesc: "Governs all Intuition skills.",
    secondaryDesc: "Mental plasticity",
  },
  {
    id: 4,
    primary: "Aptitude",
    primaryAlt: "Apt",
    secondary: null,
    primaryDesc: "Governs all tradeskills.",
    secondaryDesc: null,
  },
];

const creatureSkills = [
  {
    id: 0,
    name: "Heavy Weapons",
    type: "Combat",
    formulaic: "[STR] / 2",
    desc: "None.",
    specStatus: 0,
  },
  {
    id: 1,
    name: "Life Chanting",
    type: "Combat",
    formulaic: "[TUI] / 2",
    desc: "None.",
    specStatus: 1,
  },
  {
    id: 2,
    name: "Light Weapons",
    type: "Combat",
    formulaic: "[END] / 2",
    desc: "None.",
    specStatus: 0,
  },
  {
    id: 3,
    name: "Missile Weapons",
    type: "Combat",
    formulaic: "[END] / 2",
    desc: "None.",
    specStatus: 0,
  },
  {
    id: 4,
    name: "War Chanting",
    type: "Combat",
    formulaic: "[INT] / 2",
    desc: "None.",
    specStatus: 3,
  },
  {
    id: 5,
    name: "Evasive Tactics",
    type: "Mitigation",
    formulaic: "[END + STR] / 4",
    desc: "None.",
    specStatus: 1,
  },
  {
    id: 6,
    name: "Resilience",
    type: "Mitigation",
    formulaic: "[STR + END] / 4",
    desc: "None.",
    specStatus: 1,
  },
  {
    id: 7,
    name: "Warding",
    type: "Mitigation",
    formulaic: "[INT + TUI] / 4",
    desc: "None.",
    specStatus: 2,
  },
];

export { skillExperienceCosts, skillCap, creatureAttributes, creatureSkills };
