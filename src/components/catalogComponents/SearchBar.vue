<script setup>
import { onMounted, ref } from "vue"

defineProps({
    title: String,
    year: String
})

defineEmits(['update:title', 'update:year', 'search'])

const input = ref(null)

onMounted(() => {
    input.value.focus()
})
</script>

<template>
    <div>
        <!-- <form @submit="me"> -->
            <div class="flex space-x-4 ">
                <input 
                class="input input-bordered w-full max-w-xs"
                type="text" 
                ref="input"
                required 
                :value="title"
                placeholder="what movie do you want to see?"
                @input="$emit('update:title', $event.target.value)">
                <input 
                class="w-28 input input-bordered"
                type="text" 
                :value="year"
                placeholder="year?"
                @input="$emit('update:year', $event.target.value)"
                >

                <button class="bg-pink-700 px-5 py-3 rounded-md text-white" @click="$emit('search')">Search</button>
            </div>

            
        <!-- </form> -->
    </div>
</template>