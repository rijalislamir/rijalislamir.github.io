<template>
  <header class="fixed inset-x-8 top-6 text-white overflow-hidden z-50">
    <Transition
      appear
      enter-from-class="-translate-y-10"
      enter-active-class="transition-translate duration-1000"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
      leave-active-class="transition-translate duration-1000"
      leave-to-class="-translate-y-10"
    >
      <div class="flex justify-between">
        <span @click="() => router.push('/')" class="cursor-pointer font-bold">
          RIJAL
        </span>

        <div class="flex gap-4">
          <span v-for="(item, i) in rightMenu" :key="i">
            {{ item.text }}
          </span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const rightMenu = ref();

watchEffect(() => {
  rightMenu.value = [
    {
      text: "EN/ID",
      show: route.path === "/",
    },
    {
      text: "DR/LG",
      show: route.path === "/",
    },
    {
      text: "MENU",
      show: true,
    },
  ];
});
</script>
