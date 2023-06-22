import { ref } from "vue"

import { useStorage } from '@vueuse/core'


export default function useFeedback() {
    const movieId = ref('')
    const id = ref(0)
    const author = ref('')
    const feedbackText = ref('')
    const rating = ref(5)

    let feedBacks = ref([
        
    ])

    function addReview() {
        feedBacks.value.push({id: 
            id.value+=1, author: 
            author.value, rating: 
            rating.value, 
            feedbackText: 
            feedbackText.value, 
            movieId: movieId})

            const state = useStorage('reviews', feedBacks.value)
            author.value = ''
            rating.value = 5
            feedbackText.value = ''
            return state
         
          
    }



    return { 
        addReview, 
        author, 
        id, 
        feedBacks, 
        rating, 
        feedbackText, 
        movieId}
    
}