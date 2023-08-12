import MoviesList from 'components/TmdbMovies/TmdbMovies';
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/tmdbAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(res => {
        setMovies(res);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? (
        <div>Please wait...</div>
      ) : error ? (
        <div>Error loading data: {error.message}</div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Home;
