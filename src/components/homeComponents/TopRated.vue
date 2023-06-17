<script setup>
import { onMounted } from "vue";

import { Icon } from "@iconify/vue";

import useMovie from "../../composables/useMovie";

const {movies, fetchMovies } = useMovie()

onMounted(() => {
    fetchMovies('Happiness')
        .then(response => {
            //grab all the movies returned by the API when all promise resolves and assign it to the movies variable
            const originalMovies = response.map(movies => movies.data)
            movies.value = originalMovies
            return movies.value
        }) 
})
</script>

<template>
    <div class="bg-[#110e0f] px-4 sm:px-8 md:px-16 py-10">
        <h1 class="text-2xl xs:text-3xl text-white py-8">Top Rated Movies</h1>
        {{ console.log(movies) }}
        <div class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
            <template v-for="movie in movies" :key="movie.imdbID">
                {{ console.log(movie) }}
               <div class="flex flex-col space-y-3" v-if="movie.imdbRating > 6">
                    <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 xs:w-72">
                    <div class="flex flex-col space-y-2">
                        <h1>{{ movie.Title }}</h1>
                        <div class="flex space-x-2">
                            <Icon icon="material-symbols:star" height="24" width="24" class="flex text-pink-600"/>
                            <span class="text-white font-bold">{{ movie.imdbRating }}</span>
                        </div>
                    </div>
               </div>
            </template>
        </div>
    </div>
</template>