import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        primary: "#08203E",
        secondary: "#2F4E69",
        tertiary: "#557C93",
      },
    },
  },
  plugins: [],
  content: [],
};
