// src/components/Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../features/moviesSlice';
import MovieCard from './MovieCard';
import './Favorites.css'; // Import CSS file for styling

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
