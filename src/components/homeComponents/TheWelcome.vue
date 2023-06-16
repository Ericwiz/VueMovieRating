<script setup>
// import { storeToRefs } from "pinia"
import { computed, onMounted } from "vue"
// import {useMovieStore}  from '../../stores/movie'
import useMovie  from "../../composables/useMovie";
import { Icon } from '@iconify/vue';


const { movies, fetchMovies } = useMovie()
// const { fetchMovies } = store

onMounted(() => {
    fetchMovies('crime', 2023)
        .then(response => {
            //grab all the movies returned by the API when all promise resolves and assign it to the movies variable
            const originalMovies = response.map(movies => movies.data)
            movies.value = originalMovies
            return movies.value
        }) 
})

const sampleMovies = computed(() => {
    return movies.value.slice(0, 4)
})

</script>

<template>
    <div class="w-full bg-movie_bg-02 h-fit bg-cover bg-center bg-pink-950 bg-blend-multiply px-4 sm:px-8 md:px-16 py-16">
        <h1 class="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl py-12">
            <span class="font-bold">Welcome</span>
             to Vue
            <span class="text-pink-700 -ml-1 md:-ml-2.5">Movies</span>
        </h1>

       <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 cursor-pointer items-center">
            <div v-for="(movie, index) in sampleMovies" :key="movie.imdbID" :class="{'hidden lg:block': index > 1, 'hidden sm:block': index === 1 }" class="justify-self-center xs:justify-self-auto">
                <img :src="movie.Poster" alt="movie poster" class="h-fit w-fit xs:w-full sm:h-96 w-84 rounded-sm">
                <div class="py-3">
                    <h2 class="text-white truncate">{{ movie.Title }}</h2>
                    <p class="text-pink-600 text-sm py-2">{{ movie.Genre }}</p>
                    <div class="flex space-x-2">
                        <Icon icon="iwwa:year" height="24" width="24" class="flex text-gray-400"/>
                        <span class="text-white font-bold">{{ movie.Year }}</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>