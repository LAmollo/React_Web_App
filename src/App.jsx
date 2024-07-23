import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useEffect, useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("spider");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [storedFavorites, setStoredFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  useEffect(() => {
    const localValuesGet = JSON.parse(localStorage.getItem("favorites"));
    setStoredFavorites(localValuesGet);
  }, [favoriteMovies]);

  async function getMovies(url) {
    const data = await fetch(url);
    const res = await data.json();
    setMovies(res);
  }

  useEffect(() => {
    getMovies(`https://www.omdbapi.com/?s=${movieInput}&apikey=738237a0`);
  }, [movieInput]);

  // console.log(favoriteMovies);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies.Search}
              movieInput={movieInput}
              setMovieInput={setMovieInput}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              storedFavorites={storedFavorites}
              setStoredFavorites={setStoredFavorites}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
