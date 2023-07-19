import { styled } from "styled-components";

export const BuyButton = styled.button`
  width: 250px;
  height: 50px;

  border: 2px solid black;
  border-radius: 30px;
  background-color: #3d3d3d;
  margin-right: 50px;

  color: white;

  font-size: 18px;
  font-weight: 600;

  &:hover {
    background-color: #555555;
    cursor: pointer;
  }
`;
