import { reactive } from "vue";

export const store = reactive({

    apiGenres: "https://api.themoviedb.org/3/genre/movie/list?api_key=22660efa238b83d9e84c3f57fcc0043d",
    urlImg: "https://image.tmdb.org/t/p/w342",
    apiSeries: "https://api.themoviedb.org/3/search/tv/",
    apiMovies: "https://api.themoviedb.org/3/search/movie/",
    apiKey: "?api_key=22660efa238b83d9e84c3f57fcc0043d&query=",
    searchKey: "",
    loader: false,
    arrayMovies: [],
    arraySeries: [],
    arrayGenres: [],
    categorySelector: "",

});