<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";

import SearchBar from "./SearchBar.vue";

import TheFilter from "./TheFilter.vue";

import TheSorting from "./TheSorting.vue";

import { Icon } from "@iconify/vue";

import useMovie from "../../composables/useMovie";

const { fetchMovies } = useMovie();

const page = ref(1); // Page number for pagination

const year = ref(""); // Year value for movies search

const title = ref("love"); // Title value for movies search

const drama = ref(false); // genre checkbox value for drama

const adventure = ref(false); // genre checkbox value for adventure

const action = ref(false); // genre checkbox value for adventure

const romance = ref(false); // genre checkbox value for romance

const love = ref(false); // genre checkbox value for love

const comedy = ref(false); // genre checkbox value for comedy

const sortValue = ref(""); // Sorting value for movies

let triggerWatch = ref(0); // Trigger value for watch function

const movies = ref(null);  // Array to hold all movies return by the api

let originalMovies = [];  // Stores the original array of movies fetched from the API

function getMovies() {
  return fetchMovies(title.value, year.value, page.value).then((res) => {
    originalMovies = res.map((movies) => movies.data); // Assigns the fetched movies to originalMovies
    movies.value = originalMovies; // Updates the movies array with the originalMovies
    return movies;
  });
}

// Perform initial movie fetch on component mount
onMounted(() => {
  getMovies();
});

// Re-fetch movies when relevant dependencies change, e.g, the search input.
watchEffect( () => {
  getMovies();
  sortValue.value = "";
  setTimeout(() => {
    triggerWatch.value += 1; // use this value/variable to trigger the watch 2s after movies search, to keep the sorting and filter as it were before search.
  }, 1000);
});

// Perform movie search (defualt search)
function search() {
  getMovies();
  setTimeout(() => {
    triggerWatch.value += 1; // use this value/variable to trigger the watch 2s after movies search, to keep the sorting and filter as it were before search.
  }, 2000);
  watch([drama, adventure, comedy, love, action, romance, sortValue, triggerWatch], () => {
    filterMovies();
    sortMovies();
  });
}

// Watch for changes in genre and sort value to filter and sort movies
watch([drama, adventure, comedy, love, action, romance, sortValue, triggerWatch], () => {
  filterMovies();
  sortMovies();
});

// filter movies by genre
function filterMovies() {
  movies.value = originalMovies.filter((movie) => {
    const movieGenres = movie.Genre.split(",").map((genre) => genre.trim());
    const selectedGenres = [];
    if (drama.value) {
      selectedGenres.push("Drama");
    }
    if (adventure.value) {
      selectedGenres.push("Adventure");
    }
    if (action.value) {
      selectedGenres.push("Action");
    }
    if (comedy.value) {
      selectedGenres.push("Comedy");
    }
    if (love.value) {
      selectedGenres.push("Love");
    }
    if (romance.value) {
      selectedGenres.push("Romance");
    }
    if (selectedGenres.length === 0) {
      return (movies.value = originalMovies);
    }
    return selectedGenres.some((genre) => movieGenres.includes(genre));
  });
}

// Sort Movies based on sortValue variable above
function sortMovies() {
  if (sortValue.value) {
    if (sortValue.value === "Year") {
      return movies.value.sort((a, b) => b.Year - a.Year);
    } else if (sortValue.value === "Title") {
      return movies.value.sort((a, b) => {
        const titleA = a.Title.toUpperCase();
        const titleB = b.Title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else {
      return movies.value.sort((a, b) => b.imdbRating - a.imdbRating);
    }
  } else {
    return false;
  }
}
</script>

<template>
  <div class="h-full">
     <!-- Header Section -->
    <div
      class="bg-pink-900 bg-movie_bg-02 bg-blend-multiply w-full h-[300px] bg-cover bg-center pt-16 px-4 sm:px-8 md:px-16"
    >
      <h1 class="text-2xl xs:text-3xl 2xl:text-4xl text-white py-16 2xl:py-20">Movie Catalog</h1>
    </div>
    <!-- Search and Filter Section -->
    <div class="py-8 px-4 sm:px-8 md:px-16 bg-[#191517] drop-shadow-2xl">
      <div class="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
        <div class="">
          <!-- Search Bar Component -->
          <SearchBar v-model:title="title" v-model:year="year" @search="search" />
        </div>

        <div class="flex space-x-4">
          <!-- Filter Component -->
          <TheFilter
            v-model:drama="drama"
            v-model:adventure="adventure"
            v-model:action="action"
            v-model:romance="romance"
            v-model:love="love"
            v-model:comedy="comedy"
          />
           <!-- Sorting Component -->
          <TheSorting v-model:sortValue="sortValue" />
        </div>
      </div>
    </div>

    <!-- Movies Display Section -->
    <div
      v-if="movies"
      class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 xl:gap-12 text-white bg-[#131212] px-4 sm:px-8 md:px-16 py-8"
    >
      <div v-for="movie in movies" :key="movie.imdbID">
        <RouterLink
          class="flex flex-col space-y-3"
          :to="{ name: 'movie.details', params: { id: movie.imdbID } }"
        >
          <img
            :src="movie.Poster"
            alt="poster"
            class="rounded-sm w-full h-full xs:h-72 xs:w-72 xl:w-full xl:h-full"
          />
          <div class="flex flex-col space-y-2">
            <h1 class="text 2xl:text-lg">{{ movie.Title }}</h1>
            <div class="flex space-x-2">
              <Icon icon="iwwa:year" class="flex text-gray-400 h-6 w-6 2xl:h-8 2xl:w-8" />
              <span class="text-white font-bold 2xl:text-2xl">{{ movie.Year }}</span>
            </div>

            <div class="flex space-x-2">
              <Icon
                icon="material-symbols:star"
                class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8"
              />
              <span class="text-white font-bold 2xl:text-2xl">{{ movie.imdbRating }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div v-else class="text-white bg-[#131212] h-64 flex flex-col justify-center items-center">
      <div class="flex items-center justify-center">
        <span class="loading loading-ball loading-xs"></span>
        <span class="loading loading-ball loading-sm"></span>
        <span class="loading loading-ball loading-md"></span>
        <span class="loading loading-ball loading-lg"></span>
        <span class="loading loading-ball loading-lg"></span>
      </div>
      <p>Loading.....</p>
    </div>
    <div v-if="movies" class="flex justify-end space-x-5 bg-[#131212] px-4 sm:px-8 md:px-16 py-8">
      <RouterLink :to="{ name: 'catalog', query: { page: page } }">
        <button
          class="flex space-x-3 items-center bg-pink-700 text-white px-4 py-2 border border-blue-500"
          v-if="page > 1"
          @click="page -= 1"
        >
        <Icon icon="ooui:next-rtl" />
          <span>prev page</span>
        </button>
      </RouterLink>
      <RouterLink :to="{ name: 'catalog', query: { page: page } }">
        <button
          @click="page += 1"
          class="flex space-x-3 bg-pink-700 text-white px-4 py-2 items-center border border-blue-500"
        >
          <span>next page</span>
          <Icon icon="ooui:next-ltr" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>
