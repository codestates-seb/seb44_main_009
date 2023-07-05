import { styled } from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  max-width: 500px;
  max-height: 500px;
  gap: 12px;
`;

export const CategoryItem = styled.div`
  width: 100%;
  height: 100%;
  //margin-right: 10px;

  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;

  padding: 20px;
  margin-bottom: -10px;
`;
export const CategoryName = styled.div`
  width: 100%;
  font-size: 18px;
  text-align: center;
`;
