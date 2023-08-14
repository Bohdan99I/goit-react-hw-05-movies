import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Input, Button } from './TmdbSearch.styled';

function TmdbSearch({ onSubmit }) {
  const [queryValue, setQueryValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(queryValue);
    setQueryValue('');
  };

  const handleInputChange = evt => {
    setQueryValue(evt.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        value={queryValue}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}

TmdbSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TmdbSearch;