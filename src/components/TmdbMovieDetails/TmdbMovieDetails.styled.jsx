import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const BtN = styled(Link)`
  display: block;
  padding: 5px;
  text-decoration: none;
  &:hover,
  &:focus {
    color: green;
    font-weight: bold;
  }
  &::before {
    content: '';
  }
`;

export const ContainerDetails = styled.div`
  padding: 25px;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Text = styled.p`
  text-align: justify;
`;

export const Addition = styled.div`
  border-top: 2px solid green;
  border-bottom: 2px solid green;
`;

export const AddList = styled.ul`
  list-style: none;
`;

export const AddLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: #c25151;
  }
  
  &.active {
    color: green;
    font-weight: bold;
  }
`;