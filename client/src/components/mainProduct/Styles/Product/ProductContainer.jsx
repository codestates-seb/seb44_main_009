import { styled } from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  //width: 300px; // 2개씩 렌더링
  max-width: 150px; //4개씩 렌더링
  max-height: 240px;
  flex-direction: column;

  padding: 8px;
  border: 2px solid black;

  border-radius: 4px;
  margin-bottom: 20px;
  margin: 12px;

  overflow: hidden;
`;
