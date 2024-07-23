// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
  selectMovies,
  selectLoading,
  selectError,
} from '../features/moviesSlice';
import MovieCard from './MovieCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import './MovieSearch.css'; // Import CSS file for styling

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const MovieSearch = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm) return;

    dispatch(searchMoviesStart());

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        dispatch(searchMoviesSuccess(response.data.Search));
      } else {
        dispatch(searchMoviesFailure(response.data.Error));
      }
    } catch (error) {
      dispatch(searchMoviesFailure(error.message));
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
