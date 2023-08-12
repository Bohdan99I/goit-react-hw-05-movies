import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  &:hover,
  &:focus {
    font-size: 20px;
    color: green;
  }
`;