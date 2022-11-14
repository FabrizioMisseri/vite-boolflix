<script>
import { store } from '../store';

export default {
    name: "category selector",

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <select name="" id="" v-model="store.categorySelector">
        <option value="">All Genres</option>
        <option :value="elementCategory.id" v-for="(elementCategory, index) in store.arrayGenres">
            {{ elementCategory.name }}
        </option>
    </select>
</template>