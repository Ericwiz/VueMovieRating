<script setup>
import { Icon } from "@iconify/vue";

import { onBeforeMount, ref } from "vue";

import useMovie from "../../../composables/useMovie";

const { getFilmTypes } = useMovie()

const movies = ref([])

onBeforeMount(() => {
    getFilmTypes('tears', 'movie')
        .then(response => movies.value = response.Search)
        .catch (err => alert(err))
})
</script>

<template>
    <div class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 xl:gap-16 text-white">
        <div v-for="movie in movies" :key="movie.imdbID" class="flex flex-col space-y-3">
        <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-full xs:h-72 xs:w-72 xl:w-full xl:h-full">
            <div class="flex flex-col space-y-2">
                <h1 class="text 2xl:text-2xl">{{ movie.Title }}</h1>
            <div class="flex space-x-2">
                <Icon icon="iwwa:year"  class="flex text-gray-400 h-6 w-6 2xl:h-8 2xl:w-8"/>
                <span class="text-white font-bold 2xl:text-2xl">{{ movie.Year }}</span>
            </div>
            </div>
        </div>
    </div>
</template>