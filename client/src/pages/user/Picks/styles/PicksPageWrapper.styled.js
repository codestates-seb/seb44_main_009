import { styled } from "styled-components";

export const PicksPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  padding: 24px;
  position: relative;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
