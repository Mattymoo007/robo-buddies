import { Button } from "flowbite-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FButton", Button);
});
