import { reactive } from "vue";

export const store = reactive({

    apiSeries: "",
    apiMovies: "https://api.themoviedb.org/3/movie/550",
    apiKey: "?api_key=22660efa238b83d9e84c3f57fcc0043d",
    searchKey: "",
    loader: "",
    arrayMovies: [],
    arraySeries: [],

});