import { styled } from "styled-components";

export const CategoryNavigator = styled.div`
  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  flex: 1;
  display: flex;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
