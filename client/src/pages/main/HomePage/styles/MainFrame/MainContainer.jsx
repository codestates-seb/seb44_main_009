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
  padding: 24px;

  overflow-y: scroll; /* Enable vertical scrolling */

  /* Firefox용 스크롤바 스타일 */
  scrollbar-width: none; /* Firefox의 기본 스크롤바 제거 */

  /* WebKit용 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0px; /* WebKit의 기본 스크롤바 제거 */
    background: transparent; /* 스크롤바 배경색 투명으로 설정 */
  }
`;

export const MarginBottomTom = styled.div`
  margin-bottom: 100px;
`;
