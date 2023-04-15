<template>
  <div
    class="absolute inset-x-0 h-screen flex flex-col justify-center items-center text-white"
  >
    <h1>Services</h1>
    <ul class="list-disc">
      <li v-for="(service, i) in services" :key="`service-${i}`">
        {{ service }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const services = [
  "Build an app",
  "UI Slicing",
  "Write a unit/e2e cypress test",
  "Mentoring",
];
</script>
