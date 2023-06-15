<script setup>
import { computed, onBeforeMount } from 'vue';
import useMovie from '../../../composables/useMovie'
import { Icon } from '@iconify/vue';
 
const {movies, fetchMovies } = useMovie()

onBeforeMount(() => {
    fetchMovies(2023, 'love', 2)

    console.log("Tired Movie", fetchMovies(2023, 'love', 2))
})

const latestMovies = computed(() => {
    return movies.value.slice(4, 10)
})






</script>
<template>
    <div class="grid gap-8 grid-cols-1  xs:grid-cols-2 text-white">
        <div v-for="movie in latestMovies" :key="movie.imdbID" class="flex flex-col sm:flex-row space-y-3 xs:space-y-0 xs:space-x-6">
        <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-72 xs:h-60 xs:w-60">
            <div class="flex flex-col space-y-2 xs:space-y-4">
                <h1>{{ movie.Title }}</h1>
                <p class="text-small font-normal text-pink-600">{{ movie.Genre }}</p>
            <div class="flex space-x-2">
                <Icon icon="material-symbols:star" height="24" width="24" class="flex text-pink-600"/>
                <span class="text-white font-bold">{{ movie.imdbRating }}</span>
            </div>
                <p class="text-[0.9rem] hidden sm:block text-gray-300">{{ movie.Plot }}</p>
            </div>
        </div>
    </div>
</template>