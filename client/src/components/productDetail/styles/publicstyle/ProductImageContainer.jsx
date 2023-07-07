import { styled } from "styled-components";

// 상품 이미지

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ProductImage = styled.img`
  width: 95%;
  height: 95%;
  border: 2px solid red;
`;
