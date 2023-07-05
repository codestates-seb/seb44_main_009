import { styled } from "styled-components";

export const ProductImage = styled.img`
  /* width: 150px;
  height: 200px; */ // 이미지가 튀어나옴
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  margin-bottom: 20px;

  border: 2px solid black;
  &:hover {
    transform: scale(1.1);
  }
  //margin-bottom: 8px;
  //padding: 8px;
`;
