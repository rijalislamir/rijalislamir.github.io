<template>
  <div class="min-h-screen">
    <RouterView v-slot="{ Component, route }">
      <Navbar />
      <Transition
        mode="out-in"
        enter-active-class="transition-opacity duration-1000"
        leave-active-class="transition-opacity duration-1000"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
