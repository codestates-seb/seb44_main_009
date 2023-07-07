import { styled } from "styled-components";

// 상품 명, 상품 가격

const fontSize24 = "24px";
const fontSize32 = "32px";

export const ProductNameContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding: 24px;
`;

export const ProductName = styled.div`
  font-size: ${fontSize24};
  font-weight: 400;
  margin-bottom: 24px;
`;

export const ProductPrice = styled.div`
  font-size: ${fontSize32};
  font-weight: 600;
`;
