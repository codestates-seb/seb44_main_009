import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  max-width: 150px; // Product의 최대 넓이
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
  margin: 8px;

  overflow: hidden;
`;

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

export const ProductName = styled.text`
  font-size: 18px;
  font-weight: 600;
`;

export const ProductPrice = styled.span`
  font-size: 18px;

  color: #383838;
`;

export const ProductInfo = styled.div`
  width: 200px;
  max-height: 50px;
  text-align: center;
`;
