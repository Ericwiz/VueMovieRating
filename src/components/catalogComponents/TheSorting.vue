<script setup>
defineProps(["sortValue"]);
defineEmits(["update:sortValue"]);
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label for="sort"></label>
    <select
      class="select select-bordered"
      name="sort"
      :value="sortValue"
      @input="$emit('update:sortValue', $event.target.value)"
    >
      <option disabled value="">Sort movies</option>
      <option value="Year">Year</option>
      <option value="Title">Title</option>
      <option value="Rating">Rating</option>
    </select>
  </div>
</template>

