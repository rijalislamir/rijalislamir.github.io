<template>
  <div class="text-white mt-36 overflow-hidden">
    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (Number(projects.length) - i - 1) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      v-for="(project, i) in projects"
    >
      <div
        class="m-8 mt-0 p-4 bg-gradient-to-b from-gray-900 to-black rounded-xl text-justify border-gray-400 border-2"
      >
        <div class="flex flex-col gap-2" :key="`project-${i}`">
          <div class="flex gap-4">
            <h1 class="font-semibold">{{ String(i + 1).padStart(2, "0") }}</h1>
            <h1 class="font-bold">{{ project.title }}</h1>
          </div>
          <h1 class="font-bold">
            <a :href="project.url" target="_blank">Open</a>
          </h1>

          <div class="flex gap-2">
            <div v-for="(stack, j) in project.stacks" :key="`stack-${j}`">
              {{ stack }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Social Chat",
    url: "https://social-chat.rijalislami.my.id",
    stacks: ["express", "socket.io", "vue"],
  },
  {
    title: "Laundry Landing Page",
    url: "https://portfolio-laundry.netlify.app",
    stacks: ["express", "socket.io", "vue"],
  },
  {
    title: "Todo List",
    url: "https://portfolio-todo-list.netlify.app",
    stacks: ["express", "socket.io", "vue"],
  },
  {
    title: "Pauli Test",
    url: "https://portfolio-pauli-test.netlify.app/",
    stacks: ["react", "tailwind"],
  },
];
</script>
