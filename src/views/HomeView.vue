<script setup>
import TheWelcome from "../components/homeComponents/TheWelcome.vue";
import FilmGallary from "../components/homeComponents/FilmGallary.vue";
import TopRated from "../components/homeComponents/TopRated.vue";
</script>

<template>
  <div>
    <KeepAlive>
      <TheWelcome />
    </KeepAlive>
    <FilmGallary />
    <TopRated />
  </div>
</template>
