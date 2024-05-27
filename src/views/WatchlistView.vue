<template>
    <div class="watchlist">
      <MovieList :movies="watchlist" />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useMovieStore } from '../stores/movieStore';
  import MovieList from '../components/MovieList.vue';
  
  export default {
    components: {
        MovieList
    },
    setup() {
      const movieStore = useMovieStore();
      const watchlist = computed(() => movieStore.watchlist);
  
      return {
        watchlist
      };
    }
  };
  </script>
  
  <style>
  .watchlist {
   margin-top: 16px;
  }
  </style>
  