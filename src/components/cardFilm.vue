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
            <li>Lingua: {{ film.original_language }} </li>
            <li>Voto: {{ film.vote_average }} </li>
        </ul>

    </div>

</template>