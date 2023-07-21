import { styled } from "styled-components";

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  display: flex;
  object-fit: cover;

  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
  }
  border: 2px solid black;
  //margin-bottom: 8px;
  //padding: 8px;
`;

export const ProductImageContainer = styled.div`
  width: 130px;
  height: 130px;
  //border: 2px solid black;
  margin-bottom: 5px;
`;
