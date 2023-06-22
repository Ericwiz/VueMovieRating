<script setup>
import { ref } from 'vue';
import MovieComment from './MovieComment.vue';
import MovieReview from './MovieReview.vue';

const activeComponent = ref('review')

const components = {
    reviews: MovieReview,
    comments: MovieComment
}
</script>

<template>
    <div class="bg-[#191517] border-t-2 border-t-pink-800">
        <div class="bg-[#0f1010] px-4 sm:px-8 md:px-16 shadow-lg shadow-black">
            <h1 class="uppercase text-white text-lg xs:text-2xl md:text-3xl lg:text-4xl py-8 2xl:text-5xl">Feedbacks</h1>
            <div class="flex justify-start space-x-6 xs:space-x-10 pt-8">
                <button class="text-white text-xs sm:text-lg 2xl:text-3xl uppercase focus:border-b-2 focus:border-b-pink-600 pb-3 transition-all duration-500 ease-in" 
                v-for="(_, component) in components" :key="component" 
                @click="activeComponent = component"
                >
                {{ component }}
                </button>
            </div>
        </div>

        <div class="px-4 sm:px-8 md:px-16 py-14">
            <transition name="translate" mode="out-in">
                <KeepAlive>
                    <component :is="components[activeComponent]"></component>
                </KeepAlive>
            </transition>
        </div>
    </div>
</template>

<style>
  .translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
    /* transform: translateX(30px); */
  }
</style>