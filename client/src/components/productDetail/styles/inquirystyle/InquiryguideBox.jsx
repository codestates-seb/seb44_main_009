import { styled } from "styled-components";
// 문의 Box

export const InquiryguideBox = styled.div`
  width: 100%;
  height: ${props => props.height || "250px"};
  border: 2px solid black;

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || "initial"};
  align-items: ${props => props.alignItems || "initial"};
`;
