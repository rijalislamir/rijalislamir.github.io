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
      <p class="p-8 pt-0">These are the services that I can worked on:</p>
    </Transition>

    <div v-for="(service, i) in services" class="overflow-hidden">
      <Transition
        appear
        :enter-active-class="`transition-all duration-500 delay-${
          (Number(services.length) - i - 1) * 100
        }`"
        enter-from-class="-translate-y-full"
        enter-to-class="translate-y-0"
      >
        <div>
          <button
            @click="(e) => openDescription(e, i)"
            class="bg-slate-50 hover:bg-slate-200 text-[#444] cursor-pointer p-[18px] w-full text-left border-0 outline-none duration-200 flex justify-between"
            :class="{
              'bg-slate-300 hover:bg-slate-500 hover:text-white':
                service.isOpen,
            }"
          >
            <span class="pointer-events-none">
              {{ service.name }}
            </span>

            <svg
              data-accordion-icon
              class="pointer-events-none w-6 h-6 shrink-0"
              :class="{ 'rotate-180': service.isOpen }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            class="p-[18px] py-0 bg-white text-black max-h-0 overflow-hidden transition-all duration-200 ease-out"
          >
            <p class="my-4">{{ service.description }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const services = ref([
  {
    isOpen: false,
    name: "Build an Application",
    description:
      "We can discuss the idea you've thought of and we can brainstorm it to create a concept of the application.",
  },
  {
    isOpen: false,
    name: "UI Slicing",
    description:
      "You give a design of the front-end that you want to build. You can just give me an image, but better is using figma.",
  },
  {
    isOpen: false,
    name: "Write a Cypress Test",
    description:
      "The app should be done or can be ran at least. And then I can create unit or end-to-end test using Cypress.",
  },
  {
    isOpen: false,
    name: "Mentoring",
    description:
      "I will mentoring you through you learning journey. The topic that I can give you are basic programming, HTML, CSS, and JavaScript.",
  },
]);

const openDescription = (e: any, i: number) => {
  services.value[i].isOpen = !services.value[i].isOpen;
  const panel = e.srcElement.nextElementSibling;
  panel.style.maxHeight = panel.style.maxHeight
    ? null
    : panel.scrollHeight + "px";
};
</script>
