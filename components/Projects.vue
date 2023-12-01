<template>
  <div class="md:w-4/5 container">
    <UiHeading>Some Projects I worked on</UiHeading>
    <div class="flex flex-wrap gap-5">
      <div
        class="border border-solid border-tertiary p-4 rounded-md flex-1 min-w-[340px] hover:shadow-lg transition-all duration-300 ease-in-out"
        v-for="project in projects"
      >
        <div class="flex gap-2 mb-1 items-center">
          <p class="text-primary">{{ project.title }}</p>
          <a :href="project.link" v-if="project.link" target="_blank" rel="noopener">
            <Icon name="icon-park-outline:share" class="text-blue-700" />
          </a>
          <span class="rounded-lg py-0.5 px-1.5 text-primary bg-tertiary bg-opacity-40" v-if="project.oss">OSS Contribution</span>
        </div>
        <p class="text-tertiary italic text-sm mb-2">
          {{ project.summary }}
        </p>
        <p class="text-secondary mb-3">
          {{ project.description }}
        </p>
        <hr />
        <div class="flex justify-evenly mt-3 flex-wrap gap-2">
          <div v-for="icon in project.icons" class="flex flex-col items-center">
            <Icon :name="technologies[icon].icon" class="h-7 w-7" />
            <span class="text-secondary">
              {{ technologies[icon].name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <UiHeading>Other Technologies I frequently used</UiHeading>
    <div class="flex flex-wrap gap-5 items-center justify-center">
      <div v-for="technology in otherTechnologies">
        <div class="flex justify-evenly mt-3 flex-wrap gap-2">
          <div class="flex flex-col items-center">
            <Icon :name="technology.icon" class="h-7 w-7" />
            <span class="text-secondary">
              {{ technology.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects: {
  title: string;
  link: string;
  summary: string;
  description: string;
  icons: (keyof typeof technologies)[];
  oss?: boolean;
}[] = [
  {
    title: "Estate Intel",
    link: "https://estateintel.com",
    summary: "Real estate data and research platform",
    description: `Developed and managed features for the platform, improving user experience`,
    icons: ["nuxt", "tailwind", "typeScript", "sass", "algolia", "figma"],
  },
  {
    title: "Vesper",
    link: "https://vesper.africa",
    summary: "Robo-intelligent advisor for real estate valuation",
    description: `Developed and managed a robo advisor for real estate valuation, investment and management`,
    icons: ["nuxt", "tailwind", "typeScript", "sass"],
  },
  {
    title: "Lissafi",
    link: "https://app.lissafi.com",
    summary: "Accounting software for small & medium businesses",
    description: `Building an accounting software for small and medium scale businesses, including accessibility features.`,
    icons: ["couchdb", "vue", "cypress", "sass", "javaScript"],
  },
  {
    title: "Check Chess",
    link: "https://check-chess.netlify.app/",
    summary: "Check if a chess board is in checkmate or stalemate",
    description:
      "A fun project to check if a chess board is in checkmate or stalemate.",
    icons: ["typeScript", "nuxt", "tailwind"],
  },
  {
    title: "JSON { BIN } IT!",
    link: "https://github.com/jsonbinit/jsonbinit/",
    summary: "A new way to store JSON on the fly",
    description:
      "Adds dark theme to the app and makes it possible for users to toggle between light and dark theme.",
    icons: ["nuxt", "sass", "html"],
    oss: true,
  },
  {
    title: "Academico",
    link: "https://github.com/academico-sis/academico/",
    summary: "Lavarel-based school management platform for small and medium institutions",
    description:
      "Using AJAX request, makes it possible for instructor to delete contacts on students.",
    icons: ["vue", "laravel", "php", "html"],
    oss: true,
  },
];

const technologies = {
  nuxt: {
    name: "Nuxt",
    icon: "logos:nuxt-icon",
  },
  vue: {
    name: "Vue",
    icon: "logos:vue",
  },
  tailwind: {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  laravel: {
    name: "Laravel",
    icon: "logos:laravel",
  },
  php: {
    name: "PHP",
    icon: "logos:php",
  },
  javaScript: {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  typeScript: {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  python: {
    name: "Python",
    icon: "logos:python",
  },
  posgres: {
    name: "MySQL",
    icon: "skill-icons:postgresql-light",
  },
  mongoDB: {
    name: "MongoDB",
    icon: "skill-icons:mongodb",
  },
  "fast-api": {
    name: "FastAPI",
    icon: "skill-icons:fastapi",
  },
  figma: {
    name: "Figma",
    icon: "skill-icons:figma-light",
  },
  linux: {
    name: "Linux",
    icon: "logos:linux-tux",
  },
  supabase: {
    name: "Supabase",
    icon: "logos:supabase-icon",
  },
  sass: {
    name: "Sass",
    icon: "logos:sass",
  },
  couchdb: {
    name: "CouchDB",
    icon: "devicon:couchdb",
  },
  cypress: {
    name: "Cypress",
    icon: "logos:cypress-icon",
  },
  algolia: {
    name: "Algolia",
    icon: "logos:algolia",
  },
  html: {
    name: "HTML",
    icon: "logos:html-5",
  },
  git: {
    name: "Git",
    icon: "logos:git-icon",
  },
};
// the rest of the technologies that are not used in the projects
const otherTechnologies = computed(() => {
  const usedTechnologies = projects.flatMap((project) => project.icons);
  return Object.keys(technologies)
    .filter((technology) => !usedTechnologies.includes(technology))
    .map((technology) => technologies[technology]);
});
</script>

<style scoped>

</style>
