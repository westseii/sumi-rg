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
    <div v-if="error">
      <h1>{{ error }}</h1>
      <p>Check your GitHub authentication credentials.</p>
    </div>
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
    width: 600px;
  }
</style>
