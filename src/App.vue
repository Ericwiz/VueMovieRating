<script setup>
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <header>
    <AppNavbar />
  </header>
  <main class="w-full overflow-x-hidden">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
