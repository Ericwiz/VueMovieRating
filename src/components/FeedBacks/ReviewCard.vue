<template>
    <div class="lg:w-[120rem]">
        <div v-for="feedBack in feedBacks" :key="feedBack.id">
            <div v-if="feedBack.movieId === id">
                <div class="pb-5 flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                        <div class="bg-gray-300 rounded-full px-3 py-3 w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>

                    <div>
                        <h3 class="text-normal text-white xl:text-lg">{{ feedBack.author }}</h3>
                    </div>
                    </div>
                
                    <div class="flex space-x-2">
                        <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8"/>
                        <p class="text-white">{{ feedBack.rating }}</p>
                    </div>
                </div>
                <div>
                <p class="px-6 mb-4 py-5 rounded-sm bg-[#08080a] text-white flex flex-col items-start space-y-5">{{ feedBack.feedbackText }}</p>
            </div>
            </div>
        </div>


        <form @submit.prevent="addReview()" class="px-6 pb-5 pt-8 rounded-md bg-[#28282b] flex flex-col items-start space-y-5">
                <div class="w-full">
                    <input type="text" placeholder="Enter your name!"
                    v-model="author" class="w-full h-10 text-white px-3 py-2 bg-[#2b2b31] rounded-md outline-pink-600">
                </div>
                <div class="w-full">
                    <textarea v-model="feedbackText"
                    placeholder="Say something about this movie!"
                    class="w-full h-24 px-3 py-2 text-white bg-[#2b2b31] rounded-md outline-pink-600 border-0"></textarea>
                </div>

                <div class="flex flex-col space-y-2">
                    <label class="text-white">Rate:</label>
                    <div class="flex items-center space-x-4">
                        <input type="range" min="1" max="5" v-model="rating" class="range range-warning">
                        <div class="flex space-x-1">
                            <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8"/>
                            <span class="text-white text-lg" >{{ rating }}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-action">
                    <button class="rounded-md text-white bg-pink-600 px-4 py-2 uppercase">Add Review</button>
                </div>
            </form>
    </div>
</template>

<script setup>
import useFeedback from '../../composables/useFeedback';

import { Icon } from '@iconify/vue';

import { useRoute } from 'vue-router'

import { computed, onMounted } from 'vue';

const route = useRoute()

const { author, rating, feedBacks, feedbackText, addReview, movieId} = useFeedback()


const id = computed(() => {
    return route.params.id
})
onMounted(() => {
    movieId.value = id.value

    if(feedBacks.length != -1) {
    return feedBacks.value = JSON.parse(localStorage.getItem('reviews'))
    }
    else {
        return feedBacks.value
    }
})
</script>