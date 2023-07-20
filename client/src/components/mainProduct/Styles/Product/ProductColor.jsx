import { styled, css } from "styled-components";

export const ProductColor = styled.div`
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
