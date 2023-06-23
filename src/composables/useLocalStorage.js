import { useStorage } from '@vueuse/core'


export default function useFeedback() {
  function addToStorage(key, value) {
    const state = useStorage(key, value)
    return state.value
  }
  return { addToStorage }
    
}