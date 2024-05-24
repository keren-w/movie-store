<template>
    <article class="movie-card">
      <img :src="imgUrl" class="movie-image"/>
     <section class="movie-info"> 
      <h3>{{ movie.title }}</h3>
      <!-- <button @click="toggleWatchlist">
        {{ isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist' }}
      </button> -->
    </section>
    </article>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useMovieStore } from '../stores/movieStore';
  import {IMAGE_URL} from '../api/movies-api';
  
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
        toggleWatchlist,
        imgUrl: `${IMAGE_URL}/w300${props.movie.poster_path}`
      };
    }
  };
  </script>
  
  <style scoped>
  .movie-card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 250px; 
  }

  .movie-image {
    width: inherit;
  }

  .movie-info {
    padding: 8px 0;
    width: initial;
    height: 80px;
  }

  h3 {
    margin: 0;
  }
  </style>
  