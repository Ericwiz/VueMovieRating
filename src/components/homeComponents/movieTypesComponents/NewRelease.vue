<script setup>
import { computed, onBeforeMount } from 'vue';
import useMovie from '../../../composables/useMovie'
import { Icon } from '@iconify/vue';
 
const {movies, fetchMovies } = useMovie()

onBeforeMount(() => {
    fetchMovies('love', '2023')
        .then(response => {
            //grab all the movies returned by the API when all promise resolves and assign it to the movies variable
            const originalMovies = response.map(movies => movies.data)
            movies.value = originalMovies
            return movies.value
        }) 
})

const latestMovies = computed(() => {
    return movies.value.slice(4, 10)
})
</script>

<template>
    <div class="grid gap-8 grid-cols-1  xs:grid-cols-2 text-white">
        <div v-for="movie in latestMovies" :key="movie.imdbID" class="flex flex-col lg:flex-row space-y-3 md:space-x-6">
        <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 lg:w-60">
            <div class="flex flex-col space-y-2">
                <h1>{{ movie.Title }}</h1>
                <p class="text-small font-normal text-pink-600">{{ movie.Genre }}</p>
                <div class="flex space-x-2">
                    <Icon icon="material-symbols:star" height="24" width="24" class="flex text-pink-600"/>
                    <span class="text-white font-bold">{{ movie.imdbRating }}</span>
                </div>
                <p class="text-[0.8rem] lg:text-[0.9rem] hidden lg:block text-gray-300">{{ movie.Plot }}</p>
            </div>
        </div>
    </div>
</template>