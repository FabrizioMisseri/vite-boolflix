<script>
import { store } from './store';
import axios from "axios";
import appSearch from './components/appSearch.vue';
import appMain from './components/appMain.vue';
import loadingApp from './components/loadingApp.vue';
import appCategorySelector from './components/appCategorySelector.vue';

export default {
  name: "app vue",

  components: {
    appSearch,
    appMain,
    loadingApp,
    appCategorySelector,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    findResearch() {
      if (this.store.searchKey !== "") {
        this.axiosCall();
      } else {
        this.store.arrayMovies = [];
        this.store.arraySeries = [];
      }
    },

    axiosCall() {
      this.store.loader = true;
      this.axiosCallMovies();
      this.axiosCallSeries();
      this.store.loader = false;
    },

    axiosCallMovies() {
      axios
        .get(`${this.store.apiMovies}${this.store.apiKey}${this.store.searchKey}`)
        .then((movieResp) => {
          this.store.arrayMovies = movieResp.data.results;
        });
    },

    axiosCallSeries() {
      axios
        .get(`${this.store.apiSeries}${this.store.apiKey}${this.store.searchKey}`)
        .then((serieResp) => {
          this.store.arraySeries = serieResp.data.results;
        });
    },

    buildArrayCategory() {
      axios
        .get(`${this.store.apiGenres}`)
        .then((categoryResp) => {
          this.store.arrayGenres = categoryResp.data.genres;
        });
    },
  },

  created() {
    this.buildArrayCategory();
  },

}
</script>

<template>
  <section class="wrapper">

    <header class="d-flex justify-between align-center">
      <div class="container d-flex justify-between align-center">
        <div>
          <h1>BoolFlix</h1>
        </div>

        <div>
          <appSearch @event="findResearch" />
          <appCategorySelector />
        </div>
      </div>
    </header>

    <main>
      <div class="container cards-container">
        <loadingApp v-if="store.loader" />
        <appMain v-else />
      </div>
    </main>

  </section>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;

.container {
  margin: 0 auto;
  width: 90%;

}

header {
  background-color: black;
  height: 15vh;

  h1 {
    color: red;
    font-size: 3rem;
  }
}

main {
  height: 85vh;
  background-color: rgb(34, 34, 34);
  color: white;
  overflow-y: auto;
}
</style>
