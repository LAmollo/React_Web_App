// src/components/MovieCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../features/moviesSlice';
import './MovieCard.css'; // Import CSS file for styling

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(movie.imdbID));
  };

  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
      ) : (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default MovieCard;
