// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["~/plugins/flowbite.ts"],
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "nuxt-icon"],
});
