<script>
import { store } from '../store';
import cardProduct from './cardProduct.vue';

export default {
    name: "app main",

    components: {
        cardProduct,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- FILMS SECTION -->
    <section class="box">
        <h2 class="text-center">LISTA FILMS</h2>

        <div class="d-flex justify-between">
            <cardProduct v-for="(movie, index) in store.arrayMovies" :key="index" :product="movie"
                v-show="movie.genre_ids.includes(store.categorySelector) || store.categorySelector === ''" />
        </div>
    </section>
    <!-- / FILMS SECTION -->

    <!-- SERIES SECTION -->
    <section class="box">
        <h2 class="text-center">SERIES TV</h2>

        <div class="d-flex justify-between">
            <cardProduct v-for="(elementSeries, index) in store.arraySeries" :key="index" :product="elementSeries"
                v-show="elementSeries.genre_ids.includes(store.categorySelector) || store.categorySelector === ''" />
        </div>
    </section>
    <!-- / SERIES SECTION -->

</template>

<style lang="scss" scoped>
.box {
    padding: 1rem;

    h2 {
        font-size: 2rem;
        margin-bottom: .7rem;
    }
}
</style>