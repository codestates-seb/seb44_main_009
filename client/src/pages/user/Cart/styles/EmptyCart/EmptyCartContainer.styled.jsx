import { styled } from "styled-components";

export const EmptyCartContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #383838;
  height: 100%;
  width: 834px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
