<script setup>
import { Icon } from "@iconify/vue";

import { onBeforeMount, ref } from "vue";

import useMovie from "../../../composables/useMovie";

const { getFilmTypes } = useMovie()

const movies = ref([])

onBeforeMount(() => {
    getFilmTypes('souls', 'episode')
        .then(response => movies.value = response)
        .catch (err => alert(err))
})
</script>

<template>
    <div class="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
        <div v-for="movie in movies" :key="movie.imdbID" class="flex flex-col space-y-3">
        <img :src="movie.Poster" alt="poster" class="rounded-sm w-full h-72 xs:w-72">
            <div class="flex flex-col space-y-2">
                <h1>{{ movie.Title }}</h1>
            <div class="flex space-x-2">
                <Icon icon="iwwa:year" height="24" width="24" class="flex text-gray-400"/>
                <span class="text-white font-bold">{{ movie.Year }}</span>
            </div>
            </div>
        </div>
    </div>
</template>