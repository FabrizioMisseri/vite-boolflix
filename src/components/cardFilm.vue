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
        }
    },
}
</script>

<template>

    <div>
        <ul>
            <hr>
            <li> titolo: <strong>{{ film.title }}</strong> </li>

            <li>Titolo Originale: {{ film.original_title }} </li>

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
                <div v-if="film.original_language === 'it'">
                    <img src="../assets/img/italyLogo.png" alt="">
                </div>
                <div v-if="film.original_language === 'en'">
                    <img src="../assets/img/englandLogo.png" alt="">
                </div>
                <div v-if="film.original_language === 'de'">
                    <img src="../assets/img/deutschLogo.png" alt="">
                </div>
                <div v-if="film.original_language === 'ja'">
                    <img src="../assets/img/japLogo.jpg" alt="">
                </div>
                <div v-if="film.original_language !== 'it' &&
                    film.original_language !== 'en' &&
                    film.original_language !== 'de' &&
                    film.original_language !== 'ja'
                ">
                    Lingua: {{ film.original_language }}
                </div>
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
                <div v-if="Math.floor(film.vote_average / 2) === 1">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 2">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 3">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 4">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 5">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
            </li>
            <!-- / STARS -->
            <hr>
        </ul>

    </div>

</template>