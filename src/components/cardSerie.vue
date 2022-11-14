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
            <li>Voto: {{ serie.vote_average }} </li>
        </ul>

    </div>

</template>