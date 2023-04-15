<template>
  <div
    class="absolute inset-x-0 h-screen flex flex-col gap-16 justify-center items-center text-white"
  >
    <div class="px-8 text-center">
      <Transition
        appear
        enter-active-class="transition-all duration-1000 delay-1000"
        enter-from-class="-translate-y-10 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
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
        enter-active-class="transition-all duration-1000 delay-900"
        enter-from-class="-translate-y-10 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <p>
          a <span class="font-semibold">web developer</span> who focus on
          <span class="font-semibold whitespace-nowrap">front-end.</span>
        </p>
      </Transition>
    </div>

    <ul class="flex flex-col gap-2 list-disc">
      <Transition
        appear
        v-for="(item, i) in menu"
        :key="i"
        :enter-active-class="`transition-all duration-1000 delay-${
          500 + 300 - i * 100
        }`"
        enter-from-class="-translate-y-10 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <RouterLink :to="`/${item.path}`" class="mr-auto">
          <li class="group transition">
            <p v-html="item.text"></p>
            <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
            ></span>
          </li>
        </RouterLink>
      </Transition>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const menu = [
  {
    path: "about",
    text: "find <span class='font-bold'>about</span> me",
  },
  {
    path: "projects",
    text: "see my <span class='font-bold'>projects</span>",
  },
  {
    path: "stacks",
    text: "<span class='font-bold'>stacks</span> I've used",
  },
  {
    path: "services",
    text: "offered <span class='font-bold'>services</span>",
  },
];
</script>
