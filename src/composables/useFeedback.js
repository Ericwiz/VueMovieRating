import { ref } from "vue"

import { useStorage } from '@vueuse/core'


export default function useFeedback() {
    const movieId = ref('')
    const id = ref(0)
    const author = ref('')
    const feedbackText = ref('')
    const rating = ref(5)

    let feedBacks = ref([])

    function addToStorage(key, value) {
      const state = useStorage(key, value)
      return state.value
    }


    return { 
        author, 
        id, 
        feedBacks, 
        rating, 
        feedbackText, 
        movieId,
        addToStorage
      }
    
}