<script setup>
import ReviewCard from './ReviewCard.vue'
import MovieRecommendation from './MoviewRecommendation.vue'
</script>

<template>
    <div class="flex flex-col-reverse lg:flex-row justify-between space-x-10 pt-8 pb-5 px-4 sm:px-8 md:px-16">
        <ReviewCard />
        <MovieRecommendation />
    </div>
</template>