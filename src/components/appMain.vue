<script>
import { store } from '../store';
import cardFilm from './cardFilm.vue';

export default {
    name: "app main",

    components: {
        cardFilm,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <h2>FILMs</h2>
    <cardFilm v-for="(movie, index) in store.arrayMovies" :key="index" :film="movie"
        v-show="movie.genre_ids.includes(store.categorySelector) || store.categorySelector === ''" />
    <h2>SERIEs TV</h2>
    <cardFilm v-for="(elementSeries, index) in store.arraySeries" :key="index" :film="elementSeries"
        v-show="elementSeries.genre_ids.includes(store.categorySelector) || store.categorySelector === ''" />

</template>

<style>
.language-flag-box img {
    max-width: 30px;
}

.stars {
    color: orange;
}
</style>