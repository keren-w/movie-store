<!-- src/components/MoviesList.vue -->
<template>
  <div class="movies">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.movies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
</style>
