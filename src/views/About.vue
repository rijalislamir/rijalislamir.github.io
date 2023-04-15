<template>
  <div
    class="absolute inset-x-0 h-screen flex flex-col justify-center items-center text-white"
  >
    <h1>About</h1>
    <p class="px-8 text-justify">
      My name is Rijal Islami. I'm from Indonesia. I have bachelor in Electrical
      Engineering. I have been learning programming since college in 2015, but
      for web development I just started it in 2020. For work experience, I have
      2+ years experience in web development. Currently I have a full-time job,
      but if you have a project to be worked on together, we can discuss about
      it.
    </p>

    <button
      type="button"
      class="bg-blue-600 py-3 px-4 rounded-md outline-none outline-0 focus:ring-4"
      @click="() => alert('Sorry not found')"
    >
      download my resume
    </button>
  </div>
</template>

<script setup lang="ts">
const alert = (text: string) => {
  window.alert(text);
};
</script>
