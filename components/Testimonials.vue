<template>
  <div class="bg-tertiary bg-opacity-40 py-1 pb-4 mt-5">
  <div class="flex md:w-4/5 gap-8 mt-8 container flex-col md:flex-row">
    <div class="flex items-center flex-col">
      <UiHeading> Testimonials </UiHeading>
      <p>
        <carousel :items-to-show="1" :autoplay="5000" :pauseAutoplayOnHover="true" :wrapAround="true">
          <slide v-for="(testimony, index) in testimonials" :key="index">
          <div class="text-secondary flex flex-col">
          <span>
            {{ testimony.testimonial }}
          </span>
          <span class="text-primary pt-2">
            {{ testimony.name }}
          </span>
          <span class="text-secondary text-sm">
            {{ testimony.title }}
          </span>
          </div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </p>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
const testimonials = [
  {
    name: "Dolapo Omidire",
    title: "CEO, Estate Intel",
    testimonial:
      "Ibrahim Abdullahi is a very talented and hardworking software engineer. He is one of the best software engineers we've ever had at Estate Intel.",
  },
  // {
  //   name: "Timothy Ayegbede",
  //   title: "Product Designer, Estate Intel",
  //   testimonial:
  //     "Ibrahim is a very talented software engineer. He is one of the best software engineers we've ever had at Estate Intel.",
  // },
  {
    name: "Abdulhakeem Mustapha",
    title: "CTO, Hooli Technologies | Senior Software Engineer, Yellow Card",
    testimonial: `Seeing Ibrahim join our team as an intern and gradually make his way to earn promotions and switch roles was a tremendous  testament to his work ethic and quality.
 While at Hooli, Ibrahim has been put in charge of spearheading new projects and initiatives, maintaining legacy projects, contributing to ongoing projects and troubleshooting bugs and administering patches. In all his roles, Ibrahim has demonstrated quality his ability to not just deliver coincise usable and readable code but also to solve problems`,
  },
  // {
  //   name: "Olaitan Odulaga",
  //   title: "Product Manager, Estate Intel",
  //   testimonial: "",
  // },
];
</script>

<style >
:root {
  --vc-clr-primary: #08203E;
  --vc-clr-secondary: #557C93;
}
</style>
