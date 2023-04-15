<template>
  <Navbar />

  <div class="min-h-screen">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
