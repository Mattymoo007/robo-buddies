<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const initTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

useHead({
  script: [{ children: initTheme.toString() }],
});

const toggleDark = () => {
  const currentColor = localStorage.theme;
  const newColor = currentColor === "dark" ? "light" : "dark";
  localStorage.theme = newColor;

  document.documentElement.className = newColor;
};

const logout = async () => {
  await client.auth.signOut();
  navigateTo("/");
};
</script>

<template>
  <div>
    <Title>Nuxt 3 x Supabase</Title>
    <div class="flex items-center md:justify-between justify-center">
      <div class="hidden md:block">
        <button
          label="Source"
          variant="transparent"
          target="_blank"
          to="https://github.com/nuxt-modules/supabase/tree/main/demo"
          icon="i-heroicons-outline-external-link"
        />
        <button
          label="Hosted on Netlify"
          variant="transparent"
          target="_blank"
          to="https://netlify.com"
          icon="i-heroicons-outline-external-link"
        />
      </div>
      <div class="flex items-center">
        <button @click="toggleDark"><Icon name="mdi-abacus" /></button>
        <button v-if="user" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>
