import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from 'services/tmdbAPI';
import { List, Item, Name } from './TmdbReview.styled';

function TmdbReview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;    
    fetchAddition(movieId, 'reviews')
      .then(res => {
        setReviews(res.results);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div>
      {error ? (
        <div>Error loading reviews: {error.message}</div>
      ) : (
        <List>
          {reviews.length ? (
            reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <Name>Author: {author}</Name>
                <p>{content}</p>
              </Item>
            ))
          ) : (
            <div>We don't have any reviews for this movie</div>
          )}
        </List>
      )}
    </div>
  );
}

export default TmdbReview;