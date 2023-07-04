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
  //align-items: center;
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
  margin: 8px;

  overflow: hidden;
  //margin-left: 50px;
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
export const ProductColor = styled.img`
  /* width: 150px;
  height: 200px; */ // 이미지가 튀어나옴
  width: 20px;
  height: 20px;
  border-radius: 80% 40%;
`;

export const ProductName = styled.text`
  font-size: 18px;
  font-weight: 600;
  //text-align: left;
`;

export const ProductPrice = styled.text`
  font-size: 18px;

  color: #383838;
`;

export const ProductNameInfo = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  margin-left: 5px;
`;
export const ProductPriceInfo = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-align: right;
  margin-right: 5px;
`;
