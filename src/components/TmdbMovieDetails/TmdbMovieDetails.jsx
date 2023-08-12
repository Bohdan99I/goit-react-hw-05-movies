import PropTypes from 'prop-types';
import React, { useRef, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Container,
  BtN,
  ContainerDetails,
  Title,
  Text,
  Addition,
  AddList,
  AddLink,
} from './TmdbMovieDetails.styled';

function TmdbMovieDetails({ details }) {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    details;
  const date = new Date(release_date).getFullYear();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? './movies');

  return (
    <>
      <BtN to={backLinkLocation.current}>Go back</BtN>
      {details && (
        <>
          <Container>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              width={250}
              height={400}
              alt={title}
            />
            <ContainerDetails>
              <Title>
                {title} ({date})
              </Title>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <Text>{overview}</Text>
              <h3>Genres</h3>
              {genres
                ? genres.map(genre => genre.name + ' ')
                : 'Not information'}
            </ContainerDetails>
          </Container>
          <Addition>
            <h3>Additional information</h3>
            <AddList>
              <li>
                <AddLink to="cast">Cast</AddLink>
              </li>
              <li>
                <AddLink to="review">Review</AddLink>
              </li>
            </AddList>
          </Addition>
        </>
      )}
      <Suspense fallback={<div>Please wait...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

TmdbMovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default TmdbMovieDetails;
