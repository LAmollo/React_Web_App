import React from "react";
import Movie from "./Movie";

export default function MoviesList({
  movies,
  favoriteMovies,
  setFavoriteMovies,
}) {
  return (
    <div className="movies--list">
      {movies.map((movie) => {
        return (
          <Movie
            Poster={movie.Poster}
            Title={movie.Title}
            keySend={movie.imdbID}
            favoriteMovies={favoriteMovies}
            setFavoriteMovies={setFavoriteMovies}
          />
        );
      })}
    </div>
  );
}
