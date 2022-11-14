<script>
import cardFilm from './cardFilm.vue';

export default {
    name: "app main",

    components: {
        cardFilm,
    }
}
</script>

<template>
    <ul>
        <li>film</li>
        <li>film</li>
        <li>film</li>
        <li>film</li>
        <li>film</li>
        <li>
            <cardFilm />
        </li>
    </ul>
</template>


<style>

</style>