import React from "react";
import { FaStar } from "react-icons/fa";

export default function Movie({
  Poster,
  Title,
  favoriteMovies,
  setFavoriteMovies,
  keySend,
}) {
  const newFav = {
    Title,
    Poster,
  };

  const isFavorite = favoriteMovies.some((movie) => movie.Title === Title);

  function handleFavorites() {
    if (isFavorite) {
      const updatedFavorites = favoriteMovies.filter(
        (movie) => movie.Title !== Title
      );
      setFavoriteMovies(updatedFavorites);
    } else {
      setFavoriteMovies([newFav, ...favoriteMovies]);
    }
  }


  return (
    <div className="movie" key={keySend}>
      <p className="movie--title">{Title}</p>
      <img className="movie--img" src={Poster} alt={Title} />
      <div
        className="add-to-fav"
        onClick={() => {
          handleFavorites();
        }}
      >
        <p className="add-to-fav-text">
          {isFavorite ? "Delete from Favorites" : "Add To Favorites"}
        </p>
        <FaStar className="star-icon" />
      </div>
    </div>
  );
}
