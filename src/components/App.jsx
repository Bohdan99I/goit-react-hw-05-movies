import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import TmdbLayout from './TmdbLayout/TmdbLayout';

const HOME_PATH = '/';
const MOVIES_PATH = '/movies';
const MOVIE_DETAILS_PATH = '/movies/:movieId';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const TmdbCast = lazy(() => import('./TmdbCast/TmdbCast'));
const TmdbReview = lazy(() => import('./TmdbReview/TmdbReview'));

export const App = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<TmdbLayout />}>
        <Route index element={<Home />} />
        <Route path={MOVIES_PATH} element={<Movie />} />
        <Route path={MOVIE_DETAILS_PATH} element={<MovieDetails />}>
          <Route path="cast" element={<TmdbCast />} />
          <Route path="review" element={<TmdbReview />} />
        </Route>
        <Route path="*" element={<Navigate to={HOME_PATH} />} />
      </Route>
    </Routes>
  );
};