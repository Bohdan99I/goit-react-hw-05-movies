import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/tmdbAPI';
import TmdbMovieDetails from 'components/TmdbMovieDetails/TmdbMovieDetails';

function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    fetchMovieDetails(movieId)
      .then(res => {
        setDetails(res);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <p>Please wait...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <TmdbMovieDetails details={details} />
      )}
    </div>
  );
}

export default MovieDetails;
