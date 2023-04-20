<template>
  <div class="text-white mt-36 overflow-hidden mx-8 mb-8">
    <div class="pb-8">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="font-bold py-2">DEMO</td>
            <td class="py-2 flex">
              <a
                href="https://portfolio-pauli-test.netlify.app/"
                target="_blank"
              >
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
            <td class="py-2">2022</td>
          </tr>
          <tr>
            <td class="font-bold py-2 align-top">STACKS</td>
            <td class="py-2">
              <div class="flex flex-col">
                <span>React</span>
                <span>Tailwind</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="pb-8">
      Pauli test is a test to measure the speed, accuracy, consistency, and
      endurance of someone when computes a simple summation mathematical problem
      then interprets it into a measure of the personality of a person
      undergoing a test. Quoted from this
      <a
        href="https://osf.io/ty326/download#:~:text=This%20test%20is%20now%20called,a%20person%20undergoing%20a%20test."
        class="underline"
      >
        document</a
      >.
    </p>

    <p class="pb-8">
      I used to face this test when I was applying for a job. So this app goal
      is to help me to practice it.
    </p>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Home</h1>
      <img :src="PauliTestHome" alt="pauli-test-home" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Main</h1>
      <img :src="PauliTestMain" alt="pauli-test-main" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Result</h1>
      <img :src="PauliTestResult" alt="pauli-test-result" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PauliTestHome from "../assets/pauli-test-home.png";
import PauliTestMain from "../assets/pauli-test-main.png";
import PauliTestResult from "../assets/pauli-test-result.png";
</script>
