<script>
export default {
    name: "card serie",

    props: {
        serie: Object,
    },
}
</script>

<template>

    <div>
        <ul>
            <li> titolo: {{ serie.name }} </li>
            <li>Titolo Originale: {{ serie.original_name }} </li>
            <li>
                <div v-if="serie.original_language === 'it'">
                    bandiera italia
                </div>
                <div v-if="serie.original_language === 'en'">
                    bandiera inglese
                </div>
                <div v-if="serie.original_language === 'de'">
                    bandiera germania
                </div>
                <div v-if="serie.original_language === 'ja'">
                    bandiera giapponese
                </div>
                <div v-if="serie.original_language !== 'it' &&
                    serie.original_language !== 'en' &&
                    serie.original_language !== 'de' &&
                    serie.original_language !== 'ja'
                ">
                    Lingua: {{ serie.original_language }}
                </div>
            </li>
            <li>Voto: {{ Math.floor(serie.vote_average / 2) }} </li>
        </ul>

    </div>

</template>