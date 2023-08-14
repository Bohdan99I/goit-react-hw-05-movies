import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, StyledLink } from './TmdbMovies.sryled';

function TmdbMoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <StyledLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </StyledLink>
            </li>
          )
      )}
    </List>
  );
}

TmdbMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default TmdbMoviesList;