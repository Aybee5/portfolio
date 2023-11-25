<template>
  <div class="bg-tertiary bg-opacity-40 py-4 mt-5">
  <div class="md:w-4/5 container ">
    <UiHeading>Let's Connect</UiHeading>
    <div class="flex gap-3 mx-auto items-center justify-center">
      <a :href="social.link" target="_blank" rel="noopener" v-for="social in socials" class="flex items-center gap-2 flex-col">
        <Icon :name="social.icon" class="h-7 w-7" />
        <span class="text-secondary">{{ social.name }}</span>
      </a>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const socials = [
  {
    name: "Email",
    icon: "logos:google-gmail",
    link: "mailto:ibrahimabdul050@gmail.com",
  },
  {
    name: "Twitter",
    icon: "logos:twitter",
    link: "https://twitter.com/aybee5_",
  },
  {
    name: "LinkedIn",
    icon: "logos:linkedin-icon",
    link: "https://www.linkedin.com/in/ibrahim-abdullahi-aliyu/",
  },
  {
    name: "Github",
    icon: "logos:github-icon",
    link: "https://github.com/aybee5/",
  },
];
</script>

<style scoped></style>
