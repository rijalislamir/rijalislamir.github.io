<template>
  <div
    v-if="!route.params?.title"
    class="text-white mt-36 overflow-hidden mx-8 mb-8"
  >
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
        @click="() => router.push(`projects/${project.param}`)"
        class="py-4 border-b-2 cursor-pointer group"
        :class="{
          'border-t-2': i === 0,
        }"
      >
        <div class="flex flex-col gap-2" :key="`project-${i}`">
          <div class="flex gap-4">
            <h1>
              {{ String(i + 1).padStart(2, "0") }}
            </h1>

            <span
              class="overflow-hidden -translate-x-full w-0 transition-all duration-500 group-hover:translate-x-0 group-hover:w-4"
            >
              &rarr;
            </span>

            <h1
              class="font-bold transtion-all duration-500 -translate-x-4 group-hover:translate-x-0"
            >
              {{ project.title }}
            </h1>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <SocialChat v-else-if="route.params.title === 'social-chat'" />
  <Laundry v-else-if="route.params.title === 'laundry'" />
  <TodoList v-else-if="route.params.title === 'todo-list'" />
  <PauliTest v-else-if="route.params.title === 'pauli-test'" />

  <div v-else class="text-white mt-36 overflow-hidden mx-8 mb-8 text-center">
    Not Found
  </div>

  <div
    v-if="route.params.title"
    class="text-white mx-8 py-4 border-t-2 flex justify-between"
  >
    <div
      class="cursor-pointer group transition"
      @click="
        () => router.push(`/projects/${nextProject(route.params.title)?.param}`)
      "
    >
      <span v-if="nextProject(route.params.title)?.param === projects[0].param">
        Back to Start
      </span>
      <span v-else>Next Project</span>
      <span
        class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
      ></span>
    </div>
    <div class="font-bold">{{ nextProject(route.params.title)?.title }}</div>
  </div>
</template>

<script setup lang="ts">
// <div
//     v-if="route.params.title"
//     class="text-white mx-8 py-4 border-t-2 flex justify-between"
//   >
//     <!-- <div
//       class="cursor-pointer"
//       @click="
//         () => router.push(`/projects/${nextProject(route.params.title)?.param}`)
//       "
//     > -->
//     <!-- <RouterLink :to="`/projects/${nextProject(route.params.title)?.param}`"> -->
//     <div class="group transition">
//       <span v-if="nextProject(route.params.title)?.param === projects[0].param">
//         Back to Start
//       </span>
//       <span v-else>Next Project</span>
//       <span
//         class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
//       ></span>
//     </div>
//     <!-- </RouterLink> -->
//     <!-- </div> -->
//     <div>{{ nextProject(route.params.title)?.title }}</div>
//   </div>
import { useRoute, useRouter } from "vue-router";
import SocialChat from "../components/SocialChat.vue";
import Laundry from "../components/Laundry.vue";
import TodoList from "../components/TodoList.vue";
import PauliTest from "../components/PauliTest.vue";

const route = useRoute();
const router = useRouter();
const projects = [
  {
    param: "social-chat",
    title: "Social Chat",
  },
  {
    param: "laundry",
    title: "Laundry",
  },
  {
    param: "todo-list",
    title: "Todo List",
  },
  {
    param: "pauli-test",
    title: "Pauli Test",
  },
];

const nextProject = (search: string | string[]) => {
  if (typeof search !== "string") return;
  const index = projects.findIndex(({ param }) => param === search) + 1;

  if (index === -1 || index === projects.length) return projects[0];
  return projects[index];
};
</script>
