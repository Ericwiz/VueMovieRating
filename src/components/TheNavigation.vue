<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

const showMobileMenu = ref(true)
</script>

<template>
    <nav class="bg-[#191517] z-50 drop-shadow-2xl fixed w-full">
        <!-- Desktop -->
        <div class="flex justify-between text-white py-6 px-4 sm:px-8 md:px-16">
            <!-- Primary nav -->
            <div class="flex justify-between gap-12 lg:gap-20">
                <h1 class="text-lg xs:text-2xl lg:text-3xl 2xl:text-6xl">Vue <span class="text-pink-700 -ml-2">Movies</span></h1>
                <div class="hidden md:flex space-x-10 text-lg">
                    <RouterLink to="/" class="2xl:text-4xl">Home</RouterLink>
                    <RouterLink to="/catalog" class="2xl:text-4xl">Catalog</RouterLink>
                </div>
            </div>

            <!-- Secondary Nav -->
            <div class="hidden md:block">
                    <RouterLink to="/catalog" class="flex items-center space-x-2 text-gray-400"> 
                        <Icon icon="iconamoon:search-fill" class="h-4 w-4 2xl:h-10 2xl:w-10"/>
                        <span class="">Search</span>
                    </RouterLink>
            </div>

            <div class="md:hidden">
                <button @click="showMobileMenu = !showMobileMenu">
                    <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden z-50 bg-[#191517] px-8 pt-4 w-full sm:w-4/6 h-screen text-white absolute" :class="[showMobileMenu ? '-right-[100%]' : 'right-0', 'transition-all duration-500']">
            <div class="flex space-x-10 text-lg text-white">
                <RouterLink @click="showMobileMenu = !showMobileMenu" to="/" active-class="active" class="uppercase text-gray-100 hover:text-gray-300 transition-all duration-300">Home</RouterLink>
                <RouterLink @click="showMobileMenu = !showMobileMenu" to="/catalog" active-class="active" class="uppercase text-gray-100 hover:text-gray-300 transition-all duration-300">Catalog</RouterLink>
            </div>
            <div @click="showMobileMenu = !showMobileMenu" class="block md:hidden pt-5">
                    <RouterLink to="/catalog" class="flex items-center space-x-2 text-gray-400"> 
                        <Icon icon="iconamoon:search-fill" class="h-4 w-4 2xl:h-10 2xl:w-10"/>
                        <span class="">Search</span>
                    </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.active {
    color: darkgray;
}
</style>