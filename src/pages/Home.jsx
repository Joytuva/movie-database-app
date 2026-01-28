import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async (query) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
      const data = await res.json();
      if(data.Response === 'True') {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch(err) {
      console.error(err);
      setError('Failed to fetch movies.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Movie Database</h1>
      <SearchBar onSearch={fetchMovies} />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
