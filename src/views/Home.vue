<template>
  <div
    class="absolute inset-x-0 h-screen flex flex-col gap-16 justify-center items-center text-white"
  >
    <div class="px-8 text-center">
      <Transition
        appear
        enter-from-class="-translate-y-10 opacity-0"
        enter-active-class="transition-all duration-1000 delay-1000"
        enter-to-class="translate-y-0 opacity-100"
        leave-from-class="translate-y-0"
        leave-active-class="transition-all duration-1000"
        leave-to-class="-translate-y-10"
      >
        <p class="text-4xl" v-if="route.path === '/'">
          Hello! 👋
          <span class="whitespace-nowrap">
            I'm <span class="font-semibold">Rijal</span>
          </span>
        </p>
      </Transition>

      <Transition
        appear
        enter-from-class="-translate-y-10 opacity-0"
        enter-active-class="transition-all duration-1000 delay-900"
        enter-to-class="translate-y-0 opacity-100"
      >
        <p>
          a <span class="font-semibold">web developer</span> who focus on
          <span class="font-semibold whitespace-nowrap">front-end.</span>
        </p>
      </Transition>
    </div>

    <div class="flex flex-col gap-2">
      <Transition
        appear
        v-for="(item, i) in menu"
        :key="i"
        enter-from-class="-translate-y-10 opacity-0"
        :enter-active-class="`transition-all duration-1000 delay-${
          500 + 300 - i * 100
        }`"
        enter-to-class="translate-y-0 opacity-100"
        leave-from-class="translate-y-0"
        leave-active-class="transition-translate duration-1000"
        leave-to-class="-translate-y-10"
      >
        <RouterLink :to="`/${item.path}`">
          <div v-html="item.text"></div>
        </RouterLink>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menu = ref();

watchEffect(() => {
  menu.value = [
    {
      path: "about",
      text: "find <span class='font-bold'>about</span> me",
      show: route.path === "/",
    },
    {
      path: "projects",
      text: "see my <span class='font-bold'>projects</span>",
      show: route.path === "/",
    },
    {
      path: "stacks",
      text: "<span class='font-bold'>stacks</span> I've used",
      show: route.path === "/",
    },
    {
      path: "services",
      text: "offered <span class='font-bold'>services</span>",
      show: route.path === "/",
    },
  ];
});
// const menu = [
//   {
//     path: "about",
//     text: "find <span class='font-bold'>about</span> me",
//   },
//   {
//     path: "projects",
//     text: "see my <span class='font-bold'>projects</span>",
//   },
//   {
//     path: "stacks",
//     text: "<span class='font-bold'>stacks</span> I've used",
//   },
//   {
//     path: "services",
//     text: "offered <span class='font-bold'>services</span>",
//   },
// ];
</script>
