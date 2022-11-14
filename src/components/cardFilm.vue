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
            <hr>
            <li>Titolo Originale: {{ film.original_title }} </li>
            <hr>
            <li>
                <div v-if="film.original_language === 'it'">
                    BANDIERA ITALIA
                </div>
                <div v-if="film.original_language === 'en'">
                    BANDIERA INGHILTERRA
                </div>
                <div v-if="film.original_language === 'de'">
                    BANDIERA GERMANIA
                </div>
                <div v-if="film.original_language === 'ja'">
                    BANDIERA GIAPPONE
                </div>
                <div v-if="film.original_language !== 'it' &&
                    film.original_language !== 'en' &&
                    film.original_language !== 'de' &&
                    film.original_language !== 'ja'
                ">
                    Lingua: {{ film.original_language }}
                </div>
            </li>
            <hr>
            <li>
                <div>
                    <img :src="`${store.urlImg}${film.backdrop_path}`" alt="">
                </div>
            </li>
            <hr>
            <li>
                <div v-if="Math.floor(film.vote_average / 2) === 1">
                    voto: 1 STELLA
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 2">
                    voto: 2 STELLE
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 3">
                    voto: 3 STELLE
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 4">
                    voto: 4 STELLE
                </div>
                <div v-if="Math.floor(film.vote_average / 2) === 5">
                    voto: 5 STELLE
                </div>
            </li>
            <hr>
        </ul>

    </div>

</template>