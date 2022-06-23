<script setup>
  import CommitsTab from "@/components/CommitsTab/CommitsTab.vue";
  import CommitsTabLoading from "@/components/CommitsTab/CommitsTabLoading.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <CommitsTab />
    </template>
    <template #fallback>
      <CommitsTabLoading />
    </template>
  </Suspense>
</template>

<style scoped></style>
