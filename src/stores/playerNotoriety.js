import { defineStore } from "pinia";

export const usePlayerNotorietyStore = defineStore({
  id: "playerNotoriety",
  state: () => ({
    cityRep: [
      {
        id: 0,
        name: "Milnes City",
        value: 0,
      },
      {
        id: 1,
        name: "Glenden",
        value: 0,
      },
      {
        id: 2,
        name: "Mur",
        value: 0,
      },
    ],
    peopleRep: [
      {
        id: 0,
        name: "Master Mage Tanaka",
        value: 0,
      },
      {
        id: 1,
        name: "Master Mage Tei Ko",
        value: 0,
      },
      {
        id: 2,
        name: "Master Mage Yaeli",
        value: 0,
      },
      {
        id: 3,
        name: "The Black Breath",
        value: 0,
      },
      {
        id: 4,
        name: "May Kay Matey",
        value: 0,
      },
    ],
  }),
});
