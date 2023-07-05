import { styled, css } from "styled-components";

export const ProductColor = styled.div`
  /* width: 150px;
  height: 200px; */ // 이미지가 튀어나옴
  width: 15px;
  height: 15px;
  border-radius: 100px;

  border: 2px solid black;
  margin-right: 8px;
  margin-bottom: 5px;
  /* background-color: ${props => props}; */
  ${({ color }) => css`
    background-color: ${color};
  `}
`;
