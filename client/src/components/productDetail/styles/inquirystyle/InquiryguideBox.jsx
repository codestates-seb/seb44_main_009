import { styled } from "styled-components";
// 문의 Box

export const InquiryguideBox = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid black;

  display: flex;
  flex-direction: column;
  // justify-content: ${props => props.justifyContent || "initial"};
  // align-items: ${props => props.alignItems || "initial"};
`;
export const InquiryguideCenterBox250 = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InquiryguideCenterBox100 = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InquiryMargin = styled.div`
  margin-left: 0%;
`;
