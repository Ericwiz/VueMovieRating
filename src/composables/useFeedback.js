import { ref } from "vue"


export default function useFeedback() {
    const author = ref('')
    const id = ref(0)
    const rating = ref(5)
    const feedbackText = ref('')
    const movieId = ref('')

    let feedBacks = ref([])

    function addReview() {
        feedBacks.value.push({id: id.value+=1, author: author.value, rating: rating.value, feedbackText: feedbackText.value, movieId: movieId})

          author.value = ''
          rating.value = 0 
          feedbackText.value = ''
         
         return localStorage.setItem('reviews', JSON.stringify(
            feedBacks.value
        ))
    }

    function addComment() {
        return feedBacks.value.push({id: id.value+=1, author: author, rating: rating, feedbackText: feedbackText})
    }



    return { addReview, addComment, author, id, feedBacks, rating, feedbackText, movieId}
    
}