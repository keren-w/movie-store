<template>
    <div class="movie-card">
      <h3>{{ movie.title }}</h3>
      <button @click="toggleWatchlist">
        {{ isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist' }}
      </button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useMovieStore } from '../stores/movieStore';
  
  export default {
    props: ['movie'],
    setup(props) {
      const movieStore = useMovieStore();
      const isInWatchlist = computed(() => movieStore.watchlist.includes(props.movie));
      const toggleWatchlist = () => {
        if (isInWatchlist.value) {
          movieStore.removeFromWatchlist(props.movie);
        } else {
          movieStore.addToWatchlist(props.movie);
        }
      };
  
      return {
        isInWatchlist,
        toggleWatchlist
      };
    }
  };
  </script>
  
  <style>
  .movie-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  