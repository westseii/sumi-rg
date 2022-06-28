import { defineStore } from "pinia";

import playerCredit from "@/playerdata/playerCredit.js";
import playerAttrs from "@/playerdata/playerAttrs.js";
import playerSkills from "@/playerdata/playerSkills.js";

export const usePlayerCharacterStore = defineStore({
  id: "playerCharacter",
  state: () => ({
    // in the future; from database collection (MongoDB)
    name: "Huli",
    race: "Shade",
    gender: "Male",
    level: 1,
    availableExp: 0,
    totalExp: 0,
    credit: playerCredit,
    attributes: playerAttrs,
    skills: playerSkills,
    vitality: {
      health: 1,
      stamina: 1,
      mana: 1,
      ultimate: 0,
    },
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
