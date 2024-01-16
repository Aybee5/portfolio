<template>
  <div class="hero text-white flex items-center">
    <div class="container md:w-4/5">
      <!-- <img
        src="https://avatars.githubusercontent.com/u/29686102?v=4"
        alt="Ibrahim Abdullahi Aliyu"
        class="rounded-full w-32 h-32 md:w-64 md:h-64 mx-auto"
      /> -->
      <div class="text-green-400 md:text-lg mb-2">
        <Icon name="svg-spinners:wifi" />
        I am currently available for hire
      </div>
      <span class="text-3xl md:text-6xl"> Hi 👋🏾, </span>
      <h1 class="py-2">
        <span class="text-4xl">I'm</span>
        <span class="text-4xl md:text-8xl font-bold">Ibrahim Abdullahi Aliyu</span>
      </h1>
      <div class="flex flex-col items-end">
        <span class="text-3xl md:text-6xl font-bold">Software Engineer </span>
        <i class="text-xl md:text-3xl"> Based in Kano, Nigeria</i>
      </div>

      <ul class="md:w-4/5 mt-4 text-justify text-white text-sm md:text-base space-y-1">
        <li class="opacity-80 hover:opacity-100 transition-all w-max">
          <a
            href="https://certificates.dev/c/9b19523d-03b3-4b84-bf21-328526fe42fa"
            class="text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certified Vue.js Developer
            <Icon name="heroicons-outline:external-link" />
          </a>
        </li>
        <li class="opacity-75 hover:opacity-100 transition-all w-max">
          5 years experience as a Software Engineer
        </li>
        <li class="opacity-75 hover:opacity-100 transition-all w-max">
          Most Used Tech: Javascript, Typescript, Vue, Nuxt and Ubuntu
        </li>
        <li class="opacity-75 hover:opacity-100 transition-all w-max">
          Loves building great solutions using Technology
        </li>
        <li class="opacity-75 hover:opacity-100 transition-all w-max">
          Graduate of Computer Science with 4.46/5.00 GCPA
        </li>
        <li class="opacity-75 hover:opacity-100 transition-all w-max">
          Open Source Enthusiast
        </li>
        <li class="flex gap-3">
          <a
            href="mailto:ibrahimabdul050@gmail.com?subject=Job Opportunity&body=Hi Ibrahim,"
            target="_blank"
            class="text-green-400 opacity-80 hover:opacity-100 transition-all w-max"
          >
            Contact Me
          </a>
          |
          <a
            href="https://docs.google.com/document/d/16YKdLbOiIF89sVYVPnr2BYmiiC7u537mf7rGsMgI4Vg/edit?usp=sharing"
            target="_blank"
            class="text-green-400 opacity-80 hover:opacity-100 transition-all w-max"
          >
            Complete Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background: rgb(8, 32, 62);
  background: linear-gradient(
    160deg,
    rgba(8, 32, 62, 1) 0%,
    rgba(8, 32, 62, 1) 70%,
    rgba(85, 124, 147, 1) 100%
  );
  height: 100vh;
}
</style>
