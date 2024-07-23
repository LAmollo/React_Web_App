import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";

export default function Home({
  movies,
  movieInput,
  setMovieInput,
  favoriteMovies,
  setFavoriteMovies,
}) {
  // {
  //   movies && console.log(movies);
  // }
  return (
    <div className="container">
      <Navbar />
      <Search movieInput={movieInput} setMovieInput={setMovieInput} />
      {movies ? (
        <MoviesList
          movies={movies}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFavoriteMovies}
        />
      ) : (
        <p className="error">There is no such movie!</p>
      )}
    </div>
  );
}
