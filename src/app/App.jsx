// src/app/App.js
import React from 'react';
import './App.css';
import MovieSearch from '../components/MovieSearch';
import Favorites from '../components/Favorites';

function App() {
  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <MovieSearch />
      <Favorites />
    </div>
  );
}

export default App;
