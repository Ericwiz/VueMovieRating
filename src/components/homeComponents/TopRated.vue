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
        <h1 class="text-2xl xs:text-3xl text-white pt-5 pb-10 2xl:text-6xl">Top Rated Movies</h1>
        {{ console.log(movies) }}
        <div class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-20 text-white">
            <template v-for="movie in movies" :key="movie.imdbID">
                {{ console.log(movie) }}
               <div class="flex flex-col space-y-3" v-if="movie.imdbRating > 6">
                    <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 xs:w-72 xl:w-full xl:h-full">
                    <div class="flex flex-col space-y-2">
                        <h3 class="2xl:text-3xl">{{ movie.Title }}</h3>
                        <div class="flex space-x-2">
                            <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-10 w-6 2xl:w-10"/>
                            <span class="text-white font-bold 2xl:text-3xl">{{ movie.imdbRating }}</span>
                        </div>
                    </div>
               </div>
            </template>
        </div>

        <div class="flex py-12">
            <RouterLink to="/catalog" class="uppercase text-lg 2xl:text-4xl bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 px-4 2xl:px-6 py-2 2xl:py-4 rounded-md text-white mx-auto">Show More</RouterLink>
        </div>
    </div>
</template>