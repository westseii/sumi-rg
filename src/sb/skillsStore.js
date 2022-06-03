import { ref } from "vue";

const skills = ref([
  {
    id: 0,
    name: "Heavy Weapons",
    value: 130,
    cantrip: 70,
  },
  {
    id: 1,
    name: "Life Chanting",
    value: 10,
    cantrip: 0,
  },
  {
    id: 2,
    name: "Light Weapons",
    value: 130,
    cantrip: 40,
  },
  {
    id: 3,
    name: "Missile Weapons",
    value: 10,
    cantrip: 0,
  },
  {
    id: 4,
    name: "War Chanting",
    value: 10,
    cantrip: 0,
  },
  {
    id: 5,
    name: "Evasive Tactics",
    value: 130,
    cantrip: 40,
  },
  {
    id: 6,
    name: "Resilient Tactics",
    value: 130,
    cantrip: 55,
  },
  {
    id: 7,
    name: "Warding",
    value: 10,
    cantrip: 0,
  },
  {
    id: 8,
    name: "Test 1",
    value: 65,
    cantrip: 5,
  },
  {
    id: 9,
    name: "Test 2",
    value: 65,
    cantrip: 5,
  },
]);

//
// 0 = unusable
// 1 = untrained
// 2 = trained
// 3 = specialized
// 4 = prodigal
const skillsStatus = ref([4, 0, 2, 0, 0, 2, 3, 0, 1, 1]);

export { skills, skillsStatus };
