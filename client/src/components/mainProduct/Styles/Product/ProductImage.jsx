import { styled } from "styled-components";

export const ProductImage = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;

  margin-bottom: 20px;

  border: 2px solid black;
  &:hover {
    transform: scale(1.1);
  }
  //margin-bottom: 8px;
  //padding: 8px;
`;
