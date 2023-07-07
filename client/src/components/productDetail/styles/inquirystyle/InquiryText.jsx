import { styled } from "styled-components";

//문의 페이지 TextStyle
export const TextDivStyle = styled.div`
  width: 100%;
  font-size: ${props => props.FontSize || "24px"};
  font-weight: 600;
  margin-left: 18px;
  display: flex;

  margin-top: ${props => props.TopMargin || "initial"};
  margin-bottom: ${props => props.BottomMargin || "0px"};
`;

export const LeftMargin = styled.div`
  margin-left: 300px;
`;
