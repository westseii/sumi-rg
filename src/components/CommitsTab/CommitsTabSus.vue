<script setup>
  import { onErrorCaptured, ref } from "vue";

  import CommitsTab from "@/components/CommitsTab/CommitsTab.vue";
  import CommitsTabLoading from "@/components/CommitsTab/CommitsTabLoading.vue";

  const error = ref(null);

  // probably due to bad credentials
  onErrorCaptured((e) => {
    error.value = e;
    return false; // don't propagate to errorHandler; handled
  });
</script>

<template>
  <div class="commits-tab-sus">
    <template v-if="error">
      <div v-if="error.message === 'Bad credentials'">
        <h1>
          <strong>{{ error.name }}</strong> - {{ error.message }}
        </h1>
        <p>Check your GitHub authentication credentials.</p>
      </div>
      <div v-else>
        <h1>
          <strong>{{ error.name }}</strong> - {{ error.message }}
        </h1>
        <p>Something went wrong.</p>
      </div>
    </template>
    <Suspense v-else>
      <template #default>
        <CommitsTab />
      </template>
      <template #fallback>
        <CommitsTabLoading />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
  .commits-tab-sus {
    width: 576px;
  }
</style>
