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
        author: obj.committer.login,
        date: reformatDate(obj.commit.author.date),
        message: obj.commit.message,
        sha: obj.sha,
        url: obj.html_url,
      };
    });
</script>

<template>
  <div class="commits-tab">
    <h1>Commits ({{ REPO }})</h1>
    <hr class="rule" />
    <div class="line" v-for="commit in commitData()" :key="commit.id">
      <div class="commit">
        <span class="bullet" />
        <span>
          <h2>{{ commit.message }}</h2>
          <span style="filter: opacity(0.33); font-size: 1rem"
            >sha:
            <a class="sha" :href="`${commit.url}`" target="_blank" rel="noopener noreferrer">{{
              commit.sha
            }}</a></span
          >
        </span>
        <span style="font-size: 1.2rem; margin-left: auto; text-align: right; width: max-content"
          >{{ commit.date }} ({{ commit.author }})</span
        >
      </div>
      <!-- <hr class="rule-sm" /> -->
      <br />
    </div>
  </div>
</template>

<style scoped>
  /*
   .commits-tab > .line:last-child > .rule-sm {
     display: none;
   }
  */

  .commit {
    align-items: center;
    display: flex;
  }

  .sha:link {
    color: inherit;
  }

  .sha:visited {
    color: inherit;
  }

  .sha:hover {
    color: lime;
    font-size: 1.2rem;
  }
</style>
