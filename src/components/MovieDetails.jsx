import { useEffect, useState } from "react";

function MovieDetails({ movie, onBack }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=7089c330&plot=full`
      );
      const data = await res.json();
      setDetails(data);
    };

    if (movie?.imdbID) {
      fetchDetails();
    }
  }, [movie]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={onBack}>⬅ Back</button>
      <h2>{details.Title}</h2>
      <p><strong>Year:</strong> {details.Year}</p>
      <p><strong>Genre:</strong> {details.Genre}</p>
      <p><strong>Director:</strong> {details.Director}</p>
