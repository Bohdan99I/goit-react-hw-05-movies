import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 15px;
  padding-top: 25px;
`;

export const Input = styled.input`
  width: 260px;
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid #978a8a;
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: green;
    color: #fff;
    cursor: pointer;
  }
`;
