import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 1000px;
  width: 834px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Borderdiv = styled.div`
  border: 2px solid black;
  width: 834px;
  height: 100%;
  overflow: hidden;

  overflow-y: scroll;

  /* Firefox용 스크롤바 스타일 */
  scrollbar-width: none;

  /* WebKit용 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const MarginBottomTom = styled.div`
  margin-bottom: 100px;
`;
