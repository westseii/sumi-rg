<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex-1">
    <RouterLink class="rl" to="/">Sumi RG</RouterLink>
    <RouterLink class="rl" to="/commits">Commit Log</RouterLink>
    <RouterLink class="rl" to="/skills-pane">Skills Pane</RouterLink>
    <!-- <RouterLink class="sumi-btn-1" to="/doll/attributes">Doll</RouterLink> -->
    <hr class="rule" />
  </div>
  <RouterView />
</template>

<style>
  /* global */
  @import "@/assets/normalize.css";
  @import "@/assets/base.css";
  @import "@/assets/panes.css";

  body {
    padding: 0 20px 20px 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(96, 128, 159, 0.85);
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.4rem;
  }

  span.ico-def {
    background-image: url("@/assets/ico/magic-swirl.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: inset -6px -6px 12px 0 rgba(96, 128, 159, 0.33);
    height: 22px;
    margin: 0 6px 0 -4px;
    width: 22px;
  }

  .rl {
    margin-right: 6px;
  }
</style>
