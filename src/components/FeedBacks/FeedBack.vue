<script setup>
import MovieReview from "./MovieReview.vue";
</script>

<template>
  <div class="bg-[#191517] border-t-2 border-t-pink-800">
    <div class="bg-[#0f1010] px-4 sm:px-8 md:px-16 shadow-lg shadow-black">
      <h1
        class="uppercase text-white text-lg xs:text-2xl md:text-3xl lg:text-4xl py-8 2xl:text-5xl"
      >
        Reviews and recommendations
      </h1>
      <div class="flex justify-start space-x-6 xs:space-x-10 pt-8"></div>
    </div>
    <MovieReview />
  </div>
</template>
