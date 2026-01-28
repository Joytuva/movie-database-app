import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (results) => {
    setMovies(results);
    setSelectedMovie(null); // reset details view
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <h1>🎬 Movie Database App</h1>
      {!selectedMovie ? (
        <>
          <SearchBar onSearch={handleSearch} />
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        </>
      ) : (
        <MovieDetails movie={selectedMovie} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
