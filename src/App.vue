<script>
import { store } from './store';
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
}
</script>

<template>
  <appSearch />
  <appMain />
</template>


<style>

</style>
