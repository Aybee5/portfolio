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

      <div class="md:w-4/5 mt-4 text-justify text-white text-sm md:text-base space-y-1 opacity-75 hover:opacity-90 transition-all">
        <p>
          I am passionate about creating interactive, user-friendly, and accessible
          interfaces that offer a top-notch user experience. Driven by ideas that have a
          positive impact, I enjoy the process of turning these ideas into successful
          products. My commitment to excellence is reflected in the range of products I
          have contributed.
        </p>
        <p>
          With 5 years of experience and a degree in Computer Science, I have developed a
          rich blend of soft and technical skills. These skills have greatly refined my
          approach to building solutions. I view every project, including open source
          contributions, as an opportunity to make a meaningful impact and learn new
          skills. I believe in diverse methods of problem-solving and always choose the
          most suitable tools for each project.
        </p>
        <p>
          Outside coding, I enjoy reading, gazzing at the stars, playing chess and watching sci-fi movies.
        </p>
      </div>
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
