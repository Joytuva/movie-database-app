import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}&plot=full`);
        const data = await res.json();
        if(data.Response === 'True') setMovie(data);
      } catch(err) {
        console.error(err);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="p-4">
      <MovieDetails movie={movie} />
    </div>
  );
}
