<script setup lang="ts">
import { ref } from "vue";
const enabledCachedViews = ref(true);
</script>

<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive v-if="enabledCachedViews">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component :is="Component" v-else :key="route.fullPath" />
    </template>
  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #9f1a8faa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
