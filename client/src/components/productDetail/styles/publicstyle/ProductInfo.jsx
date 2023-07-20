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

export const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductName = styled.div`
  width: 80%;
  height: 45px;
  font-size: ${fontSize24};
  font-weight: 400;
  margin-bottom: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductCount = styled.div`
  font-size: 18px;
`;

export const ProductPrice = styled.div`
  font-size: ${fontSize32};
  font-weight: 600;
`;
