<script setup>
defineProps({
  drama: {
    type: Boolean,
    default: false
  },
  adventure: {
    type: Boolean,
    default: false
  },
  action: {
    type: Boolean,
    default: false
  },
  romance: {
    type: Boolean,
    default: false
  },
  love: {
    type: Boolean,
    default: false
  },
  comedy: {
    type: Boolean,
    default: false
  }
});
defineEmits([
  "update:drama",
  "update:adventure",
  "update:action",
  "update:romance",
  "update:love",
  "update:comedy"
]);
</script>

<template>
  <details class="dropdown mb-32">
    <summary class="btn lowercase w-32">Filter movies</summary>
    <div
      class="p-2 flex flex-col space-y-3 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
    >
      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="drama">Drama</label>
        <input
          type="checkbox"
          id="drama"
          name="drama"
          class="checkbox checkbox-error"
          :checked="drama"
          @change="$emit('update:drama', $event.target.checked)"
        />
      </div>

      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="adventure">Adventure</label>
        <input
          type="checkbox"
          id="adventure"
          name="adventure"
          class="checkbox checkbox-error"
          :checked="adventure"
          @change="$emit('update:adventure', $event.target.checked)"
        />
      </div>

      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="action">Action</label>
        <input
          type="checkbox"
          id="action"
          name="action"
          :checked="action"
          @change="$emit('update:action', $event.target.checked)"
          class="checkbox checkbox-error"
        />
      </div>

      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="romance">Romance</label>
        <input
          type="checkbox"
          id="romance"
          name="romance"
          :checked="romance"
          @change="$emit('update:romance', $event.target.checked)"
          class="checkbox checkbox-error"
        />
      </div>

      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="love">Love</label>
        <input
          type="checkbox"
          id="love"
          name="love"
          :checked="love"
          @change="$emit('update:love', $event.target.checked)"
          class="checkbox checkbox-error"
        />
      </div>

      <div class="flex space-x-5 px-5 items-center">
        <label class="text-lg" for="comedy">Comedy</label>
        <input
          type="checkbox"
          id="comedy"
          name="comedy"
          :checked="comedy"
          @change="$emit('update:comedy', $event.target.checked)"
          class="checkbox checkbox-error"
        />
      </div>
    </div>
  </details>
</template>
