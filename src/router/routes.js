import { createRouter, createWebHistory } from "vue-router";

import HitPtCalc from "@/views/HitPtCalc.vue";
import MinimalView from "@/views/MinimalView.vue";
import PaperDoll from "@/views/PaperDoll.vue";
import PaperDollAttributes from "@/views/PaperDollAttributes.vue";
import PaperDollQuote from "@/views/PaperDollQuote.vue";
import PaperDollSkills from "@/views/PaperDollSkills.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MinimalView,
    },
    {
      path: "/doll",
      component: PaperDoll,
      children: [
        {
          path: "attributes",
          component: PaperDollAttributes,
        },
        {
          path: "skills",
          component: PaperDollSkills,
        },
        {
          path: "quote",
          component: PaperDollQuote,
        },
      ],
    },
    { path: "/hit-calc", component: HitPtCalc },
  ],
});

export default router;
