<script>
import { store } from '../store';
import cardFilm from './cardFilm.vue';
import cardSerie from './cardSerie.vue';

export default {
    name: "app main",

    components: {
        cardFilm,
        cardSerie,
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
    <cardFilm v-for="(movie, index) in store.arrayMovies" :key="index" :film="movie" />
    <h2>SERIEs TV</h2>
    <cardSerie v-for="(elementSeries, index) in store.arraySeries" :key="index" :serie="elementSeries" />

</template>

<style>
.language-flag-box img {
    max-width: 30px;
}

.stars {
    color: orange;
}
</style>