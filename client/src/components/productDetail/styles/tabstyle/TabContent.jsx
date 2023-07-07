import { styled } from "styled-components";

// 탭 내용 스타일링
export const TabContent = styled.div`
  width: 100%;
  //max-height: ${props => (props.isExpanded ? "none" : "1400px")};
  height: ${props => (props.isExpanded ? "auto" : "710px")};
  overflow: hidden;
  // border: 5px solid green;
  transition: max-height 0.3s ease;
`;
