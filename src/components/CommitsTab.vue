<script setup>
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

  const pat = "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";
  const owner = "westseii";
  const repo = "sumi-rg";

  const octokit = new Octokit({
    auth: `${pat}`,
  });

  const response = await octokit.request(`GET /repos/${owner}/${repo}/commits`, {
    owner: owner,
    repo: repo,
  });

  function formatDate(date) {
    const _date = new Date(date);
    return `${_date.getMonth() + 1} / ${_date.getDate()} / ${_date.getFullYear()}`;
  }

  const commitData = () =>
    response.data.map((obj, i) => {
      return {
        id: i,
        author: obj.commit.author.name,
        date: formatDate(obj.commit.author.date),
        message: obj.commit.message,
      };
    });
</script>

<template>
  <div
    class="commits-tab pane"
    style="border-radius: 8px; margin-bottom: 40px; margin-top: 6px; width: 320px"
  >
    <h2>Commit History ({{ repo }})</h2>
    <hr class="rule" />
    <div>
      <div class="commit" v-for="cd in commitData()" :key="cd.id">
        <h3>{{ cd.message }}</h3>
        <div style="align-items: center; display: flex; line-height: 1.2rem">
          <span style="font-size: 1.2rem">&nbsp;~&nbsp;{{ cd.author }}</span>
          <span style="font-size: 1.2rem; margin-left: auto">{{ cd.date }}</span>
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
