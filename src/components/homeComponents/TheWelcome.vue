<script setup>
import { computed, onBeforeMount, ref } from "vue"

import useMovie  from "../../composables/useMovie";

import { Icon } from '@iconify/vue';

const { fetchMovies } = useMovie()

let movies = ref(null)

onBeforeMount(() => {
    fetchMovies('crime', 2023)
        .then(response => {
            //grab all the movies returned by the API when all promise resolves and assign it to the movies variable
            const originalMovies = response.map(movies => movies.data)
            movies.value = originalMovies
            return movies
        }) 
})

const sampleMovies = computed(() => {
    return movies.value.slice(0, 4)
})

</script>

<template>
    <div class="w-full bg-movie_bg-02 h-fit bg-cover bg-center bg-pink-950 bg-blend-multiply px-4 sm:px-8 md:px-16 py-16 2xl:pt-20">
        <h1 class="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl py-12 2xl:text-5xl">
            <span class="font-bold">Welcome</span>
             to Vue
            <span class="text-pink-700 -ml-1 md:-ml-2.5">Movies</span>
        </h1>

       <div v-if="movies" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 cursor-pointer items-center">
            <div v-for="(movie, index) in sampleMovies" :key="movie.imdbID" :class="{'hidden lg:block': index > 1, 'hidden sm:block': index === 1 }" class="justify-self-center xs:justify-self-auto">
                <RouterLink :to="{name: 'movie.details', params: {id: movie.imdbID}}">
                    <img :src="movie.Poster" alt="movie poster" class="h-fit w-fit xs:w-full sm:h-96 w-84 rounded-sm 2xl:h-full">
                    <div class="py-3">
                        <h2 class="text-white truncate 2xl:text-2xl">{{ movie.Title }}</h2>
                        <p class="text-pink-600 text-sm py-2 2xl:text-lg">{{ movie.Genre }}</p>
                        <div class="flex space-x-2">
                            <Icon icon="iwwa:year" class="flex h-6 w-6 2xl:h-8 2xl:w-8 text-gray-400"/>
                            <span class="text-white font-bold 2xl:text-lg">{{ movie.Year }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
       </div>

       <div v-else class="text-white">
            <span class="loading loading-ball loading-xs"></span>
            <span class="loading loading-ball loading-sm"></span>
            <span class="loading loading-ball loading-md"></span>
            <span class="loading loading-ball loading-lg"></span>
            <span class="loading loading-ball loading-lg"></span>
        </div>
    </div>
</template>