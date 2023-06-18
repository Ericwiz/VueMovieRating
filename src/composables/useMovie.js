import { ref } from 'vue'
import axios from 'axios'
const apikey = (import.meta.env.VITE_API_KEY)

export default function useMovie() {
    const movies = ref([])
  // retrieve the movies from the Api
   function fetchMovies(searchTerm, year, page = 1 ) {
    const params = {
      apikey: apikey,
      s: searchTerm,
      y: year,
      page: page
    };
    return axios.get('https://www.omdbapi.com/', {params})
      .then(response => {
        const movieList = response.data.Search
      // The omdbapi search (s) param does not return the full detail for a movie, so I need
      // to query the api again with the omdbd ID of each movie to return the movie's full details

        const fullMovieDetail = movieList.map((movie) => 
        axios.get('https://www.omdbapi.com/', {
          params: {
            apikey:apikey,
            i: movie.imdbID,
          }
        })
      )

      return Promise.all(fullMovieDetail)
    })
  }

  function getFilmTypes(searchTerm, movieType = 'love', page) {
    const params = {
      apikey,
      s: searchTerm,
      t: movieType,
      page: page
    };
  
    return axios.get('https://www.omdbapi.com/', { params })
      .then(response => response.data)
      .catch(err => {
        alert(err);
        return []; 
      });
  }

  return {
    movies,
    fetchMovies,
    getFilmTypes
  }
}

