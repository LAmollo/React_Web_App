import React from "react";
import Navbar from "../components/Navbar";
import MoviesList from "../components/MoviesList";

export default function Favorites({
  storedFavorites,
  setStoredFavorites,
  favoriteMovies,
  setFavoriteMovies,
}) {
  return (
    <div className="favorites-container">
      <Navbar />
      {storedFavorites.length > 0 ? (
        <MoviesList
          movies={storedFavorites}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFavoriteMovies}
        />
      ) : (
        <p className="error">There is no such favorite movie!</p>
      )}
    </div>
  );
}
