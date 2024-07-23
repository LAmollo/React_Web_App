# React Movie Search App

This is a user-friendly OMDB-type movie browsing application, designed to provide quick access to movie titles. This application is built with React Vite and uses SCSS for accessible user interface. It allows users to search, filter, and sort movies, providing a seamless user experience.


React
Vite
Sassy CSS(SCSS)
Axios
OMDB API


To run this project locally, follow these steps:

Clone the repository:

git clone <repository-url>
Navigate to the project directory:

cd <project-name>
Install dependencies:

npm install
Run the project:

npm run dev
Components

App Component

Main component rendering NavBar, MovieList, Search, and Movie.

// Core structure of the App component
  function App() {
  const [movies, setMovies] = useState([]);
  // ...
}
NavBar Component

Handles search functionality

function Navbar() {
  return (
    <nav className="nav">
  // ...
};

MoviesList Component

Responsible for rendering a list of movies.

function MoviesList({
  movies,
  favoriteMovies,
  setFavoriteMovies,
}) {
  // ...
};

Movie Component

Displays a list of titles allowing users to filter movies by preference.

function handleFavorites() {
    if (isFavorite) {
      const updatedFavorites = favoriteMovies.filter(
        (movie) => movie.Title !== Title
      );
  // ...
};

Search Component

Handles users input search queries and display the corresponding results. 

function Search({ movieInput, setMovieInput }) {
  return 
  // ...
};
