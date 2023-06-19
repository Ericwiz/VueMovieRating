<script setup>
import { onMounted, ref, watch } from "vue";

import SearchBar from './SearchBar.vue'

import TheFilter from './TheFilter.vue'

import TheSorting from './TheSorting.vue'

import { Icon } from "@iconify/vue";

import useMovie from "../../composables/useMovie";

const { fetchMovies} = useMovie();

const page = ref(1)

const year = ref('')

const title = ref('love')

const genre = ref('')

const sortValue = ref('')

const movies = ref(null)

let originalMovies = []

function getMovies() {
    return fetchMovies(title.value, year.value, page.value)
        .then(res => {
            originalMovies = res.map(movies => movies.data)
            movies.value = originalMovies
            console.log('movies', movies.value)
            return movies
        })
}

onMounted(() => {
    getMovies() 
})

watch(page, () => {
    getMovies() 
    genre.value = ''
    sortValue.value = ''
})

function search() {
    getMovies()
    
}
// filter movies by genre 
watch(genre, () => {
  if (genre.value) {
    if (genre.value === 'All') {
      console.log('First Movies Value Here:',  movies.value);
        movies.value = originalMovies ; // Reset movies.value to the original list
    } else {
         movies.value = originalMovies.filter(movie => {
        if (movie.Genre) {
          const movieGenres = movie.Genre.split(',').map(genre => genre.trim());
          return movieGenres.includes(genre.value);
        }
        return false;
      });
    }
    console.log('Filtered Movies:', movies.value);
    return movies.value
  }
})


// Sort Movies
watch(sortValue, () => {
  if (sortValue.value) {
     if(sortValue.value === "Year"){
        return movies.value.sort((a, b) => b.Year - a.Year)
     }
     else if(sortValue.value === 'Title') {
        return movies.value.sort((a, b) => {
            const titleA = a.Title.toUpperCase()
            const titleB = b.Title.toUpperCase()

            if(titleA < titleB) {
                return -1
            }
            if(titleA > titleB) {
                return 1
            }
            return 0
        })
     } else {
            return movies.value.sort((a, b) => b.imdbRating - a.imdbRating)
        }
    //  return movies.value = originalMovies.sort((a, b) => a.Year - b.Year);
  } else {
    return false
  }
});

</script>

<template>
    <div class="h-full">
        <div class="bg-pink-900 bg-movie_bg-02 bg-blend-multiply w-full h-[300px] bg-cover bg-center pt-16 px-4 sm:px-8 md:px-16">
            <h1 class="text-2xl xs:text-3xl 2xl:text-4xl text-white py-16 2xl:py-20">Movie Catalog</h1>
        </div>

        <div class="py-8 px-4 sm:px-8 md:px-16 bg-[#191517] drop-shadow-2xl">
           <div class="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
                <div class="">
                    <SearchBar 
                    v-model:title="title" 
                    v-model:year="year" 
                    @search="search"/>
                </div>

                <div class="flex space-x-4">
                    <TheFilter v-model:filterValue="genre"/>
                    <TheSorting 
                    v-model:sortValue="sortValue"/>
                </div>
           </div>
        </div>


        <div v-if="movies" class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 xl:gap-12 text-white bg-[#131212] px-4 sm:px-8 md:px-16 py-8">
            <div v-for="movie in movies" :key="movie.imdbID" class="flex flex-col space-y-3">
                <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 xs:w-72 xl:w-full xl:h-full">
                <div class="flex flex-col space-y-2">
                    <h1 class="text 2xl:text-lg">{{ movie.Title }}</h1>
                <div class="flex space-x-2">
                    <Icon icon="iwwa:year"  class="flex text-gray-400 h-6 w-6 2xl:h-8 2xl:w-8"/>
                    <span class="text-white font-bold 2xl:text-2xl">{{ movie.Year }}</span>
                </div>

                    <div class="flex space-x-2">
                        <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8"/>
                        <span class="text-white font-bold 2xl:text-2xl">{{ movie.imdbRating }}</span>
                    </div>
                </div>
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
            <button class="flex space-x-3 items-center bg-pink-700 text-white px-4 py-2 border border-blue-500" v-if="page > 1" @click="page -= 1">
            <span>prev page</span>
            <Icon icon="ooui:next-rtl" />
            </button>
            <button @click="page += 1" class="flex space-x-3 bg-pink-700 text-white px-4 py-2 items-center border border-blue-500">
                <span>next page</span>
                <Icon icon="ooui:next-ltr" />
            </button>

        </div>
    </div>
</template>