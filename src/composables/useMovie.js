import { ref } from 'vue'
import axios from 'axios'
const apikey = (import.meta.env.VITE_API_KEY)

export default function useMovie() {
    const movies = ref([])
  // retrieve the movies from the Api
   function fetchMovies(year, searchParam, page) {
    axios.get('http://www.omdbapi.com/', {
        params: {
            apikey,
            s: searchParam,
            y: year,
            page: page
        }
    }).then(response => {
      const movieList = response.data.Search
      console.log("Search", response.data.Search)

      // The omdbapi search (s) param does not return the full detail for each movie
      // query the api again with the omdbd ID of each movie to return the movie's full details

      const fullMovieDetail = movieList.map((movie) => 
      axios.get('http://www.omdbapi.com/', {
        params: {
          apikey,
          i: movie.imdbID
        }
      })
      )

      return Promise.all(fullMovieDetail)
    }).then(response => {
      //grab all the movies returned by the API when all promise resolves and assign it to the movies variable
      const originalMovies = response.map(movies => movies.data)
      movies.value = originalMovies
      // console.log("MOVIES", movies.value)
      return movies.value
    }) 
  }

  return {
    movies,
    fetchMovies
  }
}

