import { ref } from "vue"


export default function useFeedback() {
    const author = ref('')
    const id = ref(0)
    const rating = ref('')
    const feedbackText = ref('')

    let feedBacks = ref([])

    function addReview() {
        return feedBacks.value.push({id: id.value+=1, author: author.value, rating: rating.value, feedbackText: feedbackText.value})
    }

    function addComment() {
        return feedBacks.value.push({id: id.value+=1, author: author, rating: rating, feedbackText: feedbackText})
    }



    return { addReview, addComment, author, id, feedBacks, rating, feedbackText}
    
}