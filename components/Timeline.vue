<template>
  <div class="container md:w-4/5 my-6">
    <UiHeading> Career Timeline </UiHeading>
    <ol class="relative border-s border-tertiary flex flex-col gap-10 pb-6">
      <li v-for="timeline in timelines" class="ms-4">
        <Icon
          :name="
            timeline.current
              ? 'carbon:circle-filled'
              : 'material-symbols:check-circle-outline'
          "
          class="absolute h-6 w-6 text-primary bg-gray-200 rounded-full -start-3"
        />
        <div class="flex flex-col md:flex-row mb-2 justify-between">
          <h3 class="text-lg md:text-xl font-medium text-primary mb-2">
            {{ timeline.role }} at {{ timeline.company }}
          </h3>
          <time class="text-secondary italic">{{ timeline.date }}</time>
        </div>
        <ul class="list-disc ml-6">
          <li
            class="text-secondary"
            v-for="summary in timeline.summaries"
            v-html="summary"
          />
        </ul>
      </li>
    </ol>
    <a
      class="py-2 px-4 rounded-md hover:bg-opacity-80 bg-tertiary text-white font-medium -ml-2 inline-flex"
      href="https://docs.google.com/document/d/16YKdLbOiIF89sVYVPnr2BYmiiC7u537mf7rGsMgI4Vg/edit?usp=sharing"
      target="_blank"
      >Complete Resume</a
    >
  </div>
</template>

<script setup lang="ts">
const timelines: {
  role: string;
  company: string;
  date: string;
  summaries: Array<string>;
  current?: boolean;
}[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Estate Intel",
    date: "January, 2022 - Present",
    summaries: [
      `Enhance and consolidate two existing Nuxt 2 frontend codebases by actively upgrading them to Nuxt 3, 
      ensuring a seamless integration and enhanced performance metrics.`,
      `Lead the frontend team to build two innovative products, <a href='https://vesper.africa/' target='_blank' class='text-blue-700'>Vesper</a> and
       <a href='https://build.estateintel.com/' target='_blank' class='text-blue-700'>Build</a>`,
      `Implement robust analytics to gain insights into user behavior, enabling data-driven enhancements to the user experience.`,
      `Collaborated with a team of engineers to successfully implement over 70 fixes and improvements in the company's app and 
      website within three months of onboarding, focusing on SEO, performance, and usability enhancements.`,
    ],
    current: true,
  },
  {
    role: "Software Developer",
    company: "Hooli Technologies Nigeria Limited",
    date: "September, 2019 - January, 2022",
    summaries: [
      `Exteneded SaaS PWA functionality to enable working offline which in turn improved software security and UX.`,
      `Engaged in the re-engineering of an existing system, successfully increasing feature delivery by 27%.`,
      `Implement test-driven development to ensure code quality and reduce bugs.`,
      `Authored and maintained technical documentation, ensuring its timely update in alignment with feature enhancements.`,
    ],
  },
  {
    role: "Intern",
    company: "Hooli Consults",
    date: "March, 2019 - September, 2019",
    summaries: [
      `Delivered comprehensive customer support, effectively addressing client inquiries and resolving issues, while also conducting in-depth 
      training sessions for new clients, ensuring they are fully acquainted with the company's products and services.`,
      `Collaborated with other developers and product managers to implement a REST-API for an application `,
      `Contributed dozens of features to <a href="https://piper.com.ng" target="_blank" class='text-blue-700'>Pipersoft</a> an offline-first inventory management software, spearheaded research to 
      capture customer unique use cases and implement new features.`,
    ],
  },
];
</script>

<style scoped></style>
