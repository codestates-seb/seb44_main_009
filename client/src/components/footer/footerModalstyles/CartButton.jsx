import { styled } from "styled-components";

export const CartButton = styled.button`
  width: 250px;
  height: 50px;

  border: 2px solid black;
  border-radius: 30px;
  background-color: white;
  margin-left: 50px;

  font-size: 18px;
  font-weight: 600;

  &:hover {
    background-color: #d6d6d6;
    cursor: pointer;
  }
`;
