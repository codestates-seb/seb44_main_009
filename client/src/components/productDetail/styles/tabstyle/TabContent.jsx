import { styled } from "styled-components";

// 탭 내용 스타일링
export const TabContent = styled.div`
  width: 100%;
  height: ${props => (props.isexpanded ? "auto" : "700px")};

  overflow: hidden;
  // border: 5px solid green;
  transition: max-height 0.3s ease;
  position: relative;
  margin-top: auto;
`;
