import styled from 'styled-components';

export const Btn = styled.button`
  margin-left: 20px;
  padding: 3px 10px;
  background-color: #f1f7fc;
  font-weight: 700;
  text-transform: capitalize;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.6),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color linear 300ms, box-shadow linear 100ms, color linear 300ms;

  &:hover,
  &:focus {
    background-color: #7a94eb;
    cursor: pointer;
    color: #ffffff;
  }

  &:active {
    box-shadow: none;
  }
`;
