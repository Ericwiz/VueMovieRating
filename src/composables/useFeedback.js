import { ref } from "vue"


export default function useFeedback() {
    let feedBacks = ref([])
    const movieId = ref('')
    const id = ref(0)
    const author = ref('')
    const feedbackText = ref('')
    const rating = ref(5)

    function addReview() {
        feedBacks.value.push({id: id.value+=1, author: author.value, rating: rating.value, feedbackText: feedbackText.value, movieId: movieId})

          author.value = ''
          rating.value = 1
          feedbackText.value = ''
         
         return localStorage.setItem('reviews', JSON.stringify(
            feedBacks.value
        ))
    }



    return { addReview, author, id, feedBacks, rating, feedbackText, movieId}
    
}