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
            <hr>
            <li>Titolo Originale: {{ serie.original_name }} </li>
            <hr>
            <li>
                <div v-if="serie.original_language === 'it'">
                    BANDIERA ITALIA
                </div>
                <div v-if="serie.original_language === 'en'">
                    BANDIERA INGHILTERRA
                </div>
                <div v-if="serie.original_language === 'de'">
                    BANDIERA GERMANIA
                </div>
                <div v-if="serie.original_language === 'ja'">
                    BANDIERA GIAPPONE
                </div>
                <div v-if="serie.original_language !== 'it' &&
                    serie.original_language !== 'en' &&
                    serie.original_language !== 'de' &&
                    serie.original_language !== 'ja'
                ">
                    Lingua: {{ serie.original_language }}
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
            <li>Voto: {{ Math.floor(serie.vote_average / 2) }} </li>
            <hr>
        </ul>

    </div>

</template>