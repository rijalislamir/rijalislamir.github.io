<template>
  <header
    class="fixed inset-x-0 top-6 bg-black text-white overflow-hidden z-50"
  >
    <nav class="px-8">
      <Transition
        appear
        enter-from-class="-translate-y-full"
        enter-active-class="transition-translate duration-500"
        enter-to-class="translate-y-0"
        leave-from-class="translate-y-0"
        leave-active-class="transition-translate duration-500"
        leave-to-class="-translate-y-full"
      >
        <div class="flex justify-between">
          <span
            @click="() => router.push('/')"
            class="cursor-pointer font-bold"
          >
            RIJAL
          </span>

          <div class="flex gap-4">
            <span v-for="(item, i) in rightMenu" :key="i">
              {{ item.text }}
            </span>
          </div>
        </div>
      </Transition>
    </nav>
    <Transition
      appear
      enter-from-class="-translate-y-full border-b-0"
      enter-active-class="transition-all duration-500"
      enter-to-class="translate-y-0"
    >
      <div
        v-if="name !== 'Home'"
        class="overflow-hidden"
        :class="{ 'border-b-2': name !== 'Home' }"
      >
        <Transition
          appear
          enter-from-class="translate-x-full"
          enter-active-class="transition-translate duration-500 delay-500"
          enter-to-class="translate-x-0"
        >
          <h1
            v-if="name !== 'Home'"
            class="px-8 py-4 font-bold text-4xl pb-2 overflow-hidden"
          >
            {{ name }}
          </h1>
        </Transition>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps(["name"]);
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
