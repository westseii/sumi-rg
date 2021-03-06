import { createRouter, createWebHistory } from "vue-router";

import SumiRG from "@/views/SumiRG.vue";

import CommitsTabSus from "@/components/CommitsTab/CommitsTabSus.vue";
import CharacterPane from "@/components/CharacterPane/CharacterPane.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: SumiRG,
    },
    {
      path: "/commits",
      component: CommitsTabSus,
    },
    {
      path: "/skills-pane",
      component: CharacterPane,
    },
    // {
    //   path: "/doll",
    //   component: PaperDoll,
    //   children: [
    //     {
    //       path: "attributes",
    //       component: PaperDollAttributes,
    //     },
    //     {
    //       path: "skills",
    //       component: PaperDollSkills,
    //     },
    //     {
    //       path: "notoriety",
    //       component: PaperDollNotoriety,
    //     },
    //     {
    //       path: "quote",
    //       component: PaperDollQuote,
    //     },
    //   ],
    // },
    // { path: "/hit-calc", component: HitPtCalc },
  ],
});

export default router;
