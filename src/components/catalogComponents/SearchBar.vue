<script setup>
import { onMounted, ref } from "vue";

defineProps({
  title: String,
  year: String
});

defineEmits(["update:title", "update:year", "search"]);

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <div>
    <div class="flex xs:space-x-4 flex-col space-y-4 xs:space-y-0 xs:flex-row xs:items-center">
      <input
        class="input input-bordered w-full max-w-xs 2xl:text-2xl"
        type="text"
        ref="input"
        required
        :value="title"
        placeholder="what movie do you want to see?"
        @input="$emit('update:title', $event.target.value)"
      />

      <div class="flex space-x-4">
        <input
          class="w-full xs:w-28 xl:w-full input input-bordered 2xl:text-2xl"
          type="text"
          :value="year"
          placeholder="year?"
          @input="$emit('update:year', $event.target.value)"
        />

        <button
          class="bg-pink-700 px-5 py-3 rounded-md text-white 2xl:text-lg"
          @click="$emit('search')"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
