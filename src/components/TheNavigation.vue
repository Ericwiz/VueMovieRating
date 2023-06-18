<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

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
                    <form class="flex space-x-3">
                        <div class="">
                            <input type="text" required class="w-52 h-full pl-3 rounded-md text-black focus:outline-none focus:outline-pink-700 caret-pink-700">
                        </div>
                        <button type="submit" class="bg-pink-700 rounded-md px-5 py-2">
                            Search
                        </button>
                    </form>
                </div>

                <!-- <div class="hidden lg:flex justify-start space-y-8 md:space-y-0 md:space-x-14 text-lg text-white">
                <select class="select text-black font-normal max-w-xs">
                    <option disabled selected class="uppercase">Filter</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select> -->
                <!-- <div>Sort</div> -->
                <!-- <ul class="menu max-w-xs bg-base-100 rounded-box">
                    <li class="text-black">
                        <details close>
                            <summary class="uppercase">Sort</summary>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="">Year</span> 
                                    <input type="checkbox" class="checkbox checkbox-secondary" />
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="">Rating</span> 
                                    <input type="checkbox" class="checkbox checkbox-secondary" />
                                </label>
                            </div>
                        </details>
                    </li>
                </ul>
            </div> -->

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
                <RouterLink to="/" class="uppercase text-gray-100 hover:text-gray-300 transition-all duration-300">Home</RouterLink>
                <RouterLink to="/catalog" class="uppercase text-gray-100 hover:text-gray-300 transition-all duration-300">Catalog</RouterLink>
            </div>
            <form class="flex space-x-3 pt-10">
                <div class="">
                    <input type="text" required class="w-full h-full pl-3 rounded-md text-black focus:outline-none focus:outline-pink-700 caret-pink-700">
                </div>
                <button type="submit" class="bg-pink-700 rounded-md px-5 py-2">
                    Search
                </button>
            </form>

            <!-- <div class="flex flex-col md:flex-row justify-start space-y-8 md:space-y-0 md:space-x-14 py-16 text-lg text-white">
                <select class="select text-black font-normal max-w-xs">
                    <option disabled selected class="uppercase">Filter</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select> -->
                <!-- <div>Sort</div> -->
                <!-- <ul class="menu max-w-xs bg-base-100 rounded-box">
                    <li class="text-black">
                        <details close>
                            <summary class="uppercase">Sort</summary>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="">Year</span> 
                                    <input type="checkbox" class="checkbox checkbox-secondary" />
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="">Rating</span> 
                                    <input type="checkbox" class="checkbox checkbox-secondary" />
                                </label>
                            </div>
                        </details>
                    </li>
                </ul>
            </div> -->
        </div>
    </nav>
</template>