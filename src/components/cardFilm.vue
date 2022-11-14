<script>
export default {
    name: "card film",

    props: {
        film: Object,
    },

}
</script>

<template>

    <div>
        <ul>
            <li> titolo: {{ film.title }} </li>
            <li>Titolo Originale: {{ film.original_title }} </li>

            <li>
                <div v-if="film.original_language === 'it'">
                    bandiera italia
                </div>
                <div v-if="film.original_language === 'en'">
                    bandiera inglese
                </div>
                <div v-if="film.original_language === 'de'">
                    bandiera germania
                </div>
                <div v-if="film.original_language === 'ja'">
                    bandiera giapponese
                </div>
                <div v-if="film.original_language !== 'it' &&
                    film.original_language !== 'en' &&
                    film.original_language !== 'de' &&
                    film.original_language !== 'ja'
                ">
                    Lingua: {{ film.original_language }}
                </div>
            </li>

            <li>Voto: {{ Math.floor(film.vote_average / 2) }} </li>
        </ul>

    </div>

</template>