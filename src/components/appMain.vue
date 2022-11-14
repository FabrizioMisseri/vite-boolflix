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
    }
}
</script>

<template>

    <cardFilm v-for="(movie, index) in store.arrayMovies" :key="index" :film="movie" />

</template>


<style>

</style>