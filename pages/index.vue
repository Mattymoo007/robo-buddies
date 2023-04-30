<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseAuthClient();
watchEffect(() => {
  if (user.value) navigateTo("/buddies");
});
</script>

<template>
  <Account v-if="user" />
  <Auth v-else />
</template>
