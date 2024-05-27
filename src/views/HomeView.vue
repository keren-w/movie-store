<template>
  <div>
    <SearchBar @search="searchMovies" />
    <MovieList :movies="displayedMovies" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useMovieStore } from '../stores/movieStore';
import SearchBar from '../components/SearchBar.vue';
import MovieList from '../components/MovieList.vue';

export default {
  components: {
    SearchBar,
    MovieList
  },
  setup() {
    const movieStore = useMovieStore();
    const displayedMovies = ref(movieStore.popularMovies);

    const searchMovies = (query) => {
      displayedMovies.value = query ? movieStore.searchMovies(query) : movieStore.popularMovies;
    };

    onMounted(async () => {
      await movieStore.fetchPopularMovies();
      displayedMovies.value = movieStore.getMovies;
    });

    return {
      displayedMovies,
      searchMovies
    };
  }
};
</script>
