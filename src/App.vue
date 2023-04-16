<template>
  <RouterView v-slot="{ Component, route }">
    <Navbar :name="route.name" />
    <component :is="Component" :key="route.path" />
  </RouterView>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
