<template>
    <div>
        <div v-if="feedBacks.length === 0">
            <h1 class="text-2xl font-bold text-white">No review yet.....</h1>
        </div>

        <div v-for="feedBack in feedBacks" :key="feedBack.id">
            <h3>{{ feedBack.author }}</h3>
            <p>{{ feedBack.feedbackText }}</p>
            <p>{{ feedBack.rating }}</p>
            {{ id }}
            {{ feedBack.id }}
        </div>


        <form @submit.prevent="addReview()" class="px-6 py-5 rounded-sm bg-[#0f1010] flex flex-col items-start space-y-5">
            <div class="w-full">
                <input type="text" v-model="author" class="w-full md:w-4/6 lg:w-3/6 h-10 text-white px-3 py-2 bg-[#2b2b31] rounded-md outline-pink-600">
            </div>
            <div class="w-full">
                <textarea v-model="feedbackText" class="w-full md:w-4/6 lg:w-3/6 h-24 px-3 py-2 text-white bg-[#2b2b31] rounded-md outline-pink-600 border-0"></textarea>
            </div>

            <div class="flex flex-col space-y-2">
                <label class="text-white">Rate:</label>
                <div class="flex items-center space-x-4">
                    <input type="range" min="0" max="10" :name="rating" v-model="rating" class="range range-warning w-96">
                    <div class="flex space-x-1">
                        <Icon icon="material-symbols:star" class="flex text-pink-600 h-6 2xl:h-8 w-6 2xl:w-8"/>
                        <span class="text-white text-lg">{{ rating }}</span>
                    </div>
                </div>

            </div>

            <button class="rounded-md hover:bg-pink-900 transition-all duration-300 ease-out px-6 py-2 bg-gradient-to-r from-pink-600 via-pink-800 to-pink-600 text-white uppercase">Add</button>
        </form>
    </div>
</template>

<script setup>
import useFeedback from '../../composables/useFeedback'
import { Icon } from '@iconify/vue';

const { rating, author, feedbackText, feedBacks, id,  addReview } = useFeedback()
</script>