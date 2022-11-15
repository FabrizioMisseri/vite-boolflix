<script>
import { store } from '../store';

export default {
    name: "card film",

    props: {
        film: Object,
    },

    data() {
        return {
            store,
            availableFlags: ['en', 'it', 'de'],
        }
    },

    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    },
}
</script>

<template>

    <div>
        <ul>
            <hr>
            <li> titolo: <strong>{{ film.title ? film.title : film.name }}</strong> </li>

            <li>Titolo Originale: {{ film.original_title ? film.original_title : film.original_name }} </li>

            <!-- GENRES -->
            <li>
                <span>Genere: </span>
                <span v-for="(elementGenres, index) in store.arrayGenres"
                    v-show="film.genre_ids.includes(elementGenres.id)">
                    {{ elementGenres.name }},
                </span>
            </li>
            <!-- / GENRES -->

            <!-- LINGUE -->
            <li class="language-flag-box">
                <img v-if="availableFlags.includes(film.original_language)" :src="getImgUrl(film.original_language)">
                <p v-else>Lingua: {{ film.original_language }}</p>
            </li>
            <!-- / LINGUE -->

            <!-- POSTER -->
            <li>
                <div>
                    <img :src="`${store.urlImg}${film.backdrop_path}`" alt="">
                </div>
            </li>
            <!-- / POSTER -->

            <!-- STARS -->
            <li>
                <span v-for="(star, index) in Math.floor(film.vote_average / 2)" class="stars">
                    <i class="fa-solid fa-star"></i>
                </span>
            </li>
            <!-- / STARS -->
            <hr>
        </ul>

    </div>

</template>