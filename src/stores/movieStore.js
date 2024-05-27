import { defineStore } from 'pinia';
import {fetchPopularMovies} from '../api/movies-api';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    watchlist: JSON.parse(localStorage.getItem('watchlist')) || [],
  }),
  getters: {
    popularMovies(state) {
        return state.movies;
    },
    watchlist(state) {
        return state.watchlist;
    }
  },
  actions: {
    async fetchPopularMovies() {
        try {
          const response = await fetchPopularMovies();
          this.movies = response?.results;
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
    addToWatchlist(movie) {
      if (!this.watchlist.includes(movie)) {
        this.watchlist.push(movie);
        this.saveWatchlist();
      }
    },
    removeFromWatchlist(movie) {
      this.watchlist = this.watchlist.filter(m => m.id !== movie.id);
      this.saveWatchlist();
    },
    searchMovies(query) {
      return this.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    },
    saveWatchlist() {
        localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
      }
  }
});
