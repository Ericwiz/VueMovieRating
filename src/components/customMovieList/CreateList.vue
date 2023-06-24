<script setup>
import { onMounted, ref } from "vue";
import { Icon } from '@iconify/vue';
import useLocalStorage from '../../composables/useLocalStorage'

const { addToStorage } = useLocalStorage()

const openModal = ref(false)

const listName = ref('')

const listId = ref(0)

const isListCreated = ref(false)

const customMovieList = ref([])

customMovieList.value = JSON.parse(localStorage.getItem('custom-movie-list', customMovieList)) || []


function createList() {
    customMovieList.value.push({id: listId.value + 1, name: listName.value})
    addToStorage('custom-movie-list', customMovieList.value)
    isListCreated.value = true
    listName.value = ''
    return customMovieList.value
}

onMounted(() => {
      if (customMovieList.value.length > -1) {
        isListCreated.value = true;
        return customMovieList.value
      }
})
</script>

<template>
    <div class="h-screen bg-[#060507] px-4 sm:px-8 md:px-16 pt-32">
        <section class="">
        <div class="flex justify-between">
            <h3 class="text-center text-3xl 2xl:text-4xl text-white">Custom movie lists</h3>
            <button @click="openModal = true" class="px-4 py-3 rounded-md bg-pink-700 uppercase text-white font-semibold">Create new list</button>
        </div>

        <!-- Create custom movie list modal -->
        <Teleport to="body">
            <transition name="translate">
                <div v-if="openModal" class="modal-mask">
                    <div class="m-auto w-2/5 bg-[#060507] text-white px-5 py-5 transition-all duration-300 ease-in rounded-md shadow-md shadow-gray-800">
                        <button @click="openModal = false" class="float-right">
                            <Icon icon="iconoir:cancel" class="text-gray-300 mb-3 h-7 w-7" />
                        </button>
                        <div class="w-full py-3">
                            <input v-model="listName" type="text" placeholder="Enter custom list name" class="px-3 w-full py-3 h-16 rounded-md mb-4 outline-none bg-gray-900 focus:ring focus:ring-inset focus:ring-pink-600">
                        </div>
                        <button @click="createList()" class="px-4 py-3 rounded-md bg-pink-700">Create List</button>
                    </div>
                </div>
            </transition>
        </Teleport>
    </section>

    <!-- Display custom movie list section -->
    <section class="pt-10">
        <div v-if="isListCreated" class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center">
            <template v-for="list in customMovieList" :key="list.name">
                <RouterLink to="/show-list/1" class="flex flex-col items-center">
                    <Icon icon="ion:folder" class="text-gray-700 h-16 w-16"/>
                    <p class="text-white">{{ list.name }}</p>
                </RouterLink>
            </template>
        </div>
    </section>
    </div>
</template>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 33, 51, 0.8);
  display: flex;
  transition: opacity 0.3s ease;
}
.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: scale(1.1);
  /* transform: translateX(30px); */
}
</style>