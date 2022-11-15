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
    <div class="input">
        <input @keyup.enter="$emit('event')" type="text" placeholder="searchField" v-model="store.searchKey">
        <button @click="$emit('event')">search</button>
    </div>
</template>


<style lang="scss" scoped>
.input {
    width: 25vw;
    font-size: 1.1rem;

    input,
    button {
        padding: .2rem;
        font-size: inherit;
    }

    input {
        width: 80%;
    }

    button {
        width: 20%;
    }
}
</style>