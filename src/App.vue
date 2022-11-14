<script>
import { store } from './store';
import axios from "axios";
import appSearch from './components/appSearch.vue';
import appMain from './components/appMain.vue';

export default {
  name: "app vue",

  components: {
    appSearch,
    appMain,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    findResearch() {
      this.axiosCall();
    },

    axiosCall() {
      axios
        .get(`${this.store.apiMovies}${this.store.apiKey}${this.store.searchKey}`)
        .then((resp => {
          this.store.arrayMovies = resp.data.results;
        }));
    },
  },

}
</script>

<template>
  <appSearch @event="findResearch" />
  <appMain />
</template>


<style>

</style>
