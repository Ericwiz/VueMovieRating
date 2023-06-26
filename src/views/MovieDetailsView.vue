<template>
  <article class="pt-32 bg-[#2b2b31] h-full">
    <section
      v-if="movie"
      class="flex flex-col md:flex-row md:justify-between space-x-6 pb-24 px-4 sm:px-8 md:px-16"
    >
      <div class="w-full md:w-[60%]">
        <img
          :src="movie.Poster"
          alt="poster"
          class="rounded-sm w-full h-full md:w-96 md:h-96 xl:w-full xl:h-[70%]"
        />
      </div>
      <div class="flex flex-col w-full space-y-2 2xl:space-y-4">
        <h1
          class="text-lg sm:text-2xl -ml-6 md:-ml-0 pt-2 md:pt-0 md:text-3xl 2xl:text-4xl text-white"
        >
          {{ movie.Title }}
        </h1>
        <p class="font-normal -ml-6 md:-ml-0 2xl:text-2xl pt-5">
          <span class="text-lg xl:text-2xl text-white pr-4">Genre:</span>
          <span class="text-pink-600 text-small">{{ movie.Genre }}</span>
        </p>

        <p class="font-normal -ml-6 md:-ml-0 xl:text-2xl">
          <span class="text-lg xl:text-2xl text-white pr-4">Released:</span>
          <span class="text-white text-small">{{ movie.Released }}</span>
        </p>

        <p class="font-normal -ml-6 md:-ml-0 2xl:text-2xl">
          <span class="text-lg xl:text-2xl text-white pr-4">Runtime:</span>
          <span class="text-white text-small">{{ movie.Runtime }}</span>
        </p>

        <p class="font-normal -ml-6 md:-ml-0 2xl:text-2xl">
          <span class="text-lg xl:text-2xl text-white pr-4">Country:</span>
          <span class="text-pink-600 uppercase text-small">{{ movie.Country }}</span>
        </p>
        <div class="flex -ml-6 md:-ml-0 space-x-5 pb-5">
          <div class="flex space-x-2">
            <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8" />
            <span class="text-white font-bold 2xl:text-2xl">{{ movie.imdbRating }}</span>
          </div>
          <div class="flex space-x-2">
            <span class="text-white px-3 xl:text-lg py-1 border border-gray-500 rounded-md">{{
              movie.Type
            }}</span>
          </div>
        </div>
        <p class="text-[0.8rem] lg:text-[1rem] hidden lg:block text-gray-300 2xl:text-2xl">
          {{ movie.Plot }}
        </p>
      </div>
    </section>

    <section>
      <FeedBack />
    </section>
  </article>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import FeedBack from "../components/FeedBacks/FeedBack.vue";
const apikey = import.meta.env.VITE_API_KEY;
const movie = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

onMounted(() => {
  axios
    .get("https://www.omdbapi.com/", {
      params: {
        apikey,
        i: props.id,
        plot: "Short"
      }
    })
    .then((response) => {
      movie.value = response.data;
    })
    .catch((err) => console.log(err));
});
</script>
