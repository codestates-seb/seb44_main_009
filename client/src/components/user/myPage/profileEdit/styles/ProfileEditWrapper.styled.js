import { styled } from "styled-components";

export const ProfileEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  border-radius: 0 0 30px 30px;
  padding: 24px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
