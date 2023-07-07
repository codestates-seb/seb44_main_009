import { styled } from "styled-components";

//  탭 스타일

export const TabCotainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
`;
export const TabButton = styled.button`
  width: 33%;
  height: 100px;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;
export const TabContent = styled.div`
  width: 100%;
  //max-height: ${props => (props.isExpanded ? "none" : "1400px")};
  height: ${props => (props.isExpanded ? "auto" : "710px")};
  overflow: hidden;
  // border: 5px solid green;
  transition: max-height 0.3s ease;
`;
