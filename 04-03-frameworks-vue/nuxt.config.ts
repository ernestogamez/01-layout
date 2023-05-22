// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Para añadir scss
  css: ["~/assets/scss/main.scss"],
  // Hay que registrar aquí la librería Pinia para que la detecte la aplicación
  modules: ["@pinia/nuxt"],
});
