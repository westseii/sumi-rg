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
  <div class="commits-tab pane" style="border-radius: 8px; margin-bottom: 40px; width: 100%">
    <h2>Commit History ({{ REPO }})</h2>
    <hr class="rule" />
    <div>
      <div class="commit" v-for="commit in commitData()" :key="commit.id">
        <h3>{{ commit.message }}</h3>
        <div style="align-items: center; display: flex; line-height: 1.2rem">
          <span style="font-size: 1.2rem">&nbsp;~&nbsp;{{ commit.author }}</span>
          <span style="font-size: 1.2rem; margin-left: auto">{{ commit.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .commit {
    margin-bottom: 18px;
  }

  .commit:last-child {
    margin-bottom: 0;
  }
</style>
