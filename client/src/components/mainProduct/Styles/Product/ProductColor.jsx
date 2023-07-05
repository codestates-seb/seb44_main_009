import { styled, css } from "styled-components";

export const ProductColor = styled.div`
  /* width: 150px;
  height: 200px; */ // 이미지가 튀어나옴
  width: 20px;
  height: 20px;
  border-radius: 100px;
  text-align: center;
  border: 2px solid black;
  margin-left: auto;
  margin-bottom: 5px;
  /* background-color: ${props => props}; */
  ${({ color }) => css`
    background-color: ${color};
  `}
`;
