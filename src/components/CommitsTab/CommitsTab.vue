<script setup>
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

  // vite environment variables
  const PAT = import.meta.env.VITE_PAT;
  const OWNER = import.meta.env.VITE_OWNER;
  const REPO = import.meta.env.VITE_REPO;

  const octokit = new Octokit({
    auth: `${PAT}`,
  });

  const response = await octokit.request(`GET /repos/${OWNER}/${REPO}/commits`, {
    owner: OWNER,
    repo: REPO,
  });

  function reformatDate(date) {
    const _date = new Date(date);
    return `${_date.getMonth() + 1} / ${_date.getDate()} / ${_date.getFullYear()}`;
  }

  const commitData = () =>
    response.data.map((obj, i) => {
      return {
        id: i,
        author: obj.commit.author.name,
        date: reformatDate(obj.commit.author.date),
        message: obj.commit.message,
      };
    });
</script>

<template>
  <div class="commits-tab">
    <h1>Commits ({{ REPO }})</h1>
    <hr class="rule" />
    <div class="commit" v-for="commit in commitData()" :key="commit.id">
      <div class="v-rule-sm" />
      <h2 style="width: 50%">{{ commit.message }}</h2>
      <span style="font-size: 1.2rem; margin-left: auto"
        >{{ commit.date }} ~ {{ commit.author }}</span
      >
    </div>
    <hr class="rule-sm" />
  </div>
</template>

<style scoped>
  .commit {
    align-items: center;
    display: flex;
  }
</style>
