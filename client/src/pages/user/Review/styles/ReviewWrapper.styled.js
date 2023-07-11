import { styled } from "styled-components";

export const ReviewWrapper = styled.div`
  width: 834px;
  height: 100%;
  padding: 32px;
  border: 1px solid #383838;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
