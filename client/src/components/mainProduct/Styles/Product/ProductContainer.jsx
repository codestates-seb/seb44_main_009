import { styled } from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  width: 300px; // Product의 최대 넓이
  // max-width: 150px;
  //4개씩 렌더링
  max-width: 150px;
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
