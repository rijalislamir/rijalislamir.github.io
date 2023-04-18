<template>
  <RouterView v-slot="{ Component, route }">
    <Navbar :name="generateProjectTitle(route.params?.title) || route.name" />
    <component :is="Component" :key="route.path" />
  </RouterView>
</template>

<script setup lang="ts">
import { generateProjectTitle } from "./utils";
import Navbar from "./components/Navbar.vue";
</script>
