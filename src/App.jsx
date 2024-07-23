import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useEffect, useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("spider");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [storedFavorites, setStoredFavorites] = useState([]);

  // Save favorite movies to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  // Load favorite movies from local storage on component mount
  useEffect(() => {
    const localValuesGet = JSON.parse(localStorage.getItem("favorites"));
    if (localValuesGet) {
      setStoredFavorites(localValuesGet);
    }
  }, []);

  // Function to fetch movies using AJAX (XMLHttpRequest)
  function getMovies(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        if (res.Search) {
          setMovies(res.Search);
        }
      }
    };
    xhr.send();
  }

  // Fetch movies from the OMDB API when movieInput changes
  useEffect(() => {
    const apiKey = "42c99ae0"; // Replace with your actual OMDB API key
    const url = `https://www.omdbapi.com/?s=${movieInput}&apikey=${apiKey}`;
    getMovies(url);
  }, [movieInput]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
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
