import { styled } from "styled-components";

export const ProfilePageWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  padding: 24px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
