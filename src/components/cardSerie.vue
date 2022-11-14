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
            <li>Lingua: {{ serie.original_language }} </li>
            <li>Voto: {{ Math.floor(serie.vote_average / 2) }} </li>
        </ul>

    </div>

</template>