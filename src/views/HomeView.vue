
<script>
  import { ref, onMounted } from 'vue';
  import { useMovieStore } from '../stores/movieStore';
  import MovieCard from '../components/MovieCard.vue';
  import SearchBar from '../components/SearchBar.vue';
  
  export default {
    components: {
      MovieCard,
      SearchBar
    },
    setup() {
      const movieStore = useMovieStore();
      const displayedMovies = ref(movieStore.popularMovies);
  
      const searchMovies = (query) => {
        displayedMovies.value = query ? movieStore.searchMovies(query) : movieStore.popularMovies;
      };
  
      onMounted(async () => {
        await movieStore.fetchPopularMovies();
        displayedMovies.value = movieStore.popularMovies;
      });
  
      return {
        displayedMovies,
        searchMovies
      };
    }
  };
  </script>