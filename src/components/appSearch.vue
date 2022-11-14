<script>
import { store } from '../store';

export default {
    name: "app search",

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <input @keyup.enter="$emit('event')" type="text" placeholder="searchField" v-model="store.searchKey">
        <button @click="$emit('event')">search</button>
    </div>
</template>


<style>

</style>