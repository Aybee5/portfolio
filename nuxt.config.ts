// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-clarity-analytics"],
  app: {
    head: {
      title: "Ibrahim Abdullahi Aliyu - Software Engineer in Nigeria",
      meta: [
        {
          name: "description",
          content:
            "Ibrahim Abdullahi Aliyu is a Certified Vue.js Software Engineer based in Kano, Nigeria. He is passionate about building products that solve real-world problems.",
        },
        {
          name: "keywords",
          content:
            "Ibrahim Abdullahi Aliyu, Ibrahim Abdullahi, Ibrahim, Software Engineer, Software Developer, Web Developer, Frontend Developer, Backend Developer, Fullstack Developer, Kano, Nigeria",
        },
        {
          property: "og:image",
          content: "/logo.png",
        },
        {
          property: "og:description",
          content:
            "Ibrahim Abdullahi Aliyu is a Certified Vue.js Software Engineer based in Kano, Nigeria. He is passionate about building products that solve real-world problems.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Ibrahim Abdullahi Aliyu",
        },
        {
          name: "twitter:description",
          content:
            "Ibrahim Abdullahi Aliyu is a Certified Vue.js Software Engineer based in Kano, Nigeria. He is passionate about building products that solve real-world problems.",
        },
        {
          name: "twitter:image",
          content: "/logo.png",
        },
        {
          name: "twitter:image:alt",
          content: "Ibrahim Abdullahi Aliyu",
        },
        {
          name: "twitter:site",
          content: "@ibrahimabdul050",
        },
        {
          name: "twitter:creator",
          content: "@ibrahimabdul050",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://ibrahimabdul050.github.io/",
        },
        {
          rel: "icon",
          href: "/logo.png",
        },
      ],
    },
  },
});
