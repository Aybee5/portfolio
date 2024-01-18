<template>
  <div class="flex items-center justify-center flex-col w-fit text-center mx-auto gap-1 group my-3 md:my-4">
    <span class="flex items-center justify-center text-primary text-xl md:text-3xl mb-1"><slot /></span>
    <div class="w-1/2 h-0.5 md:h-1 bg-tertiary transition-all rounded-md group-hover:w-full"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
