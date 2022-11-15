<script>
import axios from "axios";
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
        },
    },
}
</script>

<template>

    <!-- POSTER -->
    <section class="poster">
        <img :src="`${store.urlImg}${film.backdrop_path}`" alt="" class="poster-img">

        <!-- CARD -->
        <div class="card">
            <ul>
                <!-- TITLES -->
                <li> titolo: <strong>{{ film.title ? film.title : film.name }}</strong> </li>

                <li>Titolo Originale: {{ film.original_title ? film.original_title : film.original_name }} </li>
                <!-- / TITLES -->

                <!-- CAST -->
                <li>
                    <span>Cast: </span>
                    <span v-for="(actor, index) in film.cast" :key="index" v-show="index < 5">
                        {{ actor.name }},
                    </span>
                </li>
                <!-- / CAST -->

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
                    <img v-if="availableFlags.includes(film.original_language)"
                        :src="getImgUrl(film.original_language)">
                    <span v-else>Lingua: {{ film.original_language }}</span>
                </li>
                <!-- / LINGUE -->

                <!-- STARS -->
                <li>
                    <span v-for="(star, index) in Math.floor(film.vote_average / 2)" class="stars">
                        <i class="fa-solid fa-star"></i>
                    </span>
                </li>
                <!-- / STARS -->
            </ul>
        </div>
        <!-- / CARD -->

    </section>
    <!-- / POSTER -->


</template>

<style lang="scss" scoped>
.poster {
    width: 344px;
    min-height: 194px;
    margin-top: 1rem;
    border: 1px solid silver;
    position: relative;

    img {
        display: block;
    }

    .card {
        display: none;
        padding: 1rem;
        position: absolute;
        left: 0;
        top: 0;
        overflow-y: auto;
        height: 100%;

        .language-flag-box img {
            max-width: 30px;
        }

        .stars {
            color: orange;
        }

        li {
            margin: .4rem 0;
        }
    }
}

.poster:hover {

    .poster-img {
        display: none;
    }

    .card {
        display: block;
    }
}
</style>