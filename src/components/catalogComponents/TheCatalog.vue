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

const genre = ref('All')

const sortByRating = ref(null)

const sortByYear = ref(true)

const sortByTitle = ref(null)

const yes = ref(null)

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
})

function search() {
    getMovies()
    
}
// filter by genre 
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


// Sort by year
watch(sortByYear, () => {
  if (sortByYear.value) {
     movies.value = originalMovies.sort((a, b) => b.Year - a.Year)
  } else {
    
    movies.value = originalMovies.sort((a, b) => a.Year - b.Year);
  }
});

// Sort by rating
watch(sortByRating, () => {
  if (sortByRating.value) {
     movies.value = originalMovies.sort((a, b) => b.imdbRating - a.imdbRating)
  } else {
    
    movies.value = originalMovies.sort((a, b) => a.imdbRating - b.imdbRating);
  }
});

// Sort by title

watch(sortByTitle, () => {
    movies.value =  originalMovies.sort((a, b) => {
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
})

</script>

<template>
    <div class="h-full">
        <div class="bg-pink-900 bg-movie_bg-02 bg-blend-multiply w-full h-[300px] bg-cover bg-center pt-16 px-4 sm:px-8 md:px-16">
            <h1 class="text-2xl xs:text-3xl lg:text-4xl 2xl:text-6xl text-white py-16">Movie Catalog</h1>
        </div>

        <div class="py-8 px-4 sm:px-8 md:px-16 bg-[#191517] drop-shadow-2xl">
           <div class="flex justify-between">
                <SearchBar 
                v-model:title="title" 
                v-model:year="year" 
                @search="search"/>

                <div class="flex space-x-4">
                    <TheFilter v-model:filterValue="genre"/>
                    <TheSorting 
                    v-model:sortByYear="sortByYear"
                    v-model:sortByTitle="sortByTitle"
                    v-model:sortByRating="sortByRating"
                    v-model:yes="yes"/>
                </div>
           </div>
        </div>
        <div class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 xl:gap-12 text-white bg-[#131212] px-4 sm:px-8 md:px-16 py-8">
            <div v-for="movie in movies" :key="movie.imdbID" class="flex flex-col space-y-3">
                <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 xs:w-72 xl:w-full xl:h-full">
                <div class="flex flex-col space-y-2">
                    <h1 class="text 2xl:text-3xl">{{ movie.Title }}</h1>
                <div class="flex space-x-2">
                    <Icon icon="iwwa:year"  class="flex text-gray-400 h-6 w-6 2xl:h-10 2xl:w-10"/>
                    <span class="text-white font-bold 2xl:text-3xl">{{ movie.Year }}</span>
                </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end space-x-5 bg-[#131212] px-4 sm:px-8 md:px-16 py-8"> 
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