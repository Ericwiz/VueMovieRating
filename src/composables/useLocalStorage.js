// import { useStorage } from '@vueuse/core'

export default function useLocalStorage() {
  function addToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  return { addToStorage };
}
