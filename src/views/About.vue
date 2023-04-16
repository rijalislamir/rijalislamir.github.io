<template>
  <Transition
    appear
    enter-active-class="transition-opacity duration-500 delay-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <div class="text-white mt-16">
      <p class="p-8 pt-20 text-justify">
        My name is Rijal Islami. I'm from Indonesia. I have bachelor in
        Electrical Engineering. I have been learning programming since college
        in 2015, but for web development I just started it in 2020. For work
        experience, I have 2+ years experience in web development. Currently I
        have a full-time job, but if you have a project to be worked on
        together, we can discuss about it.
      </p>

      <ul class="px-8">
        <li><span class="mr-3">&rarr;</span>LinkedIn</li>
        <li><span class="mr-3">&rarr;</span>Email</li>
        <li><span class="mr-3">&rarr;</span>Resume</li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const alert = (text: string) => {
  window.alert(text);
};
</script>
