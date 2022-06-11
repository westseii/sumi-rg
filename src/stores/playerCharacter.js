import { defineStore } from "pinia";

import { usePlayerInventoryStore } from "@/stores/playerInventory.js";
import { usePlayerNotorietyStore } from "@/stores/playerNotoriety.js";

export const usePlayerCharacterStore = defineStore({
  id: "playerCharacter",
  state: () => ({
    name: "Huli",
    race: "Shade",
    gender: "Male",
    level: 50,
    availableExp: 25_000,
    totalExp: 25_000,
    vitality: {
      health: 410,
      stamina: 410,
      mana: 615,
      ultimate: 0,
    },
    "primary attributes": {
      strength: 100,
      endurance: 100,
      intellect: 150,
      intuition: 150,
      aptitude: 100,
    },
    "secondary attributes": {
      might: 500,
      finesse: 500,
      cunning: 750,
      instinct: 750,
    },
    skillStage: [],
    inventory: usePlayerInventoryStore(),
    notoriety: usePlayerNotorietyStore(),
    quote: `The hasty rushing to and fro to fight, pry, claim, and steal.
    This land called <redacted>, where so many perish in the daily strife...
    Why have we been brought, to such a place of discord.
    Where even...`,
  }),
  getters: {
    availableExpLocale: (state) => state.availableExp.toLocaleString("en-US"),
    totalExpLocale: (state) => state.totalExp.toLocaleString("en-US"),
  },
});
