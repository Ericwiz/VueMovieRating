<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <main class="w-full overflow-x-hidden">
    <RouterView />
  </main>

  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped></style>
