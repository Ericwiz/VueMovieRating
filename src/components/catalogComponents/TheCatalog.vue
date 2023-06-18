<script setup>
import { onMounted, ref, watch } from "vue";

import SearchBar from './SearchBar.vue'

import { Icon } from "@iconify/vue";

import useMovie from "../../composables/useMovie";

const { fetchMovies} = useMovie();

const page = ref(1)

const year = ref('')

const title = ref('love')

let movies = ref(null)

function getMovies() {
    return fetchMovies(title.value, year.value, page.value)
        .then(res => {
            console.log('res', res)
            const originalMovies = res.map(movies => movies.data)
            movies.value = originalMovies
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
</script>

<template>
    <div class="h-full">
        <div class="bg-pink-900 bg-movie_bg-02 bg-blend-multiply w-full h-[300px] bg-cover bg-center pt-16 px-4 sm:px-8 md:px-16">
            <h1 class="text-2xl xs:text-3xl lg:text-4xl 2xl:text-6xl text-white py-16">Movie Catalog</h1>
        </div>

        <div class="py-8 px-4 sm:px-8 md:px-16 bg-[#191517] drop-shadow-2xl">
            <SearchBar 
            v-model:title="title" 
            v-model:year="year" 
            @search="search"/>
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