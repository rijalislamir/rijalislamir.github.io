<template>
  <div class="text-white mt-36 overflow-hidden mx-8 mb-8">
    <div class="pb-8">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="font-bold py-2">DEMO</td>
            <td class="py-2 flex">
              <a href="https://portfolio-laundry.netlify.app/" target="_blank">
                <p class="group transition cursor-pointer">
                  &nearr; Open
                  <span
                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                  ></span>
                </p>
              </a>
            </td>
          </tr>
          <tr>
            <td class="font-bold py-2">YEAR</td>
            <td class="py-2">2023</td>
          </tr>
          <tr>
            <td class="font-bold py-2 align-top">STACKS</td>
            <td class="py-2">
              <div class="flex flex-col">
                <span>Tailwind</span>
                <span>Vue 3</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="pb-8">
      This application is about Landing Page (static site) Project of a Laundry
      service.
    </p>

    <p class="pb-8">
      I built the app using Vue 3 and there is no backend integration. For CSS
      styling, I used tailwind.
    </p>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Desktop</h1>
      <img :src="LaundryDesktop" alt="laundry-desktop" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Mobile</h1>
      <img :src="LaundryMobile" alt="laundry-mobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LaundryDesktop from "../assets/laundry-desktop.png";
import LaundryMobile from "../assets/laundry-mobile.png";
</script>
