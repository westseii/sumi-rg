import { defineStore } from "pinia";

export const usePlayerInventoryStore = defineStore({
  id: "playerInventory",
  state: () => ({
    backpack: [],
    pack1: [],
    pack2: [],
    pack3: [],
    pack4: [],
  }),
});
