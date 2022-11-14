<script>
import { store } from '../store';

export default {
    name: "card serie",

    props: {
        serie: Object,
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
            <li> titolo: <strong> {{ serie.name }} </strong> </li>

            <li>Titolo Originale: {{ serie.original_name }} </li>

            <li class="language-flag-box">
                <div v-if="serie.original_language === 'it'">
                    <img src="../assets/img/italyLogo.png" alt="">
                </div>
                <div v-if="serie.original_language === 'en'">
                    <img src="../assets/img/englandLogo.png" alt="">
                </div>
                <div v-if="serie.original_language === 'de'">
                    <img src="../assets/img/deutschLogo.png" alt="">
                </div>
                <div v-if="serie.original_language === 'ja'">
                    <img src="../assets/img/japLogo.jpg" alt="">
                </div>
                <div v-if="serie.original_language !== 'it' &&
                    serie.original_language !== 'en' &&
                    serie.original_language !== 'de' &&
                    serie.original_language !== 'ja'
                ">
                    Lingua: {{ serie.original_language }}
                </div>
            </li>

            <li>
                <div>
                    <img :src="`${store.urlImg}${serie.backdrop_path}`" alt="">
                </div>
            </li>

            <!-- STARS -->
            <li>
                <div v-if="Math.floor(serie.vote_average / 2) === 1">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(serie.vote_average / 2) === 2">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(serie.vote_average / 2) === 3">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(serie.vote_average / 2) === 4">
                    voto:
                    <span class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div v-if="Math.floor(serie.vote_average / 2) === 5">
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