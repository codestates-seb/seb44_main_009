import { styled } from "styled-components";

//  탭 스타일

export const TabCotainer = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid black;
`;
// export const TabButton = styled.button`
//   width: 33%;
//   height: 100px;
//   background-color: white;
//   font-size: 18px;
//   font-weight: 600;
//   border: none;
// `;
const TabButtonContainer = styled.button`
  width: 33%;
  height: 100px;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;

export const TabButton = ({ active, onClick, children }) => {
  return (
    <TabButtonContainer active={active} onClick={onClick}>
      {children}
    </TabButtonContainer>
  );
};
