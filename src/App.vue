<script setup>
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <main class="w-full overflow-x-hidden">
    <RouterView />
  </main>
</template>

<style scoped></style>
