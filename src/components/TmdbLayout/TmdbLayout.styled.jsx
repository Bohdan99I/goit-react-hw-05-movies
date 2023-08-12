import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  padding: 10px 15px;
  width: 100%;
  background-color: white;
  box-shadow: -4px -5px 19px #222222;
`;
export const Navi = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Main = styled.main`
  padding: 50px 20px 20px 20px;
`;

export const Link = styled(NavLink)`
  color: black;
  background-color: white;
  text-decoration: none;
  padding: 5px;
  border-radius: 2px;

  &.active {
    color: white;
    background-color: green;
  }
`;