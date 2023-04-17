<template>
  <div class="text-white mt-36">
    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (services.length + 0) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <p class="p-8 pt-0">This is the services that I can worked on:</p>
    </Transition>

    <div class="overflow-hidden">
      <div v-for="(service, i) in services">
        <Transition
          appear
          :enter-active-class="`transition-all duration-500 delay-${
            (Number(services.length) - i - 1) * 100
          }`"
          enter-from-class="opacity-0 -translate-y-full"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div
            class="m-8 mb-6 mt-0 p-4 bg-gradient-to-b from-gray-900 to-black rounded-xl border-gray-400 border-2"
          >
            {{ service.name }}
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  { name: "Build an Application" },
  { name: "UI Slicing" },
  { name: "Write a Cypress Test" },
  { name: "Mentoring" },
];
</script>
