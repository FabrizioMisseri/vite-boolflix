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
    axiosCall() {
      axios
        .get(`${this.store.apiMovies}${this.store.apiKey}${this.store.searchKey}`)
        .then((resp => {
          console.log(resp);
        }));
    },
  },

  // inizio debug
  created() {
    this.axiosCall();
  }
  // fine debug
}
</script>

<template>
  <appSearch />
  <appMain />
</template>


<style>

</style>
