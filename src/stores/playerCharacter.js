import { defineStore } from "pinia";

import playerAttrs from "@/playerdata/playerAttrs.js";
import playerSkills from "@/playerdata/playerSkills.js";
import playerCredit from "@/playerdata/playerCredit.js";

const innateAttrScale = 1;

export const usePlayerCharacterStore = defineStore({
  id: "playerCharacter",
  state: () => ({
    flags: {
      isAdmin: true,
      pk: 1,
    },

    // in the future; from database collection (MongoDB)
    name: "Dauweee",
    race: "Shade",
    gender: "Male",
    level: 65,
    availableExp: Infinity,
    totalExp: Infinity,
    innate: {
      str: 1,
      end: 3,
      int: 5,
      tui: 5,
      apt: 1,
    },
    attributes: playerAttrs,

    // might end up not being used
    raisedVitality: {
      hp: 0,
      sp: 0,
      mp: 0,
    },
    skills: playerSkills,
    credit: playerCredit,
  }),
  actions: {},
  getters: {
    //
    // add commas to display values
    availableExpLocale: (state) => state.availableExp.toLocaleString("en-US"),
    totalExpLocale: (state) => state.totalExp.toLocaleString("en-US"),
    totalHealthLocale() {
      return this.totalHealth.toLocaleString("en-US");
    },
    totalStaminaLocale() {
      return this.totalStamina.toLocaleString("en-US");
    },
    totalManaLocale() {
      return this.totalMana.toLocaleString("en-US");
    },

    // max attributes
    totalStr: (state) =>
      state.attributes[0].value +
      state.attributes[0].cantrip +
      (state.innate.str + innateAttrScale) * 5,
    totalEnd: (state) =>
      state.attributes[1].value +
      state.attributes[1].cantrip +
      (state.innate.end + innateAttrScale) * 5,
    totalInt: (state) =>
      state.attributes[2].value +
      state.attributes[2].cantrip +
      (state.innate.int + innateAttrScale) * 5,
    totalTui: (state) =>
      state.attributes[3].value +
      state.attributes[3].cantrip +
      (state.innate.tui + innateAttrScale) * 5,
    totalApt: (state) =>
      state.attributes[4].value +
      state.attributes[4].cantrip +
      (state.innate.apt + innateAttrScale) * 5,

    // max alts
    totalMight(state) {
      return this.totalStr * 2 + state.attributes[0].altValue;
    },
    totalFinesse(state) {
      return this.totalEnd * 2 + state.attributes[1].altValue;
    },
    totalCunning(state) {
      return this.totalInt * 2 + state.attributes[2].altValue;
    },
    totalInstinct(state) {
      return this.totalTui * 2 + state.attributes[3].altValue;
    },

    // max vitality
    totalHealth(state) {
      return (this.totalStr + this.totalEnd) * 2 + state.raisedVitality.hp + 10;
    },
    totalStamina(state) {
      return this.totalEnd * 4 + state.raisedVitality.sp + 10;
    },
    totalMana(state) {
      return (this.totalInt + this.totalTui) * 3 + state.raisedVitality.mp + 15;
    },

    // other
    raiseCap: (state) => (state.level <= 25 ? 50 : state.level * 2),
  },
});
