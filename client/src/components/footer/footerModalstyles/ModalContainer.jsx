import { styled } from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 800px;
  height: 70%;
  border: 5px solid black;
  border-radius: 20px;
  position: absolute;
  background-color: white;

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
