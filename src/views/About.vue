<template>
  <div class="text-white mt-36 overflow-hidden">
    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (info.length + 3) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <p class="p-8 pt-0">
        Hello! My name is Rijal Islami. I'm from Indonesia. I studied Electrical
        Engineering and Programming in college since 2015.
      </p>
    </Transition>

    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (info.length + 2) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <p class="p-8 pt-0">
        I have 2+ years work experience in web development. I have worked on 2
        companies (including current company).
      </p>
    </Transition>

    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (info.length + 1) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <p class="p-8 pt-0">
        Now, I have a remote full-time job, but if you have a project to be
        worked on together, we can discuss about it.
      </p>
    </Transition>

    <Transition
      appear
      :enter-active-class="`transition-all duration-500 delay-${
        (info.length + 0) * 100
      }`"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <p class="p-8 pt-0">You can contact me through below:</p>
    </Transition>

    <Transition
      appear
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div class="px-8 flex gap-4 justify-center">
        <a
          class="border-gray-400 border-2 rounded-full p-2 hover:bg-white hover:text-black hover:border-white"
          target="_blank"
          href="https://www.linkedin.com/in/rijalislami/"
        >
          <svg
            class="fill-current w-4"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>

        <a
          class="border-gray-400 border-2 rounded-full p-2 hover:bg-white hover:text-black hover:border-white"
          target="_blank"
          href="mailto:rijalislamir@gmail.com"
        >
          <svg
            class="fill-current w-4"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Gmail</title>
            <path
              d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            />
          </svg>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const info = [
  "https://www.linkedin.com/rijalislami",
  "mailto:rijalislamir@gmail.com",
];
</script>
