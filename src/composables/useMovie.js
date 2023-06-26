import { ref } from "vue";
import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY;

export default function useMovie() {
  const movies = ref([]);
  // retrieve the movies from the Api
  function fetchMovies(searchTerm = "love", year, page = 1) {
    const params = {
      apikey: apikey,
      s: searchTerm,
      y: year,
      page: page
    };
    return axios.get("https://www.omdbapi.com/", { params }).then((response) => {
      const movieList = response.data.Search;
      // The omdbapi search (s) param does not return the full details for a movie, so we need
      // to query the api again with the omdbd ID of each movie to return the movie's full details

      const fullMovieDetail = movieList.map((movie) =>
        axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: apikey,
            i: movie.imdbID
          }
        })
      );

      return Promise.all(fullMovieDetail);
    });
  }

  // Fetch for the movies types(Series, Movies, Episodes) section of the app, we don't need the movie's full detail here,
  // So we're good with whatever the (s) param is returning.
  function getFilmTypes(searchTerm, movieType = "love", page) {
    const params = {
      apikey,
      s: searchTerm,
      t: movieType,
      page: page
    };

    return axios
      .get("https://www.omdbapi.com/", { params })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        // no too much error handling, just alerting the error to the user/s here.
        alert(err);
      });
  }

  return {
    movies,
    fetchMovies,
    getFilmTypes
  };
}
