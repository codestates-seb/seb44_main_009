import { styled } from "styled-components";

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  padding: 24px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
