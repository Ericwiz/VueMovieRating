<script setup>
defineProps(['filterValue'])
defineEmits(['update:filterValue'])
</script>

<template>
    <div class="form-control w-full max-w-xs">
  <select class="select select-bordered" :value="filterValue" @input="$emit('update:filterValue', $event.target.value)"> 
    <option disabled selected>Filter movies</option>
    <option value="All">All</option>
    <option value="Drama">Drama</option>
    <option value="Adventure">Adventure</option>
    <option value="War">War</option>
    <option value="Romance">Romance</option>
  </select>
</div>
</template>