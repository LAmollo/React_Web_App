// src/features/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchMoviesSuccess(state, action) {
      state.loading = false;
      state.movies = action.payload;
    },
    searchMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToFavorites(state, action) {
      const movieToAdd = action.payload;
      if (!state.favorites.find((movie) => movie.imdbID === movieToAdd.imdbID)) {
        state.favorites.push(movieToAdd);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites(state, action) {
      const imdbIDToRemove = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== imdbIDToRemove);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
  addToFavorites,
  removeFromFavorites,
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFavorites = (state) => state.movies.favorites;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

export default moviesSlice.reducer;
