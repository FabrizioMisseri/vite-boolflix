import { reactive } from "vue";

export const store = reactive({

    apiSeries: "",
    apiMovies: "https://api.themoviedb.org/3/search/movie/",
    apiKey: "?api_key=22660efa238b83d9e84c3f57fcc0043d&query=",
    searchKey: "ok",
    loader: "",
    arrayMovies: [],
    arraySeries: [],

});