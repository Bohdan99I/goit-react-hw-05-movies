import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from 'services/tmdbAPI';
import { List, Item } from './TmdbCast.styled';

function TmdbCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchAddition(movieId, 'credits')
      .then(res => {
        const castArr = res.cast;
        setCast(castArr);
      })
      .catch(err => {
        console.error('Error fetching cast:', err);
      });
  }, [movieId]);

  return (
    <>
      <List>
        {cast.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                width="80"
                height="120"
                alt={name}
              />
            )}
            <>
              <p>{name}</p>
              <p>{character}</p>
            </>
          </Item>
        ))}
      </List>
    </>
  );
}

export default TmdbCast;
