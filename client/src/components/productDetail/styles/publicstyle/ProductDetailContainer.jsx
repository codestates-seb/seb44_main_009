import { styled } from "styled-components";

// ProductDetailPage 외곽 틀

export const ProductDetailContainer = styled.div`
  width: 834px;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  overflow: hidden;

  //padding: 24px;

  overflow-y: scroll;

  /* Firefox용 스크롤바 스타일 */
  scrollbar-width: none;

  /* WebKit용 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const ProductDetailContent = styled.div`
  width: 100%;
  height: 100%;

  margin: 50px;
`;
