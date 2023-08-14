import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import TmdbMoviesList from 'components/TmdbMovies/TmdbMovies';
import TmdbSearch from 'components/TmdbSearch/TmdbSearch';
import { fetchMovieSearch } from 'services/tmdbAPI';

function Movie() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = async value => {
    try {
      setSearchParams({ query: value });
      if (value) {
        const searchResults = await fetchMovieSearch(value);
        setMovies(searchResults);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movie search results:', error);
    }
  };

  useEffect(() => {
    fetchMovieSearch(query).then(res => setMovies(res));
  }, [query]);

  return (
    <>
      <TmdbSearch location={location} onSubmit={handleSubmit} />
      {movies.length > 0 ? (
        <TmdbMoviesList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
}

export default Movie;